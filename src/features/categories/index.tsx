import {Tabs} from "antd";
import {BsApple, BsFillHouseGearFill} from "react-icons/bs";
import {FcAndroidOs, FcHome} from "react-icons/fc";
import {FaCarSide, FaChild} from "react-icons/fa";
import {GiCharcuterie} from "react-icons/gi";
import {Apple} from "@/features/categories/apple";

const categories = [
  {
    icon: <BsApple className="text-2xl"/>,
    title: "Apple",
    children: <Apple/>,
  },
  {
    icon: <FcAndroidOs className="text-2xl"/>,
    title: "Android",
    children: <div className={'text-center'}>Android</div>,
  },
  {
    icon: <BsFillHouseGearFill className="text-2xl"/>,
    title: "Бытовая техника",
    children: <div className={'text-center'}>Бытовая техника</div>,
  },
  {
    icon: <FaChild className="text-2xl"/>,
    title: "Детские товары",
    children: <div className={'text-center'}>Детские товары</div>,
  },
  {
    icon: <GiCharcuterie className="text-2xl"/>,
    title: "Красота и уход",
    children: <div className={'text-center'}>Красота и уход</div>,
  },
  {
    icon: <FaCarSide className="text-2xl"/>,
    title: "Транспорт",
    children: <div className={'text-center'}>Транспорт</div>,
  },
  {
    icon: <FcHome className="text-2xl"/>,
    title: "Для дома",
    children: <div className={'text-center'}>Для дома</div>,
  },
];

export const Categories = () => {
  return (
    <section className="mt-8 l:p-8 px-1 sm:px-0 md:px-6">
      <Tabs
        defaultActiveKey="1"
        tabPosition="top"
        type="line"
        centered
        items={categories.map((item, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: (
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="font-medium text-gray-800 text-base">{item.title}</span>
              </div>
            ),
            children: (
              <div className="p-4  rounded-lg shadow-sm">{item.children}</div>
            ),
          };
        })}
      />
    </section>
  );
};
