package ru.sberbank.uspincidentreport;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
//import ru.sberbank.uspincidentreport.service.zabbix.ZabbixAPI_2;

@SpringBootApplication
public class OIPKafkaGetClusterName {

    private static ConfigurableApplicationContext context;

    //Из application.properties нельзя вставить значение в статическую переменную напряму.
    // Поэтому требуется метод setURLs, setUser, setPassword

//    private static String[] urls;
//    @Value("${zabbix.api.url}")
//    private void setURLs(String[] zabbix_urls){
//        urls = zabbix_urls;
//    }
//
//    private static String user;
//    @Value("${zabbix.api.user}")
//    private void setUser(String zabbix_user){
//        user = zabbix_user;
//    }
//
//    private static String password;
//    @Value("${zabbix.api.password}")
//    private void setPassword(String zabbix_password){
//        password = zabbix_password;
//    }
//
//    //Выставление значений тега из appliation.properties
//    //Из application.properties нельзя вставить значение в статическую переменную напряму.
//    // Поэтому требуется метод setURLs, setUser, setPassword
//    static String zabbixAPITagName;
//    @Value("${zabbix.api.tag.name}")
//    private void setTagName(String zabbixTagName){
//        zabbixAPITagName = zabbixTagName;
//    }
//
//    static String zabbixAPITagValue;
//    @Value("${zabbix.api.tag.value}")
//    private void setTagValue(String zabbixTagValue){
//        zabbixAPITagValue = zabbixTagValue;
//    }
//
//    static String zabbixAPITriggersSeverityDefaultValue;
//    @Value("${zabbix.api.trigger.severity.default}")
//    private void setZabbixAPITriggersSeverityDefaultValue(String TriggersSeverityDefaultValue){
//        zabbixAPITriggersSeverityDefaultValue = TriggersSeverityDefaultValue;
//    }
//
//    //Выставление значений zabbix групп тега из appliation.properties
//    //Из application.properties нельзя вставить значение в статическую переменную напряму.
//    // Поэтому требуется метод setGroups*
//    //ОИП
//    static String[] zabbixGroupsSOWA;
//    @Value("${zabbix.api.groupsname.sowa}")
//    private void setGroupsSOWA(String[] groupsName){
//        zabbixGroupsSOWA = groupsName;
//    }
//
//    static String[] zabbixGroupsKafka;
//    @Value("${zabbix.api.groupsname.kafka}")
//    private void setGroupsKafka(String[] groupsName){
//        zabbixGroupsKafka = groupsName;
//    }
//
//    static String[] zabbixGroupsMQ;
//    @Value("${zabbix.api.groupsname.mq}")
//    private void setGroupsMQ(String[] groupsName){
//        zabbixGroupsMQ = groupsName;
//    }
//
//    static String[] zabbixGroupsDP;
//    @Value("${zabbix.api.groupsname.dp}")
//    private void setGroupsDP(String[] groupsName){
//        zabbixGroupsDP = groupsName;
//    }
//
//    //Стандартные платформы
//    static String[] zabbixGroupsNginx;
//    @Value("${zabbix.api.groupsname.nginx}")
//    private void setZabbixGroupsNginx(String[] groupsName){
//        zabbixGroupsNginx = groupsName;
//    }
//
//    static String[] zabbixGroupsWAS;
//    @Value("${zabbix.api.groupsname.nginx}")
//    private void setZabbixGroupsWAS(String[] groupsName){
//        zabbixGroupsWAS = groupsName;
//    }
//
//    static String[] zabbixGroupsWildFly;
//    @Value("${zabbix.api.groupsname.wildfly}")
//    private void setZabbixGroupsWildFly(String[] groupsName){
//        zabbixGroupsWildFly = groupsName;
//    }
//
//    static String[] zabbixGroupsWeblogic;
//    @Value("${zabbix.api.groupsname.weblogic}")
//    private void setZabbixGroupsWeblogic(String[] groupsName){
//        zabbixGroupsWeblogic = groupsName;
//    }
//    //Платформа управления контейнерами (Terra)
//    static String[] zabbixGroupsOpenShift;
//    @Value("${zabbix.api.groupsname.openshift}")
//    private void setZabbixGroupsOpenShift(String[] groupsName){
//        zabbixGroupsOpenShift = groupsName;
//    }
//
//    static String zabbixHostSOWA;
//    @Value("${zabbix.api.hostname.sowa}")
//    private void setHostSOWA(String hostName){
//        zabbixHostSOWA = hostName;
//    }
//
//    static String zabbixHostKafka;
//    @Value("${zabbix.api.hostname.kafka}")
//    private void setGroupsKafka(String hostName){
//        zabbixHostKafka = hostName;
//    }
//
//    static String zabbixHostMQ;
//    @Value("${zabbix.api.hostname.mq}")
//    private void setGroupsMQ(String hostName){
//        zabbixHostMQ = hostName;
//    }
//
//    static String zabbixHostDP;
//    @Value("${zabbix.api.hostname.dp}")
//    private void setGroupsDP(String hostName){
//        zabbixHostDP = hostName;
//    }
//
//    //Стандартные платформы
//    static String zabbixHostNginx;
//    @Value("${zabbix.api.hostname.nginx}")
//    private void setZabbixGroupsNginx(String hostName){
//        zabbixHostNginx = hostName;
//    }
//
//    static String zabbixHostWAS;
//    @Value("${zabbix.api.hostname.was}")
//    private void setZabbixGroupsWAS(String hostName){
//        zabbixHostWAS = hostName;
//    }
//
//    static String zabbixHostWildFly;
//    @Value("${zabbix.api.hostname.wildfly}")
//    private void setZabbixGroupsWildFly(String hostName){
//        zabbixHostWildFly = hostName;
//    }
//
//    static String zabbixHostWeblogic;
//    @Value("${zabbix.api.hostname.weblogic}")
//    private void setZabbixGroupsWeblogic(String hostName){
//        zabbixHostWeblogic = hostName;
//    }
//    //Платформа управления контейнерами (Terra)
//    static String zabbixHostOpenShift;
//    @Value("${zabbix.api.hostname.openshift}")
//    private void setZabbixGroupsOpenShift(String hostName){
//        zabbixHostOpenShift = hostName;
//    }
//    //Период опроса Zabbix серверов
//    static int zabbixRequestInterval;
//    @Value("${zabbix.api.request.interval}")
//    private void setZabbixGroupsOpenShift(int requestInterval){
//        zabbixRequestInterval = requestInterval;
//    }
//
//    // Создание текстовой переменной типа: текст в проблеме: http ссылка на инструкцию для устранения
//    //Инциденты для CI02192117 Kafka
//    public static String CI02192117KafkaMapFile;
//
//    @Value("${inc.resolution.map.kafka}")
//    private void setCI02192117KafkaMapFile(String mapFile) {
//        CI02192117KafkaMapFile = mapFile;
//    }
//
//    //Инциденты для CI02192118 SOWA
//    public static String CI02192118SOWAMapFile;
//
//    @Value("${inc.resolution.map.sowa}")
//    private void setCI02192118SOWAMapFile(String mapFile) {
//        CI02192118SOWAMapFile = mapFile;
//    }
//
//    //Инциденты для CI02021290 IBM DataPower
//    public static String CI02021290DPMapFile;
//
//    @Value("${inc.resolution.map.dp}")
//    private void setCI02021290DPMapFile(String mapFile) {
//        CI02021290DPMapFile = mapFile;
//    }
//
//    //Инциденты для CI02021291 IBM MQ
//    public static String CI02021291MQMapFile;
//
//    @Value("${inc.resolution.map.mq}")
//    private void setCI02021291MQMapFile(String mapFile) {
//        CI02021291MQMapFile = mapFile;
//    }

    public static void main(String[] args) {
        context = SpringApplication.run(OIPKafkaGetClusterName.class, args);

//        //Получение статистики Zabbix
//        Runnable ZabbixAPIGetStatistic = ()->{
//                while (true) {
//                    for(String url:urls) {
//                        try {
//                            ZabbixAPI_2.ZabbixAPIRegistration(url, user, password);
//                        } catch (Exception e) {
//                            e.printStackTrace();
//                            continue;
//                        }
//                        try {
//                            ZabbixAPI_2.getTriggerStatisticDefault(zabbixAPITriggersSeverityDefaultValue, zabbixAPITagName,
//                                    zabbixAPITagValue, zabbixHostSOWA, zabbixHostKafka, zabbixHostMQ, zabbixHostDP,
//                                    zabbixHostNginx, zabbixHostWAS, zabbixHostWildFly, zabbixHostWeblogic,
//                                    zabbixHostOpenShift);
//                        } catch (JsonProcessingException e) {
//                            e.printStackTrace();
//                            continue;
//                        }
//                    }
//                    try {
//                        System.out.println("Пауза между опросами " + zabbixRequestInterval + " минут");
//                        Thread.sleep(zabbixRequestInterval*60000);
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                    try {
//                        ZabbixAPI_2.listTriggersForSOWA.clear();
//                        ZabbixAPI_2.listTriggersForKafka.clear();
//                        ZabbixAPI_2.listTriggersForMQ.clear();
//                        ZabbixAPI_2.listTriggersForDP.clear();
//                        ZabbixAPI_2.listTriggersWithIncForSOWA.clear();
//                        ZabbixAPI_2.listTriggersWithIncForKafka.clear();
//                        ZabbixAPI_2.listTriggersWithIncForMQ.clear();
//                        ZabbixAPI_2.listTriggersWithIncForDP.clear();
//                        ZabbixAPI_2.listTriggersForNginx.clear();
//                        ZabbixAPI_2.listTriggersForWAS.clear();
//                        ZabbixAPI_2.listTriggersForWildFly.clear();
//                        ZabbixAPI_2.listTriggersForWebLogic.clear();
//                        ZabbixAPI_2.listTriggersWithIncForNginx.clear();
//                        ZabbixAPI_2.listTriggersWithIncForWAS.clear();
//                        ZabbixAPI_2.listTriggersWithIncForWildFly.clear();
//                        ZabbixAPI_2.listTriggersWithIncForWebLogic.clear();
//                        ZabbixAPI_2.listTriggersForOpenShift.clear();
//                        ZabbixAPI_2.listTriggersWithIncForOpenShift.clear();
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                        continue;
//                    }
//                }
//            };
//        //Запуск получения статистики Zabbix
//        Thread zabbixAPIGetStatisticThread = new Thread(ZabbixAPIGetStatistic,"ZabbixAPIGetStatistic");
//        zabbixAPIGetStatisticThread.start();
//        System.out.println("ZabbixAPIGetStatistic started...");

        HeapControl ();

    }

    public static void HeapControl () {
        System.out.println("Heap контроль запущен");
        while (true) {

            // Sleep to emulate background work
            try {
                Thread.sleep(60000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.gc();
            System.out.println("Запущен GC");

            // Get current size of heap in bytes
            long heapSize = Runtime.getRuntime().totalMemory();

            // Get maximum size of heap in bytes. The heap cannot grow beyond this size.// Any attempt will result in an OutOfMemoryException.
            long heapMaxSize = Runtime.getRuntime().maxMemory();

            float usedHeapPrc = (float) heapSize / heapMaxSize;

            System.out.println("totalMemory() :" + heapSize + " maxMemory(): " + heapMaxSize + " usedHeapPrc: " + usedHeapPrc);

            if (usedHeapPrc > 0.80) {
                //Если использование heap больше 80 процентов, выполнить рестарт приложения

                restart();
            }

        }
    }

    public static void restart() {
        ApplicationArguments args = context.getBean(ApplicationArguments.class);

        Thread thread = new Thread(() -> {
            context.close();
            context = SpringApplication.run(OIPKafkaGetClusterName.class, args.getSourceArgs());
        });

        thread.setDaemon(false);
        thread.start();
    }


}
