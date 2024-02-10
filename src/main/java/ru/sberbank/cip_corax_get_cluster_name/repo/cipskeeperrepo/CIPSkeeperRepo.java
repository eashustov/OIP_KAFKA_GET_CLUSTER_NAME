package ru.sberbank.cip_corax_get_cluster_name.repo.cipskeeperrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;

@Repository
public interface CIPSkeeperRepo extends CrudRepository<CIPSkeeperData, String> {
}
