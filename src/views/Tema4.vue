<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tipos de medios no convencionales

    .row.fondo   
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los medios no convencionales o BTL (<em>below the line</em>) son medios publicitarios alternativos que requieren de menor inversión y buscan una relación más directa y personal con los consumidores. De acuerdo a Losada et al (2004), los siguientes medios son considerados ejemplos de medios no convencionales:

      .row.justify-content-center.align-items-center.mb-5.fnd-6(data-aos="zoom-in")
        .col-lg-3.col-sm-6.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img-2.png").img400.m-auto
        .col-lg-9
          SlyderF.custom(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 01
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-3.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 <em>Mailing</em> personalizado.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-4.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Buzoneo/Folletos.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-5.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 <em>Marketing </em> telefónico.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-6.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Regalos publicitarios.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 05
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-7.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Publicidad en el Lugar de Venta (P.L.V.)
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 06
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-8.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Señalización y rótulos.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 07
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-9.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Ferias y exposiciones.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 08
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-10.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Patrocinio.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 09
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-11.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 <em>Marketing </em>social.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 10
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-12.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Publicaciones de empresas.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 11
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-13.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Anuarios, guías, directorios.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 12
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-14.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Calendarios.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 13
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-15.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Catálogos.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 14
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-16.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Juegos promocionales.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 15
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-17.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Tarjetas de fidelización.
            .tarjeta.tarjeta--slyder.p-4.fnd-7
              h4.mb-0 16
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema4/img-18.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Animación en el punto de venta. 

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10.fnd-8
          p Los medios no convencionales generan experiencias únicas y personalizadas para promover sus marcas. De acuerdo a Ramírez Reyes (2009).


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10.mb-4
        .bloque-texto-b.fnd-5.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 …el  BTL da lugar a la creación de departamentos en las agencias y a empresas especializadas y 	dedicadas a la planeación, implementación y producción de eventos, activaciones de marca (al <em>trade</em> y al consumidor), lanzamientos, promociones, impulso y degustación, diseño industrial a la medida 	(<em>Taylor-made: </em> exhibidores, <em> displays, </em> mobiliario, ambientaciones), <em>merchandising, </em> personal de protocolo,  y otras más desarrolladas relacionadas con la construcción de marca en el contexto del BTL como: <em>Retail Media Outlet</em> (RMO) que se define en el propósito de hacer de los puntos de venta el medio de comunicación de la esencia y valores de la marca, y<em> Retail Environment Strategy</em> (RES): que consiste en la estrategia de clasificación de los puntos de venta según el potencial para afinar la imagen de marca y no de el volumen de ventas.
            i.fas.fa-quote-right <br>
            p.der - (p. 34). 

    p Los medios no convencionales buscan estrategias publicitarias muy creativas desde el marketing para lograr un vínculo con el público objetivo, una conexión face to face(directa) entre la marca y el consumidor hasta lograr su lealtad. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tarjeta.p-3.fnd-13
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img-3.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-0 Para profundizar en el uso y aplicación de los medios no convencionales consulte el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://catarina.udlap.mx/u_dl_a/tales/documentos/lco/gutierrez_b_bp/capitulo1.pdf" target="_blank")
                    span Enlace
                    i.fas.fa-file-download
    





</template>

<script>
export default {
  name: 'Tema4',
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
