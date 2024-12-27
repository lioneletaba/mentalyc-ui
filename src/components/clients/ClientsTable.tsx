import { DataTable } from "@/components/clients/DataTable";
import { Client, columns } from "./Columns";
import { clients } from "./data";
import { useState } from "react";

function getData(): Client[] {
  return clients;
}

export function ClientsDataTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clients, _setClients] = useState<Client[]>(getData());
  return (
    <div className="container mx-auto pb-4">
      <DataTable columns={columns} data={clients} />
    </div>
  );
}
