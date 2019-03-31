import { ShopView } from './shop/shop.view';
import { CashShopView } from './cash-shop/cash-shop.view';
import { StartView } from './start/start.view';
import { InfoView } from './info/info.view';

export * from './start/start.view';
export * from './info/info.view';
export * from './shop/shop.view';
export * from './cash-shop/cash-shop.view';

// prettier-ignore
export const views = [
  StartView,
  InfoView,
  ShopView,
  CashShopView,
];
