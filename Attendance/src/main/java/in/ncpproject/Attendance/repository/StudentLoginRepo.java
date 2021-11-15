package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.StudentLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface StudentLoginRepo extends JpaRepository<StudentLogin, Long> {
	@Query("SELECT u FROM StudentLogin u WHERE u.StudentId = ?1")
	StudentLogin findItemByStudentId(String StudentId);
	
	@Query("SELECT a FROM StudentLogin a WHERE a.StudentId = ?1 AND a.Password = ?2")
	StudentLogin findByNameandPassword(String StudentId, String Password);

}
