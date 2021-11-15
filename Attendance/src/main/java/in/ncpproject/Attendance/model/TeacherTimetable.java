package in.ncpproject.Attendance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import in.ncpproject.Attendance.composite.PastLeavesPKId;
import in.ncpproject.Attendance.composite.TeacherTimetablePKId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SequenceGenerator;
import java.util.Date;



@Entity
@Table(name = "TeacherTimetable")
@IdClass(TeacherTimetablePKId.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeacherTimetable {
	public TeacherTimetable() {}
	@Id
	@Column(name = "TId", nullable = false)
	private String TId;
	
	@Id
	@Column(name = "Day", nullable = false)
	private String Day;
	
	@Id
	@Column(name = "Time", nullable = false)
	private String Time;
	
	@Column(name = "Class", nullable = false)
	private String Class;

	@JsonCreator
	public TeacherTimetable(@JsonProperty("TId")String TId,@JsonProperty("Day")String Day, @JsonProperty("Time")String Time,@JsonProperty("Class")String Class){
		 this.TId=TId;
		 this.Day=Day;
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
	public String GetDate() {
		return Day;
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
	public void SetDate(String S) {
		this.Day=S;
	}
	
	@Override
	public String toString() {
		return "TeacherTimetable [id=" + TId + " Time=" + Time +" Class="+Class+" Date="+Day+"]";
	}
	
}

