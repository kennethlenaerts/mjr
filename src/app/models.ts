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
}

export interface Player {
  health: number;
  maxHealth: number;
  level: number;
  hearts: number;
  gold: number;
  diamonds: number;
  items: Item[];
}
