package in.ncpproject.Attendance.controller;

import org.springframework.http.MediaType;

import java.io.File;
import java.util.List;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import in.ncpproject.Attendance.model.PastLeaves;
import in.ncpproject.Attendance.model.StudentDetails;
import in.ncpproject.Attendance.model.StudentLogin;
import in.ncpproject.Attendance.model.Subjects;
import in.ncpproject.Attendance.model.TeacherDetails;
import in.ncpproject.Attendance.model.TeacherLogin;
import in.ncpproject.Attendance.model.TeacherTimetable;
import in.ncpproject.Attendance.model.TodoDTO;
import in.ncpproject.Attendance.repository.PastLeaveRepo;
import in.ncpproject.Attendance.repository.StudentDetailsRepo;
import in.ncpproject.Attendance.repository.StudentLoginRepo;
import in.ncpproject.Attendance.repository.SubjectsRepo;
import in.ncpproject.Attendance.repository.TeacherDetailsRepo;
import in.ncpproject.Attendance.repository.TeacherLoginRepo;
import in.ncpproject.Attendance.repository.TeacherTimetableRepo;
import in.ncpproject.Attendance.repository.ToDoRepository;
import in.ncpproject.Attendance.requests.ForgotPasswordRequests;
import in.ncpproject.Attendance.requests.PastLeavesRequests;
import in.ncpproject.Attendance.requests.SignUpRequests;
import in.ncpproject.Attendance.requests.SignUpTeacherRequests;
import in.ncpproject.Attendance.requests.TodoDTORequests;

@CrossOrigin(origins = "*")
@RestController
public class TodoController {
	@Autowired
	private ToDoRepository todoRepo;
	@Autowired
	private PastLeaveRepo PLRepo;
	@Autowired
	private StudentDetailsRepo SDRepo;
	@Autowired
	private StudentLoginRepo SLRepo;
	@Autowired
	private TeacherLoginRepo TLRepo;
	@Autowired
	private TeacherDetailsRepo TDRepo;
	@Autowired
	private TeacherTimetableRepo TTRepo;
	@Autowired
	private SubjectsRepo SRepo;
	@Autowired
	private JavaMailSender mailSender;

	@GetMapping("/Attendance")
	public ResponseEntity<?> getAllTodos() {
		List<TodoDTO> todos = todoRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/Attendance")
	public ResponseEntity<TodoDTO> createTodo(@RequestBody TodoDTORequests todo) {
		System.out.println(todo);
		try {
			StudentDetails res_stud = SDRepo.findItemByStudentId(todo.GetStudentId());
			TeacherDetails res_teach = TDRepo.findItemByTeacherId(todo.GetTId());
			TodoDTO result = todoRepo.save(new TodoDTO(res_stud, todo.GetSubject(), todo.GetDdate(), res_teach,
					todo.GetAttendedhours(), todo.GetNoofhours()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/Attendance/{id}")
	public ResponseEntity<?> getSingleTodo(@PathVariable("id") String id) {
		List<TodoDTO> todos = todoRepo.findItemByStudentId(id);
		ObjectMapper objectMapper = new ObjectMapper();
		if (todos != null) {
			String json;
			try {
				json = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(todos);
				System.out.println(json);
				return new ResponseEntity<>(todos.toString(), HttpStatus.OK);
			} catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new ResponseEntity<>("Error", HttpStatus.NOT_FOUND);
			}
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Past Leave

	@GetMapping("/PastLeaves")
	public ResponseEntity<?> getAllLeaveData() {
		List<PastLeaves> todos = PLRepo.findAll();
		System.out.println(todos);
		// todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() != 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping(value = "/PastLeaves", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createPL(@RequestBody PastLeavesRequests todo) {
		try {
			PastLeaves todos = PLRepo.findItemByStudDOS(todo.GetStudentId(), todo.GetDOS());
			if (todos != null) {
				return new ResponseEntity<>("Already Present Leave Form", HttpStatus.OK);
			} else {
				StudentDetails todoOptional_stud = SDRepo.findItemByStudentId(todo.GetStudentId());
				TeacherDetails todoOptional_teach = TDRepo.findItemByTeacherId(todo.getTeacherId());
				System.out.println(todoOptional_stud);
				System.out.println(todoOptional_teach);
				PastLeaves result = PLRepo.save(new PastLeaves(todoOptional_stud, todoOptional_teach, todo.GetDOS(),
						todo.GetDOE(), todo.GetReason(), todo.GetApproval(), todo.GetCertLink()));
				return new ResponseEntity<>(result, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/PastLeaves/{id}")
	public ResponseEntity<?> getSinglePL(@PathVariable("id") String id) {
		List<PastLeaves> todos = PLRepo.findItemByStudentId(id);
		if (todos != null) {
			return new ResponseEntity<>(todos.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Student Details
	@GetMapping("/StudentDetails")
	public ResponseEntity<?> getAllSD() {
		List<StudentDetails> todos = SDRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/StudentDetails")
	public ResponseEntity<?> createSD(@RequestBody SignUpRequests todo) {
		try {
			StudentDetails result = SDRepo.save(new StudentDetails(todo.GetStudentId(), todo.GetName(), todo.GetPhone(),
					todo.GetEmail(), todo.GetDept(), todo.GetCgpa()));
			StudentLogin res = SLRepo.save(new StudentLogin(todo.GetStudentId(), todo.getPassword()));
			System.out.println(todo.GetPhone());
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/StudentDetails/{id}")
	public ResponseEntity<?> getSingleSD(@PathVariable("id") String id) {
		System.out.print(id);
		StudentDetails todoOptional = SDRepo.findItemByStudentId(id);
		System.out.println(SDRepo.findItemByStudentId((id)));
		if (todoOptional != null) {
			return new ResponseEntity<>(todoOptional.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Student Login
	@GetMapping("/StudentLogin")
	public ResponseEntity<?> getAllSL() {
		List<StudentLogin> todos = SLRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/StudentLogin")
	public ResponseEntity<?> createSL(@RequestBody StudentLogin todo) {
		try {
			StudentLogin result = SLRepo.save(new StudentLogin(todo.GetStudentId(), todo.GetPassword()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/StudentLogin/signin")
	public void findSL(@RequestBody StudentLogin todo) {
		try {
			StudentLogin todo1 = SLRepo.findByNameandPassword(todo.GetStudentId(), todo.GetPassword());
			if (todo1 == null) {
				System.out.println("Invalid Credentials");
			} else {
				System.out.println("Approved");
			}

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@GetMapping("/StudentLogin/{id}")
	public ResponseEntity<?> getSingleSL(@PathVariable("id") String id) {
		StudentLogin todoOptional = SLRepo.findItemByStudentId(id);
		System.out.println(SLRepo.findItemByStudentId((id)));
		if (todoOptional != null) {
			return new ResponseEntity<>(todoOptional.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Teacher Login
	@GetMapping("/TeacherLogin")
	public ResponseEntity<?> getAllTL() {
		List<TeacherLogin> todos = TLRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/TeacherLogin")
	public ResponseEntity<?> createSL(@RequestBody TeacherLogin todo) {
		try {
			TeacherLogin result = TLRepo.save(new TeacherLogin(todo.GetTeacherId(), todo.GetPassword()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/TeacherLogin/signin")
	public void findTL(@RequestBody TeacherLogin todo) {
		try {
			StudentLogin todo1 = SLRepo.findByNameandPassword(todo.GetTeacherId(), todo.GetPassword());
			if (todo1 == null) {
				System.out.println("Invalid Credentials");
			} else {
				System.out.println("Approved");
			}

		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@GetMapping("/TeacherLogin/{id}")
	public ResponseEntity<?> getSingleTL(@PathVariable("id") String id) {
		TeacherLogin todoOptional = TLRepo.findItemByTeacherId(id);
		System.out.println(TLRepo.findItemByTeacherId((id)));
		if (todoOptional != null) {
			return new ResponseEntity<>(todoOptional.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Teacher Timetable
	@GetMapping("/TeacherTimetable")
	public ResponseEntity<?> getAllTT() {
		List<TeacherTimetable> todos = TTRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/TeacherTimetable")
	public ResponseEntity<?> createTT(@RequestBody TeacherTimetable todo) {
		try {
			TeacherTimetable result = TTRepo
					.save(new TeacherTimetable(todo.GetTId(), todo.GetDate(), todo.GetTime(), todo.GetClass()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/TeacherTimetable/{id}")
	public ResponseEntity<?> getSingleTT(@PathVariable("id") String id) {
		TeacherTimetable todoOptional = TTRepo.findItemByTeacherId(id);
		System.out.println(TTRepo.findItemByTeacherId((id)));
		if (todoOptional != null) {
			return new ResponseEntity<>(todoOptional.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	// Teacher Details
	@GetMapping("/TeacherDetails")
	public ResponseEntity<?> getAllTD() {
		List<TeacherDetails> todos = TDRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if (todos.size() > 0) {
			return new ResponseEntity<>(todos, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Available", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/TeacherDetails")
	public ResponseEntity<?> createTD(@RequestBody SignUpTeacherRequests todo) {
		try {
			TeacherDetails result = TDRepo.save(new TeacherDetails(todo.GetTeacherId(), todo.GetName(), todo.GetPhone(),
					todo.GetEmail(), todo.GetDept(), todo.GetDesg()));
			TeacherLogin res = TLRepo.save(new TeacherLogin(todo.GetTeacherId(), todo.getPassword()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/TeacherDetails/{id}")
	public ResponseEntity<?> getSingleTD(@PathVariable("id") String id) {
		TeacherDetails todoOptional = TDRepo.findItemByTeacherId(id);
		System.out.println(TDRepo.findItemByTeacherId((id)));
		if (todoOptional != null) {
			return new ResponseEntity<>(todoOptional.toString(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/AddSubject")
	public ResponseEntity<?> createSubject(@RequestBody Subjects todo) {
		try {
			Subjects result = SRepo.save(new Subjects(todo.GetSubjectId(), todo.GetSubject()));
			return new ResponseEntity<>(result, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// -------------------------------------------------------------------------------------------------------------
	// Advanced Routes
	@GetMapping("/Attendance/TotalAttendance/{id}")
	public ResponseEntity<?> getTotalAttendance(@PathVariable("id") String id) {
		List<TodoDTO> todos = todoRepo.findItemByStudentId(id);
		if (todos != null) {
			float tot = 0;
			float att = 0;
			for (int i = 0; i < todos.size(); i++) {
				TodoDTO res = todos.get(i);
				att += Integer.parseInt(res.GetAttendedhours());
				tot += Integer.parseInt(res.GetNoofhours());
			}
			System.out.print((float) (att / tot));
			float val = (float) (att / tot) * 100;
			return new ResponseEntity<>(Float.toString(val), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not Found ", HttpStatus.NOT_FOUND);
		}

	}

	@PutMapping(value = "/PastLeaves/Approve", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> ApprovePL(@RequestBody PastLeavesRequests todo) {
		try {
			PastLeaves todos = PLRepo.findItemByStudDOS(todo.GetStudentId(), todo.GetDOS());
			StudentDetails res = SDRepo.findItemByStudentId(todo.GetStudentId());
			if (todos == null) {
				return new ResponseEntity<>("Leave Form Not Present", HttpStatus.INTERNAL_SERVER_ERROR);
			} else {
				todos.SetApproval(todo.GetApproval());
				PLRepo.save(todos);
				String from = "odmldatabaseemailer@gmail.com";
				String to = "samyukth2310@gmail.com";

				MimeMessage message = mailSender.createMimeMessage();
				MimeMessageHelper helper = new MimeMessageHelper(message, true);

				helper.setSubject("Leave Status");
				helper.setFrom(from);
				helper.setTo(to);

				String content = "<b>Dear" + " " + res.GetName() + "</b>,<br><i>Below is your Leave Status</i>"
						+ "<br><img src='cid:image001' width='300px' height='300px'/><br><b>" + todos.GetApproval()
						+ "</b>";
				helper.setText(content, true);

				FileSystemResource resource = new FileSystemResource(new File(
						"E:\\Attendance\\src\\main\\java\\in\\ncpproject\\Attendance\\controller\\picture.png"));
				helper.addInline("image001", resource);

				mailSender.send(message);
				return new ResponseEntity<>("Updated Approval", HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping(value = "/ForgotPassword", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> ForgotPassword(@RequestBody ForgotPasswordRequests todo) {
		try {
			String val = todo.getGId();
			if (val.charAt(0) == 'T') {
				TeacherDetails res = TDRepo.findItemByTeacherId(todo.getGId());
				TeacherLogin resL = TLRepo.findItemByTeacherId(todo.getGId());
				if (todo.getEmailId().equals(res.GetEmail())) {
					String from = "odmldatabaseemailer@gmail.com";
					String to = res.GetEmail();

					MimeMessage message = mailSender.createMimeMessage();
					MimeMessageHelper helper = new MimeMessageHelper(message, true);

					helper.setSubject("Forgot Password");
					helper.setFrom(from);
					helper.setTo(to);

					String content = "<b>Dear" + " " + res.GetName() + "</b>,<br><i>Your Password</i>"
							+ "<br><img src='cid:image002' width='300px' height='300px'/><br><b>" + resL.GetPassword()
							+ "</b>";
					helper.setText(content, true);

					FileSystemResource resource = new FileSystemResource(new File(
							"E:\\Attendance\\src\\main\\java\\in\\ncpproject\\Attendance\\controller\\picture2.png"));
					helper.addInline("image002", resource);

					mailSender.send(message);
					return new ResponseEntity<>("Password Sent via Email", HttpStatus.OK);
				} else {
					return new ResponseEntity<>("email doesn't match", HttpStatus.INTERNAL_SERVER_ERROR);
				}
			} else {
				StudentDetails res = SDRepo.findItemByStudentId(todo.getGId());
				StudentLogin resL = SLRepo.findItemByStudentId(todo.getGId());
				if (todo.getEmailId().equals(res.GetEmail())) {
					String from = "odmldatabaseemailer@gmail.com";
					String to = res.GetEmail();

					MimeMessage message = mailSender.createMimeMessage();
					MimeMessageHelper helper = new MimeMessageHelper(message, true);

					helper.setSubject("Forgot Password");
					helper.setFrom(from);
					helper.setTo(to);

					String content = "<b>Dear" + " " + res.GetName() + "</b>,<br><i>Your Password</i>"
							+ "<br><img src='cid:image002' width='300px' height='300px'/><br><b>" + resL.GetPassword()
							+ "</b>";
					helper.setText(content, true);

					FileSystemResource resource = new FileSystemResource(new File(
							"E:\\Attendance\\src\\main\\java\\in\\ncpproject\\Attendance\\controller\\picture2.png"));
					helper.addInline("image002", resource);

					mailSender.send(message);
					return new ResponseEntity<>("Password Sent via Email", HttpStatus.OK);
				} else {
					return new ResponseEntity<>("email doesn't match", HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
