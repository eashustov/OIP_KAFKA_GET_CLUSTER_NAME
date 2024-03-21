package ru.sberbank.cip_corax_get_cluster_name.view.analitics;

import com.github.appreciated.apexcharts.ApexCharts;
import com.github.appreciated.apexcharts.ApexChartsBuilder;
import com.github.appreciated.apexcharts.config.builder.*;
import com.github.appreciated.apexcharts.config.chart.Type;
import com.github.appreciated.apexcharts.config.chart.builder.ZoomBuilder;
import com.github.appreciated.apexcharts.config.grid.builder.RowBuilder;
import com.github.appreciated.apexcharts.config.markers.builder.HoverBuilder;
import com.github.appreciated.apexcharts.config.stroke.Curve;
import com.github.appreciated.apexcharts.config.subtitle.Align;
import com.github.appreciated.apexcharts.helper.Series;
import com.vaadin.flow.component.datepicker.DatePicker;
import ru.sberbank.cip_corax_get_cluster_name.domain.ICIPProductPerMonthData;
import ru.sberbank.cip_corax_get_cluster_name.repo.productpermonthrepo.ProductPerMonthRepo;

import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

public class ProductPerMonthLineChart {
    static DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    static TreeSet<String>labels = new TreeSet<>();

    private static Map<String,Map<String, Integer>> assignmentGroupMapToMonthData;

    public static ApexCharts ProductPerMonthLineChartInit(ProductPerMonthRepo productPerMonthRepo,
                                                          DatePicker start_Date,
                                                          DatePicker end_Date,
                                                          Set<String> typeAffectedItemMultiComboBoxValue) {
        assignmentGroupMapToMonthData = getTotalCounPerMonthAnaliticsData(productPerMonthRepo, start_Date, end_Date);

        //Обьявление ComboBox выбора списка типа ИТ услуги для прорисовки
        List<String> selectedAffectedItemList;

        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);
        ApexCharts productPerMonthLineChart = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get()
                        .withType(Type.LINE)
                        .withZoom(ZoomBuilder.get()
                                .withEnabled(true)
                                .build())
                        .build())
                .withStroke(StrokeBuilder.get()
                        .withCurve(Curve.SMOOTH)
                        .build())
                .withMarkers(MarkersBuilder.get()
                        .withSize(1.0, 1.0)
                        .withHover(HoverBuilder.get().build())
                        .build())
                .withTitle(TitleSubtitleBuilder.get()
                        .withText("Динамика выдачи серверов по месяцам за период " + periodDate)
                        .withAlign(Align.CENTER)
                        .build())
                .withGrid(GridBuilder.get()
                        .withRow(RowBuilder.get()
                                .withColors("#f3f3f3", "transparent")
                                .withOpacity(0.5).build()
                        ).build())
                .build();
        productPerMonthLineChart.setColors("#FF0000", "#800000", "#FF8C00", "#808000", "#00FF00", "#008000",
                "#00FFFF", "#008080", "#0000FF", "#000080", "#800080", "#FF00FF", "#808080", "#000000");
        productPerMonthLineChart.setMaxWidth("100%");
        productPerMonthLineChart.setWidth("900px");
        productPerMonthLineChart.setMaxHeight("100%");
        productPerMonthLineChart.setHeight("600px");

        selectedAffectedItemList = new ArrayList<>(typeAffectedItemMultiComboBoxValue);

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            productPerMonthLineChart.setSeries(SetSeries(assignmentGroupMapToMonthData).toArray(Series[]::new));
            productPerMonthLineChart.setXaxis(XAxisBuilder.get()
                    .withCategories(new ArrayList<String>(labels)).build());
        } else {
            productPerMonthLineChart.setSeries(SetSeries(selectedAffectedItemList.stream()
                    .filter(e -> assignmentGroupMapToMonthData.containsKey(e))
//                    .map(e->assignmentGroupMapToMonthData.get(e))
                    .collect(Collectors.toMap(e -> e, e -> assignmentGroupMapToMonthData.get(e)))).toArray(Series[]::new));
            productPerMonthLineChart.setXaxis(XAxisBuilder.get()
                    .withCategories(new ArrayList<String>(labels)).build());
        }

        return productPerMonthLineChart;
    }

    private static List<Series> SetSeries(Map<String, Map<String, Integer>> valueMapToMonthData) {
        // Получение Series для данных групп
        List<Series> setSeries = new ArrayList<>();
        valueMapToMonthData.entrySet()
                .forEach(e -> {
                    String seriesName = e.getKey();
                    List<Double> seriesData = e.getValue().entrySet()
                            .stream()
                            .map(z -> z.getValue().doubleValue())
                            .toList();
                    setSeries.add(new Series<>(seriesName, seriesData.toArray(Double[]::new)));
                });
        return setSeries;
    }

    private static Map<String,Map<String, Integer>> getTotalCounPerMonthAnaliticsData(ProductPerMonthRepo productPerMonthRepo,
                                                                                      DatePicker start_Date,
                                                                                      DatePicker end_Date){

        Map<String,Map<String, Integer>> valueMapToMonthData = new HashMap<>();
        Map<String, Integer> monthYearCountInc = new HashMap<>();
        String startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        String endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        List<String> itemExecute = new ArrayList<>();

        //По ИТ услуге
        List<ICIPProductPerMonthData> TotalCounPerMonthAnaliticsData = productPerMonthRepo
                .findIncAffectedItemCountPerMonth(startDate, endDate);
        ListIterator<ICIPProductPerMonthData> totalCounPerMonthAnaliticsDataIter = TotalCounPerMonthAnaliticsData.listIterator();
        while (totalCounPerMonthAnaliticsDataIter.hasNext()) {
            monthYearCountInc.clear();
            String affectedItemName = totalCounPerMonthAnaliticsDataIter.next().getHPC_Affected_Item_Name();

            if (!itemExecute.contains(affectedItemName)) {

                for (ICIPProductPerMonthData e : TotalCounPerMonthAnaliticsData) {
                    if (e.getHPC_Affected_Item_Name().equals(affectedItemName)) {
                        String year = e.getYear_();
                        String month = e.getMonth_Number();
                        Integer countSvr = e.getCount_Srv();
                        monthYearCountInc.put(year + " " + month, countSvr);
                    }
                }

                itemExecute.add(affectedItemName);


                valueMapToMonthData.put(affectedItemName, new TreeMap<String, Integer>(monthYearCountInc));
            }
        }

        //Определение временной шкалы - Labels

        labels.clear();

        List<Set<String>> alllabels;

        alllabels = valueMapToMonthData.values()
                .stream()
                .map(Map::keySet)
                .toList();

        alllabels.stream()
                .forEach(l-> {
                    for (String dataLabel:l) {

                        labels.add(dataLabel);

                    }
                });


        //Определение и форматирование данных для назначенных групп
        valueMapToMonthData.values()
                .stream()
                .forEach(e->{
                    for (String key:labels) {
                        if (!e.containsKey(key))
                            e.put(key, 0);
                    }
                });
//        System.out.println(valueMapToMonthData);
        return valueMapToMonthData;

    }
}