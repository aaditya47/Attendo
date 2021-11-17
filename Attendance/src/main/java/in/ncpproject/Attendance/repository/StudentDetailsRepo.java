package in.ncpproject.Attendance.repository;

import in.ncpproject.Attendance.model.StudentDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDetailsRepo extends JpaRepository<StudentDetails, String> {
	// Optional<TodoDTO> findByStudentId(String StudentId);
	@Query("SELECT u FROM StudentDetails u WHERE u.StudentId = ?1")
	StudentDetails findItemByStudentId(String StudentId);

}
