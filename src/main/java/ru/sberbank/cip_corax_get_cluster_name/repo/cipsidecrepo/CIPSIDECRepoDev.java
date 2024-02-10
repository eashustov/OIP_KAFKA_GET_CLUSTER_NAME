package ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;

import java.util.List;

@Component
@Profile("dev")
public abstract class CIPSIDECRepoDev implements CIPSIDECRepo {
    @Query(value = "select * from sidec_as_name p LIMIT 500", nativeQuery = true)
    public abstract List<CIPSIDECData> findAll();
}
