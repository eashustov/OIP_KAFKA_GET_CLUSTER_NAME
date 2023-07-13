package ru.sberbank.uspincidentreport.view;

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
import org.springframework.beans.factory.annotation.Autowired;
import ru.sberbank.uspincidentreport.domain.OIPKafkaData;
import ru.sberbank.uspincidentreport.repo.OIPKafkaRepo;
import ru.sberbank.uspincidentreport.service.CreateKafkaClusterName;

import java.io.ByteArrayInputStream;
import java.io.StringWriter;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Stream;


@Route
@PageTitle("Серверы Corax выданные из ДИ за период")
//Сохранение состояния таблицы при обновлении
//@PreserveOnRefresh
public class MainView extends VerticalLayout {
    private Anchor clusterNameDownloadToCSV;
    private H4 header;
    @Autowired
    private OIPKafkaRepo repo;
    public static Grid<OIPKafkaData> grid;
    private GridListDataView<OIPKafkaData> dataView;
    PersonFilter personFilter;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    public static Set<OIPKafkaData> selectedKafkaServers = new HashSet<>();
    private Span serversCount = new Span();
    private Span markedCount = new Span();
    Checkbox checkboxHeader_7000;
    Checkbox checkboxHeader_7010;
    //Создание панели инструментов
    MenuBar menuBar = new MenuBar();


    public MainView(OIPKafkaRepo repo) {

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
        this.header = new H4("Серверы Corax выданные из ДИ за период");

        //        Export to CSV list of kafka servers
        var streamResource = new StreamResource("kafkaServers.csv",
                () -> {
                    Stream<OIPKafkaData> OIPKafkaDataList = personFilter.dataViewFiltered.getItems();
                    StringWriter output = new StringWriter();
                    StatefulBeanToCsv<OIPKafkaData> beanToCSV = null;
                    try {
                        beanToCSV = new StatefulBeanToCsvBuilder<OIPKafkaData>(output)
                                .withIgnoreField(OIPKafkaData.class, OIPKafkaData.class.getDeclaredField("KAFKA_NAME"))
                                .build();
                    } catch (NoSuchFieldException e) {
                        e.printStackTrace();
                    }
                    try {
                        beanToCSV.write(OIPKafkaDataList);
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

        //Кнопка получения имен кластеров
        clusterNameDownloadToCSV = new Anchor(CreateKafkaClusterName.getKafkaClusterName(), "Получить имена кластеров для Zabbix");
        clusterNameDownloadToCSV.setTarget("_blank");
        Button buttonGetKafkaClustersName = new Button();
//        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        clusterNameDownloadToCSV.removeAll();
        clusterNameDownloadToCSV.add(buttonGetKafkaClustersName);
        buttonGetKafkaClustersName.setText("Получить имена кластеров для Zabbix");
        buttonGetKafkaClustersName.setEnabled(true);

        // build top HorizontalLayout
        HorizontalLayout actions = new HorizontalLayout(menuBar);
        actions.setVerticalComponentAlignment(Alignment.END, menuBar);
        setHorizontalComponentAlignment(Alignment.END, actions);

        //Build DataLayout
        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonGetData, clusterNameDownloadToCSV);
        dateLayout.setVerticalComponentAlignment(Alignment.STRETCH, start_Date, end_Date);
        dateLayout.setVerticalComponentAlignment(Alignment.END, buttonGetData, clusterNameDownloadToCSV);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);

        //Инициализация таблицы
        gridInit();

        serversCount.setText("Всего серверов: " + dataView.getItemCount());
        markedCount.setText("Выделено серверов: 0");

        //        Добавление компонентов в основной layout
        add(header, dateLayout, actions, grid, serversCount, markedCount);


        //      Обработчик копки получения списка серверов
        buttonGetData.addClickListener(event -> {
            remove(grid, serversCount, markedCount);
            gridInit();
            serversCount.setText("Всего серверов: " + dataView.getItemCount());
            clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
            markedCount.setText("Выделено серверов: 0");
            add(grid, serversCount, markedCount);
        });
    }

//Метод инициализации таблицы
    void gridInit() {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        this.grid = new Grid<>(OIPKafkaData.class, false);
        this.dataView = grid.setItems(repo.findServerByDate(startDate, endDate));
        setHorizontalComponentAlignment(Alignment.CENTER, header);
        setJustifyContentMode(JustifyContentMode.START);

//Grid View
        grid = new Grid<>(OIPKafkaData.class, false);
        grid.setHeight("500px");
        grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        grid.setColumnReorderingAllowed(true);
        grid.setSelectionMode(Grid.SelectionMode.MULTI);

        // Получение списка выделенных обьектов - строк таблицы
        grid.addSelectionListener(event -> {

            selectedKafkaServers = event.getAllSelectedItems();
//            selectedKafkaServers = null;
//            selectedKafkaServers = new HashSet<>(grid.getSelectedItems());
            clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
            markedCount.setText(String.valueOf("Выделено серверов: " + selectedKafkaServers.size()));
            remove(markedCount);
            add(markedCount);
        });


        ItemContextMenu itemContextMenu = new ItemContextMenu(grid);
        Grid.Column<OIPKafkaData> HOST_NAME = grid
                .addColumn(OIPKafkaData::getHOST_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Имя сервера");
        Grid.Column<OIPKafkaData> HOST_IP = grid
                .addColumn(OIPKafkaData::getHOST_IP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ip адрес");
        Grid.Column PORT_7000 = grid
                .addColumn(new ComponentRenderer<>(
                        OIPKafkaData -> {
                            Checkbox checkbox_7000 = new Checkbox("7000");
                            checkbox_7000.setValue(false);
                            checkbox_7000.setEnabled(false);
                            checkbox_7000.addValueChangeListener(event -> {
                                OIPKafkaData.setPORT_7000(event.getValue());
                                selectedKafkaServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
                            });

                            grid.addSelectionListener(event -> {
                                // Делать не активным чекбокс если строка не выбрана
                                if (event.getAllSelectedItems().contains(OIPKafkaData)) {
                                    checkbox_7000.setEnabled(true);
                                } else {
                                    checkbox_7000.setEnabled(false);
                                }
                                //Выставить значение чекбокса как в обьекте
                                checkbox_7000.setValue(OIPKafkaData.getPORT_7000());

                            });
                            //Выставит значения для всех чекбоксов в колонке как в чекбоксе заголовке
                            checkboxHeader_7000.addValueChangeListener(event -> {
                                OIPKafkaData.setPORT_7000(event.getValue());
                                checkbox_7000.setValue(event.getValue());
                                selectedKafkaServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
                            });
                            return checkbox_7000;
                        }

                )).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Порт kafka (7000)")
                .setKey("PORT_7000");
        Grid.Column PORT_7010 = grid
                .addColumn(new ComponentRenderer<>(
                        OIPKafkaData -> {
                            Checkbox checkbox_7010 = new Checkbox("7010");
                            checkbox_7010.setValue(false);
                            checkbox_7010.setEnabled(false);
                            checkbox_7010.addValueChangeListener(event -> {
                                OIPKafkaData.setPORT_7010(event.getValue());
                                selectedKafkaServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
                            });

                            grid.addSelectionListener(event -> {
                                // Делать не активным чекбокс если строка не выбрана
                                if (event.getAllSelectedItems().contains(OIPKafkaData)) {
                                    checkbox_7010.setEnabled(true);
                                } else {
                                    checkbox_7010.setEnabled(false);
                                }
                                //Выставить значение чекбокса как в обьекте
                                checkbox_7010.setValue(OIPKafkaData.getPORT_7010());

                            });
                            //Выставит значения для всех чекбоксов в колонке как в чекбоксе заголовке
                            checkboxHeader_7010.addValueChangeListener(event -> {
                                OIPKafkaData.setPORT_7010(event.getValue());
                                checkbox_7010.setValue(event.getValue());
                                selectedKafkaServers = grid.getSelectedItems();
                                clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
                            });
                            return checkbox_7010;
                        }
                )).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Порт zookeeper (7010)")
                .setKey("PORT_7010");
        Grid.Column<OIPKafkaData> HOST_DOMAIN = grid
                .addColumn(OIPKafkaData::getHOST_DOMAIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Домен");
        Grid.Column<OIPKafkaData> HOST_KE = grid
                .addColumn(OIPKafkaData::getHOST_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ сервера");
        Grid.Column<OIPKafkaData> OS_ADMIN = grid
                .addColumn(OIPKafkaData::getOS_ADMIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения ОС");
        Grid.Column<OIPKafkaData> KAFKA_KE = grid
                .addColumn(OIPKafkaData::getKAFKA_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ кластера");
        KAFKA_KE.setVisible(true);
        Grid.Column<OIPKafkaData> KAFKA_NAME = grid
                .addColumn(OIPKafkaData::getKAFKA_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название кластера");
        KAFKA_NAME.setVisible(true);
        Grid.Column<OIPKafkaData> ASSIGNMENT_GROUP = grid
                .addColumn(OIPKafkaData::getASSIGNMENT_GROUP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения");
        Grid.Column<OIPKafkaData> STEND_NAME = grid
                .addColumn(OIPKafkaData::getSTEND_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название стенда");
        STEND_NAME.setVisible(false);
        Grid.Column<OIPKafkaData> AS_NAME = grid
                .addColumn(OIPKafkaData::getAS_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ АС");
        Grid.Column<OIPKafkaData> CREATED_BY_DATE = grid
                .addColumn(OIPKafkaData::getCREATED_BY_DATE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Дата выдачи");
        CREATED_BY_DATE.setVisible(true);
        Grid.Column<OIPKafkaData> J_PROVIDING_UNIT_NAME = grid
                .addColumn(OIPKafkaData::getJ_PROVIDING_UNIT_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ДИТ");
        J_PROVIDING_UNIT_NAME.setVisible(false);
        Grid.Column<OIPKafkaData> AS_KE = grid
                .addColumn(OIPKafkaData::getAS_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название АС");
        AS_KE.setVisible(false);

        GridListDataView<OIPKafkaData> dataView = grid.setItems(repo.findServerByDate(startDate, endDate));
        personFilter = new PersonFilter(dataView);

        //Create headers for Grid

        grid.getHeaderRows().clear();
        HeaderRow headerRow = grid.appendHeaderRow();

        headerRow.getCell(HOST_NAME)
                .setComponent(createFilterHeader("Имя сервера", personFilter::setHostName));
        headerRow.getCell(HOST_IP)
                .setComponent(createFilterHeader("ip адрес", personFilter::setHostIP));

        checkboxHeader_7000 = new Checkbox("7000");
        checkboxHeader_7000.setValue(false);

        headerRow.getCell(PORT_7000).setComponent(checkboxHeader_7000);

        checkboxHeader_7010 = new Checkbox("7010");
        checkboxHeader_7010.setValue(false);
        headerRow.getCell(PORT_7010).setComponent(checkboxHeader_7010);

        headerRow.getCell(HOST_DOMAIN)
                .setComponent(createFilterHeader("Домен", personFilter::setHostDomain));
        headerRow.getCell(HOST_KE)
                .setComponent(createFilterHeader("КЭ сервера", personFilter::setHostKE));
        headerRow.getCell(OS_ADMIN)
                .setComponent(createFilterHeader("Группа сопровождения ОС", personFilter::setOSAdmin));
        headerRow.getCell(KAFKA_KE)
                .setComponent(createFilterHeader("КЭ кластера", personFilter::setKafkaKE));
        headerRow.getCell(KAFKA_NAME)
                .setComponent(createFilterHeader("Название кластера", personFilter::setKafkaName));
        headerRow.getCell(ASSIGNMENT_GROUP)
                .setComponent(createFilterHeader("Группа сопровождения", personFilter::setAssignmentGroup));
        headerRow.getCell(AS_KE)
                .setComponent(createFilterHeader("КЭ АС", personFilter::setAS_KE));
        headerRow.getCell(AS_NAME)
                .setComponent(createFilterHeader("Название АС", personFilter::setASName));
        headerRow.getCell(CREATED_BY_DATE)
                .setComponent(createFilterHeader("Название АС", personFilter::setCreatedByDate));

        //Column Visibility
//        Так можно прикрутить кнопку к меню выбора видимости столбцов. В данном приложении используется MenuBar
//        Button menuButton = new Button(new Icon(VaadinIcon.LIST_SELECT));
//        menuButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
        ColumnToggleContextMenu columnToggleContextMenu = new ColumnToggleContextMenu(menuBar.getItems().get(2));
        columnToggleContextMenu.addColumnToggleItem("Имя сервера", HOST_NAME);
        columnToggleContextMenu.addColumnToggleItem("ip адрес", HOST_IP);
        columnToggleContextMenu.addColumnToggleItem("Порт kafka (7000)", PORT_7000);
        columnToggleContextMenu.addColumnToggleItem("Порт zookeeper (7010)", PORT_7010);
        columnToggleContextMenu.addColumnToggleItem("Домен", HOST_DOMAIN);
        columnToggleContextMenu.addColumnToggleItem("КЭ сервера", HOST_KE);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения ОС", OS_ADMIN);
        columnToggleContextMenu.addColumnToggleItem("КЭ кластера", KAFKA_KE);
        columnToggleContextMenu.addColumnToggleItem("Название кластера", KAFKA_NAME);
        columnToggleContextMenu.addColumnToggleItem("Группа сопровождения", ASSIGNMENT_GROUP);
        columnToggleContextMenu.addColumnToggleItem("КЭ АС", AS_KE);
        columnToggleContextMenu.addColumnToggleItem("Название АС", AS_NAME);
        columnToggleContextMenu.addColumnToggleItem("Дата выдачи", CREATED_BY_DATE);
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
//        filterField.setPlaceholder("Поиск");
        filterField.setPrefixComponent(new Icon(VaadinIcon.SEARCH));
        filterField.addValueChangeListener(
                e -> filterChangeConsumer.accept(e.getValue()));
        VerticalLayout layout = new VerticalLayout(filterField);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(JustifyContentMode.START);
        return layout;
    }

    static class PersonFilter {


        private GridListDataView<OIPKafkaData> dataViewFiltered;
        private String hostName;
        private String hostIP;
        private Boolean port_7000;
        private Boolean port_7010;
        private String hostDomain;
        private String hostKE;
        private String OSAdmin;
        private String kafkaKE;
        private String kafkaName;
        private String assignmentGroup;
        private String AS_KE;
        private String ASName;
        private String CreatedByDate;

        public PersonFilter(GridListDataView<OIPKafkaData> dataView) {
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

        public void setHostKE(String hostKE) {
            this.hostKE = hostKE;
            this.dataViewFiltered.refreshAll();
        }

        public void setOSAdmin(String OSAdmin) {
            this.OSAdmin = OSAdmin;
            this.dataViewFiltered.refreshAll();
        }

        public void setKafkaKE(String kafkaKE) {
            this.kafkaKE = kafkaKE;
            this.dataViewFiltered.refreshAll();
        }

        public void setKafkaName(String kafkaName) {
            this.kafkaName = kafkaName;
            this.dataViewFiltered.refreshAll();
        }

        public void setAssignmentGroup(String assignmentGroup) {
            this.assignmentGroup = assignmentGroup;
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


        public boolean test(OIPKafkaData oipKafkaData) {
            boolean matchesHostName = matches(oipKafkaData.getHOST_NAME(), hostName);
            boolean matchesHostIP = matches(oipKafkaData.getHOST_IP(), hostIP);
            boolean matchesHostDomain = matches(oipKafkaData.getHOST_DOMAIN(), hostDomain);
            boolean matchesHostKE = matches(oipKafkaData.getHOST_KE(), hostKE);
            boolean matchesOSAdmin = matches(oipKafkaData.getOS_ADMIN(), OSAdmin);
            boolean matchesKafkaKE = matches(oipKafkaData.getKAFKA_KE(), kafkaKE);
            boolean matchesKafkaName = matches(oipKafkaData.getKAFKA_NAME(), kafkaName);
            boolean matchesAssignmentGroup = matches(oipKafkaData.getASSIGNMENT_GROUP(), assignmentGroup);
            boolean matchesAS_KE = matches(oipKafkaData.getAS_KE(), AS_KE);
            boolean matchesASName = matches(oipKafkaData.getAS_NAME(), ASName);
            boolean matchesCreatedByDate = matches(oipKafkaData.getCREATED_BY_DATE(), CreatedByDate);

            return matchesHostName && matchesHostIP && matchesHostDomain && matchesHostKE &&
                    matchesOSAdmin && matchesKafkaKE && matchesKafkaName && matchesAssignmentGroup &&
                    matchesAS_KE && matchesASName && matchesCreatedByDate;
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

        void addColumnToggleItem(String label, Grid.Column<OIPKafkaData> column) {
            MenuItem menuItem = this.addItem(label, e -> {
                column.setVisible(e.getSource().isChecked());
            });
            menuItem.setCheckable(true);
            menuItem.setChecked(column.isVisible());
        }
    }


    public static class ItemContextMenu extends GridContextMenu<OIPKafkaData> {
        public ItemContextMenu(Grid<OIPKafkaData> target) {
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
