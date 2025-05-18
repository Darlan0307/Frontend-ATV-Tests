"use server";

import { revalidateTag } from "next/cache";
import { OfficePayload } from "@/types/entities";

export async function createOffice(payload: OfficePayload) {
  if (
    !payload.name?.trim() ||
    !payload.description?.trim() ||
    !payload.cnpj?.trim() ||
    !payload.location?.trim()
  ) {
    return { error: "Dados inválidos" };
  }

  const response = await fetch("http://127.0.0.1:8000/office/api/", {
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

  revalidateTag("list-offices");

  return { result };
}

export async function deleteOffice(id: number) {
  await fetch(`http://127.0.0.1:8000/office/api/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("list-offices");
}
