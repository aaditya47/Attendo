package in.ncpproject.Attendance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import in.ncpproject.Attendance.composite.TeacherTimetablePKId;
import in.ncpproject.Attendance.composite.TodoDTOPKId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import java.util.Date;

@Entity
@Table(name = "Attendance")

@IdClass(TodoDTOPKId.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {
	@Id
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "StudentId", referencedColumnName = "StudentId", nullable = false)
	private StudentDetails StudentId;

	@Id
	@Column(name = "Subject", nullable = false)
	private String Subject;

	@Id
	@Column(name = "Ddate", nullable = false)
	private Date Ddate;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "TId", referencedColumnName = "TeacherId", nullable = false)
	private TeacherDetails TId;

	@Column(name = "Attendedhours", nullable = false)
	private String Attendedhours;

	@Column(name = "Noofhours", nullable = false)
	private String Noofhours;

	public TodoDTO() {
		System.out.println("default cons");
	}

	@JsonCreator
	public TodoDTO(@JsonProperty("StudentId") StudentDetails StudentId, @JsonProperty("Subject") String Subject,
			@JsonProperty("Ddate") Date Ddate, @JsonProperty("TId") TeacherDetails TId,
			@JsonProperty("Attendedhours") String Attendedhours, @JsonProperty("Noofhours") String Noofhours) {
		this.StudentId = StudentId;
		this.Subject = Subject;
		this.Ddate = Ddate;
		this.TId = TId;
		this.Attendedhours = Attendedhours;
		this.Noofhours = Noofhours;
	}

	public StudentDetails GetStudentId() {
		return StudentId;
	}

	public String GetNoofhours() {
		return Noofhours;
	}

	public String GetSubject() {
		return Subject;
	}

	public Date GetDdate() {
		return Ddate;
	}

	public TeacherDetails GetTId() {
		return TId;
	}

	public String GetAttendedhours() {
		return Attendedhours;
	}

	public void SetAttendedhours(String S) {
		this.Attendedhours = S;
	}

	public void SetStudentId(StudentDetails S) {
		this.StudentId = S;
	}

	public void SetNoofhours(String S) {
		this.Noofhours = S;
	}

	public void SetSubject(String S) {
		this.Subject = S;
	}

	public void SetDdate(Date S) {
		this.Ddate = S;
	}

	public void SetTId(TeacherDetails S) {
		this.TId = S;
	}

	@Override
	public String toString() {
		return "Attendance [id=" + StudentId + " Subject=" + Subject + " Ddate=" + Ddate + " TId=" + TId + " Noofhours="
				+ Noofhours + " + Attendedhours=" + Attendedhours + "]";
	}

}
