package ru.sberbank.cip_corax_get_cluster_name.repo.cipskeeperrepo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;

import java.util.List;

@Repository
@Profile("prod")
public interface CIPSkeeperRepoProd extends CIPSkeeperRepo{
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
            "       skeeper_ke,\n" +
            "\n" +
            "       skeeper_name,\n" +
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
            "       'true' PORT_7000\n" +
            "\n" +
            "from skeeper_as_name\n" +
            "\n" +
            "where\n" +
            "created_by_date BETWEEN TO_TIMESTAMP(" +
            ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "\n" +
            "order by created_by_date",
            nativeQuery = true)
    List<CIPSkeeperData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
