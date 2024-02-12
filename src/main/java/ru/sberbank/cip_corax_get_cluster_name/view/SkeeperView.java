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
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import jakarta.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSkeeperData;
import ru.sberbank.cip_corax_get_cluster_name.repo.cipskeeperrepo.CIPSkeeperRepo;
import ru.sberbank.cip_corax_get_cluster_name.service.CreateSkeeperClusterName;

import java.io.ByteArrayInputStream;
import java.io.StringWriter;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Stream;

@PermitAll
@Route(value="skeeper", layout = MainLayout.class)
@PageTitle("Серверы Skeeper выданные из ДИ за период")
//Сохранение состояния таблицы при обновлении
//@PreserveOnRefresh
public class SkeeperView extends VerticalLayout {
    Anchor clusterNameDownloadToCSV;
    private H4 header;
    private CIPSkeeperRepo repo;
    private Grid<CIPSkeeperData> grid;
    private GridListDataView<CIPSkeeperData> dataView;
    //    private RefreshThread thread;
    ServerSkeeperFilter serverSkeeperFilter;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    public static Set<CIPSkeeperData> selectedSkeeperServers = new HashSet<>();
    Span serversCount = new Span();
    Span markedCount = new Span();
    Span filteredCount = new Span();
    Checkbox checkboxHeader_7000;
    //Создание панели инструментов
    MenuBar menuBar = new MenuBar();

    @Autowired
    public SkeeperView(CIPSkeeperRepo repo) {

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


        this.repo = repo;
        this.header = new H4("Серверы Skeeper выданные из ДИ за период");

        //        Export to CSV list of skeeper servers
        var streamResource = new StreamResource("skeeperServers.csv",
                () -> {
                    Stream<CIPSkeeperData> CIPSkeeperDataList = serverSkeeperFilter.dataViewFiltered.getItems();
                    StringWriter output = new StringWriter();
                    StatefulBeanToCsv<CIPSkeeperData> beanToCSV = null;
                    try {
                        beanToCSV = new StatefulBeanToCsvBuilder<CIPSkeeperData>(output)
                                .withIgnoreField(CIPSkeeperData.class, CIPSkeeperData.class.getDeclaredField("SKEEPER_NAME"))
                                .build();
                    } catch (NoSuchFieldException e) {
                        e.printStackTrace();
                    }
                    try {
                        beanToCSV.write(CIPSkeeperDataList);
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
        normal.setChecked(true);
        MenuItem compact = styleSubMenu.addItem("Компактный");
        compact.setCheckable(true);
        compact.setChecked(false);

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

        //Кнопка получения имен кластеров
        clusterNameDownloadToCSV = new Anchor(CreateSkeeperClusterName.getSkeeperClusterName(), "Получить имена кластеров для Zabbix");
        clusterNameDownloadToCSV.setTarget("_blank");
        Button buttonGetSkeeperClustersName = new Button();
//        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        clusterNameDownloadToCSV.removeAll();
        clusterNameDownloadToCSV.add(buttonGetSkeeperClustersName);
        buttonGetSkeeperClustersName.setText("Получить имена кластеров для Zabbix");
        buttonGetSkeeperClustersName.setEnabled(true);

        // build top HorizontalLayout
        HorizontalLayout actions = new HorizontalLayout(menuBar);
        actions.setVerticalComponentAlignment(Alignment.END, menuBar);
        setHorizontalComponentAlignment(Alignment.END, actions);

        //Build DataLayout
        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonGetData, clusterNameDownloadToCSV);
        dateLayout.setVerticalComponentAlignment(Alignment.STRETCH, start_Date, end_Date);
        dateLayout.setVerticalComponentAlignment(Alignment.END, buttonGetData, clusterNameDownloadToCSV);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);

        gridInit();

        serversCount.setText("Всего серверов: " + dataView.getItemCount());
        markedCount.setText("Выделено серверов: 0");

        //        Добавление компонентов в основной layout
        add(header, dateLayout, actions, grid, serversCount, markedCount, filteredCount);

        //      Обработчик копки получения списка серверов
        buttonGetData.addClickListener(event -> {
            remove(grid, serversCount, markedCount, filteredCount);
            gridInit();
            serversCount.setText("Всего серверов: " + dataView.getItemCount());
            clusterNameDownloadToCSV.setHref(CreateSkeeperClusterName.getSkeeperClusterName());
            markedCount.setText("Выделено серверов: 0");
            add(grid, serversCount, markedCount, filteredCount);
        });

    }

    void gridInit() {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        this.grid = new Grid<>(CIPSkeeperData.class, false);
        this.dataView = grid.setItems(repo.findServerByDate(startDate, endDate));
        setHorizontalComponentAlignment(Alignment.CENTER, header);
        setJustifyContentMode(JustifyContentMode.START);

//Grid View
        grid = new Grid<>(CIPSkeeperData.class, false);
        grid.setHeight("500px");
        grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        grid.setColumnReorderingAllowed(true);
        grid.setSelectionMode(Grid.SelectionMode.MULTI);
//        grid.asMultiSelect().select(personList.get(0), personList.get(1)); // Как выделить все строки в таблице

//        // Получение списка выделенных обьектов - строк таблицы

        grid.addSelectionListener(event -> {

            selectedSkeeperServers = event.getAllSelectedItems();
            clusterNameDownloadToCSV.setHref(CreateSkeeperClusterName.getSkeeperClusterName());
            markedCount.setText(String.valueOf("Выделено серверов: " + selectedSkeeperServers.size()));
            remove(markedCount);
            add(markedCount);
        });


        ItemContextMenu itemContextMenu = new ItemContextMenu(grid);
        Grid.Column<CIPSkeeperData> HOST_NAME = grid
                .addColumn(CIPSkeeperData::getHOST_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Имя сервера");
        Grid.Column<CIPSkeeperData> IP = grid
                .addColumn(CIPSkeeperData::getHOST_IP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ip адрес");
        Grid.Column PORT_7000 = grid
                .addColumn(new ComponentRenderer<>(
                        CIPSkeeperData -> {
                            Checkbox checkbox_7000 = new Checkbox("7000");
                            checkbox_7000.setValue(false);
                            checkbox_7000.setEnabled(false);
                            checkbox_7000.addValueChangeListener(event -> {
                                CIPSkeeperData.setPORT_7000(event.getValue());
                                selectedSkeeperServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateSkeeperClusterName.getSkeeperClusterName());
                            });

                            grid.addSelectionListener(event -> {
                                // Делать не активным чекбокс если строка не выбрана
                                if (event.getAllSelectedItems().contains(CIPSkeeperData)) {
                                    checkbox_7000.setEnabled(true);
                                } else {
                                    checkbox_7000.setEnabled(false);
                                }
                                //Выставить значение чекбокса как в обьекте
                                checkbox_7000.setValue(CIPSkeeperData.getPORT_7000());

                            });
                            //Выставит значения для всех чекбоксов в колонке как в чекбоксе заголовке
                            checkboxHeader_7000.addValueChangeListener(event -> {
                                CIPSkeeperData.setPORT_7000(event.getValue());
                                checkbox_7000.setValue(event.getValue());
                                selectedSkeeperServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateSkeeperClusterName.getSkeeperClusterName());
                            });
                            return checkbox_7000;
                        }
                )).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Порт JMX (7000)")
                .setKey("PORT_7000");
        Grid.Column<CIPSkeeperData> HOST_DOMAIN = grid
                .addColumn(CIPSkeeperData::getHOST_DOMAIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Домен");
        Grid.Column<CIPSkeeperData> HOST_KE = grid
                .addColumn(CIPSkeeperData::getHOST_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ сервера");
        Grid.Column<CIPSkeeperData> OS_ADMIN = grid
                .addColumn(CIPSkeeperData::getOS_ADMIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения ОС");
        Grid.Column<CIPSkeeperData> SKEEPER_KE = grid
                .addColumn(CIPSkeeperData::getSKEEPER_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ кластера");
        SKEEPER_KE.setVisible(true);
        Grid.Column<CIPSkeeperData> SKEEPER_NAME = grid
                .addColumn(CIPSkeeperData::getSKEEPER_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название кластера");
        SKEEPER_NAME.setVisible(true);
        Grid.Column<CIPSkeeperData> ASSIGNMENT_GROUP = grid
                .addColumn(CIPSkeeperData::getASSIGNMENT_GROUP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения");
        Grid.Column<CIPSkeeperData> STEND_NAME = grid
                .addColumn(CIPSkeeperData::getSTEND_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название стенда");
        STEND_NAME.setVisible(false);
        Grid.Column<CIPSkeeperData> AS_KE = grid
                .addColumn(CIPSkeeperData::getAS_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ АС");
        Grid.Column<CIPSkeeperData> AS_NAME = grid
                .addColumn(CIPSkeeperData::getAS_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название АС");
        Grid.Column<CIPSkeeperData> CREATED_BY_DATE = grid
                .addColumn(CIPSkeeperData::getCREATED_BY_DATE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Дата выдачи");
        CREATED_BY_DATE.setVisible(true);
        Grid.Column<CIPSkeeperData> J_PROVIDING_UNIT_NAME = grid
                .addColumn(CIPSkeeperData::getJ_PROVIDING_UNIT_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ДИТ");
        J_PROVIDING_UNIT_NAME.setVisible(false);


        serverSkeeperFilter = new ServerSkeeperFilter(grid.setItems(repo.findServerByDate(startDate, endDate)));

        //Create headers for Grid

        grid.getHeaderRows().clear();
        HeaderRow headerRow = grid.appendHeaderRow();

        headerRow.getCell(HOST_NAME)
                .setComponent(createFilterHeader("Имя сервера", serverSkeeperFilter::setHostName));
        headerRow.getCell(IP)
                .setComponent(createFilterHeader("ip адрес", serverSkeeperFilter::setHostIP));

        checkboxHeader_7000 = new Checkbox("7000");
        checkboxHeader_7000.setValue(false);

        headerRow.getCell(PORT_7000).setComponent(checkboxHeader_7000);

        headerRow.getCell(HOST_DOMAIN)
                .setComponent(createFilterHeader("Домен", serverSkeeperFilter::setHostDomain));
        headerRow.getCell(SKEEPER_KE)
                .setComponent(createFilterHeader("КЭ кластера", serverSkeeperFilter::setSkeeperKE));
        headerRow.getCell(SKEEPER_NAME)
                .setComponent(createFilterHeader("Название кластера", serverSkeeperFilter::setSkeeperName));
        headerRow.getCell(AS_KE)
                .setComponent(createFilterHeader("КЭ АС", serverSkeeperFilter::setAS_KE));
        headerRow.getCell(AS_NAME)
                .setComponent(createFilterHeader("Название АС", serverSkeeperFilter::setASName));
        headerRow.getCell(CREATED_BY_DATE)
                .setComponent(createFilterHeader("Дата выдачи", serverSkeeperFilter::setCreatedByDate));
        headerRow.getCell(HOST_KE)
                .setComponent(createFilterHeader("КЭ сервера", serverSkeeperFilter::setHostKE));
        headerRow.getCell(OS_ADMIN)
                .setComponent(createFilterHeader("Группа сопровождения ОС", serverSkeeperFilter::setOSAdmin));
        headerRow.getCell(ASSIGNMENT_GROUP)
                .setComponent(createFilterHeader("Группа сопровождения", serverSkeeperFilter::setAssignmentGroup));

        ColumnToggleContextMenu columnToggleContextMenu = new ColumnToggleContextMenu(menuBar.getItems().get(2));
        columnToggleContextMenu.addColumnToggleItem("Имя сервера", HOST_NAME);
        columnToggleContextMenu.addColumnToggleItem("ip адрес", IP);
        columnToggleContextMenu.addColumnToggleItem("Порт JMX (7000)", PORT_7000);
        columnToggleContextMenu.addColumnToggleItem("Домен", HOST_DOMAIN);
        columnToggleContextMenu.addColumnToggleItem("КЭ кластера", SKEEPER_KE);
        columnToggleContextMenu.addColumnToggleItem("Название кластера", SKEEPER_NAME);
        columnToggleContextMenu.addColumnToggleItem("КЭ АС", AS_KE);
        columnToggleContextMenu.addColumnToggleItem("Название АС", AS_NAME);
        columnToggleContextMenu.addColumnToggleItem("КЭ сервера", HOST_KE);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения ОС", OS_ADMIN);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения", ASSIGNMENT_GROUP);


        // Обновление данных счетчика по отфильтрованным элементам
        serverSkeeperFilter.dataViewFiltered.addItemCountChangeListener(event -> {
            remove(filteredCount);
            filteredCount.setText("Отфильтровано: " + serverSkeeperFilter.dataViewFiltered.getItemCount());
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

    static class ServerSkeeperFilter {

        private GridListDataView<CIPSkeeperData> dataViewFiltered;
        private String hostName;
        private String hostIP;
        private String hostDomain;
        private String skeeperKE;
        private String skeeperName;
        private String AS_KE;
        private String ASName;
        private String CreatedByDate;
        private String hostKE;
        private String OSAdmin;
        private String assignmentGroup;

        public ServerSkeeperFilter(GridListDataView<CIPSkeeperData> dataView) {
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

        public void setSkeeperKE(String skeeperKE) {
            this.skeeperKE = skeeperKE;
            this.dataViewFiltered.refreshAll();
        }

        public void setSkeeperName(String skeeperName) {
            this.skeeperName = skeeperName;
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


        public boolean test(CIPSkeeperData cipSkeeperData) {
            boolean matchesHostName = matches(cipSkeeperData.getHOST_NAME(), hostName);
            boolean matchesHostIP = matches(cipSkeeperData.getHOST_IP(), hostIP);
            boolean matchesHostDomain = matches(cipSkeeperData.getHOST_DOMAIN(), hostDomain);
            boolean matchesSkeeperKE = matches(cipSkeeperData.getSKEEPER_KE(), skeeperKE);
            boolean matchesSkeeperName = matches(cipSkeeperData.getSKEEPER_NAME(), skeeperName);
            boolean matchesAS_KE = matches(cipSkeeperData.getAS_KE(), AS_KE);
            boolean matchesASName = matches(cipSkeeperData.getAS_NAME(), ASName);
            boolean matchesCreatedByDate = matches(cipSkeeperData.getCREATED_BY_DATE(), CreatedByDate);
            boolean matchesHostKE = matches(cipSkeeperData.getHOST_KE(), hostKE);
            boolean matchesOSAdmin = matches(cipSkeeperData.getOS_ADMIN(), OSAdmin);
            boolean matchesAssignmentGroup = matches(cipSkeeperData.getASSIGNMENT_GROUP(), assignmentGroup);

            return matchesHostName && matchesHostIP && matchesHostDomain && matchesSkeeperKE && matchesSkeeperName &&
                    matchesAS_KE && matchesASName && matchesCreatedByDate && matchesHostKE && matchesOSAdmin
                    && matchesAssignmentGroup;
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

        void addColumnToggleItem(String label, Grid.Column<CIPSkeeperData> column) {
            MenuItem menuItem = this.addItem(label, e -> {
                column.setVisible(e.getSource().isChecked());
            });
            menuItem.setCheckable(true);
            menuItem.setChecked(column.isVisible());
        }
    }


    public static class ItemContextMenu extends GridContextMenu<CIPSkeeperData> {
        public ItemContextMenu(Grid<CIPSkeeperData> target) {
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
