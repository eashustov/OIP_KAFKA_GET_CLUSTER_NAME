package ru.sberbank.cip_corax_get_cluster_name.view;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import java.util.HashSet;
import java.util.function.Consumer;

public class FilterComboBox {

      static Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer,
                                        HashSet<String> ComboBoxItem,
                                        String ComboBoxPlaceholder) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");

        Label acceptedItemLabel = new Label("ИТ-услуга");
        acceptedItemLabel.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");
        ComboBox filterItemComboBox = new ComboBox<>();
        filterItemComboBox.setPlaceholder(ComboBoxPlaceholder);
        filterItemComboBox.setItems(ComboBoxItem);
        filterItemComboBox.setClearButtonVisible(true);
        filterItemComboBox.addThemeVariants(ComboBoxVariant.LUMO_SMALL);
        filterItemComboBox.setWidthFull();
        filterItemComboBox.getStyle().set("max-width", "100%");

        filterItemComboBox.addValueChangeListener(e -> filterChangeConsumer.accept((String) e.getValue()));

        VerticalLayout layout = new VerticalLayout(filterItemComboBox);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.START);

        return layout;
    }

}
