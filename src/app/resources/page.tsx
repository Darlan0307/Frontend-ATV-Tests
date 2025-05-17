import { ButtonBack } from "@/components/ui/button-back";
import { DataTableResources } from "./_components/data-table-resources";
import { resources } from "@/data-test/data-test";

export default function Resources() {
  return (
    <main>
      <div className="ml-6 mb-8">
        <ButtonBack />
      </div>
      <h1 className="text-3xl text-center font-bold  mb-8">Recursos</h1>
      <section className="px-6 mx-auto">
        <DataTableResources data={resources} />
      </section>
    </main>
  );
}
