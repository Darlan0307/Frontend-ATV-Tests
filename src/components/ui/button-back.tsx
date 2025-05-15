"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";

export function ButtonBack() {
  const router = useRouter();
  return (
    <Button className="cursor-pointer" onClick={() => router.back()}>
      <ChevronLeft />
      Voltar
    </Button>
  );
}
