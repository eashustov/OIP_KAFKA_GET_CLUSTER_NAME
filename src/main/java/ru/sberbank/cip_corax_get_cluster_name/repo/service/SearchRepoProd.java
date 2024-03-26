package ru.sberbank.cip_corax_get_cluster_name.repo.service;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPServersData;

import java.util.List;

@Repository
@Profile("prod")
public interface SearchRepoProd extends SearchRepo {
    @Override
    @Query(value = "select\n" +
            "\n" +
            "            'SOWA (CI02192118)' AS HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            t1.server_name HOST_NAME,\n" +
            "\n" +
            "            t1.ip HOST_IP,\n" +
            "\n" +
            "            t1.tps_dns_name HOST_DOMAIN,\n" +
            "\n" +
            "            t1.server_ke as HOST_KE,\n" +
            "\n" +
            "            t1.os_admin OS_ADMIN,\n" +
            "\n" +
            "            t1.sowa_ke cluster_ke,\n" +
            "\n" +
            "            t1.title cluster_name,\n" +
            "\n" +
            "            t1.group_sopr ASSIGNMENT_GROUP,\n" +
            "\n" +
            "            t2.as_name AS_NAME,\n" +
            "\n" +
            "            t2.as_ke AS_KE,\n" +
            "\n" +
            "            to_char(t1.create_date, 'DD.MM.YYYY HH24:MI:SS') AS CREATED_BY_DATE,\n" +
            "\n" +
            "            t2.j_providing_unit_name AS J_PROVIDING_UNIT_NAME\n" +
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
            "            and\n" +
            "\n" +
            "            upper(t1.server_name) || ' ' || upper(t1.ip)  || ' '  || upper(t1.server_ke)\n" +
            "\n" +
            "            || ' ' || upper(t1.tps_dns_name) || ' ' || upper(to_char(t1.create_date, 'DD.MM.YYYY HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(t1.group_sopr)\n" +
            "\n" +
            "            || ' ' || upper(OS_ADMIN) || ' ' || upper(AS_NAME) || ' ' || upper(AS_KE)\n" +
            "\n" +
            "            || ' ' || upper(t1.sowa_ke) || ' ' || upper(t1.title)\n" +
            "\n" +
            "            like '%' || upper(:searchFilter) || '%'\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "select\n" +
            "\n" +
            "            'SIDEC (CI04452790)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            host_name,\n" +
            "\n" +
            "            ip host_ip,\n" +
            "\n" +
            "            host_domain,\n" +
            "\n" +
            "            host_ke,\n" +
            "\n" +
            "            os_admin,\n" +
            "\n" +
            "            sidec_ke cluster_ke,\n" +
            "\n" +
            "            sidec_name cluster_name,\n" +
            "\n" +
            "            assignment_group,\n" +
            "\n" +
            "            as_name,\n" +
            "\n" +
            "            as_ke,\n" +
            "\n" +
            "            to_char(created_by_date, 'DD.MM.RRRR HH24:MI:SS'),\n" +
            "\n" +
            "            J_PROVIDING_UNIT_NAME\n" +
            "\n" +
            "            from sidec_as_name\n" +
            "\n" +
            "            where\n" +
            "\n" +
            "            created_by_date between\n" +
            "\n" +
            "            TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            upper(host_name) || ' ' || upper(ip)  || ' '  || upper(host_ke)\n" +
            "\n" +
            "            || ' ' || upper(host_domain) || ' ' || upper(to_char(created_by_date, 'DD.MM.RRRR HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(assignment_group)\n" +
            "\n" +
            "|| ' ' || upper(os_admin) || ' ' || upper(as_name) || ' ' || upper(as_ke)\n" +
            "\n" +
            "            || ' ' || upper(sidec_name) || ' ' || upper(sidec_ke) like '%' || upper(:searchFilter) || '%'\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "            select\n" +
            "\n" +
            "           'SKeeper (CI02021300)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "            host_name,\n" +
            "\n" +
            "            ip host_ip,\n" +
            "\n" +
            "            host_domain,\n" +
            "\n" +
            "            host_ke,\n" +
            "\n" +
            "            os_admin,\n" +
            "\n" +
            "            skeeper_ke cluster_ke,\n" +
            "\n" +
            "            skeeper_name cluster_name,\n" +
            "\n" +
            "            assignment_group,\n" +
            "\n" +
            "            as_name,\n" +
            "\n" +
            "            as_ke,\n" +
            "\n" +
            "            to_char(created_by_date, 'DD.MM.RRRR HH24:MI:SS') as created_by_date,\n" +
            "\n" +
            "            J_PROVIDING_UNIT_NAME\n" +
            "\n" +
            "            from skeeper_as_name\n" +
            "\n" +
            "            where\n" +
            "\n" +
            "            created_by_date between\n" +
            "\n" +
            "            TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "            and\n" +
            "\n" +
            "            upper(host_name) || ' ' || upper(ip)  || ' '  || upper(host_ke)\n" +
            "\n" +
            "            || ' ' || upper(host_domain) || ' ' || upper(to_char(created_by_date, 'DD.MM.RRRR HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(assignment_group)\n" +
            "\n" +
            "            || ' ' || upper(os_admin) || ' ' || upper(as_name) || ' ' || upper(as_ke)\n" +
            "\n" +
            "            || ' ' || upper(skeeper_name) || ' ' || upper(skeeper_ke) like '%' || upper(:searchFilter) || '%'\n" +
            "\n" +
            "\n" +
            "            UNION\n" +
            "\n" +
            "\n" +
            "            select\n" +
            "\n" +
            "              'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "              sm.host_name host_name,\n" +
            "\n" +
            "              sm.HOST_IP host_ip,\n" +
            "\n" +
            "              sm.tps_dns_name host_domain,\n" +
            "\n" +
            "              sm.server_ke host_KE,\n" +
            "\n" +
            "              sm.OS_ADMIN OS_ADMIN,\n" +
            "\n" +
            "              sm.kafka_ke CLUSTER_KE,\n" +
            "\n" +
            "              sm.title CLUSTER_NAME,\n" +
            "\n" +
            "              sm.assignment assignment_group,\n" +
            "\n" +
            "              d2.title as_name,\n" +
            "\n" +
            "              d2.logical_name as_ke,\n" +
            "\n" +
            "              to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS') as created_by_date,\n" +
            "\n" +
            "              d3.J_PROVIDING_UNIT_NAME\n" +
            "\n" +
            "              from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "               on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "               on r.logical_name = d1.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "               on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "               on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "               left join smprimary.SBJITSERVICEM1@smrep_pub d3\n" +
            "\n" +
            "               on d2.logical_name = d3.logical_name\n" +
            "\n" +
            "               left join kafka_version k\n" +
            "\n" +
            "               on k.host_name = sm.host_name\n" +
            "\n" +
            "               where\n" +
            "\n" +
            "               d2.type in ('bizservice', 'autSystem')\n" +
            "\n" +
            "               and sm.CREATED_BY_DATE BETWEEN\n" +
            "\n" +
            "               TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "               TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "            upper(sm.host_name) || ' ' || upper(sm.HOST_IP)  || ' '  || upper(sm.server_ke)\n" +
            "\n" +
            "            || ' ' || upper(sm.tps_dns_name) || ' ' || upper(to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(sm.assignment)\n" +
            "\n" +
            "            || ' ' || upper(sm.OS_ADMIN) || ' ' || upper(d2.title) || ' ' || upper(d2.logical_name)\n" +
            "\n" +
            "            || ' ' || upper(sm.title) || ' ' || upper(sm.kafka_ke) like '%' || upper(:searchFilter) || '%'\n" +
            "\n" +
            "               UNION\n" +
            "\n" +
            "              select\n" +
            "\n" +
            "              'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "              sm.host_name host_name,\n" +
            "\n" +
            "              sm.HOST_IP host_ip,\n" +
            "\n" +
            "              sm.tps_dns_name host_domain,\n" +
            "\n" +
            "              sm.server_ke host_KE,\n" +
            "\n" +
            "              sm.OS_ADMIN OS_ADMIN,\n" +
            "\n" +
            "              sm.kafka_ke CLUSTER_KE,\n" +
            "\n" +
            "              sm.title CLUSTER_NAME,\n" +
            "\n" +
            "              sm.assignment assignment_group,\n" +
            "\n" +
            "              d3.title as_name,\n" +
            "\n" +
            "              d3.logical_name as_ke,\n" +
            "\n" +
            "              to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS') as created_by_date,\n" +
            "\n" +
            "              d4.J_PROVIDING_UNIT_NAME\n" +
            "\n" +
            "               from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "               on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "               on r.logical_name = d1.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "               on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "               on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r2\n" +
            "\n" +
            "               on d2.logical_name = r2.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d3\n" +
            "\n" +
            "               on r2.logical_name = d3.logical_name\n" +
            "\n" +
            "               left join smprimary.SBJITSERVICEM1@smrep_pub d4\n" +
            "\n" +
            "               on d3.logical_name = d4.logical_name\n" +
            "\n" +
            "               left join kafka_version k\n" +
            "\n" +
            "               on k.host_name = sm.host_name\n" +
            "\n" +
            "\n" +
            "               where\n" +
            "\n" +
            "               d3.type in ('bizservice', 'autSystem') and sm.CREATED_BY_DATE\n" +
            "\n" +
            "               BETWEEN\n" +
            "\n" +
            "               TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "               TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "            upper(sm.host_name) || ' ' || upper(sm.HOST_IP)  || ' '  || upper(sm.server_ke)\n" +
            "\n" +
            "            || ' ' || upper(sm.tps_dns_name) || ' ' || upper(to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(sm.assignment)\n" +
            "\n" +
            "            || ' ' || upper(sm.OS_ADMIN) || ' ' || upper(d3.title) || ' ' || upper(d3.logical_name)\n" +
            "\n" +
            "            || ' ' || upper(sm.title) || ' ' || upper(sm.kafka_ke) like '%' || upper(:searchFilter) || '%'\n" +
            "\n" +
            "               UNION\n" +
            "\n" +
            "               select\n" +
            "\n" +
            "              'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME,\n" +
            "\n" +
            "              sm.host_name host_name,\n" +
            "\n" +
            "              sm.HOST_IP host_ip,\n" +
            "\n" +
            "              sm.tps_dns_name host_domain,\n" +
            "\n" +
            "              sm.server_ke host_KE,\n" +
            "\n" +
            "              sm.OS_ADMIN OS_ADMIN,\n" +
            "\n" +
            "              sm.kafka_ke CLUSTER_KE,\n" +
            "\n" +
            "              sm.title CLUSTER_NAME,\n" +
            "\n" +
            "              sm.assignment assignment_group,\n" +
            "\n" +
            "              d4.title as_name,\n" +
            "\n" +
            "              d4.logical_name as_ke,\n" +
            "\n" +
            "              to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS') as created_by_date,\n" +
            "\n" +
            "              d5.J_PROVIDING_UNIT_NAME\n" +
            "\n" +
            "               from sm_ke_host_kafka_prom sm\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r\n" +
            "\n" +
            "               on sm.kafka_ke = r.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d1\n" +
            "\n" +
            "               on r.logical_name = d1.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r1\n" +
            "\n" +
            "               on d1.logical_name = r1.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d2\n" +
            "\n" +
            "               on r1.logical_name = d2.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r2\n" +
            "\n" +
            "               on d2.logical_name = r2.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d3\n" +
            "\n" +
            "               on r2.logical_name = d3.logical_name\n" +
            "\n" +
            "               left join smprimary.cirelationsm1@smrep_pub r3\n" +
            "\n" +
            "               on d3.logical_name = r3.tps_related_cis\n" +
            "\n" +
            "               left join smprimary.device2m1@smrep_pub d4\n" +
            "\n" +
            "               on r3.logical_name = d4.logical_name\n" +
            "\n" +
            "               left join smprimary.SBJITSERVICEM1@smrep_pub d5\n" +
            "\n" +
            "               on d4.logical_name = d5.logical_name\n" +
            "\n" +
            "               left join kafka_version k\n" +
            "\n" +
            "               on k.host_name = sm.host_name\n" +
            "\n" +
            "\n" +
            "               where\n" +
            "\n" +
            "               d4.type in ('bizservice', 'autSystem')\n" +
            "\n" +
            "               and sm.CREATED_BY_DATE\n" +
            "\n" +
            "               BETWEEN\n" +
            "\n" +
            "               TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "               TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "               and\n" +
            "\n" +
            "            upper(sm.host_name) || ' ' || upper(sm.HOST_IP)  || ' '  || upper(sm.server_ke)\n" +
            "\n" +
            "            || ' ' || upper(sm.tps_dns_name) || ' ' || upper(to_char(sm.created_by_date, 'DD.MM.RRRR HH24:MI:SS'))\n" +
            "\n" +
            "            || ' ' || upper(J_PROVIDING_UNIT_NAME) || ' ' || upper(sm.assignment)\n" +
            "\n" +
            "            || ' ' || upper(sm.OS_ADMIN) || ' ' || upper(d4.title) || ' ' || upper(d4.logical_name)\n" +
            "\n" +
            "            || ' ' || upper(sm.title) || ' ' || upper(sm.kafka_ke) like '%' || upper(:searchValue) || '%'", nativeQuery = true)

    List<CIPServersData>findServerBySearch(@Param("startDate") String startDate,
                                           @Param("endDate") String endDate,
                                           @Param("searchValue") String searchValue);

}
