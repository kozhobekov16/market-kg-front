"use client"

import React, {useState} from 'react'
import {Steps} from "antd";
import {BasketProducts} from "@/features/formalities/basket-products";
import {ToFormalities} from "@/features/formalities/to-formalities";
import {Products} from "@/entities";
import {ClientData} from "@/features/formalities/client-data";
import {ToPay} from "@/features/formalities/to-pay";

export const Formalities = () => {
  const steps = [
    {
      title: 'Корзина',
      content: <BasketProducts/>,
    },
    {
      title: 'Оформление',
      content: <ClientData/>,
    },
    {
      title: 'Оплата',
      content: <ToPay/>,
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className={'--container py-8'}>
      <Steps
        current={current}
        items={steps}
        percent={(current / (steps.length - 1)) * 100}
      />
      <div className={'sm:flex block gap-4 items-start'}>
        <div className={'w-[100vh]'}>{steps[current].content}</div>
        <ToFormalities current={current} steps={steps} setCurrent={setCurrent}/>
      </div>
      <Products/>
    </section>
  )
}