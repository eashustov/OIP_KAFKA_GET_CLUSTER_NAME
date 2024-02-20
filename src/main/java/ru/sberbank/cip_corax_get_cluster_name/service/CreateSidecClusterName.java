package ru.sberbank.cip_corax_get_cluster_name.service;

import com.vaadin.flow.server.StreamResource;
import ru.sberbank.cip_corax_get_cluster_name.view.SidecView;
import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

public class CreateSidecClusterName {

        public static java.util.List<String> sidecClustersList = new ArrayList<>();

        public CreateSidecClusterName() {
        }

        public static StreamResource getSidecClusterName() {
            sidecClustersList.clear();
            SidecView.selectedSidecServers.forEach(cipSidecData -> {
                if (cipSidecData.getPORT_7030() & !cipSidecData.getPORT_8443()){
                    sidecClustersList.add(",,," + cipSidecData.getHOST_NAME() + "," + cipSidecData.getHOST_IP() + "," +
                            "7030" + ",,,,,,,," + cipSidecData.getAS_NAME() + "[" + cipSidecData.getSIDEC_KE() + "]" + "," +
                            "SIDEC_" + cipSidecData.getAS_KE() + "_" + cipSidecData.getSIDEC_KE() + ",,,");
                }
                else if (cipSidecData.getPORT_8443() & !cipSidecData.getPORT_7030()){
                    sidecClustersList.add(",,," + cipSidecData.getHOST_NAME() + "," + cipSidecData.getHOST_IP() + ",," +
                            "8443" + ",,,,,,," + cipSidecData.getAS_NAME() + "[" + cipSidecData.getSIDEC_KE() + "]" + "," +
                            "SIDEC_" + cipSidecData.getAS_KE() + "_" +cipSidecData.getSIDEC_KE() + ",,,");
                }
                else if (cipSidecData.getPORT_7030() & cipSidecData.getPORT_8443()) {
                    sidecClustersList.add(",,," + cipSidecData.getHOST_NAME() + "," + cipSidecData.getHOST_IP() + "," +
                            "7030,8443" + ",,,,,,," + cipSidecData.getAS_NAME() + "[" + cipSidecData.getSIDEC_KE() + "]" + "," +
                            "SIDEC_" + cipSidecData.getAS_KE() + "_" + cipSidecData.getSIDEC_KE() + ",,,");
                }
                        });

            return new StreamResource("sidecClustersName.txt",
                    () -> {
                        StringBuilder sb = new StringBuilder();
                        for (String s : sidecClustersList) {
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
