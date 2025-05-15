"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { ButtonBack } from "@/components/ui/button-back";
import { Building, LampDesk, NotebookPen, FileChartColumn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Options() {
  const router = useRouter();

  const links = [
    {
      href: "/offices",
      icon: Building,
      text: "Escritórios",
    },
    {
      href: "/rooms",
      icon: LampDesk,
      text: "Salas",
    },
    {
      href: "/resources",
      icon: NotebookPen,
      text: "Recursos",
    },
    {
      href: "/reservations",
      icon: FileChartColumn,
      text: "Reservas",
    },
  ];

  return (
    <main className="">
      <div className="ml-6">
        <ButtonBack />
      </div>
      <section className="flex justify-center align-middle gap-6 pt-[25vh]">
        {links.map((link, index) => (
          <div
            className="relative bg-card size-[120px] rounded-xl  grid place-content-center cursor-pointer border-primary border-solid border-[1px] transition-all hover:scale-105"
            key={index}
            onClick={() => router.push(link.href)}
          >
            <link.icon size={35} className="mx-auto" />
            <span className="text-lg font-semibold">{link.text}</span>
            <BorderBeam
              duration={6}
              size={50}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={50}
              className="from-transparent via-blue-500 to-transparent"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
