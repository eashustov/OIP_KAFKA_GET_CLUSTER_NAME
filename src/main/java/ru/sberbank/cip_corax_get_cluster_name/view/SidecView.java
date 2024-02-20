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
import ru.sberbank.cip_corax_get_cluster_name.domain.CIPSIDECData;
import ru.sberbank.cip_corax_get_cluster_name.repo.cipsidecrepo.CIPSIDECRepo;
import ru.sberbank.cip_corax_get_cluster_name.service.CreateSidecClusterName;

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
    @Route(value="sidec", layout = MainLayout.class)
    @PageTitle("Серверы SIDEC выданные из ДИ за период")
//Сохранение состояния таблицы при обновлении
//@PreserveOnRefresh
    public class SidecView extends VerticalLayout {
        Anchor clusterNameDownloadToCSV;
        private H4 header;
        private CIPSIDECRepo repo;
        private Grid<CIPSIDECData> grid;
        private GridListDataView<CIPSIDECData> dataView;
        //    private RefreshThread thread;
        ServerSidecFilter serverSidecFilter;
        String startDate;
        String endDate;
        DatePicker start_Date;
        DatePicker end_Date;
        DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
        public static Set<CIPSIDECData> selectedSidecServers = new HashSet<>();
        Span serversCount = new Span();
        Span markedCount = new Span();
        Span filteredCount = new Span();
        Checkbox checkboxHeader_8443;
        Checkbox checkboxHeader_7030;
        //Создание панели инструментов
        MenuBar menuBar = new MenuBar();

        @Autowired
        public SidecView(CIPSIDECRepo repo) {

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
            this.header = new H4("Серверы SIDEC выданные из ДИ за период");

            //        Export to CSV list of Sidec servers
            var streamResource = new StreamResource("sidecServers.csv",
                    () -> {
                        Stream<CIPSIDECData> CIPSIDECDataList = serverSidecFilter.dataViewFiltered.getItems();
                        StringWriter output = new StringWriter();
                        StatefulBeanToCsv<CIPSIDECData> beanToCSV = null;
                        try {
                            beanToCSV = new StatefulBeanToCsvBuilder<CIPSIDECData>(output)
                                    .withIgnoreField(CIPSIDECData.class, CIPSIDECData.class.getDeclaredField("SIDEC_NAME"))
                                    .build();
                        } catch (NoSuchFieldException e) {
                            e.printStackTrace();
                        }
                        try {
                            beanToCSV.write(CIPSIDECDataList);
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
            clusterNameDownloadToCSV = new Anchor(CreateSidecClusterName.getSidecClusterName(), "Получить имена кластеров для Zabbix");
            clusterNameDownloadToCSV.setTarget("_blank");
            Button buttonGetSidecClustersName = new Button();
//        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
            clusterNameDownloadToCSV.removeAll();
            clusterNameDownloadToCSV.add(buttonGetSidecClustersName);
            buttonGetSidecClustersName.setText("Получить имена кластеров для Zabbix");
            buttonGetSidecClustersName.setEnabled(true);

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
                clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                markedCount.setText("Выделено серверов: 0");
                add(grid, serversCount, markedCount, filteredCount);
            });


        }

        void gridInit() {
            startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
            endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
            this.grid = new Grid<>(CIPSIDECData.class, false);
            this.dataView = grid.setItems(repo.findServerByDate(startDate, endDate));
            setHorizontalComponentAlignment(Alignment.CENTER, header);
            setJustifyContentMode(JustifyContentMode.START);

//Grid View
            grid = new Grid<>(CIPSIDECData.class, false);
            grid.setHeight("500px");
            grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
            grid.setColumnReorderingAllowed(true);
            grid.setSelectionMode(Grid.SelectionMode.MULTI);
//        grid.asMultiSelect().select(personList.get(0), personList.get(1)); // Как выделить все строки в таблице

//        // Получение списка выделенных обьектов - строк таблицы

            grid.addSelectionListener(event -> {

                selectedSidecServers = event.getAllSelectedItems();
                clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                markedCount.setText(String.valueOf("Выделено серверов: " + selectedSidecServers.size()));
                remove(markedCount);
                add(markedCount);
            });


            ItemContextMenu itemContextMenu = new ItemContextMenu(grid);
            Grid.Column<CIPSIDECData> HOST_NAME = grid
                    .addColumn(CIPSIDECData::getHOST_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Имя сервера");
            Grid.Column<CIPSIDECData> IP = grid
                    .addColumn(CIPSIDECData::getHOST_IP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ip адрес");
            Grid.Column PORT_8443 = grid
                    .addColumn(new ComponentRenderer<>(
                            CIPSIDECData -> {
                                Checkbox checkbox_8443 = new Checkbox("8443");
                                checkbox_8443.setValue(false);
                                checkbox_8443.setEnabled(false);
                                checkbox_8443.addValueChangeListener(event -> {
                                    CIPSIDECData.setPORT_8443(event.getValue());
                                    selectedSidecServers = grid.getSelectedItems();
                                    clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                                });

                                grid.addSelectionListener(event -> {
                                    // Делать не активным чекбокс если строка не выбрана
                                    if (event.getAllSelectedItems().contains(CIPSIDECData)) {
                                        checkbox_8443.setEnabled(true);
                                    } else {
                                        checkbox_8443.setEnabled(false);
                                    }
                                    //Выставить значение чекбокса как в обьекте
                                    checkbox_8443.setValue(CIPSIDECData.getPORT_8443());

                                });
                                //Выставит значения для всех чекбоксов в колонке как в чекбоксе заголовке
                                checkboxHeader_8443.addValueChangeListener(event -> {
                                    CIPSIDECData.setPORT_8443(event.getValue());
                                    checkbox_8443.setValue(event.getValue());
                                    selectedSidecServers = grid.getSelectedItems();
                                    clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                                });
                                return checkbox_8443;
                            }

                    )).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Порт HTTP (8443)")
                    .setKey("PORT_8443");
            Grid.Column PORT_7030 = grid
                    .addColumn(new ComponentRenderer<>(
                            CIPSIDECData -> {
                                Checkbox checkbox_7030 = new Checkbox("7030");
                                checkbox_7030.setValue(false);
                                checkbox_7030.setEnabled(false);
                                checkbox_7030.addValueChangeListener(event -> {
                                    CIPSIDECData.setPORT_7030(event.getValue());
                                    selectedSidecServers = grid.getSelectedItems();
                                    clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                                });

                                grid.addSelectionListener(event -> {
                                    // Делать не активным чекбокс если строка не выбрана
                                    if (event.getAllSelectedItems().contains(CIPSIDECData)) {
                                        checkbox_7030.setEnabled(true);
                                    } else {
                                        checkbox_7030.setEnabled(false);
                                    }
                                    //Выставить значение чекбокса как в обьекте
                                    checkbox_7030.setValue(CIPSIDECData.getPORT_7030());

                                });
                                //Выставит значения для всех чекбоксов в колонке как в чекбоксе заголовке
                                checkboxHeader_7030.addValueChangeListener(event -> {
                                    CIPSIDECData.setPORT_7030(event.getValue());
                                    checkbox_7030.setValue(event.getValue());
                                    selectedSidecServers = grid.getSelectedItems();
                                    clusterNameDownloadToCSV.setHref(CreateSidecClusterName.getSidecClusterName());
                                });
                                return checkbox_7030;
                            }
                    )).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Порт JMX (7030)")
                    .setKey("PORT_7030");
            Grid.Column<CIPSIDECData> HOST_DOMAIN = grid
                    .addColumn(CIPSIDECData::getHOST_DOMAIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Домен");
            Grid.Column<CIPSIDECData> HOST_KE = grid
                    .addColumn(CIPSIDECData::getHOST_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ сервера");
            Grid.Column<CIPSIDECData> OS_ADMIN = grid
                    .addColumn(CIPSIDECData::getOS_ADMIN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения ОС");
            Grid.Column<CIPSIDECData> SIDEC_KE = grid
                    .addColumn(CIPSIDECData::getSIDEC_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ кластера");
            SIDEC_KE.setVisible(true);
            Grid.Column<CIPSIDECData> SIDEC_NAME = grid
                    .addColumn(CIPSIDECData::getSIDEC_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название кластера");
            SIDEC_NAME.setVisible(true);
            Grid.Column<CIPSIDECData> ASSIGNMENT_GROUP = grid
                    .addColumn(CIPSIDECData::getASSIGNMENT_GROUP).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Группа сопровождения");
            Grid.Column<CIPSIDECData> STEND_NAME = grid
                    .addColumn(CIPSIDECData::getSTEND_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название стенда");
            STEND_NAME.setVisible(false);
            Grid.Column<CIPSIDECData> AS_KE = grid
                    .addColumn(CIPSIDECData::getAS_KE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("КЭ АС");
            Grid.Column<CIPSIDECData> AS_NAME = grid
                    .addColumn(CIPSIDECData::getAS_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Название АС");
            Grid.Column<CIPSIDECData> CREATED_BY_DATE = grid
                    .addColumn(CIPSIDECData::getCREATED_BY_DATE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Дата выдачи");
            CREATED_BY_DATE.setVisible(true);
            Grid.Column<CIPSIDECData> J_PROVIDING_UNIT_NAME = grid
                    .addColumn(CIPSIDECData::getJ_PROVIDING_UNIT_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ДИТ");
            J_PROVIDING_UNIT_NAME.setVisible(false);


            serverSidecFilter = new ServerSidecFilter(grid.setItems(repo.findServerByDate(startDate, endDate)));

            //Create headers for Grid

            grid.getHeaderRows().clear();
            HeaderRow headerRow = grid.appendHeaderRow();

            headerRow.getCell(HOST_NAME)
                    .setComponent(createFilterHeader("Имя сервера", serverSidecFilter::setHostName));
            headerRow.getCell(IP)
                    .setComponent(createFilterHeader("ip адрес", serverSidecFilter::setHostIP));

            checkboxHeader_8443 = new Checkbox("8443");
            checkboxHeader_8443.setValue(false);

            headerRow.getCell(PORT_8443).setComponent(checkboxHeader_8443);

            checkboxHeader_7030 = new Checkbox("7030");
            checkboxHeader_7030.setValue(false);
            headerRow.getCell(PORT_7030).setComponent(checkboxHeader_7030);

            headerRow.getCell(HOST_DOMAIN)
                    .setComponent(createFilterHeader("Домен", serverSidecFilter::setHostDomain));
            headerRow.getCell(SIDEC_KE)
                    .setComponent(createFilterHeader("КЭ кластера", serverSidecFilter::setSidecKE));
            headerRow.getCell(SIDEC_NAME)
                    .setComponent(createFilterHeader("Название кластера", serverSidecFilter::setSidecName));
            headerRow.getCell(AS_KE)
                    .setComponent(createFilterHeader("КЭ АС", serverSidecFilter::setAS_KE));
            headerRow.getCell(AS_NAME)
                    .setComponent(createFilterHeader("Название АС", serverSidecFilter::setASName));
            headerRow.getCell(CREATED_BY_DATE)
                    .setComponent(createFilterHeader("Дата выдачи", serverSidecFilter::setCreatedByDate));
            headerRow.getCell(HOST_KE)
                    .setComponent(createFilterHeader("КЭ сервера", serverSidecFilter::setHostKE));
            headerRow.getCell(OS_ADMIN)
                    .setComponent(createFilterHeader("Группа сопровождения ОС", serverSidecFilter::setOSAdmin));
            headerRow.getCell(ASSIGNMENT_GROUP)
                    .setComponent(createFilterHeader("Группа сопровождения", serverSidecFilter::setAssignmentGroup));

            ColumnToggleContextMenu columnToggleContextMenu = new ColumnToggleContextMenu(menuBar.getItems().get(2));
            columnToggleContextMenu.addColumnToggleItem("Имя сервера", HOST_NAME);
            columnToggleContextMenu.addColumnToggleItem("ip адрес", IP);
            columnToggleContextMenu.addColumnToggleItem("Порт HTTP (8443)", PORT_8443);
            columnToggleContextMenu.addColumnToggleItem("Порт JMX (7030)", PORT_7030);
            columnToggleContextMenu.addColumnToggleItem("Домен", HOST_DOMAIN);
            columnToggleContextMenu.addColumnToggleItem("КЭ кластера", SIDEC_KE);
            columnToggleContextMenu.addColumnToggleItem("Название кластера", SIDEC_NAME);
            columnToggleContextMenu.addColumnToggleItem("КЭ АС", AS_KE);
            columnToggleContextMenu.addColumnToggleItem("Название АС", AS_NAME);
            columnToggleContextMenu.addColumnToggleItem("КЭ сервера", HOST_KE);
            columnToggleContextMenu.addColumnToggleItem("Группа сопровождения ОС", OS_ADMIN);
            columnToggleContextMenu.addColumnToggleItem("Группа сопровождения", ASSIGNMENT_GROUP);


            // Обновление данных счетчика по отфильтрованным элементам
            serverSidecFilter.dataViewFiltered.addItemCountChangeListener(event -> {
                remove(filteredCount);
                filteredCount.setText("Отфильтровано: " + serverSidecFilter.dataViewFiltered.getItemCount());
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

        static class ServerSidecFilter {

            private GridListDataView<CIPSIDECData> dataViewFiltered;
            private String hostName;
            private String hostIP;
            private String hostDomain;
            private String sidecKE;
            private String sidecName;
            private String AS_KE;
            private String ASName;
            private String CreatedByDate;
            private String hostKE;
            private String OSAdmin;
            private String assignmentGroup;

            public ServerSidecFilter(GridListDataView<CIPSIDECData> dataView) {
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

            public void setSidecKE(String sidecKE) {
                this.sidecKE = sidecKE;
                this.dataViewFiltered.refreshAll();
            }

            public void setSidecName(String sidecName) {
                this.sidecName = sidecName;
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

            public boolean test(CIPSIDECData cipsidecData) {
                boolean matchesHostName = matches(cipsidecData.getHOST_NAME(), hostName);
                boolean matchesHostIP = matches(cipsidecData.getHOST_IP(), hostIP);
                boolean matchesHostDomain = matches(cipsidecData.getHOST_DOMAIN(), hostDomain);
                boolean matchesSidecKE = matches(cipsidecData.getSIDEC_KE(), sidecKE);
                boolean matchesSidecName = matches(cipsidecData.getSIDEC_NAME(), sidecName);
                boolean matchesAS_KE = matches(cipsidecData.getAS_KE(), AS_KE);
                boolean matchesASName = matches(cipsidecData.getAS_NAME(), ASName);
                boolean matchesCreatedByDate = matches(cipsidecData.getCREATED_BY_DATE(), CreatedByDate);
                boolean matchesHostKE = matches(cipsidecData.getHOST_KE(), hostKE);
                boolean matchesOSAdmin = matches(cipsidecData.getOS_ADMIN(), OSAdmin);
                boolean matchesAssignmentGroup = matches(cipsidecData.getASSIGNMENT_GROUP(), assignmentGroup);


                return matchesHostName && matchesHostIP && matchesHostDomain && matchesSidecKE && matchesSidecName &&
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

            void addColumnToggleItem(String label, Grid.Column<CIPSIDECData> column) {
                MenuItem menuItem = this.addItem(label, e -> {
                    column.setVisible(e.getSource().isChecked());
                });
                menuItem.setCheckable(true);
                menuItem.setChecked(column.isVisible());
            }
        }


        public static class ItemContextMenu extends GridContextMenu<CIPSIDECData> {
            public ItemContextMenu(Grid<CIPSIDECData> target) {
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