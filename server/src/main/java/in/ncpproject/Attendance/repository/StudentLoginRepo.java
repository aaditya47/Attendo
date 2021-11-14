package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.StudentLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface StudentLoginRepo extends JpaRepository<StudentLogin, Long> {
	@Query("SELECT u FROM StudentLogin u WHERE u.StudentId = StudentId")
	StudentLogin findItemByStudentId(String StudentId);
	
	@Query("SELECT a FROM StudentLogin a WHERE StudentId = ?1 AND Password = ?2")
	StudentLogin findByNameandPassword(String StudentId, String Password);

}
