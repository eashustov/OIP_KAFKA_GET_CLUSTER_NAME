package ru.sberbank.cip_corax_get_cluster_name.view.analitics;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.dataview.GridListDataView;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPServersData;
import ru.sberbank.cip_corax_get_cluster_name.repo.service.SearchRepo;

import java.time.format.DateTimeFormatter;

class SearchMethod {
    static String startDate;
    static String endDate;
    static DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    //Метод диалога поиска инцидента
    static void search(DatePicker start_date, DatePicker end_date, String searchValue, SearchRepo searchRepo) {
        VerticalLayout searchLayout = new VerticalLayout();
        startDate = start_date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_date.getValue().format(europeanDateFormatter) + " 23:59:59";
        String periodDate = start_date.getValue().format(europeanDateFormatter) + " - " + end_date.getValue().format(europeanDateFormatter);

        //Создание диалога поиска
        Dialog dialog = new Dialog();
        dialog.setWidth("80%");
        dialog.setHeight("80%");
        dialog.setDraggable(true);
        dialog.setResizable(true);
        //Кнопка закрытия диалога поиска
        Button closeButton = new Button(new Icon("lumo", "cross"), (e) -> dialog.close());
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
        searchLayout.setHorizontalComponentAlignment(FlexComponent.Alignment.END, closeButton);

        Grid<CIPServersData> searchGrid = new Grid<>(CIPServersData.class, false);
        GridListDataView<CIPServersData> searchDataView = searchGrid.setItems(searchRepo.findServerBySearch(startDate,endDate,searchValue));

//        searchGrid.setAllRowsVisible(true); //Автоматическая высота таблицы в зависимости от количества строк
        searchGrid.setHeight("77%");
        searchGrid.setWidth("100%");
        searchGrid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        searchGrid.setColumnReorderingAllowed(true);
        //Create column for Grid
        Grid.Column<CIPServersData> HPC_AFFECTED_ITEM_NAME = searchGrid
                .addColumn(CIPServersData::getHPC_AFFECTED_ITEM_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ИТ-услуга");
        Grid.Column<CIPServersData> HOST_NAME = searchGrid
                .addColumn(CIPServersData::getHOST_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Имя сервера");
        Grid.Column<CIPServersData> HOST_IP = searchGrid
                .addColumn(CIPServersData::getHOST_IP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ip адрес");
        Grid.Column<CIPServersData> HOST_DOMAIN = searchGrid
                .addColumn(CIPServersData::getHOST_DOMAIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Домен");
        Grid.Column<CIPServersData> HOST_KE = searchGrid
                .addColumn(CIPServersData::getHOST_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ сервера");
        Grid.Column<CIPServersData> CLUSTER_NAME = searchGrid
                .addColumn(CIPServersData::getCLUSTER_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название кластера");
        Grid.Column<CIPServersData> CLUSTER_KE = searchGrid
                .addColumn(CIPServersData::getCLUSTER_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ кластера");
        Grid.Column<CIPServersData> OS_ADMIN = searchGrid
                .addColumn(CIPServersData::getOS_ADMIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения ОС");
        Grid.Column<CIPServersData> ASSIGNMENT_GROUP = searchGrid
                .addColumn(CIPServersData::getASSIGNMENT_GROUP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения");
//        Grid.Column<CIPServersData> ENVIRONMENT = searchGrid
//                .addColumn(CIPServersData::getENVIRONMENT).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Тип среды");
//        ENVIRONMENT.setVisible(true);
        Grid.Column<CIPServersData> AS_KE = searchGrid
                .addColumn(CIPServersData::getAS_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ АС");
        Grid.Column<CIPServersData> AS_NAME = searchGrid
                .addColumn(CIPServersData::getAS_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название АС");
        Grid.Column<CIPServersData> CREATED_BY_DATE = searchGrid
                .addColumn(CIPServersData::getCREATED_BY_DATE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Дата выдачи");
        CREATED_BY_DATE.setVisible(true);
        Grid.Column<CIPServersData> J_PROVIDING_UNIT_NAME = searchGrid
                .addColumn(CIPServersData::getJ_PROVIDING_UNIT_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ДИТ");
        J_PROVIDING_UNIT_NAME.setVisible(false);

//        MainView.ItemContextMenu searchGridContextMenu = new MainView.ItemContextMenu(searchGrid);
//
//        //Anchor block
//        Anchor searchDownloadToCSV = new Anchor(exportToCSV(searchDataView), "Сохранить в CSV" );
//        Button searchButtonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
//        searchButtonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
//        searchDownloadToCSV.removeAll();
//        searchDownloadToCSV.add(searchButtonDownloadCSV);
//        setHorizontalComponentAlignment(Alignment.END, searchDownloadToCSV);

        Label searchHeader = new Label("Сервера выданные за период " + periodDate + " (" + searchDataView.getItemCount() + " шт.)");
        searchLayout.setHorizontalComponentAlignment(FlexComponent.Alignment.CENTER, searchHeader);

        searchLayout.add(closeButton, searchHeader);
//        dialog.add(searchLayout, searchGrid, searchGridContextMenu, new Label("Найдено автоинцидентов: "
//                + searchDataView.getItemCount()));
        dialog.add(searchLayout, searchGrid, new Label("Найдено серверов: "
                + searchDataView.getItemCount()));
        dialog.open();

    }


}
