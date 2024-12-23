import { ClientsTable } from "@/components/clients/ClientsTable";
import { createLazyFileRoute } from "@tanstack/react-router";

const Index = () => {
  return (
    <div>
      <ClientsTable />
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});
