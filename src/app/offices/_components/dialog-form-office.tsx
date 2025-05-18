"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createOffice } from "@/server-actions/office";
import { OfficePayload } from "@/types/entities";
import { useState } from "react";
import { toast } from "sonner";

export function DialogFormOffice() {
  const [open, setOpen] = useState(false);
  async function handleCreateOffice(form: FormData) {
    const payload: OfficePayload = {
      name: form.get("name") as string,
      description: form.get("description") as string,
      cnpj: form.get("cnpj") as string,
      location: form.get("location") as string,
      phone: form.get("phone") as string,
    };

    const { error } = await createOffice(payload);

    if (error) {
      toast.warning(error);
      return;
    }

    toast.success("Escritório criado com sucesso!");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Criar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo Escritório</DialogTitle>
          <DialogDescription>
            Preencha as informações do novo escritório
          </DialogDescription>
        </DialogHeader>
        <form action={handleCreateOffice} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" name="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Input id="description" name="description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cnpj" className="text-right">
              CNPJ
            </Label>
            <Input id="cnpj" name="cnpj" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Endereço
            </Label>
            <Input id="location" name="location" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Telefone
            </Label>
            <Input id="phone" name="phone" className="col-span-3" />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="cursor-pointer w-[60px]">
              Salvar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
