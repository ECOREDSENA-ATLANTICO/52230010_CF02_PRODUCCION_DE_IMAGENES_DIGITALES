<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Campañas publicitarias
    .fondo      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Las campañas de publicidad se definen como “un plan extenso para una serie de anuncios diferentes, pero relacionados, que aparecen en diversos medios durante un periodo especifico” (Wells, Burnett y Moriarty, 1996, p .749). Una campaña publicitaria es una estrategia de comunicación que una empresa utiliza para promover una marca, producto o servicio al público objetivo. Se diseña y ejecuta a través de diferentes medios, como televisión, radio, redes sociales, y publicidad exterior. <b>Una campaña publicitaria sirve para:</b>

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-3.col-sm-8
          figure.mb-5
            img(src='@/assets/curso/temas/tema2/img-2.png').img400.m-auto  
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-3")
            .row(titulo="Marca")
              p Una marca es un conjunto de elementos que identifican y diferencian a un producto, servicio o empresa de otros en el mercado. Esto incluye el nombre, el logotipo, los colores, el diseño y la imagen general que se asocia con ella.	           
            .row(titulo="Imagen")
              p La imagen publicitaria se refiere a la representación visual que se utiliza en una campaña publicitaria para comunicar un mensaje o promover un producto, servicio o marca. Esta imagen puede incluir fotografías, ilustraciones, gráficos y otros elementos visuales que buscan captar la atención del público y transmitir emociones o ideas específicas.	           
            .row(titulo="Empresa")
              p Una empresa es una organización o entidad que se dedica a realizar actividades económicas con el objetivo de producir bienes o servicios para satisfacer las necesidades de los consumidores. Las empresas pueden variar en tamaño, desde <em>startups</em> hasta grandes corporaciones, y pueden operar en diferentes sectores, como la industria, los servicios, la tecnología, entre otros.	           
            .row(titulo="Consumidores")
              p Los consumidores son las personas o entidades que adquieren bienes o servicios para su uso personal, familiar o profesional. Son el último eslabón en el proceso de producción y distribución, y su comportamiento y preferencias influyen en el mercado. Los consumidores pueden ser individuales, como un hogar que compra alimentos, o empresariales, como una empresa que adquiere suministros.	           
            .row(titulo="Competencia")
              p La competencia se refiere a la presencia de otras empresas o entidades que ofrecen productos o servicios similares en el mismo mercado. Esta rivalidad puede influir en la estrategia de negocios, ya que las empresas deben diferenciarse y ofrecer valor añadido para atraer y retener a los consumidores. 	 

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1 
          p Las nuevas tendencias en campañas publicitarias están marcadas por la integración de tecnologías avanzadas y un enfoque en la personalización. La realidad aumentada (AR) y la realidad virtual (VR), están revolucionando la forma en que las marcas interactúan con los consumidores, ofreciendo experiencias inmersivas que capturan la atención de manera más efectiva. Además, el uso de inteligencia artificial permite crear anuncios altamente personalizados basados en el comportamiento y preferencias del usuario, aumentando la relevancia y la tasa de satisfacción.  
          .cajon.color-primario.p-4.mb-4.fnd-1
            p Otra tendencia significativa, es el auge del <em>marketing</em> en redes sociales, con un enfoque en la autenticidad y la interacción directa. Las nuevas estrategias en campañas publicitarias están centradas en la integración de tecnologías emergentes. Que permiten la adopción de experiencias interactivas y participativas. 
        .col-lg-4.col-sm-8.order-1.order-lg-2 
          figure.mb-5
            img(src='@/assets/curso/temas/tema2/img-3.png').img400.m-auto  
      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-6
          figure.mb-5
            img(src='@/assets/curso/temas/tema2/img-4.png').img400.m-auto            
        .col-lg-6
          p Las marcas están utilizando formatos innovadores como encuestas en vivo, juegos y experiencias virtuales para involucrar a los consumidores de manera activa. Estas estrategias no solo aumentan el compromiso y la interacción con la marca, sino que también generan una conexión emocional más profunda, mejorando la retención y la lealtad a largo plazo.
          p Para conocer la efectividad, fracaso o éxito de una campaña, es necesario definir objetivos de campaña medibles en un tiempo determinado; por ejemplo, lograr ventas de 300.000 bebidas en el primer mes de la campaña, generar 2 millones de visitas en el mes de octubre a la página web o incrementar un 5% el indicador de <em>Top of Mind.</em>  Según el modelo de desarrollo de campañas de Yale (citado en Larson, 1986), una campaña debe atravesar cinco etapas, tal como se presentan a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span Etapas del modelo de desarrollo de campañas de Yale publicitaria.

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure.mb-4
              img(src='@/assets/curso/temas/tema2/img-5-s.png', alt='Etapas del modelo de desarrollo de campañas de Yale publicitaria.')
            figcaption Fuente: SENA (2014)
          .tarjeta.fnd-4.p-3.p1(x="9.5%" y="66%" numero="+")
            .h4.mb-2 01
            p Identificación de la marca con sus objetivos de comunicación.
          .tarjeta.fnd-4.p-3.p2(x="29.6%" y="66%" numero="+")
            .h4.mb-2 02
            p Legitimación donde una autoridad o celebridad legitime la eficacia del producto o servicio.
          .tarjeta.fnd-4.p-3.p3(x="49.8%" y="66%" numero="+")
            .h4.mb-2 03
            p Involucra la participación de la gente para que se integre a la campaña.
          .tarjeta.fnd-4.p-3.p4(x="70%" y="66%" numero="+")
            .h4.mb-2 04
            p Penetración que evidencia el consumo de la marca y las reacciones en la audiencia.
          .tarjeta.fnd-4.p-3.p5(x="90.5%" y="66%" numero="+")
            .h4.mb-2 05
            p Genera una institución de ideales y consolida una imagen duradera de la marca.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p A continuación, se describirá una campaña exitosa de una bebida nacional denominada “Mi Casa” que se ejecutó en cuatro etapas.  De acuerdo a Ospina et al (2009), la estrategia creativa de la campaña se basó en mostrar las cosas únicas del país que hacían sentir orgullosos a los colombianos desde los lugares, la música, la gente y el arte, comenzado un recorrido como si fueran a mostrar “Mi Casa”, con el fin de rejuvenecer la marca. Para ello se escogió un grupo objetivo entre los 12 y 24 años de edad y se recurrió al patriotismo como fuente emocional.   

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9
        p Los objetivos de la campaña fueron encaminados a mejorar los niveles de recordación amarrados a los volúmenes de venta: 
        .row.mb-4.pe-lg-3
          .col-auto.pe-2
            i.fas.fa-check.pink
          .col.px-0
            p Mejorar los niveles de<em> Top of Mind </em>en el target de jóvenes de 12 y 24 años.

        .row.mb-4.pe-lg-3
          .col-auto.pe-2
            i.fas.fa-check.pink
          .col.px-0
            p Incrementar los niveles de consideración vía el indicador “consumo últimos 4 semanas “, que al iniciar la campaña estaba en 21 puntos y (=3) incrementar los volúmenes de venta. 



        .cajon.color-primario.p-4.mb-4.fnd-1
          p La campaña “Mi Casa “, inició en 2001 con la primera etapa fundamentada en mostrar los lugares de la casa como símbolos de orgullo y comodidad. 
      .col-lg-3.col-sm-8
        figure
          img(src='@/assets/curso/temas/tema2/img-7.png').img400.m-auto          

    p En esta primera etapa se produjeron 10 comerciales para televisión cuyos protagonistas eran jóvenes identificados por su lenguaje y sus formas de vestir. Por ejemplo, mostraban la Guajira y el protagonista decía: “Este es mi cuarto” o en Medellín, el protagonista decía: “Este es mi comedor”. La segunda etapa: mi casa tiene Música, buscó aquella música que hacía sentir orgullo a los jóvenes que involucro la composición de piezas para cuñas radiales por parte de artistas nacionales. La tercera etapa involucró a la gente y como ellos bailan y expresan amor en sus casas junto a la bebida por medio de <em>spots</em> televisivos.  La cuarta y última etapa convocó a la gente a enviar propuestas de televisión, radio y diseño gráfico por medio de una página web, expresando el significado de ser colombiano, de ser parte de la casa colombiana. Se recibieron 106.277 visitas a la página web y se eligieron tres conceptos ganadores. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-sm-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-8.png').img400.m-auto    
      .col-lg-8
        p Se concluye, que el concepto de etnocentrismo se asoció a la imagen de la marca, generando orgullo por el país y consumo de la bebida. En la primera etapa se logró identificar y asociar la marca con símbolos patrios y juveniles. La segunda etapa buscó legitimar la imagen de la marca con apoyo de artistas famosos de Colombia, en la cuarta etapa se visualizó la participación de la gente común en el refuerzo del concepto creativo, finalmente en la cuarta etapa se consolidó la participación activa de la gente en la construcción simbólica de marca y consumo de bebida. 
        .cajon.color-secundario.p-4.mb-4
          p Por otro lado, la campaña cumplió los objetivos al incrementar 4 puntos en el indicador <em>top of mind</em> (recordación), se incrementó el consumo de la bebida y creció el consumo de marca pasando a un 55% entre consumidores entre los 12 y 29 años.  






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
