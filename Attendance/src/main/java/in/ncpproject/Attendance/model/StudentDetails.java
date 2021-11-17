package in.ncpproject.Attendance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@Table(name = "StudentDetails")
public class StudentDetails {
	public StudentDetails() {
	}

	@Id
	@Column(name = "StudentId", nullable = false, unique = true)
	private String StudentId;

	@Column(name = "Name", nullable = false)
	private String Name;

	@Column(name = "Phone", nullable = false)
	private String Phone;

	@Column(name = "Email", nullable = false)
	private String Email;

	@Column(name = "Dept", nullable = false)
	private String Dept;

	@Column(name = "Cgpa", nullable = false)
	private String Cgpa;

	@JsonCreator
	public StudentDetails(@JsonProperty("StudentId") String StudentId, @JsonProperty("Name") String Name,
			@JsonProperty("Phone") String Phone, @JsonProperty("Email") String Email, @JsonProperty("Dept") String Dept,
			@JsonProperty("Cgpa") String Cgpa) {
		this.StudentId = StudentId;
		this.Name = Name;
		this.Phone = Phone;
		this.Email = Email;
		this.Dept = Dept;
		this.Cgpa = Cgpa;
	}

	public String GetStudentId() {
		return StudentId;
	}

	public String GetName() {
		return Name;
	}

	public String GetPhone() {
		return Phone;
	}

	public String GetEmail() {
		return Email;
	}

	public String GetDept() {
		return Dept;
	}

	public String GetCgpa() {
		return Cgpa;
	}

	public void SetStudentId(String S) {
		this.StudentId = S;
	}

	public void SetName(String S) {
		this.Name = S;
	}

	public void SetPhone(String S) {
		this.Phone = S;
	}

	public void SetEmail(String S) {
		this.Email = S;
	}

	public void SetDept(String S) {
		this.Dept = S;
	}

	public void SetCgpa(String S) {
		this.Cgpa = S;
	}

	@Override
	public String toString() {
		return "StudentDetails [id=" + StudentId + " Name=" + Name + " Phone=" + Phone + " Email=" + Email + " Dept="
				+ Dept + " Cgpa=" + Cgpa + "]";
	}

}
