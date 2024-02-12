package ru.sberbank.cip_corax_get_cluster_name.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "skeeper_as_name")
public class CIPSkeeperData {
    @Id
    @Column(name = "HOST_NAME")
    private String HOST_NAME;

    @Column(name = "HOST_IP")
    private String HOST_IP;

    @Column(name = "HOST_DOMAIN")
    private String HOST_DOMAIN;

    @Column(name = "SKEEPER_KE")
    private String SKEEPER_KE;

    @Column(name = "SKEEPER_NAME")
    private String SKEEPER_NAME;

    @Column(name = "AS_NAME")
    private String AS_NAME;

    @Column(name = "AS_KE")
    private String AS_KE;

    @Column(name = "CREATED_BY_DATE")
    @DateTimeFormat(pattern="dd.MM.yy")
    private String CREATED_BY_DATE;

    @Column(name = "HOST_KE")
    private String HOST_KE;
    @Column(name = "OS_ADMIN")
    private String OS_ADMIN;
    @Column(name = "ASSIGNMENT_GROUP")
    private String ASSIGNMENT_GROUP;
    @Column(name = "STEND_NAME")
    private String STEND_NAME;
    @Column(name = "J_PROVIDING_UNIT_NAME")
    private String J_PROVIDING_UNIT_NAME;

    private Boolean PORT_7000 = true;

    public CIPSkeeperData(String HOST_NAME, String HOST_IP, String HOST_DOMAIN, String SKEEPER_KE, String SKEEPER_NAME,
                          String AS_NAME, String AS_KE, String date, String HOST_KE, String OS_ADMIN,
                          String ASSIGNMENT_GROUP, String STEND_NAME, String j_PROVIDING_UNIT_NAME, Boolean PORT_7000) {
        this.HOST_NAME = HOST_NAME;
        this.HOST_IP = HOST_IP;
        this.HOST_DOMAIN = HOST_DOMAIN;
        this.SKEEPER_KE = SKEEPER_KE;
        this.SKEEPER_NAME = SKEEPER_NAME;
        this.AS_NAME = AS_NAME;
        this.AS_KE = AS_KE;
        this.CREATED_BY_DATE = date;
        this.HOST_KE = HOST_KE;
        this.OS_ADMIN = OS_ADMIN;
        this.ASSIGNMENT_GROUP = ASSIGNMENT_GROUP;
        this.STEND_NAME = STEND_NAME;
        this.J_PROVIDING_UNIT_NAME = j_PROVIDING_UNIT_NAME;
        this.PORT_7000 = PORT_7000;
    }

    public CIPSkeeperData() {
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

    public String getSKEEPER_KE() {
        return SKEEPER_KE;
    }

    public String getSKEEPER_NAME() {
        return SKEEPER_NAME;
    }

    public String getAS_NAME() {
        return AS_NAME;
    }
    public String getAS_KE() {
        return AS_KE;
    }

    public String getCREATED_BY_DATE() {
        return CREATED_BY_DATE;
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

    public String getSTEND_NAME() {
        return STEND_NAME;
    }

    public String getJ_PROVIDING_UNIT_NAME() {
        return J_PROVIDING_UNIT_NAME;
    }

    public Boolean getPORT_7000() {
        return PORT_7000;
    }

    public void setPORT_7000(Boolean PORT_7000) {
        this.PORT_7000 = PORT_7000;
    }

    @Override
    public String toString() {
        return "CIPSkeeperData{" +
                "HOST_NAME='" + HOST_NAME + '\'' +
                ", IP='" + HOST_IP + '\'' +
                ", HOST_DOMAIN='" + HOST_DOMAIN + '\'' +
                ", SKEEPER_KE='" + SKEEPER_KE + '\'' +
                ", SKEEPER_NAME='" + SKEEPER_NAME + '\'' +
                ", AS_NAME='" + AS_NAME + '\'' +
                ", AS_KE='" + AS_KE + '\'' +
                ", CREATED_BY_DATE='" + CREATED_BY_DATE + '\'' +
                ", HOST_KE='" + HOST_KE + '\'' +
                ", OS_ADMIN='" + OS_ADMIN + '\'' +
                ", ASSIGNMENT_GROUP='" + ASSIGNMENT_GROUP + '\'' +
                ", STEND_NAME='" + STEND_NAME + '\'' +
                ", J_PROVIDING_UNIT_NAME='" + J_PROVIDING_UNIT_NAME + '\'' +
                ", PORT_7000=" + PORT_7000 +
                '}';
    }
}
