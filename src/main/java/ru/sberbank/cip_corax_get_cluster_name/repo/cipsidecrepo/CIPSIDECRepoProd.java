package ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;

import java.util.List;

@Repository
@Profile("prod")
public interface CIPSIDECRepoProd extends CIPSIDECRepo {
    @Override
    @Query(value = "select\n" +
            "\n" +
            "       host_name,\n" +
            "\n" +
            "       ip host_ip,\n" +
            "\n" +
            "       host_domain,\n" +
            "\n" +
            "       host_ke,\n" +
            "\n" +
            "       os_admin,\n" +
            "\n" +
            "       sidec_ke,\n" +
            "\n" +
            "       sidec_name,\n" +
            "\n" +
            "       assignment_group,\n" +
            "\n" +
            "       stend_name,\n" +
            "\n" +
            "       as_name,\n" +
            "\n" +
            "       to_char(created_by_date, 'DD.MM.RRRR HH24:MI:SS') as created_by_date,\n" +
            "\n" +
            "       J_PROVIDING_UNIT_NAME,\n" +
            "\n" +
            "       as_ke,\n" +
            "\n" +
            "       'true' PORT_8081,\n" +
            "\n" +
            "       'true' PORT_7030\n" +
            "\n" +
            "from sidec_as_name\n" +
            "\n" +
            "where\n" +
            "created_by_date BETWEEN TO_TIMESTAMP(" +
            ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "order by created_by_date",
            nativeQuery = true)
    List<CIPSIDECData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
