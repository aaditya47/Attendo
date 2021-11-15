package in.ncpproject.Attendance.requests;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import in.ncpproject.Attendance.model.StudentDetails;
import in.ncpproject.Attendance.model.TeacherDetails;

public class PastLeavesRequests {

	private String StudentId;

	private String TeacherId;

	private Date DOS;

	private Date DOE;

	private String Reason;

	private String Approval;

	private String CertLink;

	@JsonCreator
	public PastLeavesRequests(@JsonProperty("StudentId") String StudentId, @JsonProperty("TeacherId") String TeacherId,
			@JsonProperty("DOS") Date DOS, @JsonProperty("DOE") Date DOE, @JsonProperty("Reason") String Reason,
			@JsonProperty("Approval") String Approval, @JsonProperty("CertLink") String CertLink) {
		this.StudentId = StudentId;
		this.TeacherId = TeacherId;
		this.DOS = DOS;
		this.DOE = DOE;
		this.Reason = Reason;
		this.Approval = Approval;
		this.CertLink = CertLink;
	}

	public String GetStudentId() {
		return StudentId;
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
		this.StudentId = S;
	}

	public void SetReason(String S) {
		this.Reason = S;
	}

	public void SetApproval(String S) {
		this.Approval = S;
	}

	public void SetCertLink(String S) {
		this.CertLink = S;
	}

	public void SetDOS(Date S) {
		this.DOS = S;
	}

	public void SetDOE(Date S) {
		this.DOE = S;
	}

	public String getTeacherId() {
		return TeacherId;
	}

	public void setTeacherId(String teacherId) {
		TeacherId = teacherId;
	}

}
