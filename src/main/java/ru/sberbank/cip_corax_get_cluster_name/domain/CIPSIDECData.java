package ru.sberbank.cip_corax_get_cluster_name.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "sidec_as_name")
public class CIPSIDECData {
    @Id
    @Column(name = "HOST_NAME")
    private String HOST_NAME;

    @Column(name = "HOST_IP")
    private String HOST_IP;

    @Column(name = "HOST_DOMAIN")
    private String HOST_DOMAIN;

    @Column(name = "SIDEC_KE")
    private String SIDEC_KE;

    @Column(name = "SIDEC_NAME")
    private String SIDEC_NAME;

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

    private Boolean PORT_8081, PORT_7030 = true;

    public CIPSIDECData(String HOST_NAME, String HOST_IP, String HOST_DOMAIN, String SIDEC_KE, String SIDEC_NAME,
                        String AS_NAME, String AS_KE, String CREATED_BY_DATE, String HOST_KE, String OS_ADMIN,
                        String ASSIGNMENT_GROUP, String STEND_NAME, String j_PROVIDING_UNIT_NAME, Boolean PORT_8081, Boolean PORT_7030) {
        this.HOST_NAME = HOST_NAME;
        this.HOST_IP = HOST_IP;
        this.HOST_DOMAIN = HOST_DOMAIN;
        this.SIDEC_KE = SIDEC_KE;
        this.SIDEC_NAME = SIDEC_NAME;
        this.AS_NAME = AS_NAME;
        this.AS_KE = AS_KE;
        this.CREATED_BY_DATE = CREATED_BY_DATE;
        this.HOST_KE = HOST_KE;
        this.OS_ADMIN = OS_ADMIN;
        this.ASSIGNMENT_GROUP = ASSIGNMENT_GROUP;
        this.STEND_NAME = STEND_NAME;
        this.J_PROVIDING_UNIT_NAME = j_PROVIDING_UNIT_NAME;
        this.PORT_8081 = PORT_8081;
        this.PORT_7030 = PORT_7030;
    }

    public CIPSIDECData() {

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

    public String getSIDEC_KE() {
        return SIDEC_KE;
    }

    public String getSIDEC_NAME() {
        return SIDEC_NAME;
    }

    public String getAS_KE() {
        return AS_KE;
    }

    public String getCREATED_BY_DATE() {
        return CREATED_BY_DATE;
    }

    public String getAS_NAME() {
        return AS_NAME;
    }

    public Boolean getPORT_8081() {
        return PORT_8081;
    }

    public Boolean getPORT_7030() {
        return PORT_7030;
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

    public void setPORT_8081(Boolean PORT_8081) {
        this.PORT_8081 = PORT_8081;
    }

    public void setPORT_7030(Boolean PORT_7030) {
        this.PORT_7030 = PORT_7030;
    }

    @Override
    public String toString() {
        return "CIPSIDECData{" +
                "HOST_NAME='" + HOST_NAME + '\'' +
                ", IP='" + HOST_IP + '\'' +
                ", HOST_DOMAIN='" + HOST_DOMAIN + '\'' +
                ", SIDEC_KE='" + SIDEC_KE + '\'' +
                ", SIDEC_NAME='" + SIDEC_NAME + '\'' +
                ", AS_NAME='" + AS_NAME + '\'' +
                ", AS_KE='" + AS_KE + '\'' +
                ", CREATED_BY_DATE='" + CREATED_BY_DATE + '\'' +
                ", HOST_KE='" + HOST_KE + '\'' +
                ", OS_ADMIN='" + OS_ADMIN + '\'' +
                ", ASSIGNMENT_GROUP='" + ASSIGNMENT_GROUP + '\'' +
                ", STEND_NAME='" + STEND_NAME + '\'' +
                ", J_PROVIDING_UNIT_NAME='" + J_PROVIDING_UNIT_NAME + '\'' +
                ", PORT_8081=" + PORT_8081 +
                ", PORT_7030=" + PORT_7030 +
                '}';
    }
}
