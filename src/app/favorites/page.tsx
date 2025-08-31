'use client'

import { Divider } from "antd"
import { useQuery } from "@tanstack/react-query"
import { $api, EndPath, Result } from "@/shared"
import { useAuthUser } from "@/store"
import { ProductCard } from "@/entities"
import { ResponseGetFavoriteProductsModel } from "@/models"

export default function FavoritesPage() {
  const { user } = useAuthUser()
  const userId = user?.UserId ?? null

  const { data } = useQuery({
    queryKey: ['favorite', userId],
    queryFn: async () => {
      const response = await $api.get<ResponseModel<ResponseGetFavoriteProductsModel>>(
        EndPath.FavoriteProducts.GetFavoriteProducts,
        { params: { userId } }
      )
      return response.data
    },
    enabled: !!userId
  })

  const products = data?.data?.Products ?? []

  return (
    <>
      {products.length ? (
        <div className="mt-8 bg-white --container">
          <p className="text-4xl font-semibold">Избранные</p>
          <Divider />
          <div className="--grid-container">
            {products.map((item) => (
              <div key={item.Id}>
                <ProductCard
                  title={item.Name}
                  price={item.Price}
                  photo={item.Images?.[0]?.PhotoBase64}
                  discount={item.ProductDiscount}
                  id={item.Id}
                  magazineName={item.ProductMagazine?.MagazineName}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Result
          btnText={'Перейти'}
          status={'404'}
          subTitle={'У вас еще нет избранных продуктов, для добавления перейдите на раздел продуктов!'}
        />
      )}
    </>
  )
}
