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
@Profile("dev")
public interface ProductPerMonthRepoDev extends ProductPerMonthRepo {
    @Query(value = "select 'SOWA (CI02192118)' as HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss')) AS \"month\",\n" +
            "            MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss')) AS month_number,\n" +
            "            YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss')) AS \"year\", COUNT (p.HOST_NAME) AS count_srv from SM_KE_HOST_SOWA p\n" +
            "            GROUP BY HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss')),\n" +
            "            MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss')), YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd-MM-yyyy HH:mm:ss'))\n" +
            "            union\n" +
            "select 'SKeeper (CI02021300)' as HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS \"month\",\n" +
            "       MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS month_number,\n" +
            "       YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS \"year\", COUNT (p.HOST_NAME) AS count_srv from SKEEPER_AS_NAME p\n" +
            "GROUP BY HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')),\n" +
            "         MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')), YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy'))\n" +
            "            union\n" +
            "select 'SIDEC (CI04452790)' as HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS \"month\",\n" +
            "       MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS month_number,\n" +
            "       YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')) AS \"year\", COUNT (p.HOST_NAME) AS count_srv from SIDEC_AS_NAME p\n" +
            "GROUP BY HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')),\n" +
            "         MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy')), YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yy'))\n" +
            "union\n" +
            "select 'Platform V Corax (CI04085569)' as HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss')) AS \"month\",\n" +
            "MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss')) AS month_number,\n" +
            "YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss')) AS \"year\", COUNT (p.HOST_NAME) AS count_srv from KAFKASERVERS p\n" +
            "GROUP BY HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss')),\n" +
            "    MONTH(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss')), YEAR(PARSEDATETIME(p.CREATED_BY_DATE, 'dd.MM.yyyy HH:mm:ss'))\n" +
            "            ORDER BY HPC_AFFECTED_ITEM_NAME, 'year', month_number ASC", nativeQuery = true)
    List<ICIPProductPerMonthData> findIncAffectedItemCountPerMonth(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
