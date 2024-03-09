package ru.sberbank.cip_corax_get_cluster_name.repo.cipsowarepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSOWAData;

import java.util.List;

@Repository
@Profile("prod")
public interface CIPSOWARepoProd extends CIPSOWARepo {
    @Override
    @Query(value = "select\n" +
            "\n" +
            "       t1.server_name host_name,\n" +
            "\n" +
            "       t1.ip host_ip,\n" +
            "\n" +
            "       t1.tps_dns_name host_domain,\n" +
            "\n" +
            "       t1.server_ke host_ke,\n" +
            "\n" +
            "       t1.os_admin os_admin,\n" +
            "\n" +
            "       t1.sowa_ke sowa_ke,\n" +
            "\n" +
            "       t1.title sowa_name,\n" +
            "\n" +
            "       t1.group_sopr assignment_group,\n" +
            "\n" +
            "       t1.environment environment,\n" +
            "\n" +
            "       t2.as_ke as_ke,\n" +
            "\n" +
            "       t2.as_name as_name,\n" +
            "\n" +
            "       to_char(t1.create_date, 'DD.MM.RRRR HH24:MI:SS') created_by_date,\n" +
            "\n" +
            "       t2.j_providing_unit_name j_providing_unit_name,\n" +
            "\n" +
            "from sm_ke_host_sowa t1\n" +
            "\n" +
            "left join sm_ke_host_sowa_as_name t2\n" +
            "\n" +
            "on t1.sowa_ke = t2.sowa_ke\n" +
            "\n" +
            "where\n" +
            "t1.create_date BETWEEN TO_TIMESTAMP(" +
            ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "order by t1.create_date desc", nativeQuery = true)
    List<CIPSOWAData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
