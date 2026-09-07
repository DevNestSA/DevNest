import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/pages/Service/Service";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
});