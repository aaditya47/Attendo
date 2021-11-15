package in.ncpproject.Attendance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import in.ncpproject.Attendance.composite.PastLeavesPKId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import java.util.Date;

@Entity
@Table(name = "PastLeaves")
@IdClass(PastLeavesPKId.class)
@Data
public class PastLeaves {
	public PastLeaves() {
	}

	@Id
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "StudentId", referencedColumnName = "StudentId", nullable = false)
	private StudentDetails StudentId;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "TeacherId", referencedColumnName = "TeacherId", nullable = false)
	private TeacherDetails TeacherId;

	@Id
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
	public PastLeaves(@JsonProperty("StudentId") StudentDetails StudentId,
			@JsonProperty("TeacherId") TeacherDetails TeacherId, @JsonProperty("DOS") Date DOS,
			@JsonProperty("DOE") Date DOE, @JsonProperty("Reason") String Reason,
			@JsonProperty("Approval") String Approval, @JsonProperty("CertLink") String CertLink) {
		this.StudentId = StudentId;
		this.TeacherId = TeacherId;
		this.DOS = DOS;
		this.DOE = DOE;
		this.Reason = Reason;
		this.Approval = Approval;
		this.CertLink = CertLink;
	}

	public StudentDetails GetStudentId() {
		return StudentId;
	}

	public TeacherDetails GetTId() {
		return TeacherId;
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

	public void SetStudentId(StudentDetails S) {
		this.StudentId = S;
	}

	public void SetTId(TeacherDetails S) {
		this.TeacherId = S;
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

	@Override
	public String toString() {
		return "PastLeaveData [id=" + StudentId + " TId=" + TeacherId + " DOS=" + DOS + " DOE=" + DOE + " Reason="
				+ Reason + " Approval=" + Approval + " CertLink=" + CertLink + "]";
	}

}
