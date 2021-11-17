package in.ncpproject.Attendance.requests;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ForgotPasswordRequests {

	private String GId;
	private String emailId;

	@JsonCreator
	public ForgotPasswordRequests(@JsonProperty("GId") String GId, @JsonProperty("emailId") String emailId) {
		this.setGId(GId);
		this.setEmailId(emailId);
	}

	public String getGId() {
		return GId;
	}

	public void setGId(String gId) {
		GId = gId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

}
