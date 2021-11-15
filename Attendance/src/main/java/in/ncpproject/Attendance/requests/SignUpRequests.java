package in.ncpproject.Attendance.requests;

import javax.persistence.Column;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SignUpRequests {
	
	private String StudentId;
	

	private String Name;
	
	
	private String Phone;
	
	
	private String Email;

	private String Dept;
	
	
	private String Cgpa;
	
	private String Password;

	@JsonCreator
	public SignUpRequests( @JsonProperty("StudentId") String StudentId, @JsonProperty("Name")String Name, @JsonProperty("Phone")String Phone,@JsonProperty("Email") String Email, @JsonProperty("Dept")String Dept,@JsonProperty("Cgpa")String Cgpa,@JsonProperty("Password")String Password){
		 this.StudentId=StudentId;
		 this.Name=Name;
		 this.Phone=Phone;
		 this.Email=Email;
		 this.Dept=Dept;
		 this.Cgpa=Cgpa;
		 this.setPassword(Password);
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
		this.StudentId=S;
	}
	
	public void SetName(String S) {
		this.Name=S;
	}
	
	public void SetPhone(String S) {
		this.Phone=S;
	}
	
	public void SetEmail(String S) {
		this.Email=S;
	}
	
	public void SetDept(String S) {
		this.Dept=S;
	}
	
	public void SetCgpa(String S) {
		this.Cgpa=S;
	}
	
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	

}
