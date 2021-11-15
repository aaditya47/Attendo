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
@Table(name = "StudentLogin")
public class StudentLogin {
	public StudentLogin() {}
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false)
	private long id;
	
	@Column(name = "StudentId", nullable = false, unique=true)
	private String StudentId;
	
	@Column(name = "Password", nullable = false)
	private String Password;
	
	@JsonCreator
	public StudentLogin(@JsonProperty("StudentId")String StudentId,@JsonProperty("Password")String Password){
		 this.StudentId=StudentId;
		 this.Password=Password;
		 
	}
	public String GetStudentId() {
		return StudentId;
	}
	public String GetPassword() {
		return Password;
	}

	public void SetStudentId(String S) {
		this.StudentId=S;
	}
	public void SetPassword(String S) {
		this.Password=S;
	}
	
	@Override
	public String toString() {
		return "StudentLogin [id=" + StudentId + " Password=" + Password +"]";
	}
	

}
