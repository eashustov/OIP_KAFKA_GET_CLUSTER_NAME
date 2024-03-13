package ru.sberbank.cip_corax_get_cluster_name.repo.totalproductsharerepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPServersData;
import ru.sberbank.cip_corax_get_cluster_name.domain.ICIPTotalProductShareDataCount;

import java.util.List;

@Repository
@Profile("dev")
public interface TotalProductShareRepoDev extends TotalProductShareRepo {

    //Запросы и методы для построения Bar Chart графика аналитики - проценты по инцидентам
    @Query(value = "select\n" +
            "    count(*) as \"COUNT\", 'SOWA (CI02192118)' as HPC_AFFECTED_ITEM_NAME\n" +
            "from SM_KE_HOST_SOWA\n" +
            "union\n" +
            "select\n" +
            "    count(*), 'SKeeper (CI02021300)' as HPC_AFFECTED_ITEM_NAME\n" +
            "from SKEEPER_AS_NAME\n" +
            "union\n" +
            "select\n" +
            "    count(*), 'SIDEC (CI04452790)' as HPC_AFFECTED_ITEM_NAME\n" +
            "from SIDEC_AS_NAME\n" +
            "union\n" +
            "select\n" +
            "    count(*), 'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME\n" +
            "from KAFKASERVERS\n" +
            "order by COUNT desc", nativeQuery = true)
    List<ICIPTotalProductShareDataCount> findIncHandleByAffectedItemCount(@Param("startDate") String startDate, @Param("endDate") String endDate);
}

