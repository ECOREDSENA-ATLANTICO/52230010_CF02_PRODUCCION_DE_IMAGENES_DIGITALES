<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 <em>Marketing</em> de guerrilla 

    .fondo
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          figure(data-aos="zoom-in")
            img.mb-4(src="@/assets/curso/temas/tema6/img-1.png").img400.m-auto
        .col-lg-6
          p El <em>marketing </em>de guerrilla es un término desarrollado por Jay Conrad Levinson (2009), que significa la realización de actividades de <em>marketing</em> con medios y métodos no convencionales basados en la imaginación, la sorpresa y un bajo presupuesto.  En el <em>marketing</em> de guerrilla se implementan acciones desde el <em>Street marketing</em>, el<em> buzz marketing, ambient marketing, viral marketing</em> y otras estrategias, que generen ruido e impacto en la calle. Torreblanca Díaz et al. (2012), explica que es necesario involucrar el efecto sorpresa, llegar a conseguir una experiencia positiva en el usuario, utilizar los cinco sentidos, conseguir que el cliente se acerque a interactuar, provocar una emoción en la persona, y de esta manera conseguir el desarrollo de una estrategia de <em>marketing </em>de guerrilla.
        .col-lg-6
          .cajon.color-primario.p-4.mb-4.fnd-1
            p Las nuevas tendencias en <em>marketing</em> de guerrilla están marcadas por la creatividad disruptiva y la integración digital. Las personas que están diseñando estrategias digitales están utilizando el entorno urbano de manera innovadora, implementando instalaciones interactivas y eventos sorpresa que transforman espacios comunes en experiencias memorables. Esta técnica aprovecha el impacto visual y emocional para captar la atención de manera inesperada, generando así un mayor lealtad y compromiso con las audiencias.
          p Además, la combinación de <em>marketing </em>de guerrilla con estrategias digitales, como las redes sociales y el contenido viral, amplifica el alcance de las campañas. Las acciones físicas se documentan y comparten en línea, creando un efecto multiplicador que atrae la atención de una audiencia global. Esta fusión de tácticas no solo maximiza la visibilidad, sino que también refuerza el vínculo emocional entre la marca y los consumidores.

        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema6/img-2.png").img400.m-auto

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Otro ejemplo creativo donde se utilizó <em>marketing </em>de guerrilla fue una campaña cuyo objetivo es generar conciencia sobre la contaminación, se situaron plásticos gigantes sobre esculturas en la ciudad, logrando la atención de la audiencia.           

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4. 
          span <em>Marketing de guerrilla:</em> conciencia sobre la contaminación.
        figure
          img(src='@/assets/curso/temas/tema6/img-4.jpg', alt='<em>Marketing de guerrilla:</em> conciencia sobre la contaminación.')
          figcaption Fuente: (adsoftheworld.com, Sin Fecha).

    .fondo.fn-1
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema6/img-5.png").img400.m-auto
        .col-lg-9
          p Además, para establecer una estrategia de <em>marketing </em>de guerrilla, primero es vital definir un segmento de mercado y un lugar puntual donde ejecutar la táctica; también debe ser muy creativo y captar la atención de los líderes de opinión; por otro lado, integrar al espectador en el drama o <em>performance</em> de la estrategia de <em>marketing</em>; combinar herramientas como celulares, internet y escenografías; finalmente realiza el seguimiento del impacto de la estrategia. 
          p De esta manera, la estrategia de medios, es un componente esencial en la planificación de campañas publicitarias, ya que permite seleccionar los canales adecuados para alcanzar objetivos específicos y medibles. Es crucial evaluar factores como el alcance geográfico, el costo y la capacidad de impacto sensorial de cada medio para garantizar una difusión efectiva. Los medios convencionales, tales como televisión, radio, prensa, revistas, cine, publicidad exterior e internet, son herramientas poderosas para generar un impacto masivo, tanto a nivel emocional como visual.


    .row.justify-content-center.align-items-center.mb-5.fnd-5-(data-aos="fade-left")
      .col-lg-6.px-5
        p En la actualidad, la combinación de medios convencionales con nuevas plataformas mediáticas ha permitido el desarrollo de estrategias publicitarias más creativas y efectivas. Estas estrategias buscan no solo captar la atención del público, sino también fidelizar a los consumidores mediante la creación de experiencias de marca que resulten memorables. La planificación estratégica de medios, se centra en cómo el público objetivo, interactúa con la promesa de la marca, buscando maximizar el compromiso y la lealtad del consumidor.
      .col-lg-6.p-0
        figure
          img(src='@/assets/curso/temas/tema6/img-6.jpg')
    
    .cajon.color-primario.p-4.mb-4.fnd-1
      p.mb-0 Por otro lado, los medios no convencionales, como ferias, exposiciones, <em>performances</em> y videojuegos promocionales, son utilizados para generar una mayor interacción con el público. Estas tácticas, comúnmente empleadas en campañas BTL (<em>Below The Line</em>), buscan sorprender al consumidor y establecer un vínculo emocional más profundo con la marca. El <em>marketing</em> de guerrilla, por ejemplo, es una estrategia eficaz que utiliza la sorpresa y la creatividad para captar la atención en lugares estratégicos, transformando la experiencia del consumidor en algo único e impactante.



</template>

<script>
export default {
  name: 'Tema6',
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
