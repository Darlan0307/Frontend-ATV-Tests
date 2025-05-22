export type RoomStatus = "Available" | "Pending" | "Confirmed" | "Cancelled";

export type Resource = {
  uuid: string;
  id: number;
  name: string;
  description: string;
};

export type Room = {
  uuid: string;
  id: number;
  name: string;
  description: string;
  capacity: number;
  status_display: RoomStatus;
  resources: Resource[];
  office: {
    uuid: string;
    id: number;
    name: string;
    cnpj: string;
  };
};

export type Office = {
  uuid: string;
  id: number;
  name: string;
  cnpj: string;
  location: string;
  phone?: string;
  rooms: number;
};

export type OfficePayload = {
  name: string;
  description: string;
  cnpj: string;
  location: string;
  phone?: string;
};

export type ResourcePayload = {
  name: string;
  description: string;
};
