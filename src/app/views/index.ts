import { ShopView } from './shop/shop.view';
import { StartView } from './start/start.view';
import { InventoryView } from './inventory/inventory.view';

export * from './start/start.view';
export * from './inventory/inventory.view';
export * from './shop/shop.view';

// prettier-ignore
export const views = [
  StartView,
  InventoryView,
  ShopView
];
