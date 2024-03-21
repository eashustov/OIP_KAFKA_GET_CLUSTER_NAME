package ru.sberbank.cip_corax_get_cluster_name.domain;

public interface ICIPProductPerMonthData {
    String getHPC_Assignment();
    String getHPC_Affected_Item_Name();
    String getMonth();
    String getMonth_Number();
    String getYear_();
    Integer getCount_Srv();
}
