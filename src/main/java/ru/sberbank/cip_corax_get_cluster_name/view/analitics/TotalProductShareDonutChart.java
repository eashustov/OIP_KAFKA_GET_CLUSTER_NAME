package ru.sberbank.cip_corax_get_cluster_name.view.analitics;

import com.github.appreciated.apexcharts.ApexCharts;
import com.github.appreciated.apexcharts.ApexChartsBuilder;
import com.github.appreciated.apexcharts.config.builder.*;
import com.github.appreciated.apexcharts.config.chart.Type;
import com.github.appreciated.apexcharts.config.chart.builder.ToolbarBuilder;
import com.github.appreciated.apexcharts.config.chart.builder.ZoomBuilder;
import com.github.appreciated.apexcharts.config.chart.toolbar.Tools;
import com.github.appreciated.apexcharts.config.legend.HorizontalAlign;
import com.github.appreciated.apexcharts.config.legend.Position;
import com.github.appreciated.apexcharts.config.plotoptions.builder.PieBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.pie.builder.DonutBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.pie.builder.LabelsBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.pie.builder.NameBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.pie.builder.TotalBuilder;
import com.github.appreciated.apexcharts.config.responsive.builder.OptionsBuilder;
import com.github.appreciated.apexcharts.config.subtitle.Align;
import com.vaadin.flow.component.datepicker.DatePicker;
import lombok.SneakyThrows;
import ru.sberbank.cip_corax_get_cluster_name.domain.ICIPTotalProductShareDataCount;
import ru.sberbank.cip_corax_get_cluster_name.repo.totalproductsharerepo.TotalProductShareRepo;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class TotalProductShareDonutChart {
    static List<String> labelsDataDonut;
    static List<Double> seriesDataDonut;
    static DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    public static ApexCharts TotalProductShareDonutChartInit(TotalProductShareRepo TotalProductShareRepo, DatePicker start_Date,
                                                             DatePicker end_Date,
                                                             Set<String> typeAffectedItemMultiComboBoxValue) {
        //Обьявление ComboBox выбора списка типа ИТ услуги для прорисовки
        List<String> selectedAffectedItemList;

        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);
        if (typeAffectedItemMultiComboBoxValue.isEmpty()) getTotalCountIncAnaliticsData(start_Date, end_Date, TotalProductShareRepo);

        ApexCharts donutChart = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get()
                        .withType(Type.DONUT)
                        .withZoom(ZoomBuilder.get()
                                .withEnabled(true)
                                .withAutoScaleYaxis(true)
                                .build())
                        .withToolbar(ToolbarBuilder.get()
                                .withShow(true)
                                .withTools(new Tools())
                                .build())
//                        .withOffsetX(-100.0)
                        .withOffsetY(-30.0) //-30 Это смешение вверх
                        .build())
                .withTitle(TitleSubtitleBuilder.get()
                        .withText("Количество выданных серверов за период " + periodDate)
                        .withAlign(Align.CENTER)
                        .build())
                .withPlotOptions(PlotOptionsBuilder.get().withPie(PieBuilder.get()
                                .withDonut(DonutBuilder.get()
                                        .withLabels(LabelsBuilder.get()
                                                .withShow(true)
                                                .withName(NameBuilder.get().withShow(true).build())
                                                .withTotal(TotalBuilder.get().withShow(true).withLabel("Всего").build())
                                                .build())
                                        .build())
                                .build())
                        .build())
                .withLegend(LegendBuilder.get()
                        .withPosition(Position.BOTTOM)
                        .withHorizontalAlign(HorizontalAlign.CENTER)
//                        .withHeight(10.0)
//                        .withFloating(true)
//                        .withFontSize("15")
//                        .withOffsetX(0.0)
                        .withOffsetY(5.0)
                        .build())
//                .withSeries(seriesDataDonut.stream().toArray(Double[]::new))
//                .withLabels(labelsDataDonut.stream().toArray(String[]::new))
                .withResponsive(ResponsiveBuilder.get()
                        .withBreakpoint(480.0)
                        .withOptions(OptionsBuilder.get()
                                .withLegend(LegendBuilder.get()
                                        .withPosition(Position.BOTTOM)
                                        .build())
                                .build())
                        .build())
                .build();

        donutChart.setColors("#FF0000", "#800000", "#FF8C00", "#808000", "#00FF00", "#008000",
                "#00FFFF", "#008080", "#0000FF", "#000080", "#800080", "#FF00FF", "#808080", "#000000");
        donutChart.setMaxWidth("100%");
        donutChart.setWidth("900px");
        donutChart.setMaxHeight("100%");
        donutChart.setHeight("600px");

        selectedAffectedItemList = new ArrayList<>(typeAffectedItemMultiComboBoxValue);

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            donutChart.setSeries(seriesDataDonut.toArray(Double[]::new));
            donutChart.setLabels(labelsDataDonut.toArray(String[]::new));
        } else {
            try {
                donutChart.setSeries(selectedAffectedItemList.stream()
                        .filter(e -> labelsDataDonut.contains(e))
                        .map(e -> seriesDataDonut.get(labelsDataDonut.indexOf(e)))
                        .toList()
                        .toArray(Double[]::new));
                donutChart.setLabels(selectedAffectedItemList.stream()
                        .filter(e -> labelsDataDonut.contains(e))
                        .map(e -> labelsDataDonut.get(labelsDataDonut.indexOf(e)))
                        .toList()
                        .toArray(String[]::new));
            } catch (Exception E) {
                E.printStackTrace();
            }
        }
        return donutChart;
    }

    @SneakyThrows
    private static void getTotalCountIncAnaliticsData(DatePicker start_Date, DatePicker end_Date, TotalProductShareRepo TotalProductShareRepo) {

        String startDate;
        String endDate;

        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";

        seriesDataDonut = TotalProductShareRepo.findIncHandleByAffectedItemCount(startDate, endDate)
                .stream()
                .map(t -> t.getCount().doubleValue())
                .collect(Collectors.toList());

        labelsDataDonut = TotalProductShareRepo.findIncHandleByAffectedItemCount(startDate, endDate)
                .stream()
                .map(ICIPTotalProductShareDataCount::getHPC_Affected_Item_Name)
                .collect(Collectors.toList());
    }
}


