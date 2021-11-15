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
@Table(name = "TeacherLogin")
public class TeacherLogin {
	public TeacherLogin() {}
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false)
	private long id;
	
	@Column(name = "TeacherId", nullable = false,unique=true)
	private String TeacherId;
	
	@Column(name = "Password", nullable = false)
	private String Password;
	
	@JsonCreator
	public TeacherLogin(@JsonProperty("TeacherId")String TeacherId,@JsonProperty("Password")String Password){
		 this.TeacherId=TeacherId;
		 this.Password=Password;
		 
	}
	public String GetTeacherId() {
		return TeacherId;
	}
	public String GetPassword() {
		return Password;
	}

	public void SetTeacherId(String S) {
		this.TeacherId=S;
	}
	public void SetPassword(String S) {
		this.Password=S;
	}
	
	@Override
	public String toString() {
		return "TeacherLogin [id=" + TeacherId + " Password=" + Password +"]";
	}
	

}

