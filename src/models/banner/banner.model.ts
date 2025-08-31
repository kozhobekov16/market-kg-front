export type BannerResponseModel = {
  Banners: {
    Id: number,
    PhotoUrl: string
    Status: number,
    CategoryId: number,
    CategoryName: string
    DiscountId: number,
    PercentAge: number,
    ProductId: number,
    ProductNameModel: string
  }[]
}