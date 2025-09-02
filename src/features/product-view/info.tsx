"use client";

import {Typography, Divider, Rate, Flex, Descriptions, DescriptionsProps} from "antd";
import {Guids} from "./guids";
import {ProductResponseModel} from "@/models";

export const ProductInfo = ({info}: { info: ProductResponseModel }) => {

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Бренд',
      children: <p>{info.Name}</p>,
    },
    {
      key: '2',
      label: 'Модель',
      children: <p>{info.Model}</p>,
    },
    {
      key: '3',
      label: 'Цвет',
      children: <p>{info.Color}</p>,
    },
  ];

  const descriptions: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Описание',
      children: <p>{info.Description}</p>
    },
  ];

  return (
    <>
      <Divider/>
      <Flex align="center" gap={10}>
        <Rate allowHalf defaultValue={2.5}/>
        <Typography.Text>Продавец: {info.ProductMagazine.MagazineName}</Typography.Text>
      </Flex>
      <Guids/>
      <Divider/>
      <div className="space-y-4">
        <Descriptions title="О продукте" items={items} bordered={true} column={1}/>
        <Divider/>
        <Descriptions layout="vertical" items={descriptions} className={'p-2'}/>
      </div>
    </>
  );
};
