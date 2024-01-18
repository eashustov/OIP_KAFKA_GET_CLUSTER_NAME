package ru.sberbank.uspincidentreport.domain;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
//@Table(schema = "SMPRIMARY", name = "probsummarym1")
@Table(name = "kafkaservers")
public class OIPKafkaData {
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
    @Column(name = "KAFKA_KE")
    private String KAFKA_KE;
    @Column(name = "KAFKA_NAME")
    private String KAFKA_NAME;
    @Column(name = "ASSIGNMENT_GROUP")
    private String ASSIGNMENT_GROUP;
    @Column(name = "STEND_NAME")
    private String STEND_NAME;
    @Column(name = "AS_NAME")
    private String AS_NAME;
    @Column(name = "CREATED_BY_DATE")
    @DateTimeFormat(pattern="dd.MM.yyyy HH:mm:ss")
    private String CREATED_BY_DATE;
    @Column(name = "J_PROVIDING_UNIT_NAME")
    private String J_PROVIDING_UNIT_NAME;
    @Column(name = "AS_KE")
    private String AS_KE;

    private Boolean PORT_7000, PORT_7010 = false;

    public OIPKafkaData(String HOST_NAME, String HOST_IP, Boolean PORT_7000, Boolean PORT_7010, String HOST_DOMAIN,
                        String HOST_KE, String OS_ADMIN, String KAFKA_KE,
                        String KAFKA_NAME, String ASSIGNMENT_GROUP, String STEND_NAME, String AS_NAME, String CREATED_BY_DATE,
                        String J_PROVIDING_UNIT_NAME, String AS_KE) {
        this.HOST_NAME = HOST_NAME;
        this.HOST_IP = HOST_IP;
        this.PORT_7000 = PORT_7000;
        this.PORT_7010 = PORT_7010;
        this.HOST_DOMAIN = HOST_DOMAIN;
        this.HOST_KE = HOST_KE;
        this.OS_ADMIN = OS_ADMIN;
        this.KAFKA_KE = KAFKA_KE;
        this.KAFKA_NAME = KAFKA_NAME;
        this.STEND_NAME = STEND_NAME;
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

    public Boolean getPORT_7000() { return PORT_7000; }

    public Boolean getPORT_7010() { return PORT_7010; }

    public String getHOST_DOMAIN() {
        return HOST_DOMAIN;
    }

//    public String getKAFKA_VERSION() {
//        return KAFKA_VERSION;
//    }

    public String getHOST_KE() {
        return HOST_KE;
    }

    public String getOS_ADMIN() {
        return OS_ADMIN;
    }

    public String getKAFKA_KE() {
        return KAFKA_KE;
    }

    public String getKAFKA_NAME() {
        return KAFKA_NAME;
    }

    public String getASSIGNMENT_GROUP() {
        return ASSIGNMENT_GROUP;
    }

    public String getSTEND_NAME() {
        return STEND_NAME;
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

    public void setPORT_7000(Boolean PORT_7000) {
        this.PORT_7000 = PORT_7000;
    }

    public void setPORT_7010(Boolean PORT_7010) {
        this.PORT_7010 = PORT_7010;
    }

    public OIPKafkaData() {

    }

    @Override
    public String toString() {
        return "OIPKafkaData{" +
                "HOST_NAME='" + HOST_NAME + '\'' +
                ", HOST_IP='" + HOST_IP + '\'' +
                ", HOST_DOMAIN='" + HOST_DOMAIN + '\'' +
                ", HOST_KE='" + HOST_KE + '\'' +
                ", OS_ADMIN='" + OS_ADMIN + '\'' +
                ", KAFKA_KE='" + KAFKA_KE + '\'' +
                ", KAFKA_NAME='" + KAFKA_NAME + '\'' +
                ", ASSIGNMENT_GROUP='" + ASSIGNMENT_GROUP + '\'' +
                ", STEND_NAME='" + STEND_NAME + '\'' +
                ", AS_NAME='" + AS_NAME + '\'' +
                ", CREATED_BY_DATE='" + CREATED_BY_DATE + '\'' +
                ", J_PROVIDING_UNIT_NAME='" + J_PROVIDING_UNIT_NAME + '\'' +
                ", AS_KE='" + AS_KE + '\'' +
                ", PORT_7000=" + PORT_7000 +
                ", PORT_7010=" + PORT_7010 +
                '}';
    }
}
