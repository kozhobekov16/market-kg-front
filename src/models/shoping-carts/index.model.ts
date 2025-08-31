import {ProductResponseModel} from "@/models";

export type GetShoppingCartsByUserIdModel = {
  UserId: string
  TotalAmount: number
  TotalQuantyProduct: number
  MagazineProducts: {
    Magazine: ProductMagazineModel
    Products: ProductResponseModel[]
  }[]
}