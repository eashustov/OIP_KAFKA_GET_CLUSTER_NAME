package ru.sberbank.cip_corax_get_cluster_name.view;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.AnchorTarget;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.LumoUtility;
import ru.sberbank.cip_corax_get_cluster_name.security.SecurityService;


public class MainLayout extends AppLayout {
    private final SecurityService securityService;

    public MainLayout(SecurityService securityService) {
        this.securityService = securityService;
        createHeader();
        createDrawer();
    }

    private void createHeader() {
        H2 space = new H2(" ");
        H2 logo = new H2("Управление инфраструктурой серверов приложений");
//        logo.addClassNames(
//                LumoUtility.FontSize.LARGE,
//                LumoUtility.Margin.MEDIUM);

        String u = securityService.getAuthenticatedUser().getUsername();
        Button logout = new Button("Выход " + u, e -> securityService.logout());

        var header = new HorizontalLayout(new DrawerToggle(), space, logo, logout);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(space);
        header.expand(logo);
        header.setWidthFull();
//        header.addClassNames(
//                LumoUtility.Padding.Vertical.NONE,
//                LumoUtility.Padding.Horizontal.MEDIUM);

        addToNavbar(header);

    }

    private void createDrawer() {
        addToDrawer(new VerticalLayout(
                new RouterLink("Серверы Corax выданные из ДИ за период", MainView.class)
                ,
                new RouterLink("Серверы SIDEC выданные из ДИ за период", SidecView.class)
                ,
                new RouterLink("Серверы Skeeper выданные из ДИ за период", SkeeperView.class)
                ,
                new RouterLink("Серверы SOWA выданные из ДИ за период", SOWAView.class)
                ,
                new RouterLink("Аналитика по серверам выданных из ДИ за период", Analitics.class)
//                new Anchor("https://google.com", "Аналитика", AnchorTarget.BLANK)
        ));
    }
}