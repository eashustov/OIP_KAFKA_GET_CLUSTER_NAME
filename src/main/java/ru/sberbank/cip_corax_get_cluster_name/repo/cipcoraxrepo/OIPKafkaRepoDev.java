package ru.sberbank.cip_corax_get_cluster_name.repo.cipcoraxrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.OIPKafkaData;

import java.util.List;

@Repository
@Profile("dev")
public interface OIPKafkaRepoDev extends OIPKafkaRepo{
    @Override
    @Query(value = "select * from kafkaservers p LIMIT 500", nativeQuery = true)
    List<OIPKafkaData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
