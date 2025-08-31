export type ResponseGetFavoriteProductsModel = {
  Products: {
    Color: string;
    Description: string;
    FavoriteProductId: number;
    Id: number;
    Images: ImagesModel
    Model: string
    Name: string
    Price: number
    ProductCategory: number
    ProductDiscount: boolean
    ProductMagazine: {
      MagazineName: string
    }
  }[]
  UserId: string
}