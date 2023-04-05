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
  width?: number;
  height?: number;
}[] = [
  {
    enterprise: "Acsone SA",
    jobTitle: "Stage développeur odoo",
    body: `J'ai eu la chance d'effectuer mon stage de fin d'étude chez Acsone. Dans le cadre de ce stage, 
    j'ai pu apprendre à utiliser Odoo et à développer des modules pour ce dernier.`,
    from: "1 février 2023",
    to: "15 mai 2023",

    tags: ["odoo", "python", "linux", "open-source", "postgresql"],
    image: "/acsone.png",
    alt: "acsone",
    enterpriseLink: "https://www.acsone.eu",
    width: 280,
    height: 60,
  },
];

export default experiences;
