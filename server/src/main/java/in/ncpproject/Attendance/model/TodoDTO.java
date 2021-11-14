package in.ncpproject.Attendance.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;

import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.util.Date;


@Entity
@Table(name = "Attendance")
public class TodoDTO {
	
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false)
	private long id;
	
	@Column(name = "StudentId", nullable = false)
	private String StudentId;
	
	@Column(name = "Subject", nullable = false)
	private String Subject;
	
	@Column(name = "Ddate", nullable = false)
	private Date Ddate;
	
	@Column(name = "TId", nullable = false)
	private String TId;
	
	@Column(name = "Noofhours", nullable = false)
	private String Noofhours;
	
	public TodoDTO() {System.out.println("default cons");}
	@JsonCreator
	public TodoDTO(String StudentId, String Subject, Date Ddate, String TId, String Noofhours){
		 this.StudentId=StudentId;
		 this.Subject=Subject;
		 this.Ddate=Ddate;
		 this.TId=TId;
		 this.Noofhours=Noofhours;
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
	
	public void SetStudentId(String S) {
		this.StudentId=S;
	}
	public void SetNoofhours(String S) {
		this.Noofhours=S;
	}
	
	public void SetSubject(String S) {
		this.Subject=S;
	}
	
	public void SetDdate(Date S) {
		this.Ddate=S;
	}
	
	public void SetTId(String S) {
		this.TId=S;
	}
	
	@Override
	public String toString() {
		return "Attendance [id=" + StudentId + " Subject=" + Subject + " Ddate=" + Ddate + " TId=" + TId + " Noofhours=" + Noofhours+ "]";
	}
	

}
