<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El componente formativo, estrategia comunicativa en los medios publicitarios, explora los tipos de medios convencionales y no convencionales, así como las estrategias de campañas publicitarias y de comunicación transmedia, incluyendo BTL y marketing de guerrilla. Bienvenido a este componente formativo: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/srwgD-WNCw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sena(2024).


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
