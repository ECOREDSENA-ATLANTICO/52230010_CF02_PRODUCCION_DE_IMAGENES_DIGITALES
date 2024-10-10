<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Campañas BTL
    .fondo
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-sm-8.mb-sm-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema5/img-1.svg").img400.m-auto
        .col-lg-8
          p Para el desarrollo de una campaña BTL, es necesario conocer el <em>insight</em> del consumidor: sus percepciones del producto o sensaciones frente a la experiencia de consumir la marca. Comprender el <em>insight</em> del consumidor, permite el desarrollo de estrategias de <em>marketing </em>en puntos de venta acompañadas por publicidad. Por ejemplo, la implementación del <em>marketing</em> promocional el cual genera incentivos y experiencias directas para persuadir la compra del producto o servicio. 
          p Las campañas BTL, funcionan mediante la creación de experiencias únicas que conectan directamente con el consumidor. Esto puede incluir acciones en puntos de venta, promociones callejeras, activaciones de marca, publicidad en medios alternativos, o eventos experienciales. Estas tácticas están diseñadas para sorprender y atraer la atención del público objetivo, generando una interacción más personal y efectiva en comparación con los medios publicitarios tradicionales.
   
      .cajon.color-primario.p-4.mb-4.fnd-1
        p En una campaña BTL, se diseña un escenario e instalaciones en espacios públicos donde se ejecutan los medios publicitarios y estrategias como <em>marketing</em> sensorial el cual hace uso de los sentidos para impactar al consumidor y hacerle vivir una experiencia memorable. <b> Los beneficios de las campañas BTL son: </b>

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5.fnd-4-
              template(v-slot:imagen)
                figure.mb-4
                  img(src='@/assets/curso/temas/tema5/img-2.svg', alt='Beneficios de las campañas BTL.')
                
              .tarjeta.fnd-4.p-3(x="4.9%" y="48%" numero="+")
                .h4.mb-2 01
                p <b>Generar una respuesta directa:</b> Estas campañas están diseñadas para provocar una acción inmediata del consumidor, como una compra o la participación en una promoción.
              .tarjeta.fnd-4.p-3(x="19.6%" y="85.5%" numero="+")
                .h4.mb-2 02
                p <b>Fidelizar a los clientes:</b> Al ofrecer experiencias personalizadas y memorables, las campañas BTL pueden aumentar la lealtad del cliente.
              .tarjeta.fnd-4.p-3(x="79.3%" y="86.5%" numero="+")
                .h4.mb-2 03
                p <b>Incrementar la notoriedad de marca:</b> Al utilizar tácticas sorprendentes y llamativas, estas campañas pueden mejorar la visibilidad y el reconocimiento de la marca.
              .tarjeta.fnd-4.p-3(x="95%" y="48%" numero="+")
                .h4.mb-2 04
                p <b>Diferenciarse de la competencia:</b> Mediante enfoques innovadores, una campaña BTL permite a las empresas destacarse en un mercado saturado.

    .fondo.fn-1(data-aos="fade-left")

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Con las campañas BTL, el consumidor siente que es reconocido por la marca y tiene un vínculo especial con ella. Las tarjetas de fidelización, instalaciones o regalos son una fuerza que genera vínculo, así como vivir experiencias en la calle en donde la marca interactúa de manera creativa con los consumidores. Un ejemplo de una campaña BTL se llevó a cabo en Brasil, en la cual una marca de carros, instaló adhesivos en baños de centros comerciales para hacer vivir una experiencia simulada de estar conduciendo el carro.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span Ejemplo de campaña BTL en baños de centros comerciales en Brasil.
          figure
            img(src='@/assets/curso/temas/tema5/img-4.jpg', alt='Ejemplo de campaña BTL en baños de centros comerciales en Brasil.')
            figcaption Fuente: (circulodeinnovacion.com)

    p.mb-4 Otro ejemplo, es el de una compañía de cerveza, que instaló unos recipientes en los centros comerciales, indicando a las personas que se quitaran las corbatas, para vivir una sensación de libertad, a cambio le entregaban un regalo basado en una invitación a tomar cerveza gratis en un bar cercano. 
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tarjeta.p-lg-3.fnd-13
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img-3.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para reconocer como funciona una campaña BTL: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=LlLgonhiYMU" target="_blank")
                    span Enlace
                    i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-sm-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img-5.png')
      .col-lg-8
        p Zuluaga Duque (2010) afirma que:
        .bloque-texto-b.fnd-5.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 Las estrategias de promoción bajo medios BTL deben estar cargadas del toque creativo que apunta al 	acto de recordar la marca. La creatividad garantiza el éxito de los anuncios si tiene presente que el acto 	de recordar se logra a través del manejo de las emociones del consumidor. Por lo tanto, es importante 	resaltar que la estrategia BTL debe generar interacción entre la marca y el consumidor. Cuando el 	consumidor puede oler, sentir, mirar y tocar tiene más posibilidades de recordar la marca en cada 	momento, y aún mucho más si el anuncio BTL fue impactante y diferente a los demás.
            i.fas.fa-quote-right <br>
            p.der - (p. 16-17)
    .cajon.color-primario.p-4.mb-4.fnd-1
      p.mb-0 Por ejemplo, para promocionar una cámara digital, se instalaron en un metro carteleras iluminadas con detectores de movimiento y con <em>flash</em>. Esta cartelera activaba luces de cámaras cuando personas caminaban al lado de ella y hacían sentir a las personas como estrellas de cine, las cuales caminaban sobre una alfombra roja que las llevaba directamente a la tienda de cámaras.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Ejemplo de campaña BTL promocionando cámara digital en un metro.
        figure
          img(src='@/assets/curso/temas/tema5/img-6.png', alt='Ejemplo de campaña BTL promocionando cámara digital en un metro.')
          figcaption Fuente: (Creativecriminals.com, Sin fecha)

    .row.justify-content-center.mb-5.fnd-5-(data-aos="zoom-in")
      .col-lg-6.p-0
        figure
          img(src='@/assets/curso/temas/tema5/img-7.png')
      .col-lg-6.fnd-5-
        p.mt-4 Castañeda González (2013, p. 90) comenta que:
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 La publicidad BTL logra humanizar a las marcas estableciendo un contacto directo con los diferentes públicos, es por ello que dicho contacto se convierte en una relación más estrecha, más relevante para el consumidor y por consiguiente cumple de una manera más eficiente la comunicación de marca.
            i.fas.fa-quote-right 

    p.mb-5 En resumen, las campañas BTL, le generan a segmentos de mercados muy bien definidos, una experiencia de marca en puntos importantes por medio de estrategias creativas, que impacten los sentidos y estimulen su decisión de compra. Por ejemplo, al promocionar una película, se puede implementar una campaña BTL.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .tarjeta.p-lg-3.fnd-13
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img-3.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Otro ejemplo de cómo funciona una campaña BTL:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=KICF63qyg7o" target="_blank")
                    span Enlace
                    i.fas.fa-file-download






</template>

<script>
export default {
  name: 'Tema5',
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
