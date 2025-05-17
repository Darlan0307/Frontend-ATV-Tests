import { ButtonBack } from "@/components/ui/button-back";
import { DataTableRooms } from "./_components/data-table-rooms";
import { rooms } from "@/data-test/data-test";

export default function Rooms() {
  return (
    <main>
      <div className="ml-6">
        <ButtonBack />
      </div>
      <h1 className="text-3xl text-center font-bold  mb-8">Salas</h1>
      <section className="px-6 mx-auto">
        <DataTableRooms data={rooms} />
      </section>
    </main>
  );
}
