package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.StudentLogin;
import in.ncpproject.Attendance.model.TeacherLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface TeacherLoginRepo extends JpaRepository<TeacherLogin, Long> {
	@Query("SELECT u FROM TeacherLogin u WHERE u.TeacherId =TeacherId")
	TeacherLogin findItemByTeacherId(String TeacherId);
	
	@Query("SELECT a FROM StudentLogin a WHERE TeacherId = ?1 AND Password = ?2")
	StudentLogin findByNameandPassword(String TeacherId, String Password);

}
