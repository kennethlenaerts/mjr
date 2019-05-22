export enum ItemType {
  health = 1,
  weapon = 2,
  misc = 3,
  coin = 4,
  soulgem = 5,
}

export enum Type {
  cashShop,
  inventory,
  shop,
  status,
}

export interface Item {
  id: number;
  name: string;
  src: string;
  value: number;
  type: ItemType;
  healthPoints?: number;
  worth?: number;
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
  gem: number;
  items: number[];
  maxItemSlots: number;
}
