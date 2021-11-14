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
@Table(name = "TeacherTimetable")
public class TeacherTimetable {
	public TeacherTimetable() {}
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false)
	private long id;
	
	@Column(name = "TId", nullable = false)
	private String TId;
	
	@Column(name = "Date", nullable = false)
	private Date Date;
	
	@Column(name = "Time", nullable = false)
	private String Time;
	
	@Column(name = "Class", nullable = false)
	private String Class;
	@JsonCreator
	public TeacherTimetable(String TId,Date Date, String Time,String Class){
		 this.TId=TId;
		 this.Date=Date;
		 this.Time=Time;
		 this.Class=Class;
		 
	}
	public String GetTId() {
		return TId;
	}
	public String GetTime() {
		return Time;
	}
	public String GetClass() {
		return Class;
	}
	public Date GetDate() {
		return Date;
	}


	public void SetTId(String S) {
		this.TId=S;
	}
	public void SetTime(String S) {
		this.Time=S;
	}
	public void SetClass(String S) {
		this.Class=S;
	}
	public void SetDate(Date S) {
		this.Date=S;
	}
	
	@Override
	public String toString() {
		return "TeacherTimetable [id=" + TId + " Time=" + Time +" Class="+Class+" Date="+Date+"]";
	}
	

}

