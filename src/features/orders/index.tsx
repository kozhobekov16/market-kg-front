"use client"

import {Badge, Tabs, TabsProps, Typography} from "antd";
import {Delivered} from "./delivered";
import React from "react";
import {Current} from "@/features/orders/current";

export const Orders = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <TitleOrderInfo title={'Текущий'} badgeCount={1}/>,
      children: <Current/>
    },
    {
      key: '2',
      label: <TitleOrderInfo title={'Доставленный'} badgeCount={4}/>,
      children: <Delivered/>
    },
    {
      key: '3',
      label: <TitleOrderInfo title={'Отменено'} badgeCount={0}/>,
      children: 'Отменено',
    },
    {
      key: '4',
      label: <TitleOrderInfo title={'Возврат'} badgeCount={2}/>,
      children: 'Возврат',
    },
  ];

  return (
    <section className={'mt-4 mb-4'}>
      <div
        className={'bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-10'}
      >
        <div className={'--container'}>
          <p className={'sm:text-5xl text-3xl font-bold'}>История заказов</p>
          <p className={'sm:text-lg pt-2'}>Отслеживание, возврат или покупка товаров</p>
        </div>
      </div>
      <div className={'--container mt-6'}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
      </div>
    </section>
  )
}

const TitleOrderInfo = ({title, badgeCount}: { badgeCount: number, title: string }) => {
  return (
    <main className={'flex gap-2 items-center'}>
      <Typography className={'text-xl font-medium'}>{title}</Typography>
      <Badge count={badgeCount} color={'lime'}/>
    </main>
  )
}
