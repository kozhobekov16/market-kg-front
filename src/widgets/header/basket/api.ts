"use server"

import {$api, EndPath} from "@/shared";
import {GetShoppingCartsByUserIdModel} from "@/models";
import {cookies} from 'next/headers';

export async function getBasketData() {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user')?.value;

    if (!userCookie) return null;

    const user = JSON.parse(userCookie);
    const userId = user.UserId;

    if (!userId) return null;

    const response = await $api.get<ResponseModel<GetShoppingCartsByUserIdModel>>(
      EndPath.ShopingCarts.GetShoppingCartsByUserId,
      { params: { userId } }
    );
    return response.data;
  } catch (error) {
    console.error('Basket data error:', error);
    return null;
  }
}