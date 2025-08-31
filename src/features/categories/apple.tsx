import {Divider} from "antd";
import {ProductCard} from "@/entities";

const products = [
  {
    title: 'Iphone 14 promax 256 gig',
    price: 400,
    photo: '/assets/iphone.png',
    discount: true
  },
  {
    title: 'Apple MacBook Air 15" w/ Touch',
    price: 9000,
    photo: '/assets/mac.png',
    discount: true
  },
  {
    title: 'VR VisionTech X1',
    price: 9000,
    photo: '/assets/vr.png',
    discount: true
  },
  {
    title: 'Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)',
    price: 9000,
    photo: '/assets/ipad.png',
    discount: false
  }
];

export const Apple = () => {
  return (
    <div
      className="bg-white --container l:p-8">
      <Divider/>
      <div className="--grid-container">
        {products.map((item, index) => (
          <div key={index}>
            <ProductCard
              title={item.title}
              price={item.price}
              photo={item.photo}
              discount={item.discount}
              id={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}