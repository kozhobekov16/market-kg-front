import {Divider, Table} from "antd";
import React from "react";
import {ImagesOrderInfo} from "@/shared";

const dataSource = [
  {
    key: '1',
    name: '#8967856',
    date: '2023/08/20',
    total: '1000000 сом',
    delivered: '2024/08/22',
    recipient: '+996 700 000 000',
    address: 'Чуй, Бишкек Райком.12 -34',
  },
];

const columns = [
  {
    title: 'Код заказа',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Итого',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Доставлен',
    dataIndex: 'delivered',
    key: 'delivered',
  },
  {
    title: 'Получатель',
    dataIndex: 'recipient',
    key: 'recipient',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
];

const images = ['/assets/mac.png', '/assets/vr.png', '/assets/iphone.png', '/assets/ipad.png', '/assets/mac.png']

export const Delivered = () => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 'max-content'}}/>
      <ImagesOrderInfo images={images}/>
      <Divider/>
    </>
  )
}