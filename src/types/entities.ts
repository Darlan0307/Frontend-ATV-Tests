export type RoomStatus = "Available" | "Pending" | "Confirmed" | "Cancelled";

export type Resource = {
  id: string;
  code: number;
  name: string;
  description: string;
};

export type Room = {
  id: string;
  code: number;
  name: string;
  description: string;
  capacity: number;
  status: RoomStatus;
  resources: Resource[];
  office: {
    code: number;
    name: string;
  };
};

export type Office = {
  id: string;
  code: number;
  name: string;
  cnpj: string;
  location: string;
  phone?: string;
  rooms: Room[];
};
