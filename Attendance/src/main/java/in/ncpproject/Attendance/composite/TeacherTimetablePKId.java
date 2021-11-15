package in.ncpproject.Attendance.composite;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class TeacherTimetablePKId implements Serializable {

	private String TId;

	private String Day;

	private String Time;

}
