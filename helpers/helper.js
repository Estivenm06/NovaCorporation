const emailValidation = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};

const reviewsArray = [
  {
    name: "Buzzy Pepe",
    review:
      "Excelente fuente de imágenes astronómicas de alta calidad. He estado utilizando sus imágenes en mis presentaciones educativas y han impresionado a mis estudiantes y colegas. La variedad de opciones, desde retratos de planetas cercanos hasta tomas detalladas de nebulosas y galaxias distantes, es impresionante. Mi única sugerencia para mejorar sería proporcionar una opción de búsqueda más detallada en su sitio web.",
    photo: "./img/profile.webp",
    reviewStar: 4,
  },
  {
    name: "Kakarot",
    review:
      "Como apasionado de la astronomía, he estado buscando una fuente confiable de imágenes astronómicas de alta calidad, ¡y finalmente la he encontrado! La calidad de las imágenes es excepcional, revelando detalles impresionantes de los misterios del espacio. La amplia variedad de opciones, desde planetas cercanos hasta galaxias distantes, me permite explorar el cosmos de manera única.",
    photo: "./img/profile2.webp",
    reviewStar: 5,
  },
  {
    name: "Revered Crazy",
    review:
      "He encontrado algunas imágenes realmente impresionantes que han enriquecido mi pasión por el cosmos. Sin embargo, he experimentado algunas dificultades técnicas al descargar las imágenes en algunas ocasiones. Creo que la plataforma de descarga podría mejorarse para hacer que el proceso sea más fluido y sin problemas. Además, mientras los precios son razonables, me gustaría ver más ofertas o descuentos especiales para clientes recurrentes o para la compra de múltiples imágenes. Esto podría hacer que las imágenes sean aún más accesibles para aquellos de nosotros que somos amantes de la astronomía ávidos.",
    photo: "./img/profile3.webp",
    reviewStar: 3,
  },
  {
    name: "Lalor Gnome",
    review:
      "Es una fuente de imágenes astronómicas intrigante y cautivadora. Aunque mi experiencia con ellos ha sido en su mayoría positiva, hay algunos matices que considerar. En primer lugar, la calidad de las imágenes es indiscutible. Cada foto es una obra maestra por derecho propio, y me he perdido en la belleza del espacio profundo en más de una ocasión gracias a sus imágenes. Lo que me mantiene en una clasificación de 4 estrellas en lugar de 5 es la falta de una experiencia de navegación más intuitiva en su sitio web.",
    photo: "./img/profile4.webp",
    reviewStar: 4,
  },
];

const plansArray = [
  {
    id: 1,
    name: "Gratis",
    value: 0,
    advantages: {
      1: "Acceso gratuito a una selección de imágenes astronómicas.",
      2: "Recursos educativos básicos sobre astronomía.",
      3: "Boletín informativo mensual.",
    },
  },
  {
    id: 2,
    name: "Basico",
    value: 25000,
    advantages: {
      1: "Acceso completo a la colección de imágenes astronómicas.",
      2: "Contenido educativo ampliado con artículos y tutoriales.",
      3: "Descargas ilimitadas de imágenes en alta resolución.",
      4: "Comunidad de aficionados con foros de discusión.",
    },
  },
  {
    id: 3,
    name: "Premium",
    value: 40000,
    advantages: {
      1: "Todos los beneficios del Plan Básico.",
      2: "Acceso anticipado a nuevas imágenes y contenido.",
      3: "Seminarios web y charlas exclusivas con astrónomos expertos.",
      4: "Invitaciones a eventos astronómicos locales.",
    },
  },
  {
    id: 4,
    name: "Profesional",
    value: 55000,
    advantages: {
      1: "Todos los beneficios de los planes anteriores.",
      2: "Colección completa de imágenes astronómicas, incluidas ediciones limitadas.",
      3: "Asesoramiento personalizado de expertos en astrofotografía.",
      4: "Descuentos en compras de impresiones de alta calidad.",
    },
  },
];

export { emailValidation, plansArray, reviewsArray };
