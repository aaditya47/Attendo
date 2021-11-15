package in.ncpproject.Attendance.requests;

import javax.persistence.Column;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SignUpTeacherRequests {
	
	private String TeacherId;
	

	private String Name;
	

	private String Phone;
	

	private String Email;
	

	private String Dept;
	

	private String Desg;
	
	private String Password;
	
	@JsonCreator
	public SignUpTeacherRequests(@JsonProperty("TeacherId")String TeacherId,@JsonProperty("Name") String Name, @JsonProperty("Phone") String Phone,@JsonProperty("Email")String Email,@JsonProperty("Dept")String Dept,@JsonProperty("Desg")String Desg,@JsonProperty("Password")String Password){
		 this.TeacherId=TeacherId;
		 this.Name=Name;
		 this.Phone=Phone;
		 this.Email=Email;
		 this.Dept=Dept;
		 this.Desg=Desg;
		 this.setPassword(Password);
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
		this.TeacherId=S;
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
	
	public void SetDesg(String S) {
		this.Desg=S;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	

}
