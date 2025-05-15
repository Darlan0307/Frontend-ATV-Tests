"use client";

import { useRouter } from "next/navigation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function Apresentation() {
  const router = useRouter();

  return (
    <article className="max-w-[600px] flex flex-col space-y-6 pt-5 ">
      <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
        WorkSpace <AuroraText>Pro</AuroraText>
      </h1>
      <div className="space-y-4">
        <p className="text-lg text-center px-2">
          Encontre e reserve a sala de escritório perfeita para cada
          necessidade. Navegação intuitiva e disponibilidade em tempo real para
          otimizar seu dia de trabalho.
        </p>
        <div className="w-[300px] text-center mx-auto text-lg relative">
          <InteractiveHoverButton onClick={() => router.push("/options")}>
            Testar Agora
          </InteractiveHoverButton>
        </div>
      </div>
    </article>
  );
}
