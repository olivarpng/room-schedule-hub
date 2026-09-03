export type BookingStatus = "confirmado" | "pendente" | "cancelado";

export interface Room {
  id: string;
  name: string;
  capacity: number;
  location: string;
  features: string[];
  status: "disponível" | "ocupada" | "manutenção";
  image?: string;
}

export interface Booking {
  id: string;
  roomName: string;
  roomLocation: string;
  title: string;
  organizer: string;
  date: string;
  startTime: string;
  endTime: string;
  attendees: number;
  status: BookingStatus;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export const stats: Stat[] = [
  { label: "Salas cadastradas", value: "12", change: "+2 este mês", trend: "up" },
  { label: "Agendamentos hoje", value: "08", change: "+3 vs ontem", trend: "up" },
  { label: "Salas disponíveis", value: "05", change: "agora", trend: "neutral" },
  { label: "Taxa de ocupação", value: "67%", change: "+5% esta semana", trend: "up" },
];

export const rooms: Room[] = [
  {
    id: "r1",
    name: "Sala Azul",
    capacity: 8,
    location: "1º andar",
    features: ["TV 55\"", "Video", "Café"],
    status: "ocupada",
  },
  {
    id: "r2",
    name: "Sala Branca",
    capacity: 12,
    location: "2º andar",
    features: ["Projetor", "Quadro", "Ar-condicionado"],
    status: "disponível",
  },
  {
    id: "r3",
    name: "Sala Executiva",
    capacity: 6,
    location: "3º andar",
    features: ["Teleconferência", "Som", "Cortinas blackout"],
    status: "disponível",
  },
  {
    id: "r4",
    name: "Sala Criativa",
    capacity: 10,
    location: "1º andar",
    features: ["Puffs", "Flipchart", "Lousa"],
    status: "manutenção",
  },
  {
    id: "r5",
    name: "Sala de Treinamento",
    capacity: 24,
    location: "Subsolo",
    features: ["Projetor", "Microfone", "Água"],
    status: "ocupada",
  },
  {
    id: "r6",
    name: "Sala de Reuniões Norte",
    capacity: 8,
    location: "4º andar",
    features: ["TV 65\"", "Video", "Ar-condicionado"],
    status: "disponível",
  },
];

export const bookings: Booking[] = [
  {
    id: "b1",
    roomName: "Sala Azul",
    roomLocation: "1º andar",
    title: "Daily da equipe de Produto",
    organizer: "Ana Souza",
    date: "2026-09-03",
    startTime: "09:00",
    endTime: "09:30",
    attendees: 6,
    status: "confirmado",
  },
  {
    id: "b2",
    roomName: "Sala Branca",
    roomLocation: "2º andar",
    title: "Apresentação de Q3",
    organizer: "Bruno Lima",
    date: "2026-09-03",
    startTime: "10:00",
    endTime: "11:30",
    attendees: 10,
    status: "confirmado",
  },
  {
    id: "b3",
    roomName: "Sala Executiva",
    roomLocation: "3º andar",
    title: "Reunião com diretoria",
    organizer: "Carla Mendes",
    date: "2026-09-03",
    startTime: "14:00",
    endTime: "15:00",
    attendees: 5,
    status: "confirmado",
  },
  {
    id: "b4",
    roomName: "Sala Criativa",
    roomLocation: "1º andar",
    title: "Workshop de Design",
    organizer: "Diego Rocha",
    date: "2026-09-03",
    startTime: "15:30",
    endTime: "17:00",
    attendees: 8,
    status: "pendente",
  },
  {
    id: "b5",
    roomName: "Sala de Treinamento",
    roomLocation: "Subsolo",
    title: "Onboarding novos colaboradores",
    organizer: "Fernanda Costa",
    date: "2026-09-03",
    startTime: "09:00",
    endTime: "12:00",
    attendees: 20,
    status: "confirmado",
  },
  {
    id: "b6",
    roomName: "Sala de Reuniões Norte",
    roomLocation: "4º andar",
    title: "Call com cliente internacional",
    organizer: "Gabriel Teixeira",
    date: "2026-09-03",
    startTime: "16:00",
    endTime: "17:00",
    attendees: 4,
    status: "cancelado",
  },
];

export const todaySchedule = [
  { time: "09:00", bookings: ["Daily da equipe de Produto — Sala Azul", "Onboarding novos colaboradores — Sala de Treinamento"] },
  { time: "10:00", bookings: ["Apresentação de Q3 — Sala Branca"] },
  { time: "11:00", bookings: [] },
  { time: "14:00", bookings: ["Reunião com diretoria — Sala Executiva"] },
  { time: "15:00", bookings: [] },
  { time: "15:30", bookings: ["Workshop de Design — Sala Criativa"] },
  { time: "16:00", bookings: ["Call com cliente internacional — Sala de Reuniões Norte"] },
  { time: "17:00", bookings: [] },
];
