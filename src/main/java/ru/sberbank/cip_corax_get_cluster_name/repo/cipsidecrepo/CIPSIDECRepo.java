package ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;

import java.util.List;

@Repository
public interface CIPSIDECRepo extends CrudRepository<CIPSIDECData, String> {
//    @Query(value = "select * from sidec_as_name p LIMIT 500", nativeQuery = true)
//    List<CIPSIDECData> findAll();
}
