package ru.sberbank.cip_corax_get_cluster_name.repo.cipskeeperrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;

import java.util.List;

@Component
@Profile("dev")
public abstract class CIPSkeeperRepoDev implements CIPSkeeperRepo{
    @Query(value = "select * from skeeper_as_name p LIMIT 500", nativeQuery = true)
    public abstract List<CIPSkeeperData> findAll();
}
