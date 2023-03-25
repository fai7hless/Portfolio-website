import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    TUSlogosimple,
    paeg,
    asteroids,
    aigen,
    portfolio,
    c,
    python,
    pandas,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "За мен",
    },
    {
      id: "work",
      title: "Моят опит",
    },
    {
      id: "contact",
      title: "Контакт",
    },
  ];
  
  const services = [
    {
      title: "Студент по компютърно и софтуерно инженерство",
      icon: TUSlogosimple,
    },
    {
      title: "Добре предствящ се под стрес",
      icon: mobile,
    },
    {
      title: "Добър отборен играч",
      icon: backend,
    },
    {
      title: "Желание за развитие",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Първа английска езикова гимназия - София",
      company_name: "Информатика, математика, немски",
      icon: paeg,
      iconBg: "#383E56",
      date: "Септември 2017 - Май 2022",
      points: [
        "Отлично ниво английски и добро на немски.",
        "Профилирана математика 2 години.",
        "Профил информатика 2 години.",
      ],
    },
    {
      title: "Технически университет - София",
      company_name: "Компютърно и софтуерно инженерство",
      icon: TUSlogosimple,
      iconBg: "#383E56",
      date: "Септември 2022 - Сега",
      points: [
        "Познания по Python.",
        "Познания по C.",
        "Познания по AutoCAD, SolidWorks.",
      ],
    },

  ];

  
  const projects = [
    {
      name: "Portfolio website",
      description:
        "Личен портфолио уебсайт показващ моето образование, умения, проекти и технологиите, с които имам опит. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "blue-text-gradient",
        },

      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI image generating website",
      description:
        "Уеб апликация за създаване и споделяне на снимки създадени чрез DALL-E от OpenAI.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },
      ],
      image: aigen,
      source_code_link: "https://github.com/fai7hless/AI-image-gen-app",
    },
    {
      name: "Asteroids game",
      description:
        "Браузър игра наподобяваща 'Asteroids' написана на JavaScript използваща Phaser енджина.",
        
      tags: [
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Phaser",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: asteroids,
      source_code_link: "https://github.com/fai7hless/phaser-asteroids-game",
    },
  ];
  
  export { services, technologies, experiences, projects };