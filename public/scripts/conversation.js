const chat = {
    1: {
        text: 'Bienvenido!',
        next: 'secciones',
    },
    secciones: {
        text: 'A que seccion desea acceder?',
        options: [
            {
                text: 'Componentes',
                next: 'seccionComponentes'
            },
            {
                text: 'Monitores',
                next: 'seccionMonitores'
            }
        ]
    },
    seccionComponentes: {
        text: 'Mostrando componentes disponibles <br> I3 10100F <br> I5 12400F <br> I7 12700K <br> Queres ver a detalle alguno?',
        options: [
            {
                text: 'I3 10100F',
                next: 'componentesI3_10100F',
            },
            {
                text: 'I5 12400F',
                next: 'componentesI5_12400F',
            },
            {
                text: 'I7 12700K',
                next: 'componentesI7_12700K',
            },
        ]
    },
    componentesI3_10100F: {
        text: 'Mostrando I3 10100F <br> <img src="https://mexx-img-2019.s3.amazonaws.com/39007_1.jpeg" width=240px></img> <br> • Procesador de 4 nucleos / 8 hilos <br> • Caché: 6 MB Intel® Smart Cache <br> • Graficos integrados: No <br> • Controlador: DDR4 <br> • Compatible PCI-E 5.0 <br> • TDP: 65W',
        options: [
            {
                text: 'Salir',
                next: 1
            }
        ]
    },
    componentesI7_12700K: {
        text: 'Mostrando I7 12700K <br> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-12700k-scooler-s1700-0.jpg" width=240px></img> <br> • Procesador de 12 nucleos / 20 hilos <br> • Cache L3 25MB + L2 12MB <br> • Graficos integrados: Sí <br> • Controlador: DDR4 / DDR5 <br> • Compatible PCI-E 5.0 <br> • TDP: 125, Maximo: 190W',
        options: [
            {
                text: 'Salir',
                next: 1
            }
        ]
    },

    seccionMonitores: {
        text: 'Mostrando seccion monitores'
    }
}