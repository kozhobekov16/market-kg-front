import {cache} from "react";
import {$api, EndPath} from "@/shared";
import {BannerResponseModel} from "@/models";

export const bannerApiResponse = cache(async () => {
  return (await $api.get<ResponseModel<BannerResponseModel>>(EndPath.Banners.GetBanners)).data
})