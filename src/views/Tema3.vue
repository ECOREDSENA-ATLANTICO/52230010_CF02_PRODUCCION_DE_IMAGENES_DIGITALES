<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación <em>Transmedia</em>
    .row.fondo
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in")
        .col-lg-8
          p Con la apertura de nuevos medios digitales, se hace imprescindible la creación de estrategias de medios que traspasen los medios convencionales y no convencionales hacia la búsqueda de nuevas narrativas publicitarias simultáneas en diferentes plataformas mediáticas. Las marcas no son estáticas, sino que son entidades que intercambian experiencias con los consumidores, por ende, necesitan diversos canales de comunicación interactivos para generar experiencias significativas. 
          .cajon.color-primario.p-4.mb-4.fnd-1
            p Jenkins (2013) define la narración <em>transmediática</em> como un proceso en el que los “elementos integrales de una obra de ficción se esparcen sistemáticamente a través de muchos canales de distribución con el propósito de crear una experiencia de entretenimiento unificada y coordinada”. Por medio de la comunicación <em>transmedia</em> se cuentan historias cuyo objetivo es promover una marca desde diferentes perspectivas o a través de diversos medios.      
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img-1.png').img400.m-auto  

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10.mb-4
          .bloque-texto-b.fnd-5.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h5.mb-0 El <em>transmedia </em>es una gran máquina de <em>engagement,</em> ya que permite contar la historia de una marca 	de una forma implicante, emocionante y participativa. Ello hace que las narrativas<em> transmedia</em> sean un 	excelente aglutinador de audiencias, gente interesada (incluso apasionada) por aquello que se les comunica. Ahí donde la publicidad es vista como una interrupción de lo que interesa, la comunicación <em>transmedia </em>consigue generar contenido de marca de altísimo interés.
              i.fas.fa-quote-right <br>
              p.der Calabuig y Muñoz 	(2012). 
        .col-lg-6
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/img-2.png').img400.m-auto            
        .col-lg-6          
          p Contar y crear historias en torno al valor de la marca es una estrategia efectiva para generar vínculos emocionales con el público objetivo. Por ejemplo, la franquicia de “The Matrix” se comunica con el público por medio de tres películas, una serie animada, comics y busca interacción por medio de videojuegos. Otro ejemplo lo expone Adriana Molano (2012) con el documental Collapsus, dirigido por Tommy Pallota, el cual es un ejemplo creativo de transmedia cuyo objetivo es generar conciencia sobre la crisis energética a través de la creación de las realidades proyectadas por los distintos personajes en la historia, combinando el audiovisual, la animación y los medios digitales. 
        .col-lg-12.mb-4
          p Las nuevas tendencias de comunicación exigen procesos de interacción más complejos por medio de diversas plataformas, por ello la publicidad debe hacer uso de sistemas narrativos que impliquen una conexión emotiva, divertida y significativa entre marca y sujeto.
        .col-lg-8
          .tarjeta.p-3.fnd-13
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema3/img-3.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-0 Para profundizar en esta temática, consulte el siguiente documento, Comunicación publicitaria, teorías tradicionales (TTR) y teoría de los cinco sentidos (T5S).
                  .col-sm-auto
                    a.boton.color-acento-botones(href="http://www.razonypalabra.org.mx/anteriores/n26/nalvarez.html " target="_blank")
                      span Enlace
                      i.fas.fa-file-download










</template>

<script>
export default {
  name: 'Tema3',
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
