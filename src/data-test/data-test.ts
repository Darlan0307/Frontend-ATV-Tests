import { Office, Resource, Room } from "@/types/entities";
import { v4 as uuidv4 } from "uuid";

export const resources: Resource[] = [
  {
    uuid: uuidv4(),
    id: 1,
    name: "Projetor",
    description: "Projetor 4K com entrada HDMI e VGA",
  },
  {
    uuid: uuidv4(),
    id: 2,
    name: "Quadro Branco",
    description: "Quadro branco magnético de 2 metros",
  },
  {
    uuid: uuidv4(),
    id: 3,
    name: "Cadeiras Ergonômicas",
    description: "Cadeiras com apoio lombar ajustável",
  },
];

export const offices: Office[] = [
  {
    uuid: uuidv4(),
    id: 101,
    name: "Escritório Central",
    cnpj: "12.345.678/0001-90",
    location: "São Paulo, SP",
    phone: "(11) 1234-5678",
    rooms: 2,
  },
  {
    uuid: uuidv4(),
    id: 102,
    name: "Filial Zona Sul",
    cnpj: "98.765.432/0001-10",
    location: "Rio de Janeiro, RJ",
    rooms: 0,
  },
];

export const rooms: Room[] = [
  {
    uuid: uuidv4(),
    id: 1,
    name: "Sala de Reunião A",
    description: "Sala para pequenas reuniões até 6 pessoas",
    capacity: 6,
    status_display: "Available",
    resources: [resources[0], resources[1]],
    office: {
      uuid: offices[0].uuid,
      id: offices[0].id,
      name: offices[0].name,
      cnpj: offices[0].cnpj,
    },
  },
  {
    uuid: uuidv4(),
    id: 2,
    name: "Sala de Treinamento",
    description: "Espaço para workshops e treinamentos com projetor",
    capacity: 20,
    status_display: "Pending",
    resources: [resources[0], resources[2]],
    office: {
      uuid: offices[0].uuid,
      id: offices[0].id,
      name: offices[0].name,
      cnpj: offices[0].cnpj,
    },
  },
];
