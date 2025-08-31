import {
  CarOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  PercentageOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: <CarOutlined className="text-4xl text-blue-500"/>,
    title: "Быстрая доставка",
    description: "Бесплатная доставка при заказе от 4000 сом.",
  },
  {
    icon: <CustomerServiceOutlined className="text-4xl text-blue-500"/>,
    title: "Онлайн поддержка",
    description: "Не стесняйтесь спрашивать об интересующем вопросе!",
  },
  {
    icon: <GiftOutlined className="text-4xl text-blue-500"/>,
    title: "Уникальные товары",
    description: "Большой ассортимент фирменных и необычных товаров.",
  },
  {
    icon: <PercentageOutlined className="text-4xl text-blue-500"/>,
    title: "Самые низкие цены",
    description: "Крутая техника по самым низким ценам.",
  },
];

export const FeaturesBlock = () => {
  return (
    <section className="bg-sky-50 p-2">
      <div className="--grid-container">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6">
            <div className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4">
              {feature.icon}
            </div>
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h5>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};