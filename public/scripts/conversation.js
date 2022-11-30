const chat = {
  1: {
    text: "Bienvenido! Vamos a empezar a armar tu PC",
    next: "primeraEtapa",
  },
  primeraEtapa: {
    text: "Primero lo primero. Con que presupuesto contas? <br> Haciendo click en las fotos de los productos, te llevara al buscador de precios, recordalo!",
    options: [
      {
        text: "Bajo",
        next: "presupuestoBajoSecciones",
      },
      {
        text: "Medio",
        next: "presupuestoMedioSecciones",
      },
      {
        text: "Alto",
        next: "presupuestoAltoSecciones",
      },
    ],
  },

  presupuestoBajoSecciones: {
    text: "Perfecto. Que uso le vas a dar?",
    options: [
      {
        text: "Oficina/Estudio",
        next: "primeraSeccionBajoOficina",
      },
      {
        text: "Gaming",
        next: "primeraSeccionBajoGaming",
      },
    ],
  },

  presupuestoMedioSecciones: {
    text: "Perfecto. Que uso le vas a dar?",
    options: [
      {
        text: "Oficina/Estudio",
        next: "primeraSeccionMedioOficina",
      },
      {
        text: "Gaming",
        next: "primeraSeccionMedioGaming",
      },
    ],
  },


  primeraSeccionBajoGaming: {
    text: "En ese caso te recomendamos un procesador AMD. Debido a que cuentan con graficos integrados mas potentes, perfectos para gaming liviano / eSports.",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionBajoGaming",
      },
    ],
  },

  segundaSeccionBajoGaming: {
    text: 'Te recomendamos elegir el siguiente procesador. <br> Ryzen 5 4600G. Precio aprox: $29000 <br> <a href="https://www.hardgamers.com.ar/search?text=Ryzen+5+4600G" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.venex.com.ar/products_images/thumb/1653412039_1638466775_sdfdgfeshsd.jpg" width="150">' ,
    options: [
          {
            text: "Ryzen 5 4600G",
            next: "procesadorR5_4600G",
          },
    ]
  },

  procesadorR5_4600G: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Ryzen+5+4600G" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.venex.com.ar/products_images/thumb/1653412039_1638466775_sdfdgfeshsd.jpg" width="150"></a> <br><b> Ventajas </b> <br> Graficos integrados Vega 7 <br> Posibilidad de grafica dedicada a futuro <br> <b> Desventajas </b> <br> Se deben poner rams en dual channel para rendimiento optimo',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorR5_4600GEtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoGaming"
    },
    ]
  },

  procesadorR5_4600GEtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER ASUS PRIME A320M-K AM4. Precio aprox. $13000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=A320M-K"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-asus-prime-a320mk-am4-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorR5_4600GEtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoGaming",
      },
    ]
  },

  procesadorR5_4600GEtapaMemorias: {
    text: 'Procederemos a elegir las memorias. En caso de los graficos integrados de los procesadores AMD, estos se benefician enormemente del dual channel y de velocidad de memorias altas <br> En caso de Gaming, recomendamos un minimo de 16GB en Dual Channel <br><b> MEMORIA 8GB DDR4 3200 PATRIOT. Precio aprox: $9000 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Ram+DDR4+Patriot+3200" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://clickarequito.com.ar/wp-content/uploads/2022/03/ram-patriot-value.png" width="150"> </a> <br> Buena velocidad',
    options: [
      {
        text: "MEMORIA PATRIOT 8GB DDR4 3200Mhz",
        next: "procesadorR5_4600GEtapaFuente",
      },
    ]
  },

  procesadorR5_4600GEtapaFuente: {
    text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
    options: [
      {
        text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
        next: "procesadorR5_4600GEtapaGabineteFuente1"
      },
      { 
        text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
        next: "procesadorR5_4600GEtapaGabineteFuente2"
      },
    ]
  },

  procesadorR5_4600GEtapaGabineteFuente1: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalR5_4600GFuente1",
    }
    ]
  },

  procesadorR5_4600GEtapaGabineteFuente2: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalR5_4600GFuente2",
    }
    ]
  },

  listadoFinalR5_4600GFuente1: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Ryzen 5 4600G <br> <b>Mother</b>: ASUS PRIME A320M-K AM4 <br> <b>Memoria ram</b>: Patriot DDR4 3200mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $83000-$86000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },

  listadoFinalR5_4600GFuente2: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Ryzen 5 4600G <br> <b>Mother</b>: ASUS PRIME A320M-K AM4 <br> <b>Memoria ram</b>: Patriot DDR4 3200mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $83000-$86000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },


  primeraSeccionBajoOficina: {
    text: "En ese caso te recomendamos un procesador INTEL. Debido a que cuentan con graficos integrados y tienen precios más economicos.",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionBajoOficina",
      },
    ],
  },

  segundaSeccionBajoOficina: {
    text: "Te recomendamos elegir entre estos procesadores. Elegi uno para ver sus ventajas y desventajas <br> Intel Celeron G6900. Precio aprox: $13000 <br> Intel I3 10100 (Normal, sin F). Precio aprox. $27000. <br> Intel I3 12100 (Normal, sin F). Precio aprox. $32000",
    options: [
          {
            text: "Celeron G6900",
            next: "procesadorG6900",
          },
          {
            text: "I3 10100",
            next: "procesadorI3_10100",
          },
          {
            text: "I3 12100",
            next: "procesadorI3_12100",
          },
    ]
  },

  procesadorG6900: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Intel+Celeron+G6900" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g6900-s1700-0.jpg" width="150"></a> <br><b> Ventajas </b> <br> Economico <br> LGA 1700. Ultima generación de intel <br> Altamente actualizable <br> <b> Desventajas </b> <br> Solamente posee 2 nucleos <br> Baja potencia general',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorG6900EtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficinaIntel"
    },
    ]
  },

  procesadorG6900EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoOficinaIntel",
      },
    ]
  },

  procesadorG6900EtapaMemorias: {
    text: 'Procederemos a elegir las memorias. En este caso podes optar por memorias DDR4 mas economicas o DDR5 (mas actuales). Te listamos las recomendadas <br> Tener en cuenta que para tareas de oficina se recomiendan como minimo 8gb de memoria ram. Con un recomendado de 16gb <br><b> MEMORIA 8GB DDR5 4800 CRUCIAL. Precio aprox: $9000 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Memoria+Ram+ddr5+Crucial" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://http2.mlstatic.com/D_NQ_NP_604319-MLA50526185925_062022-O.webp" width="150"> </a> <br> DDR5 <br> Buena velocidad <br> <b> MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
    options: [
      {
        text: "MEMORIA 8GB DDR5 4800 CRUCIAL",
        next: "procesadorG6900EtapaFuenteMemoria1",
      },
      {
        text: "MEMORIA 8GB DDR4 2666 HIKVISION",
        next: "procesadorG6900EtapaFuenteMemoria2",
      },
    ]
  },

    procesadorG6900EtapaFuenteMemoria1: {
      text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
      options: [
        {
          text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
          next: "procesadorG6900EtapaGabineteMemoria1Fuente1"
        },
        { 
          text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
          next: "procesadorG6900EtapaGabineteMemoria1Fuente2"
        },
      ]
    },

    procesadorG6900EtapaFuenteMemoria2: {
      text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
      options: [
        {
          text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
          next: "procesadorG6900EtapaGabineteMemoria2Fuente1"
        },
        { 
          text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
          next: "procesadorG6900EtapaGabineteMemoria2Fuente2"
        },
      ]
    },

    procesadorG6900EtapaGabineteMemoria1Fuente1: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria1Fuente1",
      }
      ]
    },

    procesadorG6900EtapaGabineteMemoria1Fuente2: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria1Fuente2",
      }
      ]
    },

    procesadorG6900EtapaGabineteMemoria2Fuente1: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria2Fuente1",
      }
      ]
    },

    procesadorG6900EtapaGabineteMemoria2Fuente2: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria2Fuente2",
      }
      ]
    },

    listadoFinalG6900Memoria1Fuente1: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel Celeron G6900 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Crucial DDR5 4800Mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $63000-$66000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalG6900Memoria1Fuente2: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel Celeron G6900 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Crucial DDR5 4800Mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake 500W Smart White 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $63000-$66000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalG6900Memoria2Fuente1: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel Celeron G6900 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $63000-$66000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalG6900Memoria2Fuente2: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel Celeron G6900 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake 500W Smart White 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $63000-$66000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

  procesadorI3_10100: {
    text: '<a href="https://gorilagames.com/42610-componentes-de-pc-intel-procesador-core-i3-10100-lga1200-bulk" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.venex.com.ar/products_images/1593786609_ilu.jpg" width="150"></a> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> <b> Desventajas </b> <br> LGA 1200. 10va generación, al actualizar, vas a necesitar otra mother. <br> Solo soporta memorias de hasta 2666mhz',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI3_10100EtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficinaIntel"
    },
    ]
  },

  procesadorI3_10100EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> Motherboard ASROCK H510M HVS R2.0 S1200. Precio aprox. $16500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H510M S1200"> <img src="https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/MB222.png" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorI3_10100EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoOficinaIntel",
      },
    ]
  },

  procesadorI3_10100EtapaMemorias: {
    text: 'En el caso de este procesador, solo soporta memorias de hasta 2666mhz (no te preocupes si encontras de mas velocidad a menor precio, se ajustaran a la velocidad maxima permitida por el procesador) <br> te recomendamos las siguientes memorias: MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
    options: [
      {
        text: "Seleccionar",
        next: "procesadorI3_10100EtapaFuente",
      },
    ]
  },

  procesadorI3_10100EtapaFuente: {
    text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
    options: [
      {
        text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
        next: "procesadorI3_10100EtapaGabineteFuente1"
      },
      { 
        text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
        next: "procesadorI3_10100EtapaGabineteFuente2"
      },
    ]
  },

  procesadorI3_10100EtapaGabineteFuente1: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalI3_10100Fuente1",
    }
    ]
  },

  procesadorI3_10100EtapaGabineteFuente2: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalI3_10100Fuente2",
    }
    ]
  },

  listadoFinalI3_10100Fuente1: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I3 10100 <br> <b>Mother</b>: ASROCK H510M HVS R2.0 S1200 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $83000-$86000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },

  listadoFinalI3_10100Fuente2: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I3 10100 <br> <b>Mother</b>: ASROCK H510M HVS R2.0 S1200 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake Smart 500W 80+ White <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $83000-$86000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },


  procesadorI3_12100: {
    text: '<a href="https://www.noxiestore.com/procesadores/intel/13090-microprocesador-intel-i3-12100-12mb-430-ghz.html" target="_blank" style= "text-decoration: none; color:#000"><img src="https://s3-sa-east-1.amazonaws.com/saasargentina/u7AzxFe3z8iuTJdXIP9P/imagen" width="150"></a> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> LGA 1700. Ultima generacion de Intel <br> Altamente actualizable <br> Soporta memorias DDR5 <br> <b> Desventajas </b><br> No tan economico <br> Mother mas cara ya que es de nueva generación' ,
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI3_12100EtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficina"
    },
    ]
  },

  procesadorI3_12100EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorI3_12100EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoOficina",
      },
    ]
  },

  procesadorI3_12100EtapaMemorias: {
    text: 'Procederemos a elegir las memorias. En este caso podes optar por memorias DDR4 mas economicas o DDR5 (mas actuales). Te listamos las recomendadas <br> Tener en cuenta que para tareas de oficina se recomiendan como minimo 8gb de memoria ram. Con un recomendado de 16gb <br><b> MEMORIA 8GB DDR5 4800 CRUCIAL. Precio aprox: $9000 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Memoria+Ram+ddr5+Crucial" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://http2.mlstatic.com/D_NQ_NP_604319-MLA50526185925_062022-O.webp" width="150"> </a> <br> DDR5 <br> Buena velocidad <br> <b> MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
    options: [
      {
        text: "MEMORIA 8GB DDR5 4800 CRUCIAL",
        next: "procesadorI3_12100EtapaFuenteMemoria1",
      },
      {
        text: "MEMORIA 8GB DDR4 2666 HIKVISION",
        next: "procesadorI3_12100EtapaFuenteMemoria2",
      },
    ]
  },

    procesadorI3_12100EtapaFuenteMemoria1: {
      text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
      options: [
        {
          text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
          next: "procesadorI3_12100EtapaGabineteMemoria1Fuente1"
        },
        { 
          text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
          next: "procesadorI3_12100EtapaGabineteMemoria1Fuente2"
        },
      ]
    },

    procesadorI3_12100EtapaFuenteMemoria2: {
      text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
      options: [
        {
          text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
          next: "procesadorI3_12100EtapaGabineteMemoria2Fuente1"
        },
        { 
          text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
          next: "procesadorI3_12100EtapaGabineteMemoria2Fuente2"
        },
      ]
    },

    procesadorI3_12100EtapaGabineteMemoria1Fuente1: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalI3_12100Memoria1Fuente1",
      }
      ]
    },

    procesadorI3_12100EtapaGabineteMemoria1Fuente2: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalI3_12100Memoria1Fuente2",
      }
      ]
    },

    procesadorI3_12100EtapaGabineteMemoria2Fuente1: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria2Fuente1",
      }
      ]
    },

    procesadorI3_12100EtapaGabineteMemoria2Fuente2: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Memoria2Fuente2",
      }
      ]
    },

    listadoFinalI3_12100Memoria1Fuente1: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel I3 12100 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Crucial DDR5 4800Mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $89000-$93000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalI3_12100Memoria1Fuente2: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel I3 12100 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Crucial DDR5 4800Mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake 500W Smart White 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $89000-$93000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalI3_12100Memoria2Fuente1: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel I3 12100 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Corsair 450W 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $89000-$93000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },

    listadoFinalI3_12100Memoria2Fuente2: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel I3 12100 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake 500W Smart White 80+ <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $89000-$93000',
      options: [
        {
          text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Castro </a> ',
        },
        {
          text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
        },
            ]
    },



// Parte de Pablo

// Opcion de presupuesto medio

presupuestoMedioSecciones: {
    text: "Perfecto. Que uso le vas a dar?",
    options: [
      {
        text: "Oficina/Estudio",
        next: "primeraSeccionMedioOficina",
      },
      {
        text: "Gaming",
        next: "primeraSeccionMedioGaming",
      },
    ],
  },

  //Opcion de Oficina/Estudio

  primeraSeccionMedioOficina: {
    text: "Perfecto. Procederemos a elegir el procesador",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionMedioOficina",
      },
    ],
  },

  segundaSeccionMedioOficina: {
    text: "Te recomendamos elegir entre estos procesadores. Elegi uno para ver sus ventajas y desventajas <br> Ryzen 5 4600G. Precio aprox: $38000 <br> Intel I5 10400 (Normal, sin F). Precio aprox. $39000." ,
    options: [
          {
            text: "Ryzen 5 4600G",
            next: "procesadorR5_4600G",
          },
          {
            text: "I5 10400",
            next: "procesadorI5_10400",
          },
    ]
  },

  procesadorR5_4600GPMedio: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Ryzen+5+4600G" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.venex.com.ar/products_images/thumb/1653412039_1638466775_sdfdgfeshsd.jpg" width="150"></a> <br><b> Ventajas </b> <br> Graficos integrados Vega 7 <br> Posibilidad de grafica dedicada a futuro <br> <b> Desventajas </b> <br> Se deben poner rams en dual channel para rendimiento optimo',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorR5_4600GEtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionMedioOficina"
    },
    ]
  },

  procesadorI5_10400: {
    text: '<a href="https://www.binarystore.com.ar/componentes-pc/micros/237343-intel-core-i5-10400-6-nucleos-y-43ghz-c-grafica-integrada.html  " target="_blank" style= "text-decoration: none; color:#000"><img src="https://mla-s1-p.mlstatic.com/686262-MLA42885718700_072020-F.jpg" width="150"></a> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> 6 Nucleos / 12 Hilos <br> <b> Desventajas </b><br> Grafica integrada de poca potencia <br> Solo soporta ram de hasta 2666mhz',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI5_10400EtapaMotherMedioOficina",
    },
    {
      text: "Volver",
      next: "segundaSeccionMedioOficina"
    },
    ]
  },

  

  procesadorI5_10400EtapaMotherMedioOficina: {
    text: 'Para este armado, te recomendamos la siguiente mother, principalmente porque cuenta con cuatro modulos para memoria ram, lo cual la hace mas actualizable: <br><b> MOTHER ASUS PRIME B460M-A LGA 1200. Precio aprox. $19000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=B460M-A"> <img src="https://mla-s1-p.mlstatic.com/652089-MLA47770661399_102021-F.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorI5_10400EtapaMemoriasMedioOficina",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoGaming",
      },
    ]
  },

  procesadorI5_10400EtapaMemoriasMedioOficina: {
    text: 'En el caso de este procesador, solo soporta memorias de hasta 2666mhz (no te preocupes si encontras de mas velocidad a menor precio, se ajustaran a la velocidad maxima permitida por el procesador) <br> Tambien te recomendamos que compres al menos dos modulos, para aprovechar el dual channel y además tener 16GB (2x8) <br> te recomendamos las siguientes memorias: MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
    options: [
      {
        text: "Seleccionar",
        next: "procesadorI5_10400EtapaFuenteMedioOficina",
      },
    ]
  },

  procesadorI5_10400EtapaFuenteMedioOficina: {
    text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE THERMALTAKE 600W 80+ SMART WHITE. Precio aprox. $13000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+600w+Thermaltake" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-1229504.jpg" width="150"> <br>',
    options: [
      {
        text: 'FUENTE THERMALTAKE 600W 80+ SMART WHITE',
        next: "procesadorI5_10400EtapaGabineteMedioOficina"
      },
    ]
  },

  procesadorI5_10400EtapaGabineteMedioOficina: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire en caso de querer actualizar la PC. Igualmente, para tareas livianas, no tendras problemas con cualquier gabinete en general. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>Gabinete Thermaltake V200</b> Precio aprox. $15900 <br><a href="https://compragamer.com/producto/Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_10257" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32090_Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_133340c2-grn.jpg" width="150"> </a> <br><b>Gabinete Sharkoon Slider </b> Precio aprox. $11500 <br><a href="https://www.hardgamers.com.ar/search?text=gabinete+sharkoon" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/GAB273.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalI5_10400MedioOficina",
    }
    ]
  },

  listadoFinalI5_10400MedioOficina: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I5 10400 <br> <b>Mother</b>: ASUS PRIME B460M-A LGA 1200 <br> <b>Memoria ram</b>: Hikvision DDR4 2666mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> <b> Fuente</b>: Thermaltake 600w 80+ Smart White <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $100000-$110000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },


  primeraSeccionMedioGaming: {
    text: "Perfecto. Procederemos a elegir el procesador",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionMedioGaming",
      },
    ],
  },

  segundaSeccionMedioGaming: {
    text: 'Para este armado ya vamos a estar incluyendo una grafica dedicada (mucho mejor que los graficos integrados del procesador). Teniendo esto en cuenta, te recomendamos elegir el siguiente procesador. <br> I5 12400F. Precio aprox: $50000 <br> <a href="https://www.hardgamers.com.ar/search?text=Intel+I5+12400F" target="_blank" style= "text-decoration: none; color:#000"><img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7211279.jpg" width="150">' ,
    options: [
          {
            text: "I5 12400F",
            next: "procesadorI5_12400FMedioGaming",
          },
    ]
  },

  procesadorI5_12400FMedioGaming: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Intel+I5+12400F" target="_blank" style= "text-decoration: none; color:#000"><img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7211279.jpg" width="150"></a> <br><b> Ventajas </b> <br> 6 Nucleos / 12 Hilos <br> Ultima generación de intel <br> Altamente actualizable <br> <b> Desventajas </b> <br> No posee graficos dedicados (Se necesita si o si de una tarjeta grafica para que funcione',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI5_12400FEtapaMotherMedioGaming",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoGaming"
    },
    ]
  },

  procesadorI5_12400FEtapaMotherMedioGaming: {
    text: 'Para este armado, te recomendamos la siguiente mother <br> Tene en cuenta que al dia de la fecha(29/11/2022) no existen alternativas accesibles a mothers de 12va generación con 4 modulos de memoria ram. Esta en vos si queres invertir esa diferencia (aprox el doble) por esos modulos extras <br><b> MOTHER ASUS PRIME H610M-E LGA S1700. Precio aprox. $24500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M-E"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7394626.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorI5_12400FEtapaMemoriasMedioGaming",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoGaming",
      },
    ]
  },

  procesadorI5_12400FEtapaMemoriasMedioGaming: {
    text: 'Este procesador y mother soportan rams tanto DDR4 (viejas) como DDR5 (nuevas). En este armado vamos a recomendarte DDR5 ya que la diferencia de precio no es mucha. <br> Tambien te recomendamos que compres al menos dos modulos, para aprovechar el dual channel y además tener 16GB (2x8) <br> te recomendamos las siguientes memorias: MEMORIA 8GB DDR5 4800MHZ CRUCIAL. Precio aprox. $11000 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Crucial+DDR5" target="_blank" style= "text-decoration: none; color:#000"><img src="https://http2.mlstatic.com/D_NQ_NP_604319-MLA50526185925_062022-O.webp" width="150"> </a> <br> DDR5 <br> Buena velocidad',
    options: [
      {
        text: "Seleccionar",
        next: "procesadorI5_12400FEtapaGraficaMedioGaming",
      },
    ]
  },

  procesadorI5_12400FEtapaGraficaMedioGaming: {
    text: 'Como dijimos antes, para este procesador vamos a utilizar una grafica dedicada. Te dejamos estas dos opciones con sus ventajas y desventajas, tanto de la marca NVIDIA como AMD <br> <b> NVIDIA RTX 3050 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=3050" target="_blank" style= "text-decoration: none; color:#000"><img src="https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/1024.png" width="150"> </a> <br> Mejor CODEC para streaming o grabar <br> RTX <br> Mayor potencia para RTX en comparación a AMD <br> Mejores drivers <br> <b> AMD RX 6600 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=RX+6600" target="_blank" style= "text-decoration: none; color:#000"><img src="https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/rx%206600%20figther.png" width="150"> <br> Mayor potencia bruta en comparación a la 3050 (+29% de fps) <br><br> <a href="https://www.youtube.com/watch?v=_n_1-NAwG0M&ab_channel=3DJuegosLATAM" target="_blank" style="text-decoration:none"> Que es RTX? </a> ',
    options: [
      {
        text: "RTX 3050",
        next: "procesadorI5_12400FEtapaFuenteGrafica1MedioGaming"
      },
      {
        text: "RX 6600",
        next: "procesadorI5_12400FEtapaFuenteGrafica2MedioGaming"
      },
    ]
  },

  procesadorI5_12400FEtapaFuenteGrafica1MedioGaming: {
    text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE THERMALTAKE 600W 80+ SMART WHITE. Precio aprox. $13000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+600w+Thermaltake" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-1229504.jpg" width="150"> <br>',
    options: [
      {
        text: 'FUENTE THERMALTAKE 600W 80+ SMART WHITE',
        next: "procesadorI5_12400FEtapaGabineteGrafica1MedioGaming"
      },
    ]
  },

  procesadorI5_12400FEtapaFuenteGrafica2MedioGaming: {
    text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE THERMALTAKE 600W 80+ SMART WHITE. Precio aprox. $13000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+600w+Thermaltake" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-1229504.jpg" width="150"> <br>',
    options: [
      {
        text: 'FUENTE THERMALTAKE 600W 80+ SMART WHITE',
        next: "procesadorI5_12400FEtapaGabineteGrafica2MedioGaming"
      },
    ]
  },

  procesadorI5_12400FEtapaGabineteGrafica1MedioGaming: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire en caso de querer actualizar la PC. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> Solamente asegurate de que entre el ancho de tu tarjeta grafica. <br> <b>Gabinete Thermaltake V200</b> Precio aprox. $15900 <br><a href="https://compragamer.com/producto/Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_10257" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32090_Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_133340c2-grn.jpg" width="150"> </a> <br><b>Gabinete Sharkoon Slider </b> Precio aprox. $11500 <br><a href="https://www.hardgamers.com.ar/search?text=gabinete+sharkoon" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/GAB273.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalI5_12400FMedioGamingGrafica1",
    }
    ]
  },

  procesadorI5_12400FEtapaGabineteGrafica2MedioGaming: {
    text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire en caso de querer actualizar la PC. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> Solamente asegurate de que entre el ancho de tu tarjeta grafica. <br> <b>Gabinete Thermaltake V200</b> Precio aprox. $15900 <br><a href="https://compragamer.com/producto/Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_10257" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32090_Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_133340c2-grn.jpg" width="150"> </a> <br><b>Gabinete Sharkoon Slider </b> Precio aprox. $11500 <br><a href="https://www.hardgamers.com.ar/search?text=gabinete+sharkoon" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/GAB273.jpg" width="150"> </a>',
    options: [{
        text: "Siguiente",
        next: "listadoFinalI5_12400FMedioGamingGrafica2",
    }
    ]
  },

  listadoFinalI5_12400FMedioGamingGrafica1: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I5 12400F <br> <b>Mother</b>: ASUS PRIME H610M-E LGA S1700 <br> <b>Memoria ram</b>: Crucial 4800mhz DDR5 <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: RTX 3050<br> <b> Fuente</b>: Thermaltake 600w 80+ Smart White <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $175000-$185000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },


  listadoFinalI5_12400FMedioGamingGrafica2: {
    text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I5 12400F <br> <b>Mother</b>: ASUS PRIME H610M-E LGA S1700 <br> <b>Memoria ram</b>: Crucial 4800mhz DDR5 <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: RX 6600<br> <b> Fuente</b>: Thermaltake 600w 80+ Smart White <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $175000-$185000',
    options: [
      {
        text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
      },
      {
        text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
      },
          ]
  },

  presupuestoAltoSecciones: {
    text: "Perfecto. Que uso le vas a dar?",
    options: [
      {
        text: "Gaming",
        next: "primeraSeccionAltoGaming",
      },
    ],
  },

  primeraSeccionAltoGaming: {
    text: "Perfecto. Procederemos a elegir el procesador",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionAltoGaming",
      },
    ],
  },


segundaSeccionAltoGaming: {
  text: "Te recomendamos elegir entre estos procesadores. Elegi uno para ver sus ventajas y desventajas <br> Ryzen 9 5900X. Precio aprox: $115000 <br> Intel I7 12700F. Precio aprox. $97000." ,
  options: [
        {
          text: "Ryzen 9 5900X",
          next: "procesadorR9_5900XAltoGaming",
        },
        {
          text: "I7 12700F",
          next: "procesadorI7_12700FAltoGaming",
        },
  ]
},

procesadorR9_5900XAltoGaming: {
  text: '<a href="https://www.hardgamers.com.ar/search?text=Ryzen+9+5900X" target="_blank" style= "text-decoration: none; color:#000"><img src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-4553579.jpg" width="150"></a> <br><b> Ventajas </b> <br> 12 Nucleos / 24 Hilos <br> Turbo hasta 4.8ghz <br> <b> Desventajas </b> <br> Usa rams DDR4',
  options: [
  {
    text: "Seleccionar",
    next: "procesadorR9_5900XEtapaMotherAltoGaming",
  },
  {
    text: "Volver",
    next: "segundaSeccionAltoGaming"
  },
  ]
},

procesadorR9_5900XEtapaMotherAltoGaming: {
  text: 'Para este armado, te recomendamos la siguiente mother, la cual cuenta con cuatro modulos de memoria ram y wifi <br><b> MOTHER ASUS TUF GAMING A520M-PLUS WIFI AM4. Precio aprox. $28500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=A520M-PLUS"> <img src="https://gorilagames.com/img/Public/1019-producto-mother-asus-tuf-gaming-a520m-plus-wifi-1-4124.jpg" width="150"></a>',
  options: [
    {
      text: "Siguiente",
      next: "procesadorR9_5900XEtapaMemoriasAltoGaming",
    },
    {
      text: "Volver a seleccionar procesador",
      next: "segundaSeccionBajoGaming",
    },
  ]
},

procesadorR9_5900XEtapaMemoriasAltoGaming: {
  text: 'En el caso de este procesador, solo soporta memorias de hasta 2666mhz (no te preocupes si encontras de mas velocidad a menor precio, se ajustaran a la velocidad maxima permitida por el procesador) <br> Tambien te recomendamos que compres al menos dos modulos, para aprovechar el dual channel y además tener 16GB (2x8) <br> te recomendamos las siguientes memorias: MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
  options: [
    {
      text: "Seleccionar",
      next: "procesadorR9_5900XEtapaMemoriasAltoGaming",
    },
  ]
},

procesadorR9_5900XEtapaMemoriasAltoGaming: {
  text: 'Para este procesador te recomendamos las siguientes memorias. Te recomendamos comprar por lo menos dos, para así tener 32GB (2x16) <br> <b> MEMORIA 16 DDR4 3200MHZ PATRIOT. </b> Precio aprox. $19000 (Cada una) </b><br> <a href="https://www.hardgamers.com.ar/search?text=Patriot+DDR4+3200mhz" target="_blank" style= "text-decoration: none; color:#000"><img src="https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/MEM477.jpg" width="150"> </a>',
  options: [
    {
      text: "Seleccionar",
      next: "procesadorR9_5900XEtapaGraficaAltoGaming",
    },
  ]
},


procesadorR9_5900XEtapaGraficaAltoGaming: {
  text: 'Te recomendas las siguientes tarjetas de video.<br> <b> NVIDIA RTX 3080. Precio aprox. $170.000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=3080" target="_blank" style= "text-decoration: none; color:#000"><img src="https://wiztech.com.ar/assets/images/products/refurbished/usado_rtx_3080_gaming_a.png" width="150"> </a> <br> Mejor CODEC para streaming o grabar <br> RTX <br> Mayor potencia para RTX en comparación a AMD <br> Mejores drivers <br> <b> AMD RX 6800XT. Precio aprox. $150.000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=RX+6600" target="_blank" style= "text-decoration: none; color:#000"><img src="https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/rx%206600%20figther.png" width="150"> <br> Rendimiento similar a la 3080 <br><br> <a href="https://www.youtube.com/watch?v=_n_1-NAwG0M&ab_channel=3DJuegosLATAM" target="_blank" style="text-decoration:none"> Que es RTX? </a> ',
  options: [
    {
      text: "RTX 3080",
      next: "procesadorR9_5900XEtapaFuenteGrafica1AltoGaming"
    },
    {
      text: "RX 6800 XT",
      next: "procesadorR9_5900XEtapaFuenteGrafica2AltoGaming"
    },
  ]
},

procesadorR9_5900XEtapaFuenteGrafica1AltoGaming: {
  text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE GIGABYTE 800W 80+ GOLD. Precio aprox. $27000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+850w+Gigabyte" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/400/814/products/879037-mla49044757265_022022-f1-04f3e310ed66c1519a16504602696576-480-0.jpg" width="150"> <br>',
  options: [
    {
      text: 'FUENTE GIGABYTE 800W 80+ GOLD',
      next: "procesadorR9_5900XEtapaGabineteGrafica1AltoGaming"
    },
  ]
},

procesadorR9_5900XEtapaFuenteGrafica2AltoGaming: {
  text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE GIGABYTE 800W 80+ GOLD. Precio aprox. $27000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+850w+Gigabyte" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/400/814/products/879037-mla49044757265_022022-f1-04f3e310ed66c1519a16504602696576-480-0.jpg" width="150"> <br>',
  options: [
    {
      text: 'FUENTE GIGABYTE 800W 80+ GOLD',
      next: "procesadorR9_5900XEtapaGabineteGrafica2AltoGaming"
    },
  ]
},

procesadorR9_5900XEtapaGabineteGrafica1AltoGaming: {
  text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire. <br> (La mother que elegimos es ATX, acordate de verificar que el gabinete es acorde al tamaño) <br> <b>Gabinete Thermaltake H330G</b> Precio aprox. $15500 <br><a href="https://www.hardgamers.com.ar/product/1851616436" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://logg.api.cygnus.market/static/logg/Global/Gabinete%20Thermaltake%20H330%20TG%20Mid%20Tower%20ATX%201xFan/6d4199698635464db205f46693c534f6.webp" width="150"> </a> <br><b>Gabinete ATX Corsair Carbide Spec-Delta </b> Precio aprox. $24000 <br><a href="https://www.hardgamers.com.ar/product/-1833464607" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.armytech.com.ar/Image/0/450_450-Proyecto_nuevo_(21).jpg" width="150"> </a>',
  options: [{
      text: "Siguiente",
      next: "listadoFinalR9_5900XAltoGamingGrafica1",
  }
  ]
},

procesadorR9_5900XEtapaGabineteGrafica2AltoGaming: {
  text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire. <br> (La mother que elegimos es ATX, acordate de verificar que el gabinete es acorde al tamaño) <br> <b>Gabinete Thermaltake H330G</b> Precio aprox. $15500 <br><a href="https://www.hardgamers.com.ar/product/1851616436" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://logg.api.cygnus.market/static/logg/Global/Gabinete%20Thermaltake%20H330%20TG%20Mid%20Tower%20ATX%201xFan/6d4199698635464db205f46693c534f6.webp" width="150"> </a> <br><b>Gabinete ATX Corsair Carbide Spec-Delta </b> Precio aprox. $24000 <br><a href="https://www.hardgamers.com.ar/product/-1833464607" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.armytech.com.ar/Image/0/450_450-Proyecto_nuevo_(21).jpg" width="150"> </a>',
  options: [{
      text: "Siguiente",
      next: "listadoFinalR9_5900XAltoGamingGrafica2",
  }
  ]
},

listadoFinalR9_5900XAltoGamingGrafica1: {
  text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I7 12700F <br> <b>Mother</b>: ASUS PRIME A520M-A AM4 <br> <b>Memoria ram</b>: Patriot 3200mhz 16GB DDR4 <br> <b>Gabinete</b>: A eleccion (ATX)<br> <b>Tarjeta grafica</b>: RTX 3080<br> <b> Fuente</b>: Gigabyte 800W 80+ GOLD <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 480GB para el sistema operativo y programas <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+480" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $380000-$400000',
  options: [
    {
      text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
    },
        ]
},

listadoFinalR9_5900XAltoGamingGrafica2: {
  text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I7 12700F <br> <b>Mother</b>: ASUS PRIME A520M-A AM4 <br> <b>Memoria ram</b>: Patriot 3200mhz 16GB DDR4 <br> <b>Gabinete</b>: A eleccion (ATX)<br> <b>Tarjeta grafica</b>: RX 6800XT<br> <b> Fuente</b>: Gigabyte 800W 80+ GOLD <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 480GB para el sistema operativo y programas <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+480" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $380000-$400000',
  options: [
    {
      text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
    },
        ]
},

//// I7 12700F

procesadorI7_12700FAltoGaming: {
  text: '<a href="https://www.hardgamers.com.ar/search?text=Intel+I7+12700F" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/CPUI731_thumb.png" width="150"></a> <br><b> Ventajas </b> <br> 12 Nucleos / 20 Hilos <br> Turbo hasta 4.9ghz <br> DDR5 <br> <b> Desventajas </b> <br> Mother mas cara debido a la generación del procesador',
  options: [
  {
    text: "Seleccionar",
    next: "procesadorI7_12700FEtapaMotherAltoGaming",
  },
  {
    text: "Volver",
    next: "segundaSeccionAltoGaming"
  },
  ]
},

procesadorI7_12700FEtapaMotherAltoGaming: {
  text: 'Para este armado, te recomendamos la siguiente mother, la cual cuenta con cuatro modulos de memoria ram y wifi <br><b> MOTHER MSI B660M MAG MORTAR WIFI S1700 DDR5. Precio aprox. $50000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=B660M+MORTAR"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-msi-b660m-mag-mortar-wifi-ddr5-s1700-0.jpg" width="150"></a>',
  options: [
    {
      text: "Siguiente",
      next: "procesadorR9_5900XEtapaMemoriasAltoGaming",
    },
    {
      text: "Volver a seleccionar procesador",
      next: "segundaSeccionBajoGaming",
    },
  ]
},

procesadorI7_12700FEtapaMemoriasAltoGaming: {
  text: 'En el caso de este procesador, solo soporta memorias de hasta 2666mhz (no te preocupes si encontras de mas velocidad a menor precio, se ajustaran a la velocidad maxima permitida por el procesador) <br> Tambien te recomendamos que compres al menos dos modulos, para aprovechar el dual channel y además tener 16GB (2x8) <br> te recomendamos las siguientes memorias: MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
  options: [
    {
      text: "Seleccionar",
      next: "procesadorI7_12700FEtapaMemoriasAltoGaming",
    },
  ]
},

procesadorI7_12700FEtapaMemoriasAltoGaming: {
  text: 'Para este procesador te recomendamos las siguientes memorias. Te recomendamos comprar por lo menos dos, para así tener 32GB (2x16) <br> <b> MEMORIA 16GB DDR5 48000MHZ CRUCIAL. </b> Precio aprox. $22000 (Cada una) </b><br> <a href="https://www.hardgamers.com.ar/search?text=Crucial+DDR5" target="_blank" style= "text-decoration: none; color:#000"><img src="https://http2.mlstatic.com/D_NQ_NP_752001-MLA51325094941_082022-V.webp" width="150"> </a>',
  options: [
    {
      text: "Seleccionar",
      next: "procesadorI7_12700FEtapaGraficaAltoGaming",
    },
  ]
},


procesadorI7_12700FEtapaGraficaAltoGaming: {
  text: 'Te recomendamos las siguientes tarjetas de video.<br> <b> NVIDIA RTX 3080. Precio aprox. $170.000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=3080" target="_blank" style= "text-decoration: none; color:#000"><img src="https://wiztech.com.ar/assets/images/products/refurbished/usado_rtx_3080_gaming_a.png" width="150"> </a> <br> Mejor CODEC para streaming o grabar <br> RTX <br> Mayor potencia para RTX en comparación a AMD <br> Mejores drivers <br> <b> AMD RX 6800XT. Precio aprox. $150.000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=RX+6600" target="_blank" style= "text-decoration: none; color:#000"><img src="https://img1.wsimg.com/isteam/ip/23fa9c27-3ad2-4099-a13a-f6ae803e79aa/ols/rx%206600%20figther.png" width="150"> <br> Rendimiento similar a la 3080 <br><br> <a href="https://www.youtube.com/watch?v=_n_1-NAwG0M&ab_channel=3DJuegosLATAM" target="_blank" style="text-decoration:none"> Que es RTX? </a> ',
  options: [
    {
      text: "RTX 3080",
      next: "procesadorI7_12700FEtapaFuenteGrafica1AltoGaming"
    },
    {
      text: "RX 6800 XT",
      next: "procesadorI7_12700FEtapaFuenteGrafica2AltoGaming"
    },
  ]
},

procesadorI7_12700FEtapaFuenteGrafica1AltoGaming: {
  text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE GIGABYTE 800W 80+ GOLD. Precio aprox. $27000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+850w+Gigabyte" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/400/814/products/879037-mla49044757265_022022-f1-04f3e310ed66c1519a16504602696576-480-0.jpg" width="150"> <br>',
  options: [
    {
      text: 'FUENTE GIGABYTE 800W 80+ GOLD',
      next: "procesadorI7_12700FEtapaGabineteGrafica1AltoGaming"
    },
  ]
},

procesadorI7_12700FEtapaFuenteGrafica2AltoGaming: {
  text: 'Te recomendamos la siguiente fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE GIGABYTE 800W 80+ GOLD. Precio aprox. $27000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+850w+Gigabyte" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/400/814/products/879037-mla49044757265_022022-f1-04f3e310ed66c1519a16504602696576-480-0.jpg" width="150"> <br>',
  options: [
    {
      text: 'FUENTE GIGABYTE 800W 80+ GOLD',
      next: "procesadorI7_12700FEtapaGabineteGrafica2AltoGaming"
    },
  ]
},

procesadorI7_12700FEtapaGabineteGrafica1AltoGaming: {
  text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire. <br> (La mother que elegimos es ATX, acordate de verificar que el gabinete es acorde al tamaño) <br> <b>Gabinete Thermaltake H330G</b> Precio aprox. $15500 <br><a href="https://www.hardgamers.com.ar/product/1851616436" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://logg.api.cygnus.market/static/logg/Global/Gabinete%20Thermaltake%20H330%20TG%20Mid%20Tower%20ATX%201xFan/6d4199698635464db205f46693c534f6.webp" width="150"> </a> <br><b>Gabinete ATX Corsair Carbide Spec-Delta </b> Precio aprox. $24000 <br><a href="https://www.hardgamers.com.ar/product/-1833464607" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.armytech.com.ar/Image/0/450_450-Proyecto_nuevo_(21).jpg" width="150"> </a>',
  options: [{
      text: "Siguiente",
      next: "listadoFinalI7_12700FAltoGamingGrafica1",
  }
  ]
},

procesadorI7_12700FEtapaGabineteGrafica2AltoGaming: {
  text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso te recomendamos algo con buen flujo de aire. <br> (La mother que elegimos es ATX, acordate de verificar que el gabinete es acorde al tamaño) <br> <b>Gabinete Thermaltake H330G</b> Precio aprox. $15500 <br><a href="https://www.hardgamers.com.ar/product/1851616436" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://logg.api.cygnus.market/static/logg/Global/Gabinete%20Thermaltake%20H330%20TG%20Mid%20Tower%20ATX%201xFan/6d4199698635464db205f46693c534f6.webp" width="150"> </a> <br><b>Gabinete ATX Corsair Carbide Spec-Delta </b> Precio aprox. $24000 <br><a href="https://www.hardgamers.com.ar/product/-1833464607" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.armytech.com.ar/Image/0/450_450-Proyecto_nuevo_(21).jpg" width="150"> </a>',
  options: [{
      text: "Siguiente",
      next: "listadoFinalI7_12700FAltoGamingGrafica2",
  }
  ]
},

listadoFinalI7_12700FAltoGamingGrafica1: {
  text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I7 12700F <br> <b>Mother</b>: MSI B660M MORTAR WIFI <br> <b>Memoria ram</b>: Crucial 16GB DDR5 4800mhz <br> <b>Gabinete</b>: A eleccion (ATX)<br> <b>Tarjeta grafica</b>: RTX 3080<br> <b> Fuente</b>: Gigabyte 800W 80+ GOLD <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 480GB para el sistema operativo y programas <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+480" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $420000-$440000',
  options: [
    {
      text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
    },
        ]
},

listadoFinalI7_12700FAltoGamingGrafica2: {
  text: 'Este es el resumen de tu PC <br><b> Procesador </b>: I7 12700F <br> <b>Mother</b>: MSI B660M MORTAR WIFI <br> <b>Memoria ram</b>: Crucial 16GB DDR5 4800mhz <br> <b>Gabinete</b>: A eleccion (ATX)<br> <b>Tarjeta grafica</b>: RX 6800XT<br> <b> Fuente</b>: Gigabyte 800W 80+ GOLD <br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 480GB para el sistema operativo y programas <br> <a href="https://www.hardgamers.com.ar/search?text=ssd+480" target="_blank"> Link </a> <br> Tambien te recomendamos sumar un HDD de 1TB para los juegos. <a href="https://www.hardgamers.com.ar/search?text=HDD+1TB" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD+HDD Incluido): $420000-$440000',
  options: [
    {
      text: '<a href="https://www.linkedin.com/in/david-agustin-pedreira" target="_blank" style="text-decoration:none"> LinkedIn: David Agustin Pedreira </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/gonzalo-vignolles/" target="_blank" style="text-decoration:none"> LinkedIn: Gonzalo Vignolles </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/ezequiel-gonzalez03/" target="_blank" style="text-decoration:none"> LinkedIn: Nicolas Gonzalez </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/nc2000/" target="_blank" style="text-decoration:none"> LinkedIn: Ezequiel Castro </a> ',
    },
    {
      text: '<a href="https://www.linkedin.com/in/pablorobledo1952/" target="_blank" style="text-decoration:none"> LinkedIn: Pablo Robledo </a> ',
    },
        ]
},
































}