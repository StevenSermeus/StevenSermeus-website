const experiences: {
  enterprise: string;
  jobTitle: string;
  body: string;
  from: string;
  to: string;
  tags?: string[];
  image?: string;
  alt?: string;
  enterpriseLink?: string;
}[] = [
  {
    enterprise: "Demo",
    jobTitle: "Demo",
    body: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam.`,
    from: "1 février 2023",
    to: "15 mai 2023",

    tags: ["python", "linux", "open-source", "postgresql"],
    image: "/demo.png",
    alt: "demo",
    enterpriseLink: "https://www.demo.com/",
  },
];

export default experiences;
