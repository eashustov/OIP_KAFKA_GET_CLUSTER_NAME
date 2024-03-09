package ru.sberbank.cip_corax_get_cluster_name.view;

import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.contextmenu.ContextMenu;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.contextmenu.SubMenu;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.HeaderRow;
import com.vaadin.flow.component.grid.contextmenu.GridContextMenu;
import com.vaadin.flow.component.grid.dataview.GridListDataView;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.menubar.MenuBarVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.TextFieldVariant;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import jakarta.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSOWAData;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;
import ru.sberbank.cip_corax_get_cluster_name.repo.cipsowarepo.CIPSOWARepo;
import ru.sberbank.cip_corax_get_cluster_name.service.CreateSkeeperClusterName;

import java.io.ByteArrayInputStream;
import java.io.StringWriter;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Stream;

@PermitAll
@Route(value="sowa", layout = MainLayout.class)
@PageTitle("Серверы SOWA выданные из ДИ за период")
//Сохранение состояния таблицы при обновлении
//@PreserveOnRefresh
public class SOWAView extends VerticalLayout {
    private H4 header;
    private CIPSOWARepo cipsowaRepo;
    private Grid<CIPSOWAData> grid;
    private GridListDataView<CIPSOWAData> dataView;
    //    private RefreshThread thread;
    ServerSOWAFilter serverSOWAFilter;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
//    public static Set<CIPSOWAData> selectedSOWAServers = new HashSet<>();
    Span serversCount = new Span();
//    Span markedCount = new Span();
    Span filteredCount = new Span();
    Checkbox checkboxHeader_7000;
    //Создание панели инструментов
    MenuBar menuBar = new MenuBar();

    @Autowired
    public SOWAView(CIPSOWARepo cipsowaRepo) {

        LocalDate now = LocalDate.now(ZoneId.systemDefault());
        start_Date = new DatePicker("Начало");
        end_Date = new DatePicker("Конец");
        end_Date.setMax(now);
        end_Date.setValue(now);
        start_Date.setMax(now);
        start_Date.setValue(now.minusWeeks(2));
        start_Date.addValueChangeListener(e -> end_Date.setMin(e.getValue()));
        end_Date.addValueChangeListener(e -> start_Date.setMax(e.getValue()));
        end_Date.setMin(start_Date.getValue());
        start_Date.setMax(end_Date.getValue());
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        Button buttonGetData = new Button();
        buttonGetData.setText("Получить список серверов");
        buttonGetData.setEnabled(true);


        this.cipsowaRepo = cipsowaRepo;
        this.header = new H4("Серверы SOWA выданные из ДИ за период");

        //        Export to CSV list of skeeper servers
        var streamResource = new StreamResource("SOWAServers.csv",
                () -> {
                    Stream<CIPSOWAData> CIPSOWADataList = serverSOWAFilter.dataViewFiltered.getItems();
                    StringWriter output = new StringWriter();
                    StatefulBeanToCsv<CIPSOWAData> beanToCSV = null;
                    try {
                        beanToCSV = new StatefulBeanToCsvBuilder<CIPSOWAData>(output)
                                .withIgnoreField(CIPSOWAData.class, CIPSOWAData.class.getDeclaredField("SOWA_NAME"))
                                .build();
                    } catch (NoSuchFieldException e) {
                        e.printStackTrace();
                    }
                    try {
                        beanToCSV.write(CIPSOWADataList);
                        var contents = output.toString();
                        return new ByteArrayInputStream(contents.getBytes());
                    } catch (CsvDataTypeMismatchException | CsvRequiredFieldEmptyException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
        );

        //Anchor block
        Anchor downloadToCSV = new Anchor(streamResource, "Сохранить в CSV");
        Button buttonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        downloadToCSV.removeAll();
        downloadToCSV.add(buttonDownloadCSV);

        menuBar.addThemeVariants(MenuBarVariant.LUMO_TERTIARY, MenuBarVariant.LUMO_SMALL, MenuBarVariant.LUMO_ICON);

        MenuItem style = menuBar.addItem("Вид");
        SubMenu styleSubMenu = style.getSubMenu();
        MenuItem normal = styleSubMenu.addItem("Нормальный");
        normal.setCheckable(true);
        normal.setChecked(false);
        MenuItem compact = styleSubMenu.addItem("Компактный");
        compact.setCheckable(true);
        compact.setChecked(true);

        ComponentEventListener<ClickEvent<MenuItem>> NormalStylelistener = e -> {
            if (e.getSource().isChecked()) {
                grid.removeThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
                grid.addThemeVariants(GridVariant.LUMO_WRAP_CELL_CONTENT, GridVariant.LUMO_ROW_STRIPES);
                compact.setChecked(false);
            }
        };

        ComponentEventListener<ClickEvent<MenuItem>> CompactStylelistener = e -> {
            if (e.getSource().isChecked()) {
                grid.removeThemeVariants(GridVariant.LUMO_WRAP_CELL_CONTENT, GridVariant.LUMO_ROW_STRIPES);
                grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
                normal.setChecked(false);
            }
        };

        normal.addClickListener(NormalStylelistener);
        compact.addClickListener(CompactStylelistener);

        menuBar.addItem(downloadToCSV);
        menuBar.addItem("Столбцы");

        // build top HorizontalLayout
        HorizontalLayout actions = new HorizontalLayout(menuBar);
        actions.setVerticalComponentAlignment(Alignment.END, menuBar);
        setHorizontalComponentAlignment(Alignment.END, actions);

        //Build DataLayout
        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonGetData);
        dateLayout.setVerticalComponentAlignment(Alignment.STRETCH, start_Date, end_Date);
        dateLayout.setVerticalComponentAlignment(Alignment.END, buttonGetData);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);

        gridInit();

        serversCount.setText("Всего серверов: " + dataView.getItemCount());
//        markedCount.setText("Выделено серверов: 0");

        //        Добавление компонентов в основной layout
//        add(header, dateLayout, actions, grid, serversCount, markedCount, filteredCount);
        add(header, dateLayout, actions, grid, serversCount, filteredCount);

        //      Обработчик копки получения списка серверов
        buttonGetData.addClickListener(event -> {
//            remove(grid, serversCount, markedCount, filteredCount);
            remove(grid, serversCount, filteredCount);
            gridInit();
            serversCount.setText("Всего серверов: " + dataView.getItemCount());
//            markedCount.setText("Выделено серверов: 0");
//            add(grid, serversCount, markedCount, filteredCount);
            add(grid, serversCount, filteredCount);
        });

    }

    void gridInit() {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        this.grid = new Grid<>(CIPSOWAData.class, false);
        this.dataView = grid.setItems(cipsowaRepo.findServerByDate(startDate, endDate));
        setHorizontalComponentAlignment(Alignment.CENTER, header);
        setJustifyContentMode(JustifyContentMode.START);

//Grid View
        grid = new Grid<>(CIPSOWAData.class, false);
        grid.setHeight("500px");
        grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        grid.setColumnReorderingAllowed(true);
        grid.setSelectionMode(Grid.SelectionMode.SINGLE);
//        grid.asMultiSelect().select(personList.get(0), personList.get(1)); // Как выделить все строки в таблице

//        // Получение списка выделенных обьектов - строк таблицы

//        grid.addSelectionListener(event -> {
//
//            selectedSOWAServers = event.getAllSelectedItems();
//            markedCount.setText(String.valueOf("Выделено серверов: " + selectedSOWAServers.size()));
//            remove(markedCount);
//            add(markedCount);
//        });


        ItemContextMenu itemContextMenu = new ItemContextMenu(grid);
        Grid.Column<CIPSOWAData> HOST_NAME = grid
                .addColumn(CIPSOWAData::getHOST_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Имя сервера");
        Grid.Column<CIPSOWAData> HOST_IP = grid
                .addColumn(CIPSOWAData::getHOST_IP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ip адрес");
        Grid.Column<CIPSOWAData> HOST_DOMAIN = grid
                .addColumn(CIPSOWAData::getHOST_DOMAIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Домен");
        Grid.Column<CIPSOWAData> HOST_KE = grid
                .addColumn(CIPSOWAData::getHOST_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ сервера");
        Grid.Column<CIPSOWAData> OS_ADMIN = grid
                .addColumn(CIPSOWAData::getOS_ADMIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения ОС");
        Grid.Column<CIPSOWAData> SOWA_KE = grid
                .addColumn(CIPSOWAData::getSOWA_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("SOWA КЭ");
        SOWA_KE.setVisible(true);
        Grid.Column<CIPSOWAData> SOWA_NAME = grid
                .addColumn(CIPSOWAData::getSOWA_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("SOWA название");
        SOWA_NAME.setVisible(true);
        Grid.Column<CIPSOWAData> ASSIGNMENT_GROUP = grid
                .addColumn(CIPSOWAData::getASSIGNMENT_GROUP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения");
        Grid.Column<CIPSOWAData> ENVIRONMENT = grid
                .addColumn(CIPSOWAData::getENVIRONMENT).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Тип среды");
        ENVIRONMENT.setVisible(true);
        Grid.Column<CIPSOWAData> AS_KE = grid
                .addColumn(CIPSOWAData::getAS_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ АС");
        Grid.Column<CIPSOWAData> AS_NAME = grid
                .addColumn(CIPSOWAData::getAS_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название АС");
        Grid.Column<CIPSOWAData> CREATED_BY_DATE = grid
                .addColumn(CIPSOWAData::getCREATED_BY_DATE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Дата выдачи");
        CREATED_BY_DATE.setVisible(true);
        Grid.Column<CIPSOWAData> J_PROVIDING_UNIT_NAME = grid
                .addColumn(CIPSOWAData::getJ_PROVIDING_UNIT_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ДИТ");
        J_PROVIDING_UNIT_NAME.setVisible(false);


        serverSOWAFilter = new ServerSOWAFilter(grid.setItems(cipsowaRepo.findServerByDate(startDate, endDate)));

        //Create headers for Grid

        grid.getHeaderRows().clear();
        HeaderRow headerRow = grid.appendHeaderRow();

        headerRow.getCell(HOST_NAME)
                .setComponent(createFilterHeader("Имя сервера", serverSOWAFilter::setHostName));
        headerRow.getCell(HOST_IP)
                .setComponent(createFilterHeader("ip адрес", serverSOWAFilter::setHostIP));
        headerRow.getCell(HOST_KE)
                .setComponent(createFilterHeader("КЭ сервера", serverSOWAFilter::setHostKE));
        headerRow.getCell(HOST_DOMAIN)
                .setComponent(createFilterHeader("Домен", serverSOWAFilter::setHostDomain));
        headerRow.getCell(SOWA_KE)
                .setComponent(createFilterHeader("SOWA КЭ", serverSOWAFilter::setSOWAKE));
        headerRow.getCell(SOWA_NAME)
                .setComponent(createFilterHeader("SOWA название", serverSOWAFilter::setSOWAName));
        headerRow.getCell(AS_KE)
                .setComponent(createFilterHeader("КЭ АС", serverSOWAFilter::setAS_KE));
        headerRow.getCell(AS_NAME)
                .setComponent(createFilterHeader("Название АС", serverSOWAFilter::setASName));
        headerRow.getCell(ENVIRONMENT)
                .setComponent(FilterComboBox.createFilterHeader("Пром; Тест",
                        serverSOWAFilter::setEnvironment, new HashSet<>(Arrays.asList("Пром", "Тест")), "Пром; Тест"));
        headerRow.getCell(CREATED_BY_DATE)
                .setComponent(createFilterHeader("Дата выдачи", serverSOWAFilter::setCreatedByDate));
        headerRow.getCell(HOST_KE)
                .setComponent(createFilterHeader("КЭ сервера", serverSOWAFilter::setHostKE));
        headerRow.getCell(OS_ADMIN)
                .setComponent(createFilterHeader("Группа сопровождения ОС", serverSOWAFilter::setOSAdmin));
        headerRow.getCell(ASSIGNMENT_GROUP)
                .setComponent(createFilterHeader("Группа сопровождения", serverSOWAFilter::setAssignmentGroup));

        ColumnToggleContextMenu columnToggleContextMenu = new ColumnToggleContextMenu(menuBar.getItems().get(2));
        columnToggleContextMenu.addColumnToggleItem("Имя сервера", HOST_NAME);
        columnToggleContextMenu.addColumnToggleItem("ip адрес", HOST_IP);
        columnToggleContextMenu.addColumnToggleItem("Домен", HOST_DOMAIN);
        columnToggleContextMenu.addColumnToggleItem("SOWA КЭ", SOWA_KE);
        columnToggleContextMenu.addColumnToggleItem("SOWA название", SOWA_NAME);
        columnToggleContextMenu.addColumnToggleItem("КЭ АС", AS_KE);
        columnToggleContextMenu.addColumnToggleItem("Название АС", AS_NAME);
        columnToggleContextMenu.addColumnToggleItem("Тип среды", ENVIRONMENT);
        columnToggleContextMenu.addColumnToggleItem("КЭ сервера", HOST_KE);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения ОС", OS_ADMIN);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения", ASSIGNMENT_GROUP);


        // Обновление данных счетчика по отфильтрованным элементам
        serverSOWAFilter.dataViewFiltered.addItemCountChangeListener(event -> {
            remove(filteredCount);
            filteredCount.setText("Отфильтровано: " + serverSOWAFilter.dataViewFiltered.getItemCount());
            add(filteredCount);
//            System.out.println("Отфильтровано: " + serverFilter.dataViewFiltered.getItemCount());
        });

    }

    static Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");
        TextField filterField = new TextField();
        filterField.setValueChangeMode(ValueChangeMode.EAGER);
        filterField.setClearButtonVisible(true);
        filterField.addThemeVariants(TextFieldVariant.LUMO_SMALL);
        filterField.setWidthFull();
        filterField.getStyle().set("max-width", "100%");
        filterField.setPrefixComponent(new Icon(VaadinIcon.SEARCH));
        filterField.addValueChangeListener(
                e -> filterChangeConsumer.accept(e.getValue()));
        VerticalLayout layout = new VerticalLayout(filterField);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(JustifyContentMode.START);
        return layout;
    }

    static class ServerSOWAFilter {

        private GridListDataView<CIPSOWAData> dataViewFiltered;
        private String hostName;
        private String hostIP;
        private String hostDomain;
        private String SOWA_KE;
        private String SOWAName;
        private String AS_KE;
        private String ASName;
        private String CreatedByDate;
        private String hostKE;
        private String OSAdmin;
        private String assignmentGroup;
        private String environment;

        public ServerSOWAFilter(GridListDataView<CIPSOWAData> dataView) {
            this.dataViewFiltered = dataView;
            this.dataViewFiltered.addFilter(this::test);

        }

        public void setHostName(String hostName) {
            this.hostName = hostName;
            this.dataViewFiltered.refreshAll();
        }

        public void setHostIP(String hostIP) {
            this.hostIP = hostIP;
            this.dataViewFiltered.refreshAll();
        }

        public void setHostDomain(String hostDomain) {
            this.hostDomain = hostDomain;
            this.dataViewFiltered.refreshAll();
        }

        public void setSOWAKE(String SOWA_KE) {
            this.SOWA_KE = SOWA_KE;
            this.dataViewFiltered.refreshAll();
        }

        public void setSOWAName(String SOWAName) {
            this.SOWAName = SOWAName;
            this.dataViewFiltered.refreshAll();
        }

        public void setAS_KE(String AS_KE) {
            this.AS_KE = AS_KE;
            this.dataViewFiltered.refreshAll();
        }

        public void setASName(String ASName) {
            this.ASName = ASName;
            this.dataViewFiltered.refreshAll();
        }

        public void setCreatedByDate(String CreatedByDate) {
            this.CreatedByDate = CreatedByDate;
            this.dataViewFiltered.refreshAll();
        }

        public void setHostKE(String hostKE) {
            this.hostKE = hostKE;
            this.dataViewFiltered.refreshAll();
        }

        public void setOSAdmin(String OSAdmin) {
            this.OSAdmin = OSAdmin;
            this.dataViewFiltered.refreshAll();
        }
        public void setAssignmentGroup(String assignmentGroup) {
            this.assignmentGroup = assignmentGroup;
            this.dataViewFiltered.refreshAll();
        }

        public void setEnvironment(String environment) {
            this.environment = environment;
            this.dataViewFiltered.refreshAll();
        }


        public boolean test(CIPSOWAData cipSOWAData) {
            boolean matchesHostName = matches(cipSOWAData.getHOST_NAME(), hostName);
            boolean matchesHostIP = matches(cipSOWAData.getHOST_IP(), hostIP);
            boolean matchesHostDomain = matches(cipSOWAData.getHOST_DOMAIN(), hostDomain);
            boolean matchesSkeeperKE = matches(cipSOWAData.getSOWA_KE(), SOWA_KE);
            boolean matchesSkeeperName = matches(cipSOWAData.getSOWA_NAME(), SOWAName);
            boolean matchesAS_KE = matches(cipSOWAData.getAS_KE(), AS_KE);
            boolean matchesASName = matches(cipSOWAData.getAS_NAME(), ASName);
            boolean matchesCreatedByDate = matches(cipSOWAData.getCREATED_BY_DATE(), CreatedByDate);
            boolean matchesHostKE = matches(cipSOWAData.getHOST_KE(), hostKE);
            boolean matchesOSAdmin = matches(cipSOWAData.getOS_ADMIN(), OSAdmin);
            boolean matchesAssignmentGroup = matches(cipSOWAData.getASSIGNMENT_GROUP(), assignmentGroup);
            boolean matchesEnvironment = matches(cipSOWAData.getENVIRONMENT(), environment);

            return matchesHostName && matchesHostIP && matchesHostDomain && matchesSkeeperKE && matchesSkeeperName &&
                    matchesAS_KE && matchesASName && matchesCreatedByDate && matchesHostKE && matchesOSAdmin
                    && matchesAssignmentGroup && matchesEnvironment;
        }

        private boolean matches(String value, String searchTerm) {
            return searchTerm == null || searchTerm.isEmpty() || value
                    .toLowerCase().contains(searchTerm.toLowerCase());
        }

    }

    private static class ColumnToggleContextMenu extends ContextMenu {
        public ColumnToggleContextMenu(Component target) {
            super(target);
            setOpenOnClick(true);
        }

        void addColumnToggleItem(String label, Grid.Column<CIPSOWAData> column) {
            MenuItem menuItem = this.addItem(label, e -> {
                column.setVisible(e.getSource().isChecked());
            });
            menuItem.setCheckable(true);
            menuItem.setChecked(column.isVisible());
        }
    }


    public static class ItemContextMenu extends GridContextMenu<CIPSOWAData> {
        public ItemContextMenu(Grid<CIPSOWAData> target) {
            super(target);

            addItem("Сканировать порты в Alpha/Omega", e -> e.getItem().ifPresent(incident -> {
                getUI().get().getPage().open(
                        "https://nlb-jenkins/cis/job/USP_Integration/job/toolsOIP/job/OIP_CHECK_ACCESS_PORT/",
                        "Сканировать порты в Alpha/Omega");
            }));
            addItem("Сканировать порты в Sigma", e -> e.getItem().ifPresent(incident -> {
                getUI().get().getPage().open(
                        "https://nlb-jenkins-sigma/infra/job/USP_Integration/job/toolsOIP/job/OIP_CHECK_ACCESS_PORT/",
                        "Сканировать порты в Sigma");
            }));
            addItem("Сканировать порты в PCIDSS", e -> e.getItem().ifPresent(incident -> {
                getUI().get().getPage().open(
                        "https://nlb-jenkins-pcidss/infra/job/USP_Integration/job/toolsOIP/job/OIP_CHECK_ACCESS_PORT/",
                        "Сканировать порты в PCIDSS");
            }));
        }
    }
}
