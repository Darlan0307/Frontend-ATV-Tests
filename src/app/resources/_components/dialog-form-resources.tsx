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
import { createResources } from "@/server-actions/resources";
import { ResourcePayload } from "@/types/entities";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";

export function DialogFormResources() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleCreateOffice(form: FormData) {
    const payload: ResourcePayload = {
      name: form.get("name") as string,
      description: form.get("description") as string,
    };

    const { error } = await createResources(payload);

    if (error) {
      toast.warning(error);
      return;
    }

    toast.success("Recurso criado com sucesso!");
    setFormData({
      name: "",
      description: "",
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" id="btn-create-resource">
          Criar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo Recurso</DialogTitle>
          <DialogDescription>
            Preencha as informações do novo recurso
          </DialogDescription>
        </DialogHeader>
        <form
          action={handleCreateOffice}
          className="grid gap-4 py-4"
          data-test="form-resource"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              className="col-span-3"
              data-test="resource-name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Input
              id="description"
              name="description"
              className="col-span-3"
              data-test="resource-description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              id="btn-save-resource"
              className="cursor-pointer w-[60px]"
            >
              Salvar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
