package in.ncpproject.Attendance.repository;

import in.ncpproject.Attendance.model.Subjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectsRepo extends JpaRepository<Subjects, Long> {

}
