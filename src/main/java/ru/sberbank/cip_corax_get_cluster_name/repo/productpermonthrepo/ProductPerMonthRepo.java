package ru.sberbank.cip_corax_get_cluster_name.repo.productpermonthrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPServersData;
import ru.sberbank.cip_corax_get_cluster_name.domain.ICIPProductPerMonthData;

import java.util.List;

@Repository
@Profile("!dev & !prod")
public interface ProductPerMonthRepo extends CrudRepository<CIPServersData, String> {
    @Query(value = "select\n" +
            "\n" +
            "            'SOWA (CI02192118)' AS HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            to_char(t1.create_date, 'Month') AS \"MONTH\",\n" +
            "\n" +
            "            to_char(t1.create_date, 'MM') AS \"MONTH_NUMBER\",\n" +
            "\n" +
            "            to_char(t1.create_date, 'YYYY') AS \"YEAR\",\n" +
            "\n" +
            "            COUNT (SERVER_NAME) AS \"COUNT_SRV\"\n" +
            "\n" +
            "            from sm_ke_host_sowa t1\n" +
            "\n" +
            "            left join sm_ke_host_sowa_as_name t2\n" +
            "\n" +
            "            on t1.sowa_ke = t2.sowa_ke\n" +
            "\n" +
            "            where t1.create_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            GROUP BY 'HPC_AFFECTED_ITEM_NAME', to_char(t1.create_date, 'Month'), to_char(t1.create_date, 'MM'), to_char(t1.create_date, 'YYYY')\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "            select\n" +
            "\n" +
            "            'SKeeper (CI02021300)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            to_char(t2.created_by_date, 'Month') AS \"MONTH\",\n" +
            "\n" +
            "            to_char(t2.created_by_date, 'MM') AS \"MONTH_NUMBER\",\n" +
            "\n" +
            "            to_char(t2.created_by_date, 'YYYY') AS \"YEAR\",\n" +
            "\n" +
            "            COUNT (HOST_NAME) AS \"COUNT_SRV\"\n" +
            "\n" +
            "            from skeeper_as_name t2\n" +
            "\n" +
            "            where t2.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            GROUP BY 'HPC_AFFECTED_ITEM_NAME', to_char(t2.created_by_date, 'Month'), to_char(t2.created_by_date, 'MM'), to_char(t2.created_by_date, 'YYYY')\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "            select\n" +
            "\n" +
            "            'SIDEC (CI04452790)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            to_char(t3.created_by_date, 'Month') AS \"MONTH\",\n" +
            "\n" +
            "            to_char(t3.created_by_date, 'MM') AS \"MONTH_NUMBER\",\n" +
            "\n" +
            "            to_char(t3.created_by_date, 'YYYY') AS \"YEAR\",\n" +
            "\n" +
            "            COUNT (HOST_NAME) AS \"COUNT_SRV\"\n" +
            "\n" +
            "            from sidec_as_name t3\n" +
            "\n" +
            "            where t3.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            GROUP BY 'HPC_AFFECTED_ITEM_NAME', to_char(t3.created_by_date, 'Month'), to_char(t3.created_by_date, 'MM'), to_char(t3.created_by_date, 'YYYY')\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "            select\n" +
            "\n" +
            "            'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            to_char(t4.created_by_date, 'Month') AS \"MONTH\",\n" +
            "\n" +
            "            to_char(t4.created_by_date, 'MM') AS \"MONTH_NUMBER\",\n" +
            "\n" +
            "            to_char(t4.created_by_date, 'YYYY') AS \"YEAR\",\n" +
            "\n" +
            "            COUNT (HOST_NAME) AS \"COUNT_SRV\"\n" +
            "\n" +
            "            from\n" +
            "\n" +
            "            (select\n" +
            "\n" +
            "                   sm.host_name host_name,\n" +
            "\n" +
            "                   sm.created_by_date created_by_date\n" +
            "\n" +
            "            from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "            on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "            on r.logical_name = d1.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "            on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "            on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "            left join smprimary.SBJITSERVICEM1@smrep_pub d3\n" +
            "\n" +
            "            on d2.logical_name = d3.logical_name\n" +
            "\n" +
            "            left join kafka_version k\n" +
            "\n" +
            "            on k.host_name = sm.host_name\n" +
            "\n" +
            "            where\n" +
            "\n" +
            "            d2.type in ('bizservice', 'autSystem') and sm.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "              select\n" +
            "\n" +
            "                   sm.host_name host_name,\n" +
            "\n" +
            "                   sm.created_by_date created_by_date\n" +
            "\n" +
            "            from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "            on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "            on r.logical_name = d1.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "            on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "            on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r2\n" +
            "\n" +
            "            on d2.logical_name = r2.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d3\n" +
            "\n" +
            "            on r2.logical_name = d3.logical_name\n" +
            "\n" +
            "            left join smprimary.SBJITSERVICEM1@smrep_pub d4\n" +
            "\n" +
            "            on d3.logical_name = d4.logical_name\n" +
            "\n" +
            "            left join kafka_version k\n" +
            "\n" +
            "            on k.host_name = sm.host_name\n" +
            "\n" +
            "            where\n" +
            "\n" +
            "            d3.type in ('bizservice', 'autSystem') and sm.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "              select\n" +
            "\n" +
            "                   sm.host_name host_name,\n" +
            "\n" +
            "                   sm.created_by_date created_by_date\n" +
            "\n" +
            "            from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "            on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "            on r.logical_name = d1.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "            on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "            on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r2\n" +
            "\n" +
            "            on d2.logical_name = r2.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d3\n" +
            "\n" +
            "            on r2.logical_name = d3.logical_name\n" +
            "\n" +
            "            left join smprimary.cirelationsm1@smrep_pub r3\n" +
            "\n" +
            "            on d3.logical_name = r3.tps_related_cis\n" +
            "\n" +
            "            left join smprimary.device2m1@smrep_pub d4\n" +
            "\n" +
            "            on r3.logical_name = d4.logical_name\n" +
            "\n" +
            "            left join smprimary.SBJITSERVICEM1@smrep_pub d5\n" +
            "\n" +
            "            on d4.logical_name = d5.logical_name\n" +
            "\n" +
            "            left join kafka_version k\n" +
            "\n" +
            "            on k.host_name = sm.host_name\n" +
            "\n" +
            "\n" +
            "            where\n" +
            "\n" +
            "            d4.type in ('bizservice', 'autSystem') and sm.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.RRRR HH24:MI:SS')) t4\n" +
            "\n" +
            "            where t4.created_by_date between\n" +
            "\n" +
            "            to_timestamp(:startDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            to_timestamp(:endDate, 'DD.MM.YYYY HH24:MI:SS')\n" +
            "\n" +
            "            GROUP BY 'HPC_AFFECTED_ITEM_NAME', to_char(t4.created_by_date, 'Month'), to_char(t4.created_by_date, 'MM'), to_char(t4.created_by_date, 'YYYY')", nativeQuery = true)
    List<ICIPProductPerMonthData> findIncAffectedItemCountPerMonth(@Param("startDate") String startDate, @Param("endDate") String endDate);
}