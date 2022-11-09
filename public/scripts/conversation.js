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
  primeraSeccionBajoOficina: {
    text: "En ese caso te recomendamos un procesador INTEL. Debido a que cuentan con graficos integrados y tienen precios más economicos.",
    options: [
      {
        text: "Siguiente",
        next: "segundaSeccionBajoOficinaIntel",
      },
    ],
  },
  segundaSeccionBajoOficinaIntel: {
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
      next: "procesadorG6900SegundaEtapa",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficinaIntel"
    },
    ]
  },

  procesadorG6900SegundaEtapa: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=H610M"> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150"></a>',
    options: [
      {
        text: "Siguiente",
        next: "procesadorG6900TerceraEtapa",
      },
      {
        text: "Volver a seleccionar procesador",
        next: "segundaSeccionBajoOficinaIntel",
      },
    ]
  },

  procesadorG6900TerceraEtapa: {
    text: 'Procederemos a elegir las memorias. En este caso podes optar por memorias DDR4 mas economicas o DDR5 (mas actuales). Te listamos las recomendadas <br> Tener en cuenta que para tareas de oficina se recomiendan como minimo 8gb de memoria ram. Con un recomendado de 16gb <br><b> MEMORIA 8GB DDR5 4800 CRUCIAL. Precio aprox: $9000 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Memoria+Ram+ddr5+Crucial" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://http2.mlstatic.com/D_NQ_NP_604319-MLA50526185925_062022-O.webp" width="150"> </a> <br> DDR5 <br> Buena velocidad <br> <b> MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <a href="https://www.hardgamers.com.ar/search?text=Hikvision+DDR4+8GB" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> </a> <br> DDR4 <br> Economica <br> Menor velocidad',
    options: [
      {
        text: "MEMORIA 8GB DDR5 4800 CRUCIAL",
        next: "procesadorG6900CuartaEtapaRespuesta1",
      },
      {
        text: "MEMORIA 8GB DDR4 2666 HIKVISION",
        next: "procesadorCuartaEtapaRespuesta2",
      },
    ]
  },

    procesadorG6900CuartaEtapaRespuesta1: {
      text: 'Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion<br> <b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <a href="https://www.hardgamers.com.ar/search?text=Fuente+450w+corsair" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150"> <br></a> <b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br><a href="https://www.hardgamers.com.ar/search?text=Fuente+500w+thermaltake+smart" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150""> </a> ',
      options: [
        {
          text: 'FUENTE CORSAIR 450W CV450 80+ BRONZE',
          next: "procesadorG6900UltimaEtapaRespuesta1_1"
        },
        { 
          text: 'FUENTE THERMALTAKE SMART 500W 80+ WHITE',
          next: "procesadorG6900UltimaEtapaRespuesta2_1"
        },
      ]
    },

    procesadorG6900UltimaEtapaRespuesta1_1: {
      text: 'Perfecto! Llegamos al final del armado. Solo te quedaria elegir gabinete. En este caso lo mas economico seria lo mejor. Te damos algunas recomendaciones, pero es algo a gusto personal. <br> (La mother que elegimos es la mas chica del mercado, por lo tanto, cualquier gabinete te va a servir mientras tenga soporte M-ATX) <br> <b>GABINETE AEROCOOL ZAURON FRGB</b> Precio aprox. $8000 <br><a href="https://www.hardgamers.com.ar/search?text=Aerocool+zauron" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://www.venex.com.ar/products_images/1667587217_zauron.png" width="150"> </a> <br><b> Gabinete Magnum Tech Mt-436b </b> Precio aprox. $8500 <br><a href="https://www.hardgamers.com.ar/search?text=Gabinete+Magnum+Tech" target="_blank" style= "text-decoration: none; color:#000"> <img src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7516622.jpg" width="150"> </a>',
      options: [{
          text: "Siguiente",
          next: "listadoFinalG6900Respuesta1_1",
      }
      ]
    },

    listadoFinalG6900Respuesta1_1: {
      text: 'Este es el resumen de tu PC <br><b> Procesador </b>: Intel Celeron G6900 <br> <b>Mother</b>: Gigabyte H610-M S1700 <br> <b>Memoria ram</b>: Crucial DDR5 4800Mhz <br> <b>Gabinete</b>: A eleccion (micro atx o superior)<br> <b>Tarjeta grafica</b>: Graficos integrados del procesador<br> Como metodo de almacenamiento, te recomendamos un SSD de cualquier marca de al menos 240GB para el sistema operativo. <a href="https://www.hardgamers.com.ar/search?text=ssd+240" target="_blank"> Link </a> <br> Presupuesto aproximado (SSD Incluido): $63000-$66000',
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

  procesadorI3_10100: {
    text: '<a href="https://gorilagames.com/42610-componentes-de-pc-intel-procesador-core-i3-10100-lga1200-bulk" target="_blank" style= "text-decoration: none; color:#000"><img src="https://www.venex.com.ar/products_images/1593786609_ilu.jpg" width="150"></a> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> <b> Desventajas </b> <br> LGA 1200. 10va generación, al actualizar, vas a necesitar otra mother. <br> Solo soporta memorias de hasta 2666mhz',
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI3_10100SegundaEtapa",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficinaIntel"
    },
    ]
  },
  procesadorI3_12100: {
    text: '<a href="https://www.noxiestore.com/procesadores/intel/13090-microprocesador-intel-i3-12100-12mb-430-ghz.html" target="_blank" style= "text-decoration: none; color:#000"><img src="https://s3-sa-east-1.amazonaws.com/saasargentina/u7AzxFe3z8iuTJdXIP9P/imagen" width="150"></a> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> LGA 1700. Ultima generacion de Intel <br> Altamente actualizable <br> Soporta memorias DDR5 <br> <b> Desventajas </b><br> No tan economico <br> Mother mas cara ya que es de nueva generación' ,
    options: [
    {
      text: "Seleccionar",
      next: "procesadorI3_12100SegundaEtapa",
    },
    {
      text: "Volver",
      next: "segundaSeccionBajoOficinaIntel"
    },
    ]
  },

  
};
