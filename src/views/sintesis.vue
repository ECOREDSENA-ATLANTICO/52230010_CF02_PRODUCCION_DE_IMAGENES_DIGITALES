<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se describe una visión general sobre los aspectos claves de la pedagogía y la planeación formativa. Inicia con tipos de medios convencionales como la prensa, las revistas, el cine, la radio, Internet y publicidad exterior. Igualmente explora las campañas publicitarias según su plan estratégico, la combinación de medios, las estrategias creativas, los objetivos de la campaña y el tiempo destinado. También se presenta la comunicación <em>transmedia</em>, su estrategia de medios, narrativas publicitarias para contar y crear historias a un público objetivo. Además, se estudia la importancia de las campañas BTL, que incluye los hábitos de compra del consumidor, sus percepciones del producto, su experiencia directa de compra, por medio del <em>marketing</em> sensorial para fidelizar al público. Finalmente, se aborda el <em>marketing</em> de guerrilla de acuerdo a sus métodos no convencionales para crear el efecto sorpresa con un bajo presupuesto en un entorno urbano que genere un impacto visual y emocional a las audiencias.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
