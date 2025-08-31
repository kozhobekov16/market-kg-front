"use client"

import {Divider} from "antd";
import {$api, EndPath, LinkViewMore} from "@/shared";
import {useQuery} from "@tanstack/react-query";
import {ProductResponseModel} from "@/models";
import {ProductCard} from "@/entities";

export const NewProducts = () => {
  const {data} = useQuery({
    queryKey: ['GetWeeklyNewProducts'],
    queryFn: async () => {
      return (await $api.get<ResponseModel<ProductResponseModel[]>>(EndPath.Products.GetWeeklyNewProducts)).data
    }
  })

  return (
    <section
      className="mt-8 bg-white --container">
      <LinkViewMore text={'НОВИНКИ'} link={'/'}/>
      <Divider />
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
