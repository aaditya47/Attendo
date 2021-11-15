package in.ncpproject.Attendance.requests;

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
import in.ncpproject.Attendance.model.StudentDetails;
import in.ncpproject.Attendance.model.TeacherDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import java.util.Date;

public class TodoDTORequests {

	private String StudentId;

	private String Subject;

	private Date Ddate;

	private String TId;

	private String Attendedhours;

	private String Noofhours;

	@JsonCreator
	public TodoDTORequests(@JsonProperty("StudentId") String StudentId, @JsonProperty("Subject") String Subject,
			@JsonProperty("Ddate") Date Ddate, @JsonProperty("TId") String TId,
			@JsonProperty("Attendedhours") String Attendedhours, @JsonProperty("Noofhours") String Noofhours) {
		this.StudentId = StudentId;
		this.Subject = Subject;
		this.Ddate = Ddate;
		this.TId = TId;
		this.Attendedhours = Attendedhours;
		this.Noofhours = Noofhours;
	}

	public String GetStudentId() {
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

	public String GetTId() {
		return TId;
	}

	public String GetAttendedhours() {
		return Attendedhours;
	}

	public void SetAttendedhours(String S) {
		this.Attendedhours = S;
	}

	public void SetStudentId(String S) {
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

	public void SetTId(String S) {
		this.TId = S;
	}

	@Override
	public String toString() {
		return "Attendance [id=" + StudentId + " Subject=" + Subject + " Ddate=" + Ddate + " TId=" + TId + " Noofhours="
				+ Noofhours + " + Attendedhours=" + Attendedhours + "]";
	}

}
