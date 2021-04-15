<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Análisis de oportunidades para emprender

    p.mb-4 Para crear emprendimientos exitosos es importante, antes de iniciarlos, estudiar todas las variables posibles que puedan afectar la viabilidad del negocio, pues este es uno de los factores más importantes en la creación de los emprendimientos. 

    p.mb-5 De otra parte, es necesario conocer que las empresas están integradas dentro del sistema financiero, y son un elemento del subsistema productivo que se encuentra dentro de un sistema económico más amplio y que forma parte de un entorno que se puede clasificar en: 

    nav
      #nav-tab.nav.nav-tabs(role='tablist')
        button#nav-11-tab.nav-link.active(data-bs-toggle='tab' data-bs-target='#nav-11' type='button' role='tab' aria-controls='nav-11' aria-selected='true') Entorno general
        button#nav-12-tab.nav-link(data-bs-toggle='tab' data-bs-target='#nav-12' type='button' role='tab' aria-controls='nav-12' aria-selected='false') Entorno específico
    #nav-tabContent.tab-content.mb-5
      #nav-11.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='nav-11-tab')
        .row.justify-content-around.p-4
          .col-12.col-md-7.mb-4.mb-md-0
            h4 Entorno general
            p Afecta a todas las empresas. Son muchos los aspectos que influyen en él, como los culturales, tecnológicos, políticos, legales, demográficos, sociológicos, económicos, etc. Estos factores pueden diferenciar y afectar la actividad económica entre países o economías más o menos desarrolladas. 
          .col-9.col-md-3
            figure
              img(src="@/assets/curso/tema1/img01.svg", alt="Entorno general")
        
      #nav-12.tab-pane.fade(role='tabpanel' aria-labelledby='nav-12-tab')
        .row.justify-content-around.p-4
          .col-12.col-md-7.mb-4.mb-md-0
            h4 Entorno específico
            p Afecta de manera concreta a cada empresa y, por lo tanto, varía según el tipo de empresa. Por ejemplo, en una empresa industrial influyen aspectos como los proveedores, los clientes, la competencia, las políticas gubernamentales del sector, etc. 
          .col-9.col-md-3
            figure
              img(src="@/assets/curso/tema1/img02.svg", alt="Entorno específico")
    
    p.fs-4.w-75.mb-5 Tanto el contexto general como el específico, incluyen diversos aspectos que componen el entorno de la empresa y se pueden observar en la siguiente tabla.

    .tabla-d.mb-5
      table
        tbody
          tr
            th(rowspan='5') Entorno general
            td Factores econ&oacute;micos
            td Existen factores coyunturales econ&oacute;micos que tienen un car&aacute;cter temporal (situaci&oacute;n actual de la econom&iacute;a), junto con otros factores estructurales que condicionan permanentemente a la empresa (composici&oacute;n de la econom&iacute;a a largo plazo).
          tr
            td Factores sociol&oacute;gicos
            td Aqu&iacute; se contemplan: el nivel educativo, los estilos de vida, h&aacute;bitos de consumo, la situaci&oacute;n de conflicto social y laboral, etc.
          tr
            td Factores pol&iacute;ticos-legales
            td Se consideran elementos como la estabilidad del Gobierno, las pol&iacute;ticas de bienestar social, las medidas de apoyo a la innovaci&oacute;n empresarial, las pol&iacute;ticas econ&oacute;micas, etc.
          tr
            td Factores tecnol&oacute;gicos
            td Conjunto de infraestructuras tecnol&oacute;gicas del pa&iacute;s en los que opera la empresa.
          tr
            td Factores medioambientales
            td Las pol&iacute;ticas nacionales e internacionales sobre el medioambiente, el desarrollo sostenible, entre otros.
          tr
            th(rowspan='5') Entorno espec&iacute;fico
            td Proveedores
            td Aportan materias primas y los recursos necesarios para fabricar los productos a cambio de un precio.
          tr
            td Intermediarios y distribuidores
            td Se encargan de hacer llegar los productos desde los fabricantes, hasta los minoristas.
          tr
            td Consumidores o clientes
            td Adquieren los productos y servicios de la empresa.
          tr
            td Competidores
            td Ofrecen productos o servicios similares en el mercado y se dirigen hacia los mismos clientes.
          tr
            td Intermediarios financieros
            td Prestan fondos a las empresas, para llevar a cabo diversas operaciones.

    .tarjeta.tarjeta--morada.p-3.mb-5
      .row.justify-content-between.align-items-center
        .col.mb-3.mb-sm-0
          .h5.mb-0 Infografía. Análisis de oportunidades para emprender 
          p PDF 
        .col-sm-auto
          a.boton.boton--b(:href="obtenerLink('/media/analisis_de oportunidades_para_emprender.pdf')" target="_blank")
            span Descargar
            i.fas.fa-file-download
    
    .cajon--c.p-4.mb-5.p-5.w-75.mx-auto
      .row.align-items-center.justify-content-center
        .col-6.col-md-2.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/icon-alert.svg", alt="Alerta")
        .col-12.col-md-10
          p La empresa, como unidad económica, debe afrontar el reto de adaptarse constantemente a los requerimientos del entorno cambiante, cuya influencia es constante y duradera.

    p.mb-5.pb-3
      strong Es importante que antes de desarrollar la matriz DOFA o FODA personal, 
      | el emprendedor, a través de la observación, analice las ideas de negocio, el mercado al cual espera llegar, el producto que desea producir, el servicio que desea prestar y observar, además de sus habilidades personales, entre muchas otras variables, y tomar también la decisión de desarrollar un producto o servicio en particular; para hacerlo puede tomar, como base, algunas de las siguientes preguntas: 

    #carouselC1.carousel.slide.mb-5(data-bs-ride='carousel', data-bs-interval='false')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselC1' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='6' aria-label='Slide 7')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='7' aria-label='Slide 8')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='8' aria-label='Slide 9')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='9' aria-label='Slide 10')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='10' aria-label='Slide 11')
        button(type='button' data-bs-target='#carouselC1' data-bs-slide-to='11' aria-label='Slide 12')
        
      .carousel-inner.cajonSlider--a
        .carousel-item.active
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Cuál es la necesidad insatisfecha que tiene el mercado en un producto o servicio en particular?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Esta necesidad se basa en un producto o servicio que presenta dificultades que pueden ser mejoradas o corregidas?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Existen nuevas tecnologías que permitan corregir estas falencias?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Se presenta una necesidad específica por un producto o servicio en un segmento demográfico en particular?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Se amplió la zona geográfica a atender, o se está cubriendo parcialmente?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Se presentaron modificaciones, en políticas o leyes, que permiten iniciar un emprendimiento en particular?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center A través de desarrollos tecnológicos, ¿es posible reducir los costos de un producto o servicio y que, de esta forma, se vuelva atractivo para el mercado?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Se presenta un cambio importante en los gustos, costumbres, hábitos, modas u otros factores culturales y comportamentales que afectan el producto o servicio a desarrollar?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿La competencia dejó de atender a un mercado o segmento en particular?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Existe una industria, en particular, en crecimiento?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿Existe la posibilidad de ingresar un nuevo producto o servicio que fue desarrollado en otro país?
        .carousel-item
          .carousel-conten
            figure
              img.imgSliderIcon.mx-auto(src='@/assets/curso/tema1/icon-question.svg', alt='Pregunta')
            h5.text-center ¿El mercado es lo suficientemente grande, que permite el ingreso de un nuevo competidor?

      button.carousel-control-prev(type='button' data-bs-target='#carouselC1' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselC1' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    #t_1_1.titulo-segundo.mb-5.pt-5
      .h4 1.1 Definición del tipo de negocio

    p.mb-5 Después que el emprendedor ha desarrollado el modelo DOFA o FODA personal y ha identificado con mayor claridad sus fortalezas y debilidades, podrá definir si el producto o servicio que piensa desarrollar en su emprendimiento puede tener un mayor grado de éxito que aquel en el cual, el emprendedor, no conoce o no cuenta con las habilidades suficientes para su desarrollo. 

    .cajon--c.p-4.mb-5.p-5.w-75.mx-auto
      .row.align-items-center.justify-content-center
        .col-6.col-md-2.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/icon-alert.svg", alt="Alerta")
        .col-12.col-md-10
          p Se debe tener en cuenta que esta matriz es un método de prediagnóstico que permite formular ideas de negocio.

    #t_1_2.titulo-segundo.mb-5.pt-5
      .h4 1.2 Metodología CANVAS del entorno
    
    h2.TextColor01.mt-5.mb-4.pt-2 ¿Qué es el modelo CANVAS?

    p.w-75.mb-5 El modelo CANVAS (en inglés Business Model Canvas) o lienzo de modelo de negocio, fue desarrollado en 2011 por Alexander Osterwalder y presenta, de forma simplificada, las diferentes variables para desarrollar y evaluar los modelos de negocio a desarrollar, existentes o cerrados; y se subdivide en cuatro áreas:

    .row.g-2.mb-5
      .col-6.col-md-3
        .contColor--01
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img03.svg', alt='Mercado')
          p.fs-5.text-center Mercado
      .col-6.col-md-3
        .contColor--02
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img04.svg', alt='Entorno macroeconómico')
          p.fs-5.text-center Entorno macroeconómico
      .col-6.col-md-3
        .contColor--03
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img05.svg', alt='Entorno competitivo')
          p.fs-5.text-center Entorno competitivo
      .col-6.col-md-3
        .contColor--04
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='Tendencias')
          p.fs-5.text-center Tendencias


    p.w-75.text-center.mx-auto.mb-5 Cada una de estas áreas se explicará de forma general y, posteriormente, se entrará en detalle de cada uno de los módulos que componen el mapa estratégico.

    .row.g-2.mb-5.align-items-stretch.align-items-md-center
      .col-6.col-md-4
        .contColor--03
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img05.svg', alt='Entorno competitivo')
          h5.text-center.mb-2 Entorno competitivo
          p.fs-6.text-center.mb-3 FUERZAS DE LA INDUSTRIA
          p.text-center
            | • Proveedores y otros actores de la cadena de valor
            br
            | • Stakeholders
            br
            | • Competidores actuales
            br
            | • Nuevos competidores
            br
            | • Productos y servicios sustitutos
      .col-4.d-none.d-md-block
        .contColor--04.mb-3
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='Tendencias')
          h5.text-center.mb-2 Tendencias
          p.fs-6.text-center.mb-3 TENDENCIAS CLAVE
          p.text-center
            | • Tecnológicas
            br
            | • Regulatorias
            br
            | • Sociales y culturales
            br
            | • Socioeconómicas
        img.mb-3(src='@/assets/curso/tema1/img07.svg', alt='Mercado')
        .contColor--02
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img04.svg', alt='Entorno macroeconómico')
          h5.text-center.mb-2 Entorno macroeconómico
          p.fs-6.text-center.mb-3 FUERZAS MACROECONÓMICAS
          p.text-center
            | • Condiciones
            br
            | • Mercados de capitales
            br
            | • Infraestructura económica
            br
            | • Commodities y otros recursos
      .col-6.col-md-4
        .contColor--01
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img03.svg', alt='Mercado')
          h5.text-center.mb-2 Mercado
          p.fs-6.text-center.mb-3 FUERZAS DE MERCADO
          p.text-center
            | • Segmentos de mercado
            br
            | • Necesidades y demanda
            br
            | • Problem&aacute;ticas
            br
            | • Costos de cambios
            br
            | • Atractivo de los ingresos
      .col-12.d-flex.justify-content-center.d-block.d-md-none
        .col-7.col-md-4
          img(src='@/assets/curso/tema1/img07.svg', alt='Mercado')
      .col-6.d-block.d-md-none
        .contColor--04
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='Tendencias')
          h5.text-center.mb-2 Tendencias
          p.fs-6.text-center.mb-3 TENDENCIAS CLAVE
          p.text-center
            | • Tecnológicas
            br
            | • Regulatorias
            br
            | • Sociales y culturales
            br
            | • Socioeconómicas
      .col-6.d-block.d-md-none
        .contColor--02
          img.imgCCont.mx-auto(src='@/assets/curso/tema1/img04.svg', alt='Entorno macroeconómico')
          h5.text-center.mb-2 Entorno macroeconómico
          p.fs-6.text-center.mb-3 FUERZAS MACROECONÓMICAS
          p.text-center
            | • Condiciones
            br
            | • Mercados de capitales
            br
            | • Infraestructura económica
            br
            | • Commodities y otros recursos
    
    .h5.mb-5 1.2.1 Mercado
    
    .row.m-1.mb-4.contColor--01.w-75.justify-content-center
      .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
        .row.w-100
          .col-12
            img.imgCCont.mx-auto(src='@/assets/curso/tema1/img03.svg', alt='Entorno competitivo')
          .col-12
            p.fs-5.text-center Mercado
      .col-1.d-none.d-md-block
        .lineDec--01
      .col-10.col-md-6
        h6.mb-3 FUERZAS DE MERCADO
        p
          | • Segmentos de mercado
          br
          | • Necesidades y demanda
          br
          | • Problem&aacute;ticas
          br
          | • Costos de cambios
          br
          | • Atractivo de los ingresos

    p.mb-5
      strong En esta área se analiza el producto o servicio, se confirma a quién va dirigido, 
      | la forma cómo satisfará una necesidad específica de un mercado, de un grupo étnico, de una comunidad. Esta relación se basa en la oferta y la demanda y puede o no estar afectada por una ubicación geográfica, debido a que en la actualidad las ventas por medios electrónicos, en muchos casos, eliminaron esta barrera.
    
    .row.justify-content-end.mb-5
      .col-12.col-md-7.p-4
        p.text-end 
          strong Es en esta zona donde se definen las problemáticas de un determinado mercado o segmento del mercado, 
          | se analiza el atractivo de los ingresos, las rentabilidades que genera el producto o servicio ofrecido, los costos que genera un cambio en el producto, en su presentación, en su formulación, entre otros. 
      .col-10.col-md-5.cajon--01.p-4
          h4.mb-5 Actualmente existen variados mercados, por ejemplo:
          ul.lista-ul
            li
              i.fas.fa-check-square
              | Los organizacionales.
            li
              i.fas.fa-check-square
              | El financiero.
            li
              i.fas.fa-check-square
              | El mercadeo.
            li
              i.fas.fa-check-square
              | Los recursos humanos.
            li
              i.fas.fa-check-square
              | La operación.
            li
              i.fas.fa-check-square
              | La producción, entre otros.
    
    .h5.mb-5 1.2.2 Entorno macroeconómico
    
    .row.m-1.mb-4.contColor--02.w-75.justify-content-center
      .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
        .row.w-100
          .col-12
            img.imgCCont.mx-auto(src='@/assets/curso/tema1/img04.svg', alt='Entorno competitivo')
          .col-12
            p.fs-5.text-center Entorno macroeconómico
      .col-1.d-none.d-md-block
        .lineDec--02
      .col-10.col-md-6
        h6.mb-3 FUERZAS MACROECONÓMICAS
        p
          | • Condiciones
          br
          | • Mercados de capitales
          br
          | • Infraestructura económica
          br
          | • Commodities y otros recursos

    p.mb-5 En esta área se analizan principalmente los factores y las condiciones, a nivel macroeconómico, que afectan la economía y que, a su vez, inciden directamente en el resultado del emprendimiento, como son:

    h4.mb-4.TextColor01 Las condiciones macroeconómicas

    p.w-75.mb-4 Son aquellas variables que se analizan para determinar la evolución o retroceso económico de un país, una región o a nivel mundial. Estas mediciones se enfocan en el análisis, en conjunto, de los hogares, las empresas, el Gobierno y el sector externo; lo ideal es que se analice, a través de modelos sencillos, la realidad económica que pueda llegar a afectar el emprendimiento. 

    h6.mb-5 Ejemplos:

    nav
      #nav-tab.nav.nav-tabs(role='tablist')
        button#nav-21-tab.nav-link.active(data-bs-toggle='tab' data-bs-target='#nav-21' type='button' role='tab' aria-controls='nav-21' aria-selected='true') El mercado de capitales
        button#nav-22-tab.nav-link(data-bs-toggle='tab' data-bs-target='#nav-22' type='button' role='tab' aria-controls='nav-22' aria-selected='false') Los commodities
        button#nav-23-tab.nav-link(data-bs-toggle='tab' data-bs-target='#nav-23' type='button' role='tab' aria-controls='nav-23' aria-selected='false') La infraestructura económica
    #nav-tabContent.tab-content.mb-5
      #nav-21.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='nav-21-tab')
        .row.align-items-center.justify-content-center.p-4
          .col-12.col-md-7.mb-4.mb-md-0
            h4 El mercado de capitales
            p Es el lugar en el cual los oferentes y demandantes de dinero se encuentran para llevar a cabo una operación financiera. En este se capitulan acciones, obligaciones, títulos de deuda a corto, mediano y largo plazo.
          .col-9.col-md-5
            figure
              img(src="@/assets/curso/tema1/img10.svg", alt="mercado de capitales")
        
      #nav-22.tab-pane.fade(role='tabpanel' aria-labelledby='nav-22-tab')
        .row.align-items-center.justify-content-center.p-4
          .col-12.col-md-7.mb-4.mb-md-0
            h4 Los commodities
            p Corresponden a los bienes básicos que se transan sin ninguna modificación, procesamiento o característica diferenciadora. Se dividen en metales industriales, agrícolas y otros; su valor se fija sobre la relación de oferta y demanda.
          .col-9.col-md-5
            figure
              img(src="@/assets/curso/tema1/img08.svg", alt="Entorno específico")
      
      #nav-23.tab-pane.fade(role='tabpanel' aria-labelledby='nav-23-tab')
        .row.align-items-center.justify-content-center.p-4
          .col-12.col-md-7.mb-4.mb-md-0
            h4 La infraestructura económica
            p Hace referencia a la infraestructura marítima, terrestre y aérea, así como las condiciones de aeropuertos, carreteras y puertos fluviales que facilitan o entorpecen el movimiento o traslado de las mercancías al interior o fuera del país. En el caso colombiano, el lugar de mayor concentración de producción de todo tipo se encuentra en la región central del país, lo que hace que exportar, vía marítima, sea más costoso. 
          .col-9.col-md-5
            figure
              img(src="@/assets/curso/tema1/img09.svg", alt="Entorno específico")
    
    .h5.mb-5 1.2.3 Entorno competitivo 
    
    .row.m-1.mb-4.contColor--03.w-75.justify-content-center
      .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
        .row.w-100
          .col-12
            img.imgCCont.mx-auto(src='@/assets/curso/tema1/img05.svg', alt='Entorno competitivo')
          .col-12
            p.fs-5.text-center Entorno competitivo
      .col-1.d-none.d-md-block
        .lineDec--03
      .col-10.col-md-6
        h6.mb-3 FUERZAS DE LA INDUSTRIA
        p
          | • Proveedores y otros actores de la cadena de valor
          br
          | • Stakeholders
          br
          | • Competidores actuales
          br
          | • Nuevos competidores
          br
          | • Productos y servicios sustitutos

    p.mb-5 El análisis del entorno competitivo se basa en el modelo desarrollado por el profesor Michael Porter, en la Escuela de Negocios de Harvard en el año 1979. Este modelo hace referencia a las fuerzas competitivas que se encuentran en el entorno del negocio, la competitividad y la rivalidad en una industria específica para definir, entonces, la rentabilidad del mercado en el cual se encontrará la nueva empresa.

    p.mb-4 Según Porter, la situación competitiva de una empresa o de una línea de negocio, depende de cinco variables: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Poder de negociación de los clientes en la cadena de valor")
        p.mb-4 Es la capacidad que tienen los proveedores para imponer o determinar las características de las operaciones de compra y venta. Si en el mercado, en el que el emprendedor quiere acceder con su producto se encuentra con una asociación de clientes, estos pueden acordar o fijar precios a un determinado producto o servicio, lo que puede incidir en una baja tan sustancial del precio de venta (dada su estructura de costos), que puede afectar la rentabilidad en el negocio, o incluso tener que vender a pérdida. Si existen múltiples proveedores en el mercado, también se puede llegar a sufrir inconvenientes al momento de negociar, debido a que si no se logra un acuerdo en el precio, el comprador, sin inconveniente, puede recurrir a otro proveedor dejando al emprendedor con el producto y fuera del mercado. 
        p.mb-4 Otros factores con los que estas asociaciones pueden afectar al emprendedor son: la forma o modalidades de pago, productos en consignación, calidad, plazos de entrega, que pueden afectar de manera importante en el flujo de caja y que incide en la continuidad del negocio del emprendedor en el tiempo. 
        p Una de las premisas en la administración es que, la mayoría de las veces, las empresas no fracasan por la rentabilidad, sino por no generar un flujo de caja para la continuidad del negocio.

      div(titulo="Poder de negociación de los proveedores o vendedores")
        p Es la capacidad que tienen los proveedores para imponer o determinar las condiciones en un determinado mercado, las características de las operaciones, la forma de pago, la presentación y las características de calidad del producto o servicio suministrado.
      
      div(titulo="Amenaza de nuevos competidores")
        p Hace referencia a la posibilidad que existe del ingreso de nuevos competidores en un mercado. Por ejemplo, si el mercado está o no regulado, si existen o no barreras arancelarias para la entrada de productos de otros países, si se es un pequeño productor y llega, al país o región, un competidor que pueda realizar la misma producción a través de una economía de escala, si el nuevo competidor puede acceder a grandes inversiones de capital, lo que significa un menor costo.
      
      div(titulo="Amenaza de productos sustitutos")
        p.mb-4 Hace referencia a la posibilidad que tiene el mercado de cambiar o sustituir un producto o servicio por otro de igual o mejor calidad. Por ejemplo: que el nuevo producto cuente con mayores desarrollos tecnológicos que hagan que el cliente prefiera el producto de la competencia con mucha facilidad. 
        p Algunos factores que pueden minimizar esta amenaza son: la dificultad que tengan los clientes para sustituir el producto o unos costos elevados para hacerlo, o un nivel elevado de diferenciación del producto.
      
      div(titulo="Rivalidad entre los competidores")
        p La existencia de un mercado con mucha competencia determinará el éxito del negocio y sus expectativas de futuro, debido a que lo hacen menos atractivo. Se considera también que los factores anteriores tienen la capacidad para determinar el grado de rivalidad interna del mercado que, habitualmente, depende de la estructura de la competencia y los elevados costos fijos.

    .h5.mb-5 1.2.4 Tendencias
    
    .row.m-1.mb-4.contColor--04.w-75.justify-content-center
      .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
        .row.w-100
          .col-12
            img.imgCCont.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='Entorno competitivo')
          .col-12
            p.fs-5.text-center Tendencias
      .col-1.d-none.d-md-block
        .lineDec--04
      .col-10.col-md-6
        h6.mb-3 TENDENCIAS CLAVE
        p
          | • Tecnológicas
          br
          | • Regulatorias
          br
          | • Sociales y culturales
          br
          | • Socioeconómicas

    p.mb-5 Según el Centro de Innovación Pública Digital (s. f.), las tendencias son manifestaciones de consumo, mercado y estilo de vida que indican hacia dónde se dirige la innovación. Estas manifestaciones pueden estudiarse en hábitos imaginarios, deseos o consumos de personas, tanto como en casos o ejemplos de éxito en la oferta de mercado.

    .row.align-items-center.mb-5
      .col-12.col-md-7.mb-4.mb-md-0
        p A través del análisis de tendencias, se puede construir una idea más sólida del producto o servicio a desarrollar; permite proyectar una tendencia en las ventas, entender el estado actual de un producto o servicio, si este se encuentra actualmente en una fase de iniciación o es pionero, y si se encuentra en su auge o en el proceso de decadencia.
      .col-9.col-md-5
        figure
          img(src="@/assets/curso/tema1/img11.svg", alt="análisis de tendencias")
    

    #t_1_3.titulo-segundo.mb-5.pt-5
      .h4 1.3 Desarrollo del mapa estratégico

    p.mb-5 Anteriormente se dijo que el modelo CANVAS del entorno, es un lienzo de modelo de negocio y se analizaron cada una de las cuatro áreas en que se subdivide. Ahora se profundizará en el estudio de las nueve partes o subdivisiones que representan los principales aspectos que se involucran en el negocio, respecto a la propuesta de valor que ofrece el emprendimiento.    

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h4.mb-0 Estos aspectos se analizarán de forma independiente para que el emprendedor pueda pasar de la idea de proyecto, a plasmar un modelo empresarial del mismo. 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Para definir cada una de las secciones, al momento de desarrollar el modelo, el emprendedor responderá a una serie de preguntas que lo guiarán en la validación de cada aspecto, teniendo en cuenta que este es un modelo dinámico y que puede ajustarse a medida que se desarrolla.

    p#MapaText.mb-4
        | La siguiente figura muestra las nueve partes o subdivisiones del mapa estratégico y se analizarán cada una de las variables que pueden afectar un emprendimiento.
    
    p.mb-4
      span.etiqueta--morada Nota: 
      | Dar clic en las subdivisiones del mapa estrátegico para visualizar los elementos.

    #MapaGroup01
      .MapaNav.mb-3
        .colDiv--20
          button.colDivCont--03.collapsed(data-bs-toggle='collapse' data-bs-target='#MapaCollapse01' aria-expanded='true' aria-controls='#MapaCollapse01')
            p.text-center.mb-3
              | Socios
              br
              | clave
            img.CCont.mx-auto(src='@/assets/curso/tema1/img05.svg', alt='Socios clave')
        .colDiv--20
          button.colDivCont--03(data-bs-toggle='collapse' data-bs-target='#MapaCollapse02' aria-expanded='false' aria-controls='#MapaCollapse02')
            p.text-center.mb-3
              | Actividades
              br
              | clave
            img.CCont.mx-auto(src='@/assets/curso/tema1/img12.svg', alt='Actividades clave')
          button.colDivCont--03(data-bs-toggle='collapse' data-bs-target='#MapaCollapse03' aria-expanded='false' aria-controls='#MapaCollapse03')
            p.text-center.mb-3
              | Recursos
              br
              | clave
            img.CCont.mx-auto(src='@/assets/curso/tema1/img12.svg', alt='Recursos clave')
        .colDiv--20
          button.colDivCont--04(data-bs-toggle='collapse' data-bs-target='#MapaCollapse04' aria-expanded='false' aria-controls='#MapaCollapse04')
            p.text-center.mb-3
              | Propuesta
              br
              | de valor
            img.CCont.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='Propuesta de valor')
        .colDiv--20
          button.colDivCont--01(data-bs-toggle='collapse' data-bs-target='#MapaCollapse05' aria-expanded='false' aria-controls='#MapaCollapse05')
            p.text-center.mb-3
              | Relaciones con
              br
              | los clientes
            img.CCont.mx-auto(src='@/assets/curso/tema1/img14.svg', alt='Relaciones con los clientes')
          button.colDivCont--01(data-bs-toggle='collapse' data-bs-target='#MapaCollapse06' aria-expanded='false' aria-controls='#MapaCollapse06')
            p.text-center.mb-3
              | Canales
              br
              br
            img.CCont.mx-auto(src='@/assets/curso/tema1/img15.svg', alt='Canales')
        .colDiv--20
          button.colDivCont--01(data-bs-toggle='collapse' data-bs-target='#MapaCollapse07' aria-expanded='false' aria-controls='#MapaCollapse07')
            p.text-center.mb-3
              | Segmentos
              br
              | de clientes
            img.CCont.mx-auto(src='@/assets/curso/tema1/img03.svg', alt='Segmentos de clientes')
        .colDiv--50
          button.colDivCont--02(data-bs-toggle='collapse' data-bs-target='#MapaCollapse08' aria-expanded='false' aria-controls='#MapaCollapse08')
            p.text-center.mb-3 Estructura de costos
            img.CCont.mx-auto(src='@/assets/curso/tema1/img16.svg', alt='Estructura de costos')
        .colDiv--50
          button.colDivCont--02(data-bs-toggle='collapse' data-bs-target='#MapaCollapse09' aria-expanded='false' aria-controls='#MapaCollapse09')
            p.text-center.mb-3 Fuente de ingresos
            img.imgCCont.mx-auto(src='@/assets/curso/tema1/img04.svg', alt='Fuente de ingresos')

      #MapaCollapse01.MapaCont--03.collapse(data-bs-parent='#MapaGroup01')
        h3 Socios clave
        p.w-75.mb-4 Esta sección, al igual que las anteriores, hace referencia al área de gestión y habilidades gerenciales. Estos socios, o aliados clave, son una serie de colaboradores que ayudan a que el emprendimiento llegue más rápido al cliente, al ir avalados por su experiencia y su reputación.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--03
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Quiénes son los socios clave en el mercado? Por ejemplo: aquellos proveedores que proporcionan recursos para poder ofrecer el producto o servicio final.
            li
              i.fas.fa-check-square
              | ¿Cuáles son los suministros clave? 
            li
              i.fas.fa-check-square
              | ¿Qué actividades clave realizan los socios?
            li
              i.fas.fa-check-square
              | ¿Se pueden realizar alianzas estratégicas con competidores y no competidores? Ejemplo: para optimizar economías de escala, reducir riesgos y la incertidumbre. 
      
      #MapaCollapse02.MapaCont--03.collapse(data-bs-parent='#MapaGroup01')
        h3 Actividades clave
        p.w-75.mb-4 Esta sección también hace referencia al área de gestión y habilidades gerenciales, al “cómo”. Para desarrollar la propuesta de valor, son necesarias ciertas actividades para preparar el producto antes que llegue al mercado. En este punto, el emprendedor piensa en el core del negocio (actividad principal), lo que se realizará a diario.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--03
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Qué actividades clave requieren la propuesta de valor?
            li
              i.fas.fa-check-square
              | ¿Qué actividades clave requieren los canales de distribución?
            li
              i.fas.fa-check-square
              | ¿Qué actividades clave requieren la relación con los clientes?
            li
              i.fas.fa-check-square
              | ¿Qué actividades clave requieren las fuentes de ingresos?
            li
              i.fas.fa-check-square
              | ¿Se requieren plataformas o recursos de redes?
      
      #MapaCollapse03.MapaCont--03.collapse(data-bs-parent='#MapaGroup01')
        h3 Recursos clave
        p.w-75.mb-4 Esta sección hace referencia a lo correspondiente al área de gestión y habilidades gerenciales y se puede definir en el “cómo”. El emprendedor podrá definir los recursos con los que cuenta para llevar a cabo las actividades del negocio y cómo maximizarlos para ser productivo. 
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--03
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Qué recursos clave requiere la propuesta de valor del emprendedor? Ejemplo: canales de distribución, relaciones con clientes, fuentes de ingresos, intelectuales, humanos.
            li
              i.fas.fa-check-square
              | ¿Qué tipo de profesionales requiere el negocio? 
      
      #MapaCollapse04.MapaCont--04.collapse(data-bs-parent='#MapaGroup01')
        h3 Propuesta de valor
        p.w-75.mb-4 Esta sección también hace referencia al área de mercadeo, y es una pieza clave en el modelo de negocio, porque permite definir la propuesta de valor o la ventaja competitiva que ofrece, para que el cliente compre el producto o servicio al emprendedor y no a otro competidor del mercado; es decir, se debe contemplar qué hace diferente e innovador al producto y se puede definir como el “qué”.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--04.mb-4
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Qué valor se le entrega a los clientes?
            li
              i.fas.fa-check-square
              | ¿Qué paquete de productos y servicios se ofrece a cada segmento de clientes?
            li
              i.fas.fa-check-square
              | ¿Qué necesidades del cliente se satisfacen?
            li
              i.fas.fa-check-square
              | ¿Cuál es el factor diferenciador por el cual el cliente selecciona una propuesta de otra?
            li
              i.fas.fa-check-square
              | ¿Cuál es el problema o necesidad del cliente y qué se le ayudará a resolver?

        p.mb-5 Es importante, en el desarrollo de la propuesta de valor, tener en cuenta al economista Manfred A. Max-Neef, autor del libro Desarrollo a escala humana (1998), en el cual explica que el ser humano tiene necesidades humanas fundamentales y necesidades básicas fundamentales.

        .row.m-1.mb-4.contColor--04.border-0.rounded.justify-content-center
          .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
            p.fs-5.text-end Las necesidades humanas fundamentales se dividen en:
          .col-1.d-none.d-md-block
            .lineDec--04
          .col-10.col-md-6
            figure
              img(src="@/assets/curso/tema1/img18.svg", alt="Necesidades humanas fundamentales ")
        
        .row.m-1.mb-4.contColor--04.border-0.rounded
          .col-12.col-md-5.d-flex.align-items-center.mb-4.mb-md-0
            p.fs-5.text-end Las necesidades humanas básicas se dividen en:
          .col-1.d-none.d-md-block
            .lineDec--04
          .col-12.col-md-6
            figure
              img(src="@/assets/curso/tema1/img19.svg", alt="Necesidades básicas fundamentales ")
        
        p.fs-4.text-center.w-75.mx-auto.mb-4 Y ambas se correlacionan para buscar la satisfacción de la necesidad, como se puede observar en la siguiente tabla:

        .tarjeta.tarjeta--morada.p-3.mb-4
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Matriz de necesidades y satisfactores de Max-Neef.
              p PDF 
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/media/Necesidades_humanas_fund.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
      
      #MapaCollapse05.MapaCont--01.collapse(data-bs-parent='#MapaGroup01')
        h3 Relaciones con los clientes
        p.w-75.mb-4 Es importante que el emprendedor se comunique con sus clientes y conserve una adecuada relación con ellos, pues ellos son el eje central del negocio. Por este motivo, es necesario definir la relación que se tendrá con cada segmento de clientes, lo que es fundamental para el éxito del negocio.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--01
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Qu&eacute; tipo de relaci&oacute;n se espera establecer y mantener con cada uno de los segmentos de clientes?
            li
              i.fas.fa-check-square
              | ¿Qu&eacute; tipo de relaciones ya se han establecido con los clientes?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo est&aacute; integrada esta relaci&oacute;n con el modelo de negocio?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;nto cuesta mantener estos clientes?
            li
              i.fas.fa-check-square
              | ¿Las relaciones con los clientes son personalizadas o automatizadas? Ejemplo: en el punto de venta, a trav&eacute;s de un call center, a trav&eacute;s de un e-mail, autoservicio, comunidad, entre otras.
            li El modelo de relaci&oacute;n con los clientes, &iquest;de qu&eacute; tipo es? Por ejemplo: relaci&oacute;n de adquisici&oacute;n, de retenci&oacute;n de clientes, de aumento en las ventas.
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les canales son m&aacute;s eficientes en costos?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo se integran los canales de distribuci&oacute;n y ventas, con las rutinas de los clientes?
      
      #MapaCollapse06.MapaCont--01.collapse(data-bs-parent='#MapaGroup01')
        h3 Canales
        p.w-75.mb-4 Una vez que se han definido los clientes y la propuesta de valor, el emprendedor tendrá que llegar a sus clientes a través de los canales de distribución del producto o del servicio.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--01
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿A trav&eacute;s de qu&eacute; canales de distribuci&oacute;n y ventas quiere ser contactado el cliente?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo se contacta en este momento?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les de los canales de distribuci&oacute;n y de ventas funcionan mejor?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les canales de distribuci&oacute;n y de ventas no funcionan o no tienen la misma eficiencia de los que funcionan mejor?
            li
              i.fas.fa-check-square
              | ¿Por qu&eacute; estos canales de distribuci&oacute;n y de ventas funcionan o no funcionan correctamente?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les canales son m&aacute;s eficientes en costos?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo se integran los canales de distribuci&oacute;n y de ventas con las rutinas de los clientes?
      
      #MapaCollapse07.MapaCont--01.collapse(data-bs-parent='#MapaGroup01')
        h3 Segmentos de clientes
        p.w-75.mb-4 El foco del emprendedor debe ser el cliente por lo que el producto se debe orientar a sus necesidades y deseos. En esta sección, se hace referencia a todo lo que corresponde al área de mercadeo y se definirá como el “quién”.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--01
          ul.lista-ul
            li
              i.fas.fa-check-square
              |  ¿Para qui&eacute;n se crea valor?
            li
              i.fas.fa-check-square
              |  ¿Qui&eacute;nes son los clientes m&aacute;s importantes?
            li
              i.fas.fa-check-square
              |  ¿Cu&aacute;l es el sector al que pertenece la idea de negocio del emprendedor?
            li
              i.fas.fa-check-square
              |  ¿Qu&eacute; necesidades, comportamientos o atributos en com&uacute;n, contiene este segmento de clientes? Por ejemplo: informaci&oacute;n demogr&aacute;fica, psicogr&aacute;fica, estrato, domicilio urbano o rural.
            li
              i.fas.fa-check-square
              |  ¿Maneja productos diferentes?
            li
              i.fas.fa-check-square
              |  ¿Maneja rentabilidades diferentes?
            li
              i.fas.fa-check-square
              |  ¿Cuenta con un relacionamiento diferente para cada nicho de mercado? Ejemplo: algunos gerentes de relaciones, de los bancos comerciales, se especializan en banca personal, otros en banca Pyme, otros en banca corporativa.
      
      #MapaCollapse08.MapaCont--02.collapse(data-bs-parent='#MapaGroup01')
        h3 Estructura de costos
        p.w-75.mb-4 Esta sección hace referencia a lo correspondiente al área financiera y se puede definir como el “cuánto”, pues la infraestructura de la empresa tiene unos costos que se deben pagar y optimizar. Para formalizarlos, es necesario definir las prioridades y los gastos fundamentales en el negocio de los que no lo son. Esto evitará que el emprendimiento se desvíe de sus presupuestos y el negocio fracase debido a problemas financieros.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--02
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿En qu&eacute; costos se incurre para operar?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les son los costos fijos?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les son los costos variables?
            li
              i.fas.fa-check-square
              | ¿A cu&aacute;nto ascienden los costos totales?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;les son los costos m&aacute;s importantes?
            li
              i.fas.fa-check-square
              | ¿Qu&eacute; actividades clave son las m&aacute;s costosas?

      
      #MapaCollapse09.MapaCont--02.collapse(data-bs-parent='#MapaGroup01')
        h3 Fuente de ingresos
        p.w-75.mb-4 Esta sección hace referencia al área financiera y se puede definir como el “cuánto”. Aquí se definen la forma de monetización del negocio y las fuentes de facturación de la empresa y, de esta manera, poder analizar si el emprendimiento es rentable.
        p.w-75.mb-5 Las siguientes preguntas sirven de guía para el análisis de este ítem:
        img.imgMapaCont.mx-auto(src='@/assets/curso/tema1/img17.svg', alt='preguntas')
        .DivMapaCont--02
          ul.lista-ul
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;nto est&aacute; dispuesto el cliente a invertir en el producto o servicio?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;nto pagan actualmente por otro producto o servicio que ofrece caracter&iacute;sticas similares?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo est&aacute;n pagando actualmente?
            li
              i.fas.fa-check-square
              | ¿C&oacute;mo prefieren pagar?
            li
              i.fas.fa-check-square
              | ¿Cu&aacute;l es la contribuci&oacute;n del cliente con el total de los ingresos del emprendimiento?
            li
              i.fas.fa-check-square
              | ¿Los ingresos de los clientes son recurrentes o espor&aacute;dicos?
            li
              i.fas.fa-check-square
              | ¿Los precios del producto o servicio ofrecido son fijos o din&aacute;micos? Por ejemplo: se basan en la oferta y la demanda, en cosechas, en productos de temporada, etc.

      .row.justify-content-between.align-items-center.mb-5
        .col.mb-3.mb-sm-0
          hr.hrV02
        .col-sm-auto
          a.mt-4.boton.boton--b(@click='topMap')
            span Subir al mapa estratégico 
            i.fas.fa-arrow-circle-up
    
    p.mb-4 Lo invitamos a descargar la plantilla matriz modelo CANVAS, para que pueda practicar lo estudiado anteriormente.

    .tarjeta.tarjeta--morada.p-3
      .row.justify-content-between.align-items-center
        .col.mb-3.mb-sm-0
          .h5.mb-0 Modelo Canvas
          p PDF 
        .col-sm-auto
          a.boton.boton--b(:href="obtenerLink('/media/Plantilla_modelo_CANVAS.pdf')" target="_blank")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  methods: {
    topMap() {
      var x = document.getElementById('MapaText')
      x.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="sass" scoped></style>
