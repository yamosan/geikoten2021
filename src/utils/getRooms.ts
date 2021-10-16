import rooms from "@/data/exhibition.json";
import type { Room, Theme } from "@/models/Exhibition";

const ROOMS = rooms as Room[];

export function getRooms(): Room[] {
  return ROOMS;
}

export function getRoomByTheme(theme: Theme): Room {
  return ROOMS.find((room) => room.theme === theme);
}
