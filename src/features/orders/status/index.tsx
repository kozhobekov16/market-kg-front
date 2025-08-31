"use client"

import React, {useState} from 'react'
import {Button, message, Steps} from "antd";
import {OrderPlaced} from "@/features/orders/status/order-placed";
import {Processing} from "@/features/orders/status/processing";
import {OnTheWay} from "@/features/orders/status/on-the-way";
import {Delivered} from "@/features/orders/delivered";
import {LuShoppingBasket} from 'react-icons/lu';
import {MdChangeCircle} from "react-icons/md";
import {LoadingOutlined} from "@ant-design/icons";
import {TbCarFilled} from "react-icons/tb";
import {GoCheckCircleFill} from "react-icons/go";

export const StatusOrder = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const steps = [
    {
      title: 'Заказ размещен',
      content: <OrderPlaced/>,
      icon: <LuShoppingBasket/>
    },
    {
      title: 'Обработка',
      content: <Processing/>,
      icon: current === 0 ? <MdChangeCircle/> : <LoadingOutlined />,
    },
    {
      title: 'В пути',
      content: <OnTheWay/>,
      icon: <TbCarFilled />
    },
    {
      title: 'Доставленный',
      content: <Delivered/>,
      icon: <GoCheckCircleFill />
    },
  ]

  return (
    <>
      <p className={'text-2xl font-medium text-center'}>Отслеживайте свой заказ</p>
      <Steps current={current} items={steps}/>
      <div>{steps[current].content}</div>
      <div style={{marginTop: 24}}>
        {current < steps.length - 1 && (
          <Button type="primary" className={'w-full'} onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" className={'w-full'} onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button className={'w-full mt-2'} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  )
}