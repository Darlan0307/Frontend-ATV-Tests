import { Office, Resource, Room } from "@/types/entities";
import { v4 as uuidv4 } from "uuid";

export const resources: Resource[] = [
  {
    id: uuidv4(),
    code: 1,
    name: "Projetor",
    description: "Projetor 4K com entrada HDMI e VGA",
  },
  {
    id: uuidv4(),
    code: 2,
    name: "Quadro Branco",
    description: "Quadro branco magnético de 2 metros",
  },
  {
    id: uuidv4(),
    code: 3,
    name: "Cadeiras Ergonômicas",
    description: "Cadeiras com apoio lombar ajustável",
  },
];

export const offices: Office[] = [
  {
    id: uuidv4(),
    code: 101,
    name: "Escritório Central",
    cnpj: "12.345.678/0001-90",
    location: "São Paulo, SP",
    phone: "(11) 1234-5678",
    rooms: [],
  },
  {
    id: uuidv4(),
    code: 102,
    name: "Filial Zona Sul",
    cnpj: "98.765.432/0001-10",
    location: "Rio de Janeiro, RJ",
    rooms: [],
  },
];

export const rooms: Room[] = [
  {
    id: uuidv4(),
    code: 1,
    name: "Sala de Reunião A",
    description: "Sala para pequenas reuniões até 6 pessoas",
    capacity: 6,
    status: "Available",
    resources: [resources[0], resources[1]],
    office: {
      code: offices[0].code,
      name: offices[0].name,
    },
  },
  {
    id: uuidv4(),
    code: 2,
    name: "Sala de Treinamento",
    description: "Espaço para workshops e treinamentos com projetor",
    capacity: 20,
    status: "Pending",
    resources: [resources[0], resources[2]],
    office: {
      code: offices[0].code,
      name: offices[0].name,
    },
  },
  {
    id: uuidv4(),
    code: 3,
    name: "Sala de Reunião B",
    description: "Sala de reuniões com capacidade média",
    capacity: 10,
    status: "Confirmed",
    resources: [resources[1]],
    office: {
      code: offices[1].code,
      name: offices[1].name,
    },
  },
];

offices[0].rooms.push(rooms[0], rooms[1]);
offices[1].rooms.push(rooms[2]);
