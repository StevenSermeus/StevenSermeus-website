const projects = [
  {
    title: "Stevensermeus.be",
    github: "https://github.com/StevenSermeus/StevenSermeus-website",
    description: `Il s'agit de mon site web personnel. Il a été développé avec Astro.
       Il est hébergé sur ma propre infrastructure grâce à Docker et Nginx.`,
    live: "https://stevensermeus.be",
    status: "finished",
    image: {
      src: "/stevensermeus.png",
      alt: "stevensermeus.be",
    },
    tags: ["website", "blog"],
    technologies: [
      "astro",
      "tailwindcss",
      "typescript",
      "docker",
      "nginx",
      "daisyui",
    ],
  },
];

export default projects;
