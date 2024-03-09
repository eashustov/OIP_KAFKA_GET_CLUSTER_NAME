package ru.sberbank.cip_corax_get_cluster_name.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name = "SM_KE_HOST_SOWA")
public class CIPSOWAData {
    @Id
    @Column(name = "HOST_NAME")
    private String HOST_NAME;
    @Column(name = "HOST_IP")
    private String HOST_IP;
    @Column(name = "HOST_KE")
    private String HOST_KE;
    @Column(name = "HOST_DOMAIN")
    private String HOST_DOMAIN;
    @Column(name = "SOWA_KE")
    private String SOWA_KE;
    @Column(name = "SOWA_NAME")
    private String SOWA_NAME;
    @Column(name = "ENVIRONMENT")
    private String ENVIRONMENT;
    @Column(name = "AS_KE")
    private String AS_KE;
    @Column(name = "AS_NAME")
    private String AS_NAME;
    @Column(name = "ASSIGNMENT_GROUP")
    private String ASSIGNMENT_GROUP;
    @Column(name = "OS_ADMIN")
    private String OS_ADMIN;
    @Column(name = "J_PROVIDING_UNIT_NAME")
    private String J_PROVIDING_UNIT_NAME;
    @Column(name = "CREATED_BY_DATE")
    @DateTimeFormat(pattern="dd.MM.yy")
    private String CREATED_BY_DATE;

    public CIPSOWAData(String HOST_NAME, String HOST_IP, String HOST_KE, String HOST_DOMAIN, String SOWA_KE,
                       String SOWA_NAME, String ENVIRONMENT, String AS_KE, String AS_NAME, String ASSIGNMENT_GROUP,
                       String OS_ADMIN, String j_PROVIDING_UNIT_NAME, String CREATED_BY_DATE) {
        this.HOST_NAME = HOST_NAME;
        this.HOST_IP = HOST_IP;
        this.HOST_KE = HOST_KE;
        this.HOST_DOMAIN = HOST_DOMAIN;
        this.SOWA_KE = SOWA_KE;
        this.SOWA_NAME = SOWA_NAME;
        this.ENVIRONMENT = ENVIRONMENT;
        this.AS_KE = AS_KE;
        this.AS_NAME = AS_NAME;
        this.ASSIGNMENT_GROUP = ASSIGNMENT_GROUP;
        this.OS_ADMIN = OS_ADMIN;
        J_PROVIDING_UNIT_NAME = j_PROVIDING_UNIT_NAME;
        this.CREATED_BY_DATE = CREATED_BY_DATE;
    }

    public CIPSOWAData() {
    }

    public String getHOST_NAME() {
        return HOST_NAME;
    }

    public String getHOST_IP() {
        return HOST_IP;
    }

    public String getHOST_KE() {
        return HOST_KE;
    }

    public String getHOST_DOMAIN() {
        return HOST_DOMAIN;
    }

    public String getSOWA_KE() {
        return SOWA_KE;
    }

    public String getSOWA_NAME() {
        return SOWA_NAME;
    }

    public String getENVIRONMENT() {
        return ENVIRONMENT;
    }

    public String getAS_KE() {
        return AS_KE;
    }

    public String getAS_NAME() {
        return AS_NAME;
    }

    public String getASSIGNMENT_GROUP() {
        return ASSIGNMENT_GROUP;
    }

    public String getOS_ADMIN() {
        return OS_ADMIN;
    }

    public String getJ_PROVIDING_UNIT_NAME() {
        return J_PROVIDING_UNIT_NAME;
    }

    public String getCREATED_BY_DATE() {
        return CREATED_BY_DATE;
    }

    @Override
    public String toString() {
        return "CIPSOWAData{" +
                "HOST_NAME='" + HOST_NAME + '\'' +
                ", HOST_IP='" + HOST_IP + '\'' +
                ", HOST_KE='" + HOST_KE + '\'' +
                ", HOST_DOMAIN='" + HOST_DOMAIN + '\'' +
                ", SKEEPER_KE='" + SOWA_KE + '\'' +
                ", SKEEPER_NAME='" + SOWA_NAME + '\'' +
                ", ENVIRONMENT='" + ENVIRONMENT + '\'' +
                ", AS_KE='" + AS_KE + '\'' +
                ", AS_NAME='" + AS_NAME + '\'' +
                ", ASSIGNMENT_GROUP='" + ASSIGNMENT_GROUP + '\'' +
                ", OS_ADMIN='" + OS_ADMIN + '\'' +
                ", J_PROVIDING_UNIT_NAME='" + J_PROVIDING_UNIT_NAME + '\'' +
                ", CREATED_BY_DATE='" + CREATED_BY_DATE + '\'' +
                '}';
    }
}
