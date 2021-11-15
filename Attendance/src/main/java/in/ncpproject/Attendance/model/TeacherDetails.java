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
import java.util.Date;

@Entity
@Table(name = "TeacherDetails")
public class TeacherDetails {
	public TeacherDetails() {
	}

	@Id
	@Column(name = "TeacherId", nullable = false)
	private String TeacherId;

	@Column(name = "Name", nullable = false)
	private String Name;

	@Column(name = "Phone", nullable = false)
	private String Phone;

	@Column(name = "Email", nullable = false)
	private String Email;

	@Column(name = "Dept", nullable = false)
	private String Dept;

	@Column(name = "Desg", nullable = false)
	private String Desg;

	@JsonCreator
	public TeacherDetails(@JsonProperty("TeacherId") String TeacherId, @JsonProperty("Name") String Name,
			@JsonProperty("Phone") String Phone, @JsonProperty("Email") String Email, @JsonProperty("Dept") String Dept,
			@JsonProperty("Desg") String Desg) {
		this.TeacherId = TeacherId;
		this.Name = Name;
		this.Phone = Phone;
		this.Email = Email;
		this.Dept = Dept;
		this.Desg = Desg;
	}

	public String GetTeacherId() {
		return TeacherId;
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

	public String GetDesg() {
		return Desg;
	}

	public void SetTeacherId(String S) {
		this.TeacherId = S;
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

	public void SetDesg(String S) {
		this.Desg = S;
	}

	@Override
	public String toString() {
		return "TeacherDetails [id=" + TeacherId + " Name=" + Name + " Phone=" + Phone + " Email=" + Email + " Dept="
				+ Dept + " Desg=" + Desg + "]";
	}

}
