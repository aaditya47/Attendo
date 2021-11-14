package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.TeacherDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface TeacherDetailsRepo extends JpaRepository<TeacherDetails, Long> {
	@Query("SELECT u FROM TeacherDetails u WHERE u.TeacherId = TId")
	TeacherDetails findItemByTeacherId(String TId);

}
