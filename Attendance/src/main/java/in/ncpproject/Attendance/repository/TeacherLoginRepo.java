package in.ncpproject.Attendance.repository;

import in.ncpproject.Attendance.model.TeacherLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface TeacherLoginRepo extends JpaRepository<TeacherLogin, Long> {
	@Query("SELECT u FROM TeacherLogin u WHERE u.TeacherId =?1")
	TeacherLogin findItemByTeacherId(String TeacherId);
	
	@Query("SELECT a FROM TeacherLogin a WHERE a.TeacherId = ?1 AND a.Password = ?2")
	TeacherLogin findByNameandPassword(String TeacherId, String Password);

}
