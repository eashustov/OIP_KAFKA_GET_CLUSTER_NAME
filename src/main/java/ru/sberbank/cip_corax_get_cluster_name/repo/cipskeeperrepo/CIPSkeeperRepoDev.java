package ru.sberbank.cip_corax_get_cluster_name.repo.cipskeeperrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;

import java.util.List;

@Repository
@Profile("dev")
public interface CIPSkeeperRepoDev extends CIPSkeeperRepo{
    @Override
    @Query(value = "select * from skeeper_as_name p LIMIT 500", nativeQuery = true)
    List<CIPSkeeperData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
