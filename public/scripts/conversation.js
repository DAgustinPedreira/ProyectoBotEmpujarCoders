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
      next: "segundaSeccionBajoOficinaIntel"
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
        next: "segundaSeccionBajoOficinaIntel",
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
    text: "Te recomendamos elegir entre estos procesadores. Elegi uno para ver sus ventajas y desventajas <br> Ryzen 5 4600G. Precio aprox: $38000 <br> Intel I5 10400 (Normal, sin F). Precio aprox. $55000." ,
    options: [
          {
            text: "Ryzen 5 4600G",
            next: "procesadorR5_4600G",
          },
          {
            text: "I5 10400",
            next: "procesadorI3_10100",
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

  //opcion procesadores Estudio/Oficina

  

  
  segundaSeccionMedioGamingIntel: {
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
      next: "segundaSeccionMedioOficinaIntel"
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
      next: "segundaSeccionMedioOficinaIntel"
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
      next: "segundaSeccionMedioOficinaIntel"
    },
    ]
  },

  //Gaming

  procesadorG6900: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Intel+Celeron+G6900" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g6900-s1700-0.jpg" width="150"></a> <br><b> Ventajas </b> <br> Economico <br> LGA 1700. Ultima generación de intel <br> Altamente actualizable <br> <b> Desventajas </b> <br> Solamente posee 2 nucleos <br> Baja potencia general',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorG6900EtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionMedioGamingIntel"
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
      next: "segundaSeccionMedioGamingIntel"
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
      next: "segundaSeccionMedioGamingIntel"
    },
    ]
  },

  //Opcion mother

  procesadorG6900EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionMedioOficinaIntel",
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
        next: "segundaSeccionMedioOficinaIntel",
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
        next: "segundaSeccionMedioOficinaIntel",
      },
    ]
  },

  //Gaming

  procesadorG6900EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionMedioGamingIntel",
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
        next: "segundaSeccionMedioGamingIntel",
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
        next: "segundaSeccionMedioGamingIntel",
      },
    ]
  },

  //Opcion memorias

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

  //Gaming

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
  
  //Etapa fuente
  // 1er procesador
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

    //2do procesador

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

    //3er procesador

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

    //gaming

    //1er procesador

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

    //2do procesador

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

    //3er procesador

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
  
  //Etapa gabinete
  //Procesador1
  
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

    //Procesador2

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

    //Procesador3

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

    //Gaming
    //Procesador1

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

    //Procesador2

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

    //Procesador3

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
  
  //Listado final
  //Procesador1

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

    //Procesador2

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

    //Procesador3

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

    //Gaming
    //Procesador1

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

    //Procesador2

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

    //Procesador3

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

//Opcion alto

presupuestoAltoSecciones: {
    text: "Perfecto. Que uso le vas a dar?",
    options: [
      {
        text: "Oficina/Estudio",
        next: "primeraSeccionAltoOficina",
      },
      {
        text: "Gaming",
        next: "primeraSeccionAltoGaming",
      },
    ],
  },

  //Opcion de oficina/gaming

  primeraSeccionAltoOficina: {
    text: "En ese caso te recomendamos un procesador INTEL. Debido a que cuentan con graficos integrados y tienen precios más economicos.",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionAltoOficinaIntel",
      },
    ],
  },
  primeraSeccionAltoGaming: {
    text: "En ese caso te recomendamos un procesador INTEL. Debido a que cuentan con graficos integrados y tienen precios más economicos.",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionAltoGamingIntel",
      },
    ],
  },
  //opcion procesadores oficina/gaming
  segundaSeccionAltoOficinaIntel: {
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
  segundaSeccionAltoGamingIntel: {
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
      next: "segundaSeccionAltoOficinaIntel"
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
      next: "segundaSeccionAltoOficinaIntel"
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
      next: "segundaSeccionAltoOficinaIntel"
    },
    ]
  },

  //Gaming

  procesadorG6900: {
    text: '<a href="https://www.hardgamers.com.ar/search?text=Intel+Celeron+G6900" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g6900-s1700-0.jpg" width="150"></a> <br><b> Ventajas </b> <br> Economico <br> LGA 1700. Ultima generación de intel <br> Altamente actualizable <br> <b> Desventajas </b> <br> Solamente posee 2 nucleos <br> Baja potencia general',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorG6900EtapaMother",
    },
    {
      text: "Volver",
      next: "segundaSeccionAltoGamingIntel"
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
      next: "segundaSeccionAltoGamingIntel"
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
      next: "segundaSeccionAltoGamingIntel"
    },
    ]
  },

  //Opcion mother

  procesadorG6900EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionAltoOficinaIntel",
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
        next: "segundaSeccionAltoOficinaIntel",
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
        next: "segundaSeccionAltoOficinaIntel",
      },
    ]
  },

  //Gaming

  procesadorG6900EtapaMother: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900EtapaMemorias",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionAltoGamingIntel",
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
        next: "segundaSeccionAltoGamingIntel",
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
        next: "segundaSeccionAltoGamingIntel",
      },
    ]
  },

  //Opcion memorias

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

  //Gaming

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
  
  //Etapa fuente
  // 1er procesador
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

    //2do procesador

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

    //3er procesador

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

    //gaming

    //1er procesador

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

    //2do procesador

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

    //3er procesador

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
  
  //Etapa gabinete
  //Procesador1
  
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

    //Procesador2

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

    //Procesador3

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

    //Gaming
    //Procesador1

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

    //Procesador2

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

    //Procesador3

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
  
  //Listado final
  //Procesador1

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

    //Procesador2

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

    //Procesador3

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

    //Gaming
    //Procesador1

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

    //Procesador2

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

    //Procesador3

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




}
