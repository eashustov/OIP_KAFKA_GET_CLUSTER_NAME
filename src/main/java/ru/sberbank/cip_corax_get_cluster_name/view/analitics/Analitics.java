package ru.sberbank.cip_corax_get_cluster_name.view.analitics;

import com.github.appreciated.apexcharts.ApexCharts;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.MultiSelectComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import jakarta.annotation.security.PermitAll;
import ru.sberbank.cip_corax_get_cluster_name.repo.totalproductsharerepo.TotalProductShareRepo;
import ru.sberbank.cip_corax_get_cluster_name.view.MainLayout;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static ru.sberbank.cip_corax_get_cluster_name.view.analitics.TotalProductShareDonutChart.TotalProductShareDonutChartInit;

@PermitAll
@Route(value = "analitics", layout = MainLayout.class)
@PageTitle("Аналитика по серверам выданных из ДИ за период")
public class Analitics extends VerticalLayout {

    TotalProductShareRepo TotalProductShareRepo;
     private H4 header;
    ApexCharts TotalProductShareDonutChart;
    ApexCharts lineChart;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    //Обьявление MultiComboBox выбора типа ИТ услуги для прорисовки
    private MultiSelectComboBox<String> typeAffectedItemMultiComboBox;

    //Обьявление ComboBox выбора списка типа ИТ услуги для прорисовки
    List <String> selectedAffectedItemList;

    //Обьявления уровня всей формы
    FormLayout formLayout;

    //Данные по ИТ услугам
    List<String> incLabelsDataBar = Arrays.asList("«Platform V Corax» (CI04085569)", "SKeeper (CI02021300)",
            "SIDEC (CI04452790)", "Apache Kafka (CI02192117)", "SOWA (CI02192118)",
            "IBM WebSphere MQ (CI02021291)", "IBM DataPower (CI02021290)", "IBM Websphere MB (CI02192119)",
            "Интеграционные платформы серверов приложений (CI00737140)",
            "IBM WebSphere Application Server (CI02021299)",
            "Nginx (CI02021302)","SynGX (CI04178739)", "WildFly (CI02021292)", "Платформа управления контейнерами (Terra) (CI01563053)",
            "SynGX (CI04178739)", "IAGW (CI05435889)", "EAGLE (CI05879203)");

    //Список ИТ услуг для обработки - будут добавляться элементы - Элемент "Все"
    List<String> typeAffectedItemList = new ArrayList<>(incLabelsDataBar);
    public Analitics(TotalProductShareRepo TotalProductShareRepo) {
        this.TotalProductShareRepo = TotalProductShareRepo;
        this.header = new H4("Аналитика по серверам выданных из ДИ за период");
        this.typeAffectedItemMultiComboBox = new MultiSelectComboBox<>();
        setHorizontalComponentAlignment(Alignment.CENTER, header);
        LocalDate now = LocalDate.now(ZoneId.systemDefault());
        start_Date = new DatePicker("Начало");
        end_Date = new DatePicker("Конец");
        end_Date.setMax(now);
        end_Date.setValue(now);
        start_Date.setMax(now);
        start_Date.setValue(now.minusMonths(3));
        start_Date.addValueChangeListener(e -> end_Date.setMin(e.getValue()));
        end_Date.addValueChangeListener(e -> start_Date.setMax(e.getValue()));
        end_Date.setMin(start_Date.getValue());
        start_Date.setMax(end_Date.getValue());
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";//Кнопка поиска
        TextField searchField = new TextField();
        searchField.getElement().setAttribute("aria-label", "search");
        searchField.setPlaceholder("Найти инцидент");
        searchField.setClearButtonVisible(true);
        searchField.setPrefixComponent(VaadinIcon.SEARCH.create());

        TotalProductShareDonutChart = TotalProductShareDonutChartInit(TotalProductShareRepo,start_Date, end_Date, typeAffectedItemMultiComboBox.getValue());

        //Кнопка запроса аналитики
        Button buttonQuery = new Button();
        buttonQuery.setText("Запрос данных");


        //Выбор типа ИТ услуги - Мультивыбор
        typeAffectedItemList.add(0, "Все");
        typeAffectedItemMultiComboBox.setItems(typeAffectedItemList);
        typeAffectedItemMultiComboBox.setPlaceholder("Выбор ИТ услуги");

        selectedAffectedItemList = new ArrayList<>(typeAffectedItemMultiComboBox.getValue());

        //Отображение. Добавление компонентов

        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonQuery, searchField);
        dateLayout.setVerticalComponentAlignment(Alignment.END, start_Date, end_Date, buttonQuery, searchField);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);
        setHorizontalComponentAlignment(Alignment.CENTER, typeAffectedItemMultiComboBox);

        formLayout = new FormLayout();
        formLayout.setResponsiveSteps(new FormLayout.ResponsiveStep("0", 2));
        formLayout.setSizeUndefined();

        add(header, dateLayout);

        formLayout.add(TotalProductShareDonutChart);
        add(formLayout);
    }

}




