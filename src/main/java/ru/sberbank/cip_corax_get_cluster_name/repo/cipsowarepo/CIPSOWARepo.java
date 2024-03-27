package ru.sberbank.cip_corax_get_cluster_name.repo.cipsowarepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSOWAData;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;

import java.util.List;

@Repository
@Profile("!dev & !prod")
public interface CIPSOWARepo extends CrudRepository<CIPSOWAData, String> {
    @Query(value = "select * from sm_ke_host_sowa p LIMIT 500", nativeQuery = true)
    List<CIPSOWAData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
