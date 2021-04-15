<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(icono="fas fa-info" titulo="Introducción")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .titulo-principal
      .h3 Introducción

    h4.w-75.mb-5 Ser emprendedor genera grandes satisfacciones y desarrolla, así mismo, capacidades de liderazgo únicas: 

    figure.mb-5
      img.mb-4(src="@/assets/curso/intro/img01.svg", alt="Introducción")
    
    p.w-75.mb-5 Ser valiente no significa que se tomen decisiones sin ningún tipo de fundamento; es por eso que se entregan herramientas que permiten el estudio del entorno, de forma que las decisiones se tomen con base en análisis previos que minimicen los riesgos de salida del mercado para el emprendimiento. 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.contDiv--cl.p-5.rounded-3    
        p.mb-5 Según el Informe Dinámica empresarial elaborado por Confecámaras (2019), con base en la información del Registro Único Empresarial y Social (RUES) de las Cámaras de Comercio, durante el año 2018 se crearon 328.237 unidades productivas de las cuales corresponde.

        .TittleImg.mb-4
          img(src="@/assets/curso/intro/img02.svg", alt="Comercio")
          p.fs-3.fw-lighter
            | Al sector comercio el 
            strong 37,9%,
        .TittleImg.mb-4
          img(src="@/assets/curso/intro/img03.svg", alt="Comida")
          p.fs-3.fw-lighter
            | Alojamientos y servicios de comida el 
            strong 16%,
        .TittleImg.mb-4
          img(src="@/assets/curso/intro/img04.svg", alt="Manufactura")
          p.fs-3.fw-lighter
            | Industrias manufactureras el 
            strong 9,5%
        .TittleImg.mb-5
          img(src="@/assets/curso/intro/img05.svg", alt="Científicas y técnicas")
          p.fs-3.fw-lighter
            | Actividades profesionales científicas y técnicas el 
            strong 5,9%,
        
        p y otras actividades de servicios 4,5 %; las cuales representan el 74,1 % del total de empresas. En el mismo periodo, se cerraron 180.507 unidades productivas entre personas naturales y personas jurídicas.

    p.w-75.mb-5 Se debe tener en cuenta que algunos de los factores que inciden en el fracaso de estas unidades productivas son, en su orden, los siguientes factores:

    .row.justify-content-center.mb-5
      .col-12.col-md-9
        .row.align-items-center.justify-content-end
          .col-4
            div
              ul.lista-ul--color
                li 
                  i.fas.fa-check-square
                  | Financieros.
                li 
                  i.fas.fa-check-square
                  | Organizacionales.
                li 
                  i.fas.fa-check-square
                  | De mercado.
                li 
                  i.fas.fa-check-square
                  | De recurso humano.
                li 
                  i.fas.fa-check-square
                  | De entorno.
                li 
                  i.fas.fa-check-square
                  | Operativos.
          .col-6
            figure
              img(src="@/assets/curso/intro/img06.svg", alt="fracaso")
    
    .row.justify-content-center.mb-5
      .col-12.col-md-9
        .row.justify-content-center
          .col-12.col-md-6.mb-4.mb-md-0
            p.mb-4
              strong Seg&uacute;n un estudio realizado por Global Entrepreneurship Monitor (GEM)
              |  Colombia (2019), Colombia ocupa el s&eacute;ptimo puesto a nivel mundial en el nacimiento de emprendedores y, en Am&eacute;rica Latina, ocupa el tercer puesto despu&eacute;s de Chile.
            p
              | Por lo anterior, y con el fin que el emprendedor cuente con mayores herramientas para el an&aacute;lisis de las condiciones generales del emprendimiento, se han desarrollado algunas 
              strong herramientas como la metodolog&iacute;a CANVAS y el an&aacute;lisis PESTEL
              | , las cuales permiten clarificar situaciones a las que el emprendedor se ve expuesto en el momento de iniciar un emprendimiento
          .col-6
            figure
              img(src="@/assets/curso/intro/img07.svg", alt="fracaso")
    
    p Estas herramientas le permiten al emprendedor analizar el mercado, los clientes, los competidores, planear sus costos y gastos, pronosticar sus ventas, entre muchas otras variables; la finalidad de estas se basa en que el emprendedor pueda iniciar un proyecto sólido y perdurable en el tiempo, facilitando la valoración de los principales riesgos y mejora de la toma de decisiones, para que así, a largo plazo, permanezca activo en el mercado. 

    hr.hrV01

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
