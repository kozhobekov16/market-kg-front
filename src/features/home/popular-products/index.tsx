'use client'

import {Divider} from "antd";
import {$api, EndPath, LinkViewMore} from "@/shared";
import {ProductCard} from "@/entities";
import {useQuery} from "@tanstack/react-query";
import {ProductResponseModel} from "@/models";

export const PopularProducts = () => {
  const {data} = useQuery({
    queryKey: ['GetProducts'],
    queryFn: async () => {
      return (await $api.get<ResponseModel<ProductResponseModel[]>>(EndPath.Products.GetPopularProducts)).data
    }
  })

  return (
    <section
      className="mt-8 --container">
      <LinkViewMore text={'НОВИНКИ'} link={'/'}/>
      <Divider/>
      <div className="--grid-container">
        {data && data?.data.map((item, index) => (
          <div key={index}>
            <ProductCard
              id={item.Id}
              title={item.Name}
              discount={item.ProductDiscount}
              price={item.Price}
              photo={item.Images[0].PhotoBase64}
              model={item.Model}
              magazineName={item.ProductMagazine?.MagazineName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
