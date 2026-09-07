export type Project = {
  name: string;
  description: string;
  technologies: string[];
  preview: "layout" | "store" | "dashboard" | "portal";
  category: string;
  url?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "CH Gas Works",
    description:
      "A professional business website designed and developed for a South African gas installation and maintenance company.",
    technologies: ["React", "TypeScript", "CSS"],
    preview: "layout",
    category: "Business Website",
    url: "https://chgasworks.co.za",
    image: "/projects/CH-Gas-Works.png",
  },
];