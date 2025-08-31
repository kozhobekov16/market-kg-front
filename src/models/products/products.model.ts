export type ProductsGetWeeklyNewProducts = {
  Id: number
  Name: string
  Model: string
  Color: string
  Price: number
  QuantityInStock: number
  Description: string
  Images: ImagesModel
  ProductDiscount: boolean
}[]

export type ProductResponseModel = {
  CashbackSum: number
  CartId: number
  Id: number
  Name: string
  Model: string
  Color: string
  Price: number
  Images: ImagesModel
  IsActive: boolean
  ProductDiscount: boolean
  ProductMagazine: ProductMagazineModel
}