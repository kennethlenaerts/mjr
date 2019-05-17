export enum ItemType {
  health,
  weapon,
  misc,
}

export interface Item {
  name: string;
  src: string;
  value: number;
  type: ItemType;
}
