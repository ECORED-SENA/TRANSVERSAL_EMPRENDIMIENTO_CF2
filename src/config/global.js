export const global = {
  componenteFormativo: 'Análisis de oportunidades para emprender',
  descripcionCurso:
    'Este componente formativo brinda al aprendiz herramientas de análisis de las condiciones generales del emprendimiento como son la metodología CANVAS y el análisis PESTEL, las cuales permiten clarificar situaciones a las que el emprendedor se enfrenta al momento de emprender.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Análisis de oportunidades para emprender',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Definición del tipo de negocioo',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Metodología CANVAS del entorno',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Desarrollo del mapa estratégico',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Elementos organizacionales de la empresa',
      desarrolloContenidos: true,
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Astrid Lili Puerta',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julieth Paola Vital López',
      cargo: 'Revisora de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Alfaro, J., González, C. & Pina, M. (2013). Economía de la empresa. McGraw Hill.',
    link:
      'https://www.mhe.es/materia_familia.php?sub_materia=59&materia=17&nivel=B&comunidad=Castellano',
  },
  {
    referencia:
      'Centro de Innovación Pública Digital (s. f.). Manual para el análisis de tendencias.',
    link:
      'https://centrodeinnovacion.mintic.gov.co/sites/default/files/guia-tendencias-v7.pdf',
  },
  {
    referencia:
      'Confecámaras. (2019). Informe de dinámica empresarial en Colombia. Año 2018.',
    link:
      'https://www.confecamaras.org.co/phocadownload/2018/Cuadernos_An%C3%A1lisis_Econ%C3%B3mico/Din%C3%A1mica_Empresarial/Din%C3%A1micaEmpresarial.pdf',
  },
  {
    referencia:
      'Corma, F. (2018). El canvas de la innovación. Ediciones Díaz de Santos.',
    link:
      'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57533?page=1',
  },
  {
    referencia:
      'Max-Neef. (1998). Desarrollo a Escala Humana. Conceptos, aplicaciones y algunas reflexiones. Icaria Editorial. SENA. (2012). Ser empresario en seis pasos. ',
    link:
      'https://repositorio.sena.edu.co/sitios/ser_empresario/serempresario1/index.html#',
  },
  {
    referencia: 'Valencia, H. (2007). Diccionario de marketing. 3R editores.',
  },
]

export const glosario = [
  {
    termino: 'Competitividad',
    significado:
      'capacidad de la sociedad para hacerle frente al desafío de la economía global y al proceso de internacionalización, creando ventajas competitivas sostenibles y, al mismo tiempo, incrementar sus niveles de bienestar. Es la capacidad de competir eficientemente en los mercados, incrementando a la vez los ingresos reales.',
  },
  {
    termino: 'Demanda',
    significado:
      'cantidad máxima de un bien o servicio que un individuo o grupo de ellos está dispuesto a adquirir a un determinado precio, por unidad de tiempo.',
  },
  {
    termino: 'Matriz',
    significado:
      'en administración, es un estudio de distintas variables que pueden afectar a una empresa, un negocio, un mercado, etc.; estas pueden ser financieras, administrativas, macroeconómicas, entre muchas otras.',
  },
  {
    termino: 'Mercado',
    significado:
      'grupo identificable de consumidores con necesidades particulares que están dispuestos a adquirir un determinado bien o servicio, en un sitio de libre oferta y demanda.',
  },
  {
    termino: 'Monopolio',
    significado:
      'término económico que describe una situación en la que un solo vendedor, productor o distribuidor, domina el mercado frente a un gran número de compradores.',
  },
  {
    termino: 'Segmentación de mercado',
    significado:
      'separación del mercado de un artículo en las categorías de localización, personalidad u otras características para cada división.',
  },
  {
    termino: 'Segmento del mercado',
    significado:
      'conjunto de personas, grupos u organizaciones que comparten una o varias características debido a que sus necesidades y deseos son parecidos.',
  },
  {
    termino: 'Segmento seleccionado',
    significado:
      'cantidad de personas de una misma edad, sexo, ubicación u ocupación específica, que son usuarios de productos determinados por el emprendedor.',
  },
  {
    termino: 'Tendencia',
    significado:
      'comportamiento de los fenómenos o procesos que se manifiestan a través de determinadas variables externas de un objetivo en una cierta dirección, en el tiempo, sobre la base de regularidades de ese objeto, pero que no se llegan a establecer; las tendencias se quedan en un marco descriptivo, muy útiles en las etapas tempranas de investigación.',
  },
]

export const complementario = [
  {
    texto: 'Coll, F. M. (2020). Coyuntura económica. Economipedia.com.',
    tipo: 'Página web',
    link: 'https://economipedia.com/definiciones/coyuntura-economica.html',
  },
  {
    texto: 'Coll, F. M. (2020). Estructura económica. Economipedia.com.',
    tipo: 'Página web',
    link: 'https://economipedia.com/definiciones/estructura-economica.html',
  },
]
