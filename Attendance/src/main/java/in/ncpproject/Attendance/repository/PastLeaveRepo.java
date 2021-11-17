package in.ncpproject.Attendance.repository;

import in.ncpproject.Attendance.composite.PastLeavesPKId;
import in.ncpproject.Attendance.model.PastLeaves;
import in.ncpproject.Attendance.model.StudentDetails;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PastLeaveRepo extends JpaRepository<PastLeaves, PastLeavesPKId> {
	// Optional<TodoDTO> findByStudentId(String StudentId);
	@Query("SELECT u FROM PastLeaves u WHERE u.StudentId.StudentId=?1")
	List<PastLeaves> findItemByStudentId(String StudentId);

	@Query("SELECT u FROM PastLeaves u WHERE u.StudentId.StudentId = ?1 and u.DOS = ?2")
	PastLeaves findItemByStudDOS(String StudentId, Date DOS);

}
