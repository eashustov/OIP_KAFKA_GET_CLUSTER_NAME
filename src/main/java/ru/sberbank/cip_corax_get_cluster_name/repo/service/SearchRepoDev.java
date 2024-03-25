package ru.sberbank.cip_corax_get_cluster_name.repo.service;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPServersData;

import java.util.List;

@Repository
@Profile("dev")
public interface SearchRepoDev extends SearchRepo {
    @Override
    @Query(value = "select 'SOWA (CI02192118)' as HPC_AFFECTED_ITEM_NAME, p.HOST_NAME, p.HOST_IP, p.HOST_DOMAIN,\n" +
            "            p.HOST_KE, p.OS_ADMIN, p.ASSIGNMENT_GROUP, p.AS_NAME, p.AS_KE, p.CREATED_BY_DATE, p.J_PROVIDING_UNIT_NAME,\n" +
            "            p.SOWA_NAME as CLUSTER_NAME, p.SOWA_KE as CLUSTER_KE\n" +
            "from SM_KE_HOST_SOWA p\n" +
            "            union\n" +
            "            select 'SKeeper (CI02021300)' as HPC_AFFECTED_ITEM_NAME, p.HOST_NAME, p.HOST_IP, p.HOST_DOMAIN,\n" +
            "            p.HOST_KE, p.OS_ADMIN, p.ASSIGNMENT_GROUP, p.AS_NAME, p.AS_KE, p.CREATED_BY_DATE, p.J_PROVIDING_UNIT_NAME,\n" +
            "            p.SKEEPER_NAME as CLUSTER_NAME, p.SKEEPER_KE as CLUSTER_KE\n" +
            "from SKEEPER_AS_NAME p\n" +
            "            union\n" +
            "            select 'SIDEC (CI04452790)' as HPC_AFFECTED_ITEM_NAME, p.HOST_NAME, p.HOST_IP, p.HOST_DOMAIN,\n" +
            "            p.HOST_KE, p.OS_ADMIN, p.ASSIGNMENT_GROUP, p.AS_NAME, p.AS_KE, p.CREATED_BY_DATE, p.J_PROVIDING_UNIT_NAME,\n" +
            "            p.SIDEC_NAME as CLUSTER_NAME, p.SIDEC_KE as CLUSTER_KE\n" +
            "from SIDEC_AS_NAME p\n" +
            "            union\n" +
            "            select 'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME, p.HOST_NAME, p.HOST_IP, p.HOST_DOMAIN,\n" +
            "            p.HOST_KE, p.OS_ADMIN, p.ASSIGNMENT_GROUP, p.AS_NAME, p.AS_KE, p.CREATED_BY_DATE, p.J_PROVIDING_UNIT_NAME,\n" +
            "            p.KAFKA_NAME as CLUSTER_NAME, p.KAFKA_KE as CLUSTER_KE\n" +
            "from KAFKASERVERS p", nativeQuery = true)

    List<CIPServersData>findServerBySearch(@Param("startDate") String startDate,
                                           @Param("endDate") String endDate,
                                           @Param("searchValue") String searchValue);

}
