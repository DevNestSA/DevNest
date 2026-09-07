export type Project = {
  /** PLACEHOLDER DATA — replace with real DevNest projects. */
  name: string;
  description: string;
  technologies: string[];
  /** Abstract preview style used by the portfolio card. */
  preview: "layout" | "store" | "dashboard" | "portal";
};

export const projects: Project[] = [
  {
    name: "Project Placeholder 01",
    description:
      "Placeholder entry for a business website build. Replace with a real DevNest project, preview image and outcome.",
    technologies: ["React", "TypeScript", "CSS"],
    preview: "layout",
  },
  {
    name: "Project Placeholder 02",
    description:
      "Placeholder entry for an online store build. Replace with a real DevNest e-commerce project.",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    preview: "store",
  },
  {
    name: "Project Placeholder 03",
    description:
      "Placeholder entry for a custom digital solution. Replace with a real DevNest application project.",
    technologies: ["C#", ".NET", "SQL"],
    preview: "dashboard",
  },
  {
    name: "Project Placeholder 04",
    description:
      "Placeholder entry for a client portal or internal tool. Replace with a real DevNest build.",
    technologies: ["React", "TypeScript", "SQL"],
    preview: "portal",
  },
];
