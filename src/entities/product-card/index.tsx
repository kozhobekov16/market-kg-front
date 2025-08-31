"use client"

import {Badge, Button, Card, Image, Tooltip} from 'antd';
import {FcComments} from "react-icons/fc";
import Link from "next/link";
import {AddToFavorite, AddToBasket} from "@/processes";

const {Meta} = Card;

interface Props {
  title: string;
  price: number;
  photo: string;
  discount: boolean
  model?: string
  magazineName?: string
  loading?: boolean
  id: number
}

export const ProductCard = (props: Props) => {
  const {price, photo, title, discount, model, magazineName, loading, id} = props;

  const actions = [
    <AddToBasket productId={id}/>,
    <Tooltip title="Посмотеть товар" key={'Посмотеть товар'}>
      <Link
        href={`/product-view/${id}`}
      >
        <Button type={'text'}>
          <FcComments/>
        </Button>
      </Link>
    </Tooltip>
  ];

  return (
    <Card
      loading={loading}
      actions={actions}
      hoverable
      className="min-w-[280px] max-w-[420px] rounded-lg relative mx-6 sm:mx-0 shadow-lg duration-100 ease-linear"
      cover={
        discount ? (
          <Badge.Ribbon text="Скидки" color={'pink'}>
            <div className="relative md:h-[200px] xl:h-[250px] 2xl:h-[300px] bg-gray-100 text-center overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <Image alt="product" src={photo} className="sm:!w-48 md:!40 !w-44 xl:!w-60"/>
              </div>
              <AddToFavorite id={id}/>
            </div>
          </Badge.Ribbon>
        ) : (
          <div className="relative md:h-[200px] xl:h-[250px] 2xl:h-[300px] bg-gray-100 text-center overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <Image alt="product" src={photo} className="sm:!w-48 md:!40 !w-44 xl:!w-60"/>
            </div>
            <AddToFavorite id={id}/>
          </div>
        )
      }
    >
      <Link href={`/product-view/${id}`}>
        <Meta title={title} description={
          <>
            {model && <p>{`Модель: ${model}`}</p>}
            <p>{`Цена: ${price} сом`}</p>
            <p>{`Магазин: ${magazineName}`}</p>
          </>
        }/>
        {/*<Button className="w-full mt-2" icon={<IoMdBasket/>}>*/}
        {/*  Купить*/}
        {/*</Button>*/}
      </Link>
    </Card>
  );
};
