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
@Table(name = "Subjects")
public class Subjects {
	public Subjects() {}
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false)
	private long id;
	
	
	@Column(name = "SubjectId", nullable = false, unique=true)
	private String SubjectId;
	
	@Column(name = "Subject", nullable = false)
	private String Subject;
	
	@JsonCreator
	public Subjects(@JsonProperty("SubjectId")String SubjectId,@JsonProperty("Subject")String Subject){
		 this.SubjectId=SubjectId;
		 this.Subject=Subject;
		 
	}
	public String GetSubjectId() {
		return SubjectId;
	}
	public String GetSubject() {
		return Subject;
	}

	public void SetSubjectId(String S) {
		this.SubjectId=S;
	}
	public void SetPassword(String S) {
		this.Subject=S;
	}
	
	@Override
	public String toString() {
		return "Subject [id=" + SubjectId + "Subject=" + Subject +"]";
	}
	

}
