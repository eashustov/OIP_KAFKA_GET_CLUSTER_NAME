package ru.sberbank.cip_corax_get_cluster_name.repo.cipcoraxrepo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.OIPKafkaData;

@Repository
public interface OIPKafkaRepo extends CrudRepository<OIPKafkaData, String> {
}
