import { ButtonBack } from "@/components/ui/button-back";
import { DataTableOffices } from "./_components/data-table-offices";

export default async function Offices() {
  const response = await fetch("http://127.0.0.1:8000/office/api/", {
    cache: "force-cache",
    next: {
      tags: ["list-offices"],
    },
  });

  let offices = [];

  if (response.ok) {
    offices = await response.json();
  }

  return (
    <main>
      <div className="ml-6 mb-8">
        <ButtonBack />
      </div>
      <h1 className="text-3xl text-center font-bold  mb-8">
        {offices.count} escritórios disponíveis
      </h1>

      <section className="px-6 mx-auto">
        <DataTableOffices data={offices.results.reverse()} />
      </section>
    </main>
  );
}
