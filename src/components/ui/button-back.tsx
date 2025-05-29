"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";

export function ButtonBack() {
  const router = useRouter();
  return (
    <Button
      size="lg"
      className="cursor-pointer text-lg bg-color-3 text-white"
      onClick={() => router.back()}
      id="btn-back"
    >
      <ChevronLeft />
      Voltar
    </Button>
  );
}
