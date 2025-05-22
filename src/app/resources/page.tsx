import { ButtonBack } from "@/components/ui/button-back";
import { DataTableResources } from "./_components/data-table-resources";

export default async function Resources() {
  const response = await fetch("http://127.0.0.1:8000/additional/resources/", {
    cache: "force-cache",
    next: {
      tags: ["list-resources"],
    },
  });

  let resources = [];

  if (response.ok) {
    resources = await response.json();
  }

  return (
    <main>
      <div className="ml-6 mb-8">
        <ButtonBack />
      </div>
      <h1 className="text-3xl text-center font-bold  mb-8">
        {resources.count} Recursos Disponíveis
      </h1>
      <section className="px-6 mx-auto">
        <DataTableResources data={resources.results.reverse()} />
      </section>
    </main>
  );
}
