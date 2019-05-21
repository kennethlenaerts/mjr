export enum ItemType {
  health = 1,
  weapon = 2,
  misc = 3,
}

export interface Item {
  id: number;
  name: string;
  src: string;
  value: number;
  type: ItemType;
  healthPoints?: number;
}

export interface Player {
  userName: string;
  health: number;
  maxHealth: number;
  level: number;
  attack: number;
  defense: number;
  hearts: number;
  gold: number;
  diamonds: number;
  items: number[];
  maxItemSlots: number;
}
