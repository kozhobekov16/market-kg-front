import { BasketClient } from './client';
import { getBasketData } from './api';

export async function Basket() {
  const basketData = await getBasketData();
  return basketData && <BasketClient userId={basketData.data.UserId} />;
}