"use client"

import {Carousel, Image} from "antd";
import {useQuery} from "@tanstack/react-query";
import {BannerResponseModel} from "@/models";
import {bannerApiResponse} from "@/widgets/home/banner/api";

const content = [
  {
    title: "iPhone 16 Pro | Pro Max",
    description: "Увеличенные дисплеи Мощный чип A18 Pro | Desert Titanium, Natural Titanium, White Titanium, Black Titanium | 6,9”\n" +
      "Дисплей Super Retina XDR◊Правовые оговорки\n" +
      "Технология ProMotion\n" +
      "Всегда включённый дисплей",
    image: "/assets/ipad.png",
  },
  {
    title: "Очки виртуальной реальности BOBOVR Z6 (с наушниками)",
    description: "Очки BOBOVR Z6 предоставят вам возможность окунуться в захватывающий 3D мир виртуальной реальности в любом месте, где бы вы не находились. Для этого вам надо будет совершить несколько простых действий:\n" +
      "Скачать приложение или видео на телефон.\n" +
      "Установить мобильный телефон в специальный слот виртуальных очков.\n" +
      "Надеть очки на голову, и начать погружение в выбранный трехмерный мир.",
    image: "/assets/vr.png",
  },
  {
    title: "iPad 14 Mini",
    description:
      "Очки BOBOVR Z6 предоставят вам возможность окунуться в захватывающий 3D мир виртуальной реальности в любом месте, где бы вы не находились. Для этого вам надо будет совершить несколько простых действий",
    image: "/assets/iphone.png",
  },
  {
    title: "iPad 14 Mini",
    description:
      "Очки BOBOVR Z6 предоставят вам возможность окунуться в захватывающий 3D мир виртуальной реальности в любом месте, где бы вы не находились. Для этого вам надо будет совершить несколько простых действий",
    image: "/assets/mac.png",
  },
];

export const BannerClient = ({bannerResponse}: {bannerResponse: ResponseModel<BannerResponseModel>}) => {
  useQuery({
    queryKey: ['banner'],
    queryFn: bannerApiResponse
  })

  return (
    <Carousel autoplay autoplaySpeed={3000} dotPosition="bottom" infinite className={'bg-black'}>
      {/*{data?.success && data?.data?.Banners?.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <div key={index} className="h-[500px] sm:h-[700px] md:h-[600px] xl:h-[600px] 2xl:ml-32 3xl:h-[700px]">*/}
      {/*      <div*/}
      {/*        className="sm:flex-row items-center justify-center sm:flex h-full gap-5 sm:gap-10 sm:px-10 lg:px-10 md:px-20 xl:px-40 px-8 py-14"*/}
      {/*      >*/}
      {/*        <div className="w-full sm:max-w-[50%] text-center sm:text-left">*/}
      {/*          <h3 className="text-xl sm:text-5xl md:text-3xl font-semibold xl:font-black xl:text-5xl text-white">*/}
      {/*            {item.ProductNameModel}*/}
      {/*          </h3>*/}
      {/*          <p className="sm:text-xl md:text-xs mt-2 xl:text-xl text-gray-400 line-clamp-3">*/}
      {/*            {item.CategoryName}*/}
      {/*          </p>*/}
      {/*          <div className="h-[1px] bg-white my-4 mx-auto sm:mx-0"></div>*/}
      {/*          <button className="--btn">*/}
      {/*            Подробнее*/}
      {/*          </button>*/}
      {/*        </div>*/}

      {/*        <div className="w-full sm:max-w-[40%] flex items-center justify-center mt-6 sm:mt-0">*/}
      {/*          <Image*/}
      {/*            preview={false}*/}
      {/*            src={item.PhotoUrl}*/}
      {/*            alt={item.PhotoUrl}*/}
      {/*            className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[300px] 2xl:max-w-[400px] rounded-lg object-cover border-none"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*})}*/}

      {/*{статичная версия}*/}

      {content.map((item, index) => (
        <div key={index} className="h-[500px] sm:h-[700px] md:h-[600px] xl:h-[600px] xl:ml-18">
          <div
            className="sm:flex-row items-center justify-center sm:flex h-full gap-5 sm:gap-10 sm:px-10 lg:px-10 md:px-20 py-14"
          >
            <div className="w-full sm:max-w-[50%] text-center sm:text-left">
              <h3 className="text-xl sm:text-5xl md:text-3xl font-semibold xl:font-black xl:text-5xl text-white">
                {item.title}
              </h3>
              <p className="sm:text-xl md:text-xs mt-2 xl:text-xl text-gray-400 line-clamp-3">
                {item.description}
              </p>
              <div className="h-[1px] bg-white my-4 mx-auto sm:mx-0"></div>
              <button className="--btn">
                Подробнее
              </button>
            </div>
            <div className="w-full sm:max-w-[40%] flex items-center justify-center mt-6 sm:mt-0">
              <Image
                preview={false}
                src={item.image}
                alt={item.title}
                className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[300px] 2xl:max-w-[400px] rounded-lg object-cover border-none"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
