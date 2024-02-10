package ru.sberbank.cip_corax_get_cluster_name.repo.cipcoraxrepo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.OIPKafkaData;
import java.util.List;

@Repository
public interface OIPKafkaRepo extends CrudRepository<OIPKafkaData, String> {

}
