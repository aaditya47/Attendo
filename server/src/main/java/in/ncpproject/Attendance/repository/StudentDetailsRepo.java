package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.StudentDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Long> {
	 //Optional<TodoDTO> findByStudentId(String StudentId);
	@Query("SELECT u FROM StudentDetails u WHERE u.StudentId = StudentId")
	StudentDetails findItemByStudentId(String StudentId);

}
