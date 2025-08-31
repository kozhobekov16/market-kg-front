import {ProductCard} from "@/entities";

export const Products = () => {
  const products = [
    {
      title: 'Iphone 14 promax 256 gig',
      price: 400,
      photo: '/assets/iphone.png',
      discount: false
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
      discount: false
    },
    {
      title: 'Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)',
      price: 9000,
      photo: '/assets/ipad.png',
      discount: true
    }
  ];

    return (
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Похожие товары</h2>
        </div>

        <hr className="border-gray-300"/>

        <div className="--grid-container">
          {products.map((item, index) => (
            <div key={index}>
              <ProductCard
                id={index}
                title={item.title}
                price={item.price}
                photo={item.photo}
                discount={item.discount}
              />
            </div>
          ))}
        </div>
      </div>
    )
}