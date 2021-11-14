package in.ncpproject.Attendance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SequenceGenerator;

import java.io.Serializable;
import java.util.Date;



@Entity
@Table(name = "PastLeaves")
@IdClass(PastLeaves.class)
public class PastLeaves implements Serializable {
	public PastLeaves() {}
	@Id
	@SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence",  allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @Column(name = "id", updatable = false,unique=true,nullable = false)
	private long id;
	
	@Id
	@Column(name = "StudentId", nullable = false)
	private String StudentId;
	
	@Id
	@Column(name = "TId", nullable = false)
	private String TId;
	
	@Column(name = "DOS", nullable = false)
	private Date DOS;
	
	@Column(name = "DOE", nullable = false)
	private Date DOE;
	
	@Column(name = "Reason", nullable = false)
	private String Reason;
	
	@Column(name = "Approval", nullable = false)
	private String Approval;
	
	@Column(name = "CertLink", nullable = false)
	private String CertLink;
	@JsonCreator
	public PastLeaves(String StudentId, String TId, Date DOS, Date DOE, String Reason,String Approval,String CertLink){
		 this.StudentId=StudentId;
		 this.TId=TId;
		 this.DOS=DOS;
		 this.DOE=DOE;
		 this.Reason=Reason;
		 this.Approval=Approval;
		 this.CertLink=CertLink;
	}
	public String GetStudentId() {
		return StudentId;
	}
	public String GetTId() {
		return TId;
	}
	
	public String GetReason() {
		return Reason;
	}
	
	public String GetApproval() {
		return Approval;
	}
	
	public String GetCertLink() {
		return CertLink;
	}
	
	public Date GetDOS() {
		return DOS;
	}
	public Date GetDOE() {
		return DOE;
	}
	
	public void SetStudentId(String S) {
		this.StudentId=S;
	}
	
	public void SetTId(String S) {
		this.TId=S;
	}
	
	public void SetReason(String S) {
		this.Reason=S;
	}
	
	public void SetApproval(String S) {
		this.Approval=S;
	}
	
	public void SetCertLink(String S) {
		this.CertLink=S;
	}
	
	public void SetDOS(Date S) {
		this.DOS=S;
	}
	
	public void SetDOE(Date S) {
		this.DOE=S;
	}

	@Override
	public String toString() {
		return "PastLeaveData [id=" + StudentId + " TId=" + TId + " DOS=" + DOS + " DOE=" + DOE + " Reason=" +Reason+ " Approval=" +Approval+ " CertLink=" +CertLink+ "]";
	}
	

}
