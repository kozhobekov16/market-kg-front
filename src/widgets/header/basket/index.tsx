import { BasketClient } from './client';
import { getBasketData } from './api';
import { cookies } from 'next/headers';
import { UserModel } from "@/models";

async function getAuthUserFromCookies(): Promise<UserModel | null> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user')?.value;

  if (!userCookie) return null;

  try {
    return JSON.parse(userCookie) as UserModel;
  } catch {
    return null;
  }
}

export async function Basket() {
  const user = await getAuthUserFromCookies();
  const basketData = await getBasketData(user?.UserId);
  return <BasketClient initialData={basketData} />;
}