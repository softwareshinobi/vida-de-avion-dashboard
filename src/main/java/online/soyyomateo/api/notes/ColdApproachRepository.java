package online.soyyomateo.api.notes;

import online.soyyomateo.api.sports.ColdApproach;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColdApproachRepository extends JpaRepository<ColdApproach, Integer> {

    Optional<ColdApproach> findByIdAllIgnoreCase(Integer id);
}
