const chat = {
  1: {
    text: "Bienvenido! Vamos a empezar a armar tu PC",
    next: "primeraEtapa",
  },
  primeraEtapa: {
    text: "Primero lo primero. Con que presupuesto contas?",
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
    text: "En ese caso te recomendamos un procesador INTEL. Debido a que cuentan con graficos integrados y tienen precios más economicos. Estas de acuerdo?",
    options: [
      {
        text: "Me parece bien",
        next: "segundaSeccionBajoOficinaIntel",
      },
      {
        text: "Prefiero AMD",
        next: "segundaSeccionBajoOficinaAMD",
      }
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
    text: '<img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g6900-s1700-0.jpg" width="150"> <br><b> Ventajas </b> <br> Economico <br> LGA 1700. Ultima generación de intel <br> Altamente actualizable <br> <b> Desventajas </b> <br> Solamente posee 2 nucleos <br> Baja potencia general',
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
  procesadorI3_10100: {
    text: '<img src="https://www.venex.com.ar/products_images/1593786609_ilu.jpg" width="150"> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> <b> Desventajas </b> <br> LGA 1200. 10va generación, al actualizar, vas a necesitar otra mother. <br> Solo soporta memorias de hasta 2666mhz',
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
    text: '<img src="https://s3-sa-east-1.amazonaws.com/saasargentina/u7AzxFe3z8iuTJdXIP9P/imagen" width="150"> <br><b> Ventajas </b> <br> Buena frecuencia en turbo (Max 4.3ghz) <br> LGA 1700. Ultima generacion de Intel <br> Altamente actualizable <br> Soporta memorias DDR5 <br> <b> Desventajas </b><br> No tan economico <br> Mother mas cara ya que es de nueva generación' ,
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

  procesadorG6900SegundaEtapa: {
    text: 'En los armados de bajo presupuesto, se recomienda siempre usar la mother mas barata ya que esta no afectara al rendimiento. <br> En este caso te recomendamos la siguiente mother: <br><b> MOTHER GIGABYTE H610M-H DDR4 S1700. Precio aprox. $20000 </b> <br> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h610mh-ddr4-s1700-0.jpg" width="150">',
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
    text: 'Procederemos a elegir las memorias. En este caso podes optar por memorias DDR4 mas economicas o DDR5 (mas actuales). Te listamos las recomendadas <br> Tener en cuenta que para tareas de oficina se recomiendan como minimo 8gb de memoria ram. Con un recomendado de 16gb <br><b> MEMORIA 8GB DDR5 4800 CRUCIAL. Precio aprox: $9000 </b> <br> <img src="https://http2.mlstatic.com/D_NQ_NP_604319-MLA50526185925_062022-O.webp" width="150"> <br> DDR5 <br> Buena velocidad <br> <b> MEMORIA 8GB DDR4 2666 HIKVISION. Precio aprox. $6500 </b><br> <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-hikvision-0.jpg" width="150"> <br> DDR4 <br> Economica <br> Menor velocidad',
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
      text: "Ahora elegiremos la fuente. No importa el uso que se le vaya a dar una PC. Siempre se recomienda una fuente certificada 80+ ya que ofrecen mucha mejor proteccion",
      options: [
        {
          text: '<b> FUENTE CORSAIR 450W CV450 80+ BRONZE. Precio aprox. $8500 </b> <br> <img src="https://katech.com.ar/wp-content/uploads/80P060.jpg" width="150">',
          next: "procesadorG6900UltimaEtapaRespuesta1-1"
        },
        { 
          text: '<b> FUENTE THERMALTAKE SMART 500W 80+ WHITE. Precio aprox. $10500 </b> <br> <img src="https://mla-s1-p.mlstatic.com/945294-MLA43656537710_102020-F.jpg" width="150"">',
          next: "procesadorG6900UltimaEtapaRespuesta2-1"
        },
      ]
    },






};
