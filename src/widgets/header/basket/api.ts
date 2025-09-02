import {$api, EndPath} from "@/shared";
import {GetShoppingCartsByUserIdModel} from "@/models";

export async function getBasketData(userId: string | null | undefined) {
  if (!userId) return null;
  try {
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