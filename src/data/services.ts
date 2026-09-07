export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: "monitor" | "cart" | "nodes" | "cloud";
  headline: string;
  intro: string;
  features: string[];
  process: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive websites built around the needs of your business.",
    icon: "monitor",

    headline: "Websites built around your business.",
    intro:
      "We create modern, responsive websites designed to represent your brand, communicate what you offer and give your customers a better experience online.",

    features: [
      "Responsive, mobile-friendly design",
      "Modern and maintainable development",
      "Custom layouts built around your brand",
      "Fast, user-friendly experiences",
      "SEO-ready foundations",
      "Ongoing improvements and support",
    ],

    process: [
      "Understand your business and goals",
      "Plan the structure and user experience",
      "Design and develop the website",
      "Test across devices and browsers",
      "Launch and support your website",
    ],
  },

  {
    number: "02",
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Powerful online stores designed to showcase your products and grow your sales.",
    icon: "cart",

    headline: "Turn your website into a place to sell.",
    intro:
      "We build online stores that make it easier for customers to discover your products, shop online and connect with your business.",

    features: [
      "Product and category management",
      "Responsive shopping experiences",
      "Secure checkout integration",
      "Order management",
      "Customer-friendly navigation",
      "Ongoing store support",
    ],

    process: [
      "Understand your products and customers",
      "Plan your store structure",
      "Design the shopping experience",
      "Build and configure the store",
      "Test the complete buying journey",
      "Launch and support your store",
    ],
  },

  {
    number: "03",
    slug: "digital-solutions",
    title: "Digital Solutions",
    description:
      "Custom functionality and digital experiences built to solve real business problems.",
    icon: "nodes",

    headline: "Technology that solves real problems.",
    intro:
      "Sometimes a standard website isn't enough. We build custom digital functionality around the way your business actually works.",

    features: [
      "Custom website functionality",
      "Business-focused digital tools",
      "Custom forms and workflows",
      "API and third-party integrations",
      "Database-driven functionality",
      "Solutions designed around your requirements",
    ],

    process: [
      "Understand the problem",
      "Define the requirements",
      "Plan the solution",
      "Build and test",
      "Deploy the solution",
      "Improve as your business grows",
    ],
  },

  {
    number: "04",
    slug: "hosting-management",
    title: "Hosting & Management",
    description:
      "Reliable hosting, ongoing maintenance and support to keep your website running.",
    icon: "cloud",

    headline: "Keep your website running.",
    intro:
      "Launching your website is only the beginning. We can help manage the technical side so you can focus on running your business.",

    features: [
      "Website hosting",
      "Domain management",
      "SSL configuration",
      "Website updates",
      "Technical maintenance",
      "Ongoing support",
    ],

    process: [
      "Set up your hosting environment",
      "Connect your domain",
      "Configure your website",
      "Make sure everything is running correctly",
      "Maintain and update your website",
      "Provide ongoing technical support",
    ],
  },
];