import {ProductPhoto} from "./photo"
import {ProductInfo} from "@/features/product-view/info";
import {Products} from "@/entities";
import {ProductActions} from "./actions";

export const ProductView = () => {

  return (
    <div
      className={'mt-4 mb-4 --container'}>
      <div className="grid grid-cols-1 m-6 lg:grid-cols-5 gap-6 md:m-0">

        <div className="order-1 lg:col-span-3 m-4 md:m-0">
          <ProductInfo/>
        </div>

        <div className="order-2 lg:col-span-2">
          <ProductPhoto/>
        </div>
      </div>
      <ProductActions/>
      <Products/>
    </div>
  )
}