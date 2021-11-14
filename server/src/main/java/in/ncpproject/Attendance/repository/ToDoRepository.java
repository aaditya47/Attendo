package in.ncpproject.Attendance.repository;
import in.ncpproject.Attendance.model.TodoDTO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<TodoDTO, Long> {
	//Optional<TodoDTO> findByStudentId(String StudentId);
	@Query("SELECT u FROM TodoDTO u WHERE u.StudentId = StudentId")
	List<TodoDTO> findItemByStudentId(String StudentId);
	
}
