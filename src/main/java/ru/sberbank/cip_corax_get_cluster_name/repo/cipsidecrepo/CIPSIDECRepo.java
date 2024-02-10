package ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;

@Repository
public interface CIPSIDECRepo extends CrudRepository<CIPSIDECData, String> {
}
