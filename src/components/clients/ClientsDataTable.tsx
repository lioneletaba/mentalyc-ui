import { DataTable } from "@/components/ui/Datatable";
import { Client, columns } from "./columns";
import { clients } from "./data";

function getData(): Client[] {
  return clients;
}

export function ClientsDataTable() {
  const data = getData();
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
