import { ButtonBack } from "@/components/ui/button-back";
import { DataTableOffices } from "./_components/data-table-offices";
import { offices } from "@/data-test/data-test";

export default function Offices() {
  return (
    <main>
      <div className="ml-6 mb-8">
        <ButtonBack />
      </div>
      <h1 className="text-3xl text-center font-bold  mb-8">Escritórios</h1>

      <section className="px-6 mx-auto">
        <DataTableOffices data={offices} />
      </section>
    </main>
  );
}
