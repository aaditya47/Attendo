package in.ncpproject.Attendance.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ncpproject.Attendance.model.PastLeaves;
import in.ncpproject.Attendance.model.StudentDetails;
import in.ncpproject.Attendance.model.StudentLogin;
import in.ncpproject.Attendance.model.TeacherDetails;
import in.ncpproject.Attendance.model.TeacherLogin;
import in.ncpproject.Attendance.model.TeacherTimetable;
import in.ncpproject.Attendance.model.TodoDTO;
import in.ncpproject.Attendance.repository.PastLeaveRepo;
import in.ncpproject.Attendance.repository.StudentDetailsRepo;
import in.ncpproject.Attendance.repository.StudentLoginRepo;
import in.ncpproject.Attendance.repository.TeacherDetailsRepo;
import in.ncpproject.Attendance.repository.TeacherLoginRepo;
import in.ncpproject.Attendance.repository.TeacherTimetableRepo;
import in.ncpproject.Attendance.repository.ToDoRepository;

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
	@GetMapping("/Attendance")
	public ResponseEntity<?> getAllTodos(){
		List<TodoDTO> todos=todoRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if(todos.size()>0) {
			return new ResponseEntity<>(todos,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
		}
		
	}
	@PostMapping("/Attendance")
	public ResponseEntity<TodoDTO> createTodo(@RequestBody TodoDTO todo){
		System.out.println(todo);
		try {
			TodoDTO result=todoRepo.save(new TodoDTO(todo.GetStudentId(), todo.GetSubject(), todo.GetDdate(),todo.GetTId(),todo.GetNoofhours()));
			return new ResponseEntity<>(result,HttpStatus.OK);
		
		}
		catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/Attendance/{id}")
	public ResponseEntity<?> getSingleTodo(@PathVariable("id")String id){
		List<TodoDTO> todos=todoRepo.findItemByStudentId(id);
		if(todos!=null) {
			return new ResponseEntity<>(todos.toString(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	
	//Past Leave
	
	@GetMapping("/PastLeaves")
	public ResponseEntity<?> getAllLeaveData(){
		List<PastLeaves> todos=PLRepo.findAll();
		System.out.println(todos);
		//todos.forEach(item -> System.out.println(item.toString()));
		if(todos.size()!=0) {
			return new ResponseEntity<>(todos,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
		}
		
	}
	@PostMapping("/PastLeaves")
	public ResponseEntity<?> createPL(@RequestBody PastLeaves todo){
		try {
			PastLeaves result=PLRepo.save(new PastLeaves(todo.GetStudentId(), todo.GetTId(), todo.GetDOS(),todo.GetDOE(),todo.GetReason(),todo.GetApproval(),todo.GetCertLink()));
			return new ResponseEntity<>(result,HttpStatus.OK);
		
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/PastLeaves/{id}")
	public ResponseEntity<?> getSinglePL(@PathVariable("id")String id){
		List<PastLeaves> todos=PLRepo.findItemByStudentId(id);
		if(todos!=null) {
			return new ResponseEntity<>(todos.toString(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	
	
	//Student Details
	@GetMapping("/StudentDetails")
	public ResponseEntity<?> getAllSD(){
		List<StudentDetails> todos=SDRepo.findAll();
		todos.forEach(item -> System.out.println(item.toString()));
		if(todos.size()>0) {
			return new ResponseEntity<>(todos,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
		}
		
	}
	@PostMapping("/StudentDetails")
	public ResponseEntity<?> createSD(@RequestBody StudentDetails todo){
		try {
			StudentDetails result=SDRepo.save(new StudentDetails(todo.GetStudentId(), todo.GetName(), todo.GetPhone(),todo.GetEmail(),todo.GetDept(),todo.GetCgpa()));
			System.out.println(todo.GetPhone());
			return new ResponseEntity<>(result,HttpStatus.OK);
		
		}
		catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/StudentDetails/{id}")
	public ResponseEntity<?> getSingleSD(@PathVariable("id")String id){
		StudentDetails todoOptional=SDRepo.findItemByStudentId(id);
		System.out.println(SDRepo.findItemByStudentId((id)));
		if(todoOptional!=null) {
			return new ResponseEntity<>(todoOptional.toString(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	//Student Login
		@GetMapping("/StudentLogin")
		public ResponseEntity<?> getAllSL(){
			List<StudentLogin> todos=SLRepo.findAll();
			todos.forEach(item -> System.out.println(item.toString()));
			if(todos.size()>0) {
				return new ResponseEntity<>(todos,HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
			}
			
		}
		@PostMapping("/StudentLogin")
		public ResponseEntity<?> createSL(@RequestBody StudentLogin todo){
			try {
				StudentLogin result=SLRepo.save(new StudentLogin(todo.GetStudentId(), todo.GetPassword()));
				return new ResponseEntity<>(result,HttpStatus.OK);
			
			}
			catch(Exception e) {
				return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@PostMapping("/StudentLogin/signin")
		public void findSL(@RequestBody StudentLogin todo){
			try {
				StudentLogin todo1=SLRepo.findByNameandPassword(todo.GetStudentId(), todo.GetPassword());
				if(todo1==null) {
					System.out.println("Invalid Credentials");
				}
				else {
					System.out.println("Approved");
				}
				
			
			}
			catch(Exception e) {
				System.out.println(e);
			}
		}
		@GetMapping("/StudentLogin/{id}")
		public ResponseEntity<?> getSingleSL(@PathVariable("id")String id){
			StudentLogin todoOptional=SLRepo.findItemByStudentId(id);
			System.out.println(SLRepo.findItemByStudentId((id)));
			if(todoOptional!=null) {
				return new ResponseEntity<>(todoOptional.toString(),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
			}
			
		}
		
		
		//Teacher Login
				@GetMapping("/TeacherLogin")
				public ResponseEntity<?> getAllTL(){
					List<TeacherLogin> todos=TLRepo.findAll();
					todos.forEach(item -> System.out.println(item.toString()));
					if(todos.size()>0) {
						return new ResponseEntity<>(todos,HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
					}
					
				}
				@PostMapping("/TeacherLogin")
				public ResponseEntity<?> createSL(@RequestBody TeacherLogin todo){
					try {
						TeacherLogin result=TLRepo.save(new TeacherLogin(todo.GetTeacherId(), todo.GetPassword()));
						return new ResponseEntity<>(result,HttpStatus.OK);
					
					}
					catch(Exception e) {
						return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
					}
				}
				
				@PostMapping("/TeacherLogin/signin")
				public void findTL(@RequestBody TeacherLogin todo){
					try {
						StudentLogin todo1=SLRepo.findByNameandPassword(todo.GetTeacherId(), todo.GetPassword());
						if(todo1==null) {
							System.out.println("Invalid Credentials");
						}
						else {
							System.out.println("Approved");
						}
						
					
					}
					catch(Exception e) {
						System.out.println(e);
					}
				}
				
				@GetMapping("/TeacherLogin/{id}")
				public ResponseEntity<?> getSingleTL(@PathVariable("id")String id){
					TeacherLogin todoOptional=TLRepo.findItemByTeacherId(id);
					System.out.println(TLRepo.findItemByTeacherId((id)));
					if(todoOptional!=null) {
						return new ResponseEntity<>(todoOptional.toString(),HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
					}
					
				}
				
				
	


				//Teacher Timetable
				@GetMapping("/TeacherTimetable")
				public ResponseEntity<?> getAllTT(){
					List<TeacherTimetable> todos=TTRepo.findAll();
					todos.forEach(item -> System.out.println(item.toString()));
					if(todos.size()>0) {
						return new ResponseEntity<>(todos,HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
					}
					
				}
				@PostMapping("/TeacherTimetable")
				public ResponseEntity<?> createTT(@RequestBody TeacherTimetable todo){
					try {
						TeacherTimetable result=TTRepo.save(new TeacherTimetable(todo.GetTId(), todo.GetDate(), todo.GetTime(),todo.GetClass()));
						return new ResponseEntity<>(result,HttpStatus.OK);
					
					}
					catch(Exception e) {
						return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
					}
				}
				@GetMapping("/TeacherTimetable/{id}")
				public ResponseEntity<?> getSingleTT(@PathVariable("id")String id){
					TeacherTimetable todoOptional=TTRepo.findItemByTeacherId(id);
					System.out.println(TTRepo.findItemByTeacherId((id)));
					if(todoOptional!=null) {
						return new ResponseEntity<>(todoOptional.toString(),HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
					}
					
				}
				
				
	
				//Teacher Details
				@GetMapping("/TeacherDetails")
				public ResponseEntity<?> getAllTD(){
					List<TeacherDetails> todos=TDRepo.findAll();
					todos.forEach(item -> System.out.println(item.toString()));
					if(todos.size()>0) {
						return new ResponseEntity<>(todos,HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Available",HttpStatus.NOT_FOUND);
					}
					
				}
				@PostMapping("/TeacherDetails")
				public ResponseEntity<?> createTD(@RequestBody TeacherDetails todo){
					try {
						TeacherDetails result=TDRepo.save(new TeacherDetails(todo.GetTeacherId(), todo.GetName(), todo.GetPhone(),todo.GetEmail(),todo.GetDept(),todo.GetDesg()));
						return new ResponseEntity<>(result,HttpStatus.OK);
					
					}
					catch(Exception e) {
						return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
					}
				}
				@GetMapping("/TeacherDetails/{id}")
				public ResponseEntity<?> getSingleTD(@PathVariable("id")String id){
					TeacherDetails todoOptional=TDRepo.findItemByTeacherId(id);
					System.out.println(TDRepo.findItemByTeacherId((id)));
					if(todoOptional!=null) {
						return new ResponseEntity<>(todoOptional.toString(),HttpStatus.OK);
					}
					else {
						return new ResponseEntity<>("Not Found ",HttpStatus.NOT_FOUND);
					}
					
				}
				
				
	
	
	

}


