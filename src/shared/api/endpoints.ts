import {baseUrl} from "@/shared"

export class EndPath {
  static Auth = class {
    private static auth = baseUrl('/Auth/')
    static SendOTP = this.auth('SendOTP')
    static RegistrUser = this.auth('RegistrUser')
  }
  static Products = class {
    private static products = baseUrl('/Products/')
    static GetProducts = this.products('GetProducts')
    static GetWeeklyNewProducts = this.products('GetWeeklyNewProducts')
    static GetPopularProducts = this.products('GetPopularProducts/Popular')
    static GetProductsById = this.products('GetProductsById')
  }
  static Banners = class {
    private static banners = baseUrl('/Banners/')
    static GetBanners = this.banners('GetBaners')
  }
  static Categories = class {
    private static categories = baseUrl('/Categories/')
    static GetCategoriesList = this.categories('GetCategoriesList')
  }
  static FavoriteProducts = class {
    private static favoriteProducts = baseUrl('/FavoriteProducts/')
    static GetFavoriteProducts = this.favoriteProducts('GetFavoriteProducts')
    static AddFavoriteProducts = this.favoriteProducts('AddFavoriteProducts')
    static DeleteFavoriteProducts = this.favoriteProducts('DeleteFavoriteProducts')
  }
  static Magazines = class {
    private static magazines = baseUrl('/Magazines/')
    static GetMagazinesList = this.magazines('GetMagazinesList')
  }
  static TotalOrderFavorite = class {
    private static totalOrderFavorite = baseUrl('/TotalOrderFavorite/')
    static GetTotalOrderFavorites = this.totalOrderFavorite('GetTotalOrderFavorites')
  }
  static FilesStore = class {
    private static filesStore = baseUrl('/FilesStore/')
    static GetFile = this.filesStore('GetFile')
  }
  static ShopingCarts = class {
    private static filesStore = baseUrl('/ShopingCarts/')
    static GetShoppingCartsByUserId = this.filesStore('GetShoppingCartsByUserId')
    static GetCheckProductCarts = this.filesStore('GetCheckProductCarts')
    static AddProductToCarts = this.filesStore('AddProductToCarts')
    static ChangeQuantyProductCart = this.filesStore('ChangeQuantyProductCart')
    static DeletePoductCart = this.filesStore('DeletePoductCart')
    static ClearProductCart = this.filesStore('ClearProductCart')
  }
}