import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home/Home";

const title = "DevNest — We Build. You Grow.";
const description =
  "DevNest is a digital development studio building modern websites, online stores and custom digital solutions that help businesses grow online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
