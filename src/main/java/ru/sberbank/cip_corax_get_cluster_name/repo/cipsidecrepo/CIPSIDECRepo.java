package ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;

import java.util.List;

@Repository
@Profile("!dev & !prod")
public interface CIPSIDECRepo extends CrudRepository<CIPSIDECData, String> {
    @Query(value = "select * from sidec_as_name p LIMIT 500", nativeQuery = true)
    List<CIPSIDECData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
