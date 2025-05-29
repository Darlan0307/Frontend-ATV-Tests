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
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";

export function DialogFormOffice() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cnpj: "",
    location: "",
    phone: "",
  });

  const formatCnpjCpf = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 11) {
      return numericValue
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    } else {
      return numericValue
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 10) {
      return numericValue
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    } else {
      return numericValue
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cnpj") {
      setFormData({
        ...formData,
        [name]: formatCnpjCpf(value),
      });
    } else if (name === "phone") {
      setFormData({
        ...formData,
        [name]: formatPhone(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

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
    setFormData({
      name: "",
      description: "",
      cnpj: "",
      location: "",
      phone: "",
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" id="btn-create-office">
          Criar
        </Button>
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
            <Input
              id="name"
              name="name"
              className="col-span-3"
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
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cnpj" className="text-right">
              CNPJ/CPF
            </Label>
            <Input
              id="cnpj"
              name="cnpj"
              className="col-span-3"
              value={formData.cnpj}
              onChange={handleInputChange}
              placeholder="000.000.000-00 ou 00.000.000/0000-00"
              maxLength={18}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Endereço
            </Label>
            <Input
              id="location"
              name="location"
              className="col-span-3"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Telefone
            </Label>
            <Input
              id="phone"
              name="phone"
              className="col-span-3"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </div>
          <div className="flex justify-end">
            <Button
              id="btn-save-office"
              type="submit"
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
