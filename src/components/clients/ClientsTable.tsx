import { ClientStateSwitch } from "../clientsSwitch";
import { Container } from "../Container";
import { ClientsDataTable } from "./ClientsDataTable";

export const ClientsTable = () => {
  return (
    <section className="my-6">
      <Container>
        <div className=" mb-4">
          <h4 className=" text-heading-4 text-black">Clients</h4>
        </div>
      </Container>
      <Container>
        <ClientStateSwitch />
      </Container>
      <ClientsDataTable />
    </section>
  );
};
