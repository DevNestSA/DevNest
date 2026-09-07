export type Service = {
  number: string;
  title: string;
  description: string;
  icon: "monitor" | "cart" | "nodes" | "cloud";
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, responsive websites built around the needs of your business.",
    icon: "monitor",
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Powerful online stores designed to showcase your products and grow your sales.",
    icon: "cart",
  },
  {
    number: "03",
    title: "Digital Solutions",
    description:
      "Custom functionality and digital experiences built to solve real business problems.",
    icon: "nodes",
  },
  {
    number: "04",
    title: "Hosting & Management",
    description:
      "Reliable hosting, ongoing maintenance and support to keep your website running.",
    icon: "cloud",
  },
];
