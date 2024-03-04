package ru.sberbank.cip_corax_get_cluster_name;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class OIPKafkaGetClusterName extends SpringBootServletInitializer {
    private static ConfigurableApplicationContext context;


    public static void main(String[] args) {
        context = SpringApplication.run(applicationClass, args);

        HeapControl ();

    }

    //Блок для запуска на WildFly
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(applicationClass);
    }

    private static Class<OIPKafkaGetClusterName> applicationClass = OIPKafkaGetClusterName.class;
//Блок для запуска на WildFly


    public static void HeapControl () {
        System.out.println("Heap контроль запущен");
        while (true) {

            // Sleep to emulate background work
            try {
                Thread.sleep(60000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.gc();
            System.out.println("Запущен GC");

            // Get current size of heap in bytes
            long heapSize = Runtime.getRuntime().totalMemory();

            // Get maximum size of heap in bytes. The heap cannot grow beyond this size.// Any attempt will result in an OutOfMemoryException.
            long heapMaxSize = Runtime.getRuntime().maxMemory();

            float usedHeapPrc = (float) heapSize / heapMaxSize;

            System.out.println("totalMemory() :" + heapSize + " maxMemory(): " + heapMaxSize + " usedHeapPrc: " + usedHeapPrc);

            if (usedHeapPrc > 0.80) {
                //Если использование heap больше 80 процентов, выполнить рестарт приложения

                restart();
            }

        }
    }

    public static void restart() {
        ApplicationArguments args = context.getBean(ApplicationArguments.class);

        Thread thread = new Thread(() -> {
            context.close();
            context = SpringApplication.run(OIPKafkaGetClusterName.class, args.getSourceArgs());
        });

        thread.setDaemon(false);
        thread.start();
    }


}
