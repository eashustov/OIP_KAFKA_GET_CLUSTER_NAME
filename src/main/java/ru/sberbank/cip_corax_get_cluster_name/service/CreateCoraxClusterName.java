package ru.sberbank.cip_corax_get_cluster_name.service;

import java.io.*;
import java.util.ArrayList;

import com.vaadin.flow.server.StreamResource;
import ru.sberbank.cip_corax_get_cluster_name.view.MainView;


public class CreateCoraxClusterName {
    public static java.util.List<String> coraxClustersList = new ArrayList<>();

    public CreateCoraxClusterName() {
    }


    public static StreamResource getCoraxClusterName() {
        coraxClustersList.clear();
        MainView.selectedCoraxServers.forEach(oipKafkaData -> {
            if (oipKafkaData.getPORT_7010() & !oipKafkaData.getPORT_7000()){
                coraxClustersList.add(",,," + oipKafkaData.getHOST_NAME() + "," + oipKafkaData.getHOST_IP() + "," +
                        "7010" + ",,,,,,,," + oipKafkaData.getAS_NAME() + "[" + oipKafkaData.getKAFKA_KE() + "]" + "," +
                         "AK_" + oipKafkaData.getAS_KE() + "_" + oipKafkaData.getKAFKA_KE() + ",,,");
            }
            else if (oipKafkaData.getPORT_7000() & !oipKafkaData.getPORT_7010()){
                coraxClustersList.add(",,," + oipKafkaData.getHOST_NAME() + "," + oipKafkaData.getHOST_IP() + ",," +
                        "7000" + ",,,,,,," + oipKafkaData.getAS_NAME() + "[" + oipKafkaData.getKAFKA_KE() + "]" + "," +
                        "AZ_" + oipKafkaData.getAS_KE() + "_" + oipKafkaData.getKAFKA_KE() + ",,,");
            }
            else if (oipKafkaData.getPORT_7010() & oipKafkaData.getPORT_7000()){
                coraxClustersList.add(",,," + oipKafkaData.getHOST_NAME() + "," + oipKafkaData.getHOST_IP() + "," +
                        "7010,7000" + ",,,,,,," + oipKafkaData.getAS_NAME() + "[" + oipKafkaData.getKAFKA_KE() + "]" + "," +
                        "AK_" + oipKafkaData.getAS_KE() + "_" + oipKafkaData.getKAFKA_KE() + ",,,");
            }
         });

        return new StreamResource("coraxClustersName.txt",
                () -> {
                    StringBuilder sb = new StringBuilder();
                    for (String s : coraxClustersList) {
                        sb.append(s + System.lineSeparator());
                    }
                    try {
                        return new ByteArrayInputStream(sb.toString().getBytes("UTF-8"));
                    } catch (UnsupportedEncodingException e) {
                        e.printStackTrace();
                    }
                    return null;
                });
    }


}

