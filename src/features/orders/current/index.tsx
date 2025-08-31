"use client"

import React from 'react'
import {Button, Divider, Table} from "antd";
import {ImagesOrderInfo} from "@/shared";
import {FcViewDetails} from "react-icons/fc";
import {StatusOrder} from "@/features/orders/status";
// import '@ant-design/v5-patch-for-react-19';

const images = ['/assets/vr.png', '/assets/iphone.png', '/assets/mac.png', '/assets/ipad.png', '/assets/mac.png']

export const Current = () => {
  const [viewStatus, setViewStatus] = React.useState<boolean>(false);

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
    {
      title: <Button type={'dashed'} icon={<FcViewDetails/>} onClick={() => setViewStatus((prev) => !prev)}>
        Посмотреть статус заказа
      </Button>,
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 'max-content'}}/>
      <ImagesOrderInfo images={images}/>
      <Divider/>
      {viewStatus && <StatusOrder/>}
      {/*<Result subTitle={'Вы еще не разместили заказов'} status={'403'} btnText={'Заказать товар'}/>*/}
    </>
  )
}