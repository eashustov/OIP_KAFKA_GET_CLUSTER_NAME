package ru.sberbank.cip_corax_get_cluster_name.repo.cipcoraxrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import ru.sberbank.cip_corax_get_cluster_name.domain.OIPKafkaData;

import java.util.List;

@Component
@Profile("dev")
public abstract class OIPKafkaRepoDev implements OIPKafkaRepo{

    @Query(value = "select * from kafkaservers p LIMIT 500", nativeQuery = true)
    public abstract List<OIPKafkaData> findAll();
}
