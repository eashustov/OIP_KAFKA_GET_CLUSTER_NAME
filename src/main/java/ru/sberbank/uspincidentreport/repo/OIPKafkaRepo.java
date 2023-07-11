package ru.sberbank.uspincidentreport.repo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.uspincidentreport.domain.OIPKafkaData;
import java.util.List;

@Repository
public interface OIPKafkaRepo extends CrudRepository<OIPKafkaData, String> {
//
//   @Query(value = "select * from kafkaservers p LIMIT 500", nativeQuery = true)
//   List<OIPKafkaData> findAll();

      @Query(value = "select\n" +
              "    sm.host_name host_name,\n" +
              "    sm.HOST_IP host_ip,\n" +
              "    sm.tps_dns_name host_domain,\n" +
              "    sm.server_ke host_KE,\n" +
              "    sm.OS_ADMIN,\n" +
              "    sm.kafka_ke KAFKA_KE,\n" +
              "    sm.title KAFKA_NAME,\n" +
              "    sm.assignment assignment_group,\n" +
              "    d1.title stend_name,\n" +
              "    d2.title AS_name,\n" +
              "    sm.created_by_date created_by_date,\n" +
              "    d3.J_PROVIDING_UNIT_NAME,\n" +
              "    d2.logical_name AS_KE,\n" +
              "    'false' PORT_7000,\n" +
              "    'false' PORT_7010\n" +
              "\n" +
              "\n" +
              "from sm_ke_host_kafka_prom sm\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r\n" +
              "                   on sm.kafka_ke = r.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d1\n" +
              "                   on r.logical_name = d1.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r1\n" +
              "                   on d1.logical_name = r1.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d2\n" +
              "                   on r1.logical_name = d2.logical_name\n" +
              "         left join smprimary.SBJITSERVICEM1@smrep_pub d3\n" +
              "                   on d2.logical_name = d3.logical_name\n" +
              "         left join kafka_version k\n" +
              "                   on k.host_name = sm.host_name\n" +
              "\n" +
              "where\n" +
              "        d2.type in ('bizservice', 'autSystem') and sm.CREATED_BY_DATE BETWEEN TO_TIMESTAMP(" +
              ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
              "\n" +
              "UNION\n" +
              "\n" +
              "select\n" +
              "    sm.host_name host_name,\n" +
              "    sm.HOST_IP host_ip,\n" +
              "    sm.tps_dns_name host_domain,\n" +
              "    sm.server_ke host_KE,\n" +
              "    sm.OS_ADMIN,\n" +
              "    sm.kafka_ke KAFKA_KE,\n" +
              "    sm.title KAFKA_NAME,\n" +
              "    sm.assignment assignment_group,\n" +
              "    d2.title stend_name,\n" +
              "    d3.title AS_name,\n" +
              "    sm.created_by_date created_by_date,\n" +
              "    d4.J_PROVIDING_UNIT_NAME,\n" +
              "    d3.logical_name AS_KE,\n" +
              "    'false' PORT_7000,\n" +
              "    'false' PORT_7010\n" +
              "\n" +
              "\n" +
              "from sm_ke_host_kafka_prom sm\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r\n" +
              "                   on sm.kafka_ke = r.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d1\n" +
              "                   on r.logical_name = d1.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r1\n" +
              "                   on d1.logical_name = r1.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d2\n" +
              "                   on r1.logical_name = d2.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r2\n" +
              "                   on d2.logical_name = r2.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d3\n" +
              "                   on r2.logical_name = d3.logical_name\n" +
              "         left join smprimary.SBJITSERVICEM1@smrep_pub d4\n" +
              "                   on d3.logical_name = d4.logical_name\n" +
              "         left join kafka_version k\n" +
              "                   on k.host_name = sm.host_name\n" +
              "\n" +
              "\n" +
              "where\n" +
              "        d3.type in ('bizservice', 'autSystem') and sm.CREATED_BY_DATE BETWEEN TO_TIMESTAMP(" +
              ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
              "\n" +
              "UNION\n" +
              "\n" +
              "select\n" +
              "    sm.host_name host_name,\n" +
              "    sm.HOST_IP host_ip,\n" +
              "    sm.tps_dns_name host_domain,\n" +
              "    sm.server_ke host_KE,\n" +
              "    sm.OS_ADMIN,\n" +
              "    sm.kafka_ke KAFKA_KE,\n" +
              "    sm.title KAFKA_NAME,\n" +
              "    sm.assignment assignment_group,\n" +
              "    d2.title stend_name,\n" +
              "    d4.title AS_name,\n" +
              "    sm.created_by_date created_by_date,\n" +
              "    d5.J_PROVIDING_UNIT_NAME,\n" +
              "    d4.logical_name AS_KE,\n" +
              "    'false' PORT_7000,\n" +
              "    'false' PORT_7010\n" +
              "\n" +
              "\n" +
              "from sm_ke_host_kafka_prom sm\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r\n" +
              "                   on sm.kafka_ke = r.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d1\n" +
              "                   on r.logical_name = d1.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r1\n" +
              "                   on d1.logical_name = r1.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d2\n" +
              "                   on r1.logical_name = d2.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r2\n" +
              "                   on d2.logical_name = r2.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d3\n" +
              "                   on r2.logical_name = d3.logical_name\n" +
              "         left join smprimary.cirelationsm1@smrep_pub r3\n" +
              "                   on d3.logical_name = r3.tps_related_cis\n" +
              "         left join smprimary.device2m1@smrep_pub d4\n" +
              "                   on r3.logical_name = d4.logical_name\n" +
              "         left join smprimary.SBJITSERVICEM1@smrep_pub d5\n" +
              "                   on d4.logical_name = d5.logical_name\n" +
              "         left join kafka_version k\n" +
              "                   on k.host_name = sm.host_name\n" +
              "\n" +
              "\n" +
              "where\n" +
              "        d4.type in ('bizservice', 'autSystem') and sm.CREATED_BY_DATE BETWEEN TO_TIMESTAMP(" +
              ":startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
              "\n" +
              "order by CREATED_BY_DATE",
              nativeQuery = true)
      List<OIPKafkaData> findServerByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);


//   @Query(value = "select * from probsummarym1 p where p.OPEN_TIME BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy HH:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy HH:mm:ss')", nativeQuery = true)
//   List<OIPKafkaData> findIncByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
//
//   @Query(value = "select * from probsummarym1 p where concat (upper(p.NUMBER), ' ', upper(p.HOST), ' ', upper(p.HPC_ASSIGNEE_NAME), ' ', upper(p.HPC_ASSIGNMENT), ' ', upper(p.AFFECTED_ITEM)) like concat ('%', upper(:searchFilter), '%') and p.OPEN_TIME BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy HH:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy HH:mm:ss')", nativeQuery = true)
//   List<OIPKafkaData> findIncBySearchFilter(@Param("startDate") String startDate, @Param("endDate") String endDate, @Param("searchFilter") String searchFilter);
//
//   @Query(value = "select * from probsummarym1 p where PROBLEM LIKE concat ('%',:triggerDescription, '%') " +
//           "AND p.OPEN_TIME BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy HH:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy HH:mm:ss')" , nativeQuery = true)
//   List<OIPKafkaData> findIncByTrigger(@Param("startDate") String startDate, @Param("endDate") String endDate, @Param("triggerDescription") String triggerDescription);



}
