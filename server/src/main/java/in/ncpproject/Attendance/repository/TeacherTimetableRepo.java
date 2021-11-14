package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.TeacherTimetable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface TeacherTimetableRepo extends JpaRepository<TeacherTimetable, Long> {
	@Query("SELECT u FROM TeacherTimetable u WHERE u.TId = TId")
	TeacherTimetable findItemByTeacherId(String TId);

}
