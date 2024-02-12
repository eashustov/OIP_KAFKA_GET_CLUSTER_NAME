package ru.sberbank.cip_corax_get_cluster_name.repo.cipcoraxrepo;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPCoraxData;

import java.util.List;

@Repository
@Profile("!dev & !prod")
public interface CIPCoraxRepo extends CrudRepository<CIPCoraxData, String> {
    @Query(value = "select * from kafkaservers p LIMIT 500", nativeQuery = true)
    List<CIPCoraxData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
