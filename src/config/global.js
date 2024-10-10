export default {
  global: {
    componenteFormativo: 'Estrategia comunicativa en los medios publicitarios',
    descripcionCurso:
      'Para lograr el éxito en la producción publicitaria, es importante evaluar los medios convencionales y no convencionales mediante una planificación estratégica. Esto implica analizar el mercado, la inversión, el presupuesto y el público objetivo, seleccionando los medios más adecuados. La combinación efectiva de medios, permite a las organizaciones fidelizar e impactar a los consumidores, cumpliendo así con los objetivos de comunicación del programa de formación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto sobre medios convencionales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Campañas publicitarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación <em>Transmedia</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de medios no convencionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Campañas BTL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>Marketing</em> de guerrilla',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52230010_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.Campañas publicitarias.',
      referencia:
        'Ospina, M. (2023). Plan de campaña publicitaria SENA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AAFNBYFySwA',
    },
    {
      tema: '5. Campañas BTL.',
      referencia:
        'P&P Medios (2023). 5 tips para una estrategia BTL.  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=p3AW7Zv-JIY',
    },
  ],
  glosario: [
    {
      termino: 'Campaña',
      significado:
        'conjunto de acciones planificadas para promocionar un producto o servicio por los distintos medios de comunicación. Las campañas buscan captar la atención del público objetivo y lograr posesionar la marca en un tiempo determinado.',
    },
    {
      termino: 'Consumidor',
      significado:
        'persona a la que va dirigida una campaña publicitaria de productos y servicios transmitido por los diferentes medios de comunicación convencionales y no convencionales.',
    },
    {
      termino: 'Campañas BTL',
      significado:
        'campañas publicitarias <em>"Below The Line"</em> que utilizan medios no convencionales para impactar al público de forma más directa y personalizada.',
    },
    {
      termino: 'Comunicación <em>Transmedia</em>',
      significado:
        'estrategia de comunicación que distribuye una narrativa a través de múltiples plataformas, permitiendo la participación activa del público.',
    },
    {
      termino: 'Fidelización',
      significado:
        'proceso de crear y mantener lealtad hacia un producto o servicio. Además, busca construir relaciones duraderas con los consumidores, a través de experiencias personalizadas, recompensas y comunicación constante que refuerza el vínculo con la marca.',
    },
    {
      termino: '<em>Marketing</em> de Guerrilla',
      significado:
        'técnica publicitaria que utiliza métodos creativos y poco convencionales para generar un gran impacto con recursos limitados.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'estrategia publicitaria que utiliza los sentidos (vista, oído, olfato, gusto, tacto) para generar experiencias memorables en los diferentes espacios comerciales',
    },
    {
      termino: 'Media Mix',
      significado:
        'combinación estratégica de diferentes medios publicitarios para maximizar el alcance y efectividad de una campaña.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calabuig y Muñoz. (2012) Capítulo 1.<em>Transmedia storytelling: </em>una tendencia imparable.',
    },
    {
      referencia:
        'Castañeda González, J. (2013). <em>La publicidad BTL en la industria automotriz mexicana: caso SEA Tumanera. </em>',
    },
    {
      referencia:
        'Duran, I. (2013) <em>Qué hace que los medios convencionales sean.</em>',
    },
    {
      referencia: 'Hernández (1999)',
    },
    {
      referencia:
        'Levinson, J. C. (2009). <em>Marketing</em> de Guerrilla: Los Secretos para Obtener Grandes Ganancias e Sus Pequeñas y Medianas Empresas. Morgan James. ',
      link:
        'http://books.google.com.co/books?id=YUnJL0bIBW0C&pg=PR11&hl=es&source=gbs_selected_pages&cad=2#v=onepage&q&f=false',
    },

    {
      referencia:
        'Gutierrez, b. (Sin fecha). Capítulo 1. Medios no convencionales. ',
      link:
        'http://catarina.udlap.mx/u_dl_a/tales/documentos/lco/gutierrez_b_bp/capitulo1.pdf ',
    },
    {
      referencia: 'HDPUBLICIDAD (2012) <em>BTL - 007 la película - HDP</em>.  ',
      link: 'https://www.youtube.com/watch?v=KICF63qyg7o',
    },
    {
      referencia:
        'Jenkins, Henry. (2007) <em>Transmedia Storytelling 101</em> ',
      link: 'http://henryjenkins.org/2007/03/transmedia_storytelling_101.html',
    },
    {
      referencia: 'Life´s for Sharing (2009) The T-Mobile Dance. ',
      link: 'https://www.youtube.com/watch?v=mUZrrbgCdYc',
    },
    {
      referencia: 'Larson, 1986.',
    },
    {
      referencia: 'Losada et al. (2004).',
    },
    {
      referencia:
        'Molano, A. (2012). <em>Transmedia</em> la nueva narración. Colombia Digital.',
    },
    {
      referencia: 'Mora, E. (Sin fecha). BTL, <em>Marketing </em>y Estrategia.',
    },
    {
      referencia:
        'Ramírez Reyes, C. (2009). Pasos para ejecutar una campaña BTL.',
    },
    {
      referencia:
        'Sol (2013) <em>Sol -- Free Beer For Free Spirits #SolTies.  </em>',
      link: 'https://www.youtube.com/watch?v=LlLgonhiYMU',
    },
    {
      referencia:
        'Torreblanca Díaz, Francisco <em>et al (2012). <em>Marketing</em> de guerrilla. Lo no convencional triunfa. </em>',
      link:
        'http://www.3ciencias.com/wp-content/uploads/2012/12/mk-de-guerrilla2.pdf',
    },
    {
      referencia:
        '<em>Turnerbenelux (2012). A Dramatic surprise on a quiet square. </em>',
    },
    {
      referencia: '<em>Wells, Burnett y Moriarty,</em> 1996, p .749',
    },
    {
      referencia:
        'Zuluaga, J. David (2010). BTL, <em>una herramienta para recordar y fidelizar.  </em>',
      link:
        'https://repository.eafit.edu.co/items/e7fde27e-c5a3-45f6-b901-8dff897fbb86',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Elena Montoya Rendón',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Marcela María Cardona Molina',
          cargo: 'Instructora',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Gilberto Herrera delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollor <em> full stack</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },

        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
