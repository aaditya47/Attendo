package in.ncpproject.Attendance.composite;

import java.io.Serializable;
import java.util.Date;

import in.ncpproject.Attendance.model.StudentDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class PastLeavesPKId implements Serializable{
	private String StudentId;
	private Date DOS;
}
