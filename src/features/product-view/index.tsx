"use client"

import {ProductPhoto} from "./photo"
import {ProductInfo} from "@/features/product-view/info";
import {Products} from "@/entities";
import {ProductActions} from "./actions";
import {useQuery} from "@tanstack/react-query";
import {$api, EndPath} from "@/shared";
import {ProductResponseModel} from "@/models";

export const ProductView = ({productId}: { productId: string }) => {
  const {data} = useQuery({
    queryKey: ['productId'],
    queryFn: async () => {
      return (await $api.get<ResponseModel<ProductResponseModel>>(EndPath.Products.GetProductsById, {
        params: {
          productId
        }
      })).data
    },
    enabled: !!productId
  })

  return (
    <div className={'mt-4 mb-4 --container'}>
      {data?.data && (
        <>
          <div className="grid grid-cols-1 m-6 lg:grid-cols-5 gap-6 md:m-0">

            <div className="order-1 lg:col-span-3 m-4 md:m-0">
              <ProductInfo info={data.data}/>
            </div>

            <div className="order-2 lg:col-span-2">
              <ProductPhoto images={data.data.Images}/>
            </div>
          </div>
          <ProductActions price={data.data.Price}/>
          <Products/>
        </>
      )}
    </div>
  )
}