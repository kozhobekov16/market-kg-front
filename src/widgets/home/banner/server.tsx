import {bannerApiResponse} from "@/widgets/home/banner/api";
import {BannerClient} from "@/widgets/home/banner/client";

export async function BannerServer() {
  const bannerResponse = await bannerApiResponse()
  return (
    <BannerClient bannerResponse={bannerResponse}/>
  )
}