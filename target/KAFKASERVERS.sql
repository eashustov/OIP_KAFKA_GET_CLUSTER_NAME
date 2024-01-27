create table KAFKASERVERS
(
    HOST_NAME             VARCHAR2,
    HOST_IP               VARCHAR2,
    HOST_DOMAIN           VARCHAR2,
    HOST_KE               VARCHAR2,
    OS_ADMIN              VARCHAR2,
    KAFKA_KE              VARCHAR2,
    KAFKA_NAME            VARCHAR2,
    ASSIGNMENT_GROUP      VARCHAR2,
    STEND_NAME            VARCHAR2,
    AS_NAME               VARCHAR2,
    CREATED_BY_DATE       VARCHAR2,
    J_PROVIDING_UNIT_NAME VARCHAR2,
    AS_KE                 VARCHAR2,
    PORT_7000             BOOLEAN default 7000,
    PORT_7010             BOOLEAN default 7010
);

create unique index KAFKA_SERVERS_HOST_NAME_UINDEX
    on KAFKASERVERS (HOST_NAME);

INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0010', '10.114.3.202', 'ca.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);
INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0011', '10.114.3.203', 'ca.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);
INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0012', '10.114.3.204', 'omega.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);
INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0013', '10.114.3.205', 'omega.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);
INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0014', '10.114.3.206', 'sigma.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);
INSERT INTO PUBLIC.KAFKASERVERS (HOST_NAME, HOST_IP, HOST_DOMAIN, HOST_KE, OS_ADMIN, KAFKA_KE, KAFKA_NAME, ASSIGNMENT_GROUP, STEND_NAME, AS_NAME, CREATED_BY_DATE, J_PROVIDING_UNIT_NAME, AS_KE, PORT_7000, PORT_7010) VALUES ('pvlaq-fenix0015', '10.114.3.207', 'sigma.sbrf.ru', 'CI04561404', 'Sberinfra Группа администрирования linux', 'CI04561405', 'VM Cluster KafkaSE (zookeeper)(CI04563095)', 'SberInfra Бирюков Р.С.)', 'АС ППРБ.Феникс (ПРОМ) (CI03888893)', 'ППРБ.ФЕНИКС (CI03197579)', '01.03.2023 7:36:49', 'Департамент ИТ блока ''Сервисы'' и безопасности (304267)', 'CI03197579', true, true);