package ru.sberbank.cip_corax_get_cluster_name.service;

import com.vaadin.flow.server.StreamResource;
import ru.sberbank.cip_corax_get_cluster_name.view.SkeeperView;

import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

public class CreateSkeeperClusterName {

        public static java.util.List<String> skeeperClustersList = new ArrayList<>();

        public CreateSkeeperClusterName() {
        }

        public static StreamResource getSkeeperClusterName() {
            skeeperClustersList.clear();
            SkeeperView.selectedSkeeperServers.forEach(cipSkeeperData -> {
                if (cipSkeeperData.getPORT_7000()) {
                    skeeperClustersList.add(",,," + cipSkeeperData.getHOST_NAME() + "," + cipSkeeperData.getHOST_IP() + ",," +
                            "7000" + ",,,,,,," + cipSkeeperData.getAS_NAME() + "[" + cipSkeeperData.getSKEEPER_KE() + "]" + "," +
                            "SKEEPER_" + cipSkeeperData.getAS_KE() + "_" + cipSkeeperData.getSKEEPER_KE() + ",,,");
                }
            });

            return new StreamResource("skeeperClustersName.txt",
                    () -> {
                        StringBuilder sb = new StringBuilder();
                        for (String s : skeeperClustersList) {
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
