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
