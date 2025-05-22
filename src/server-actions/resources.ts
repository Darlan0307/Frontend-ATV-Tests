"use server";

import { revalidateTag } from "next/cache";
import { ResourcePayload } from "@/types/entities";

export async function createResources(payload: ResourcePayload) {
  if (!payload.name?.trim() || !payload.description?.trim()) {
    return { error: "Dados inválidos" };
  }

  const response = await fetch("http://127.0.0.1:8000/additional/resources/", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return { error: "Dados inválidos" };
  }

  const result = await response.json();

  revalidateTag("list-resources");

  return { result };
}
