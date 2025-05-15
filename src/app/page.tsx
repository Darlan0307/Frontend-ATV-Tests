import { Apresentation } from "@/components/apresentation";
import { OrbitingHome } from "@/components/orbiting-home";

export default function Home() {
  return (
    <main className="grid place-content-center ">
      <div className="space-y-5">
        <Apresentation />
        <OrbitingHome />
      </div>
    </main>
  );
}
