<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Campañas publicitarias',
      titulo: 'Estrategias de diseño visual en campañas publicitarias.',
      introduccion:
        '<b> Objetivo:</b> Crear composiciones visuales que cumplan con los objetivos específicos de la estrategia de comunicación.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de los siguientes es un medio convencional?',
          imagen: require('@/assets/curso/temas/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Redes sociales.', esCorrecta: false },
            { id: 'b', texto: 'Prensa.', esCorrecta: true },
            {
              id: 'c',
              texto: '<em>Marketing</em> de guerrilla.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Publicidad BTL.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue a las revistas como medio convencional?',
          imagen: require('@/assets/curso/temas/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Publicidad interactiva.', esCorrecta: false },
            { id: 'b', texto: 'Alto costo de producción.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Publicaciones periódicas impresas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo en campañas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué medio convencional es conocido por su accesibilidad en zonas rurales?',
          imagen: require('@/assets/curso/temas/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cine.', esCorrecta: false },
            { id: 'b', texto: 'Televisión.', esCorrecta: false },
            { id: 'c', texto: 'Radio.', esCorrecta: true },
            { id: 'd', texto: 'Internet.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un ejemplo de comunicación transmedia?',
          imagen: require('@/assets/curso/temas/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Anuncios en revistas.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Historias contadas a través de diferentes plataformas digitales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Publicidad en exteriores.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Campañas de <em>marketing</em> de guerrilla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es una campaña BTL?',
          imagen: require('@/assets/curso/temas/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Campaña que utiliza medios masivos de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Campaña que se enfoca en medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Campaña que emplea medios no convencionales para generar impacto directo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Campaña exclusiva de televisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza una comunicación transmedia?',
          imagen: require('@/assets/curso/temas/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar un solo medio para comunicar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar múltiples plataformas para contar una historia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hacer campañas en televisión únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar las redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué incluyen los tipos de medios no convencionales?',
          imagen: require('@/assets/curso/temas/actividad/img-3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Televisión y radio.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Redes sociales y publicidad exterior.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Periódicos y revistas.', esCorrecta: false },
            { id: 'd', texto: 'Ninguna de las anteriores.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué medio es más adecuado para una campaña que busca el impacto visual masivo?',
          imagen: require('@/assets/curso/temas/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Revistas.', esCorrecta: false },
            { id: 'b', texto: 'Radio.', esCorrecta: false },
            { id: 'c', texto: 'Televisión.', esCorrecta: true },
            { id: 'd', texto: 'Prensa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Por qué se caracteriza el <em>marketing</em> de guerrilla?',
          imagen: require('@/assets/curso/temas/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de grandes presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estrategias creativas y de bajo costo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Campañas en medios convencionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfoque exclusivo en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿En qué tipo de campañas son más comunes los medios no convencionales?',
          imagen: require('@/assets/curso/temas/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicidad de marcas de lujo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Campañas tradicionales en televisión.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Campañas BTL.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Publicidad de productos electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
  computed: {},
  methods: {},
}
</script>
