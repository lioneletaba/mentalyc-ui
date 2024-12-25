import { Clients } from "@/components/clients/Clients";
import { createLazyFileRoute } from "@tanstack/react-router";

const Index = () => {
  return (
    <div>
      <Clients />
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});
