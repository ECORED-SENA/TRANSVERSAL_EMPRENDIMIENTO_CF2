<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Análisis PESTEL
    
    .row.m-0.align-items-center.mb-5
      .col-7.mb-4.mb-md-0
        p.fs-3.fw-lighter
          strong El análisis PESTEL 
          | es una herramienta que describe  el entorno en el que se desenvolverá el emprendimiento.
      .col-5
        .bloque-texto-a__texto.p-4
          p Este análisis describe los aspectos principales como la política, la economía, lo social, la tecnología, las políticas ambientales y las políticas legales.
    
    p.fs-4.fw-lighter.text-center.w-75.mb-5.mx-auto La siguiente figura muestra el entorno general y específico que se debe describir en esta técnica.

    .row.contColor--05.p-5.mb-5
      .col-12.col-md-7.mb-5.mb-md-0
        figure
          img(src="@/assets/curso/tema2/img01.svg", alt="entorno general y específico")
      .col-12.col-md-5
        h5 Entorno general (PESTEL)
        img.imgE.mb-5(src="@/assets/curso/tema2/img02.svg", alt="Entorno general (PESTEL)")
        h5 Entorno específico
        img.imgE.mb-5(src="@/assets/curso/tema2/img03.svg", alt="Entorno específico")
        ul.lista-ul
            li
              i.fas.fa-check-square
              | Clientes
            li
              i.fas.fa-check-square
              | Público
            li
              i.fas.fa-check-square
              | Competidores
            li
              i.fas.fa-check-square
              | Intermediarios
            li
              i.fas.fa-check-square
              | Asociados
            li
              i.fas.fa-check-square
              | Proceedores
    
    .row.align-items-center.justify-content-between.mb-5
        .col-lg-6
          hr.hrV01.float-end
          p.text-end.float-end A continuación, se describirán los factores generales utilizando preguntas guía, para que el emprendedor realice una reflexión sobre cada uno de los temas y describa, de forma sistemática, la forma en la cual estos factores pueden incidir en sus emprendimientos. 
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/img04.svg", alt="preguntas guía")
    
    Acordion(clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Factores políticos")
        p.mb-4 Son factores de tipo gubernamental que afectan el desempeño de las entidades. Se pueden considerar: la política fiscal, las restricciones al comercio o a la industria a la que pertenezca el emprendedor, situaciones de guerra, relaciones internacionales, entre otros. 
        p.mb-4 Se debe dar respuesta a preguntas como:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional o local cuenta con pol&iacute;ticas claras?
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional o local tiene una pol&iacute;tica fiscal clara?
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional cuenta con una pol&iacute;tica cambiaria clara?
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional tiene firmados tratados comerciales claros?
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional ha modificado sustancialmente los tratados comerciales?
          li 
            i.fas.fa-angle-right
            | ¿Puede presentarse un cambio en el partido pol&iacute;tico que actualmente gobierna? Esto, &iquest;c&oacute;mo lo afectar&iacute;a?
          li 
            i.fas.fa-angle-right
            | ¿Cu&aacute;les podr&iacute;an ser los principales cambios en la sociedad y en las empresas?

      div(titulo="Factores económicos")
        p.mb-4 Dentro de los factores económicos se destacan: la tasa de cambio, las tasas de interés, la inflación, los niveles de exportación, el Producto Interno Bruto (PIB), nivel de producción, moneda, tipo de cambio.
        p.mb-4 Se debe dar respuesta a preguntas como:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿El Gobierno nacional tiene una pol&iacute;tica econ&oacute;mica y macroecon&oacute;mica clara?
          li 
            i.fas.fa-angle-right
            | ¿Existe una estabilidad en factores como la tasa de cambio, la tasa de inter&eacute;s, la inflaci&oacute;n?
          li 
            i.fas.fa-angle-right
            | ¿Existen apoyos financieros para la creaci&oacute;n de empresas en sectores particulares, eliminaci&oacute;n de impuestos?

      
      div(titulo="Factores sociales")
        p.mb-4 En este campo se consideran factores que se relacionan con las características básicas, las preferencias, los gustos y hábitos de consumo de la sociedad; por ejemplo: la edad, el crecimiento de la sociedad y la educación.
        p.mb-4 Se debe dar respuesta a preguntas como: 
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿Existen cambios representativos en el nivel de ingresos de la poblaci&oacute;n?
          li 
            i.fas.fa-angle-right
            | ¿Existen cambios importantes en el nivel poblacional?
          li 
            i.fas.fa-angle-right
            | ¿Existen cambios importantes en los gustos de la poblaci&oacute;n, que puedan afectar el consumo?

      div(titulo="Factores tecnológicos")
        p.mb-4 Los avances y las tendencias tecnológicas son aspectos importantes que se deben tener en cuenta para el emprendimiento.
        p.mb-4 Se debe dar respuesta a preguntas como:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿Se realiza un desarrollo importante de las TIC en el entorno?
          li 
            i.fas.fa-angle-right
            | ¿Se realiza una inversi&oacute;n importante en innovaci&oacute;n y desarrollo tecnol&oacute;gico en el entorno?
          li 
            i.fas.fa-angle-right
            | ¿Se vislumbran cambios tecnol&oacute;gicos importantes en el futuro?

      div(titulo="Factores ambientales")
        p.mb-4 Factores relevantes que afectan actualmente el entorno empresarial como: el cambio climático, la conciencia ambiental, las políticas medioambientales. 
        p.mb-4 Se debe dar respuesta a preguntas como:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿Existen leyes claras referente a la protecci&oacute;n ambiental?
          li 
            i.fas.fa-angle-right
            | ¿Existen reglas claras referente al manejo de residuos?
          li 
            i.fas.fa-angle-right
            | ¿Existen regulaciones claras frente al uso de energ&iacute;as, energ&iacute;as renovables, etc.?
      
      div(titulo="Factores legales")
        p.mb-4 Considerar factores como: patentes, propiedad intelectual, regulaciones y normatividad a la cual se debe acoger el emprendimiento. 
        p.mb-4 Se debe dar respuesta a preguntas como:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | ¿Existe una reglamentaci&oacute;n clara frente a temas como licencias y protecci&oacute;n de propiedad intelectual?
          li 
            i.fas.fa-angle-right
            | ¿Existen leyes claras sobre el empleo, protecci&oacute;n en salud y laborales?
          li 
            i.fas.fa-angle-right
            | ¿Existen sectores protegidos y regulados?
          li 
            i.fas.fa-angle-right
            | ¿Existen leyes antimonopolios?
          li 
            i.fas.fa-angle-right
            | ¿Existe una regulaci&oacute;n de precios?
          li 
            i.fas.fa-angle-right
            | ¿Existe una regulaci&oacute;n clara sobre etiquetas?

    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
