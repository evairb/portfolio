export const profile = {
  name: "Evair Bernardino Domingues",
  role: "Desenvolvedor Full Stack",
  location: "Brasil",
  email: "evairdev@gmail.com",
  github: "https://github.com/evairb",
  linkedin: "https://www.linkedin.com/in/evairbd/",
  description:
    "Transformando ideias em experiências digitais.",
  about: `
    Sou um profissional apaixonado por tecnologia,
    desenvolvimento de sistemas e inovação.

    Gosto de transformar problemas em soluções,
    desenvolver aplicações e aprender novas tecnologias.
  `,
};

export const skills = [
  {
    category: "Front-end",
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailind",
    ]
  },
  {
    category: "Ferramentas",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "CI/CD",
      "Postgres",
      "Mysql",
    ],
  },
  {
    category: "Back-end",
    technologies: [
      "Python",
      "Django",
      "Flask",
      "Pandas",
      "Golang",
      "Web Scraping",
      "IA"
    ]
  },
]


import aquawebImage from "../assets/images/aquaweb.png";
export const projects = [
  {
    id: 1,
    title: "Aquaweb",
    description: "Projeto para aquaristas calcularem compatibilidade de fauna e flora.",
    technologies: ["React", "Python", "Django"],
    image: aquawebImage,
    github: "https://github.com/evairb/aquaweb",
    demo: "",
  },
  {
    id: 2,
    title: "Sistema de geolocalização de enderecos",
    description: "Aplicação do tipo RPA usada pela prefeitura para geolocalizar enderecos dos pacientes.",
    technologies: ["Python", "Django"],
    github: "",
    demo: "",
    private: true,
  },
  {
    id: 3,
    title: "Cobertura Vacinal",
    description: "Sistema integrado a geolocalização de enderecos para determina a cobertura de vacinação em São Paulo por cobertura de unidades.",
    technologies: ["Python", "Automação"],
    github: "",
    demo: "",
    private: true,
  },
];