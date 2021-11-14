package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.PastLeaves;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface PastLeaveRepo extends JpaRepository<PastLeaves, Long> {
	 //Optional<TodoDTO> findByStudentId(String StudentId);
	@Query("SELECT u FROM PastLeaves u WHERE u.StudentId = StudentId")
    List<PastLeaves> findItemByStudentId(String StudentId);

}
