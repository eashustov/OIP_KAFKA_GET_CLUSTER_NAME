package ru.sberbank.cip_corax_get_cluster_name.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
//@Table(schema = "SMPRIMARY", name = "probsummarym1")
@Table(name = "kafkaservers")
public class CIPServersData {
    @Id
    @Column(name = "HOST_NAME")
    private String HOST_NAME;
    @Column(name = "HOST_IP")
    private String HOST_IP;
    @Column(name = "HOST_DOMAIN")
    private String HOST_DOMAIN;
    @Column(name = "HOST_KE")
    private String HOST_KE;
    @Column(name = "OS_ADMIN")
    private String OS_ADMIN;
    @Column(name = "ASSIGNMENT_GROUP")
    private String ASSIGNMENT_GROUP;
    @Column(name = "AS_NAME")
    private String AS_NAME;
    @Column(name = "CREATED_BY_DATE")
    @DateTimeFormat(pattern="dd.MM.yyyy HH:mm:ss")
    private String CREATED_BY_DATE;
    @Column(name = "J_PROVIDING_UNIT_NAME")
    private String J_PROVIDING_UNIT_NAME;
    @Column(name = "AS_KE")
    private String AS_KE;
    private String HPC_AFFECTED_ITEM_NAME;

    public CIPServersData(String HOST_NAME, String HOST_IP, String HOST_DOMAIN,
                          String HOST_KE, String OS_ADMIN, String ASSIGNMENT_GROUP, String AS_NAME, String CREATED_BY_DATE,
                          String J_PROVIDING_UNIT_NAME, String AS_KE) {
        this.HOST_NAME = HOST_NAME;
        this.HOST_IP = HOST_IP;
        this.HOST_DOMAIN = HOST_DOMAIN;
        this.HOST_KE = HOST_KE;
        this.OS_ADMIN = OS_ADMIN;
        this.AS_NAME = AS_NAME;
        this.ASSIGNMENT_GROUP = ASSIGNMENT_GROUP;
        this.J_PROVIDING_UNIT_NAME = J_PROVIDING_UNIT_NAME;
        this.CREATED_BY_DATE = CREATED_BY_DATE;
        this.AS_KE = AS_KE;

    }

    public String getHOST_NAME() {
        return HOST_NAME;
    }
    public String getHOST_IP() {
        return HOST_IP;
    }
    public String getHOST_DOMAIN() {
        return HOST_DOMAIN;
    }
    public String getHOST_KE() {
        return HOST_KE;
    }
    public String getOS_ADMIN() {
        return OS_ADMIN;
    }
    public String getASSIGNMENT_GROUP() {
        return ASSIGNMENT_GROUP;
    }
    public String getAS_NAME() {
        return AS_NAME;
    }
    public String getCREATED_BY_DATE() {
        return CREATED_BY_DATE;
    }
    public String getJ_PROVIDING_UNIT_NAME() {
        return J_PROVIDING_UNIT_NAME;
    }
    public String getAS_KE() {
        return AS_KE;
    }
    public String getHPC_AFFECTED_ITEM_NAME() {
        if (HPC_AFFECTED_ITEM_NAME != null) {
            return HPC_AFFECTED_ITEM_NAME;
        }
        return HPC_AFFECTED_ITEM_NAME = "";
    }

    public CIPServersData() {

    }

    @Override
    public String toString() {
        return "CIPServersData{" +
                "HOST_NAME='" + HOST_NAME + '\'' +
                ", HOST_IP='" + HOST_IP + '\'' +
                ", HOST_DOMAIN='" + HOST_DOMAIN + '\'' +
                ", HOST_KE='" + HOST_KE + '\'' +
                ", OS_ADMIN='" + OS_ADMIN + '\'' +
                ", ASSIGNMENT_GROUP='" + ASSIGNMENT_GROUP + '\'' +
                ", AS_NAME='" + AS_NAME + '\'' +
                ", CREATED_BY_DATE='" + CREATED_BY_DATE + '\'' +
                ", J_PROVIDING_UNIT_NAME='" + J_PROVIDING_UNIT_NAME + '\'' +
                ", AS_KE='" + AS_KE + '\'' +
                ", HPC_AFFECTED_ITEM_NAME='" + HPC_AFFECTED_ITEM_NAME + '\'' +
                '}';
    }
}
