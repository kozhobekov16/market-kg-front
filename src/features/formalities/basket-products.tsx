import {Button, Card, Image, Space, Typography} from 'antd'
import React from 'react'
import {DeleteOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";

const listProducts = [
  {
    image: '/assets/vr.png',
    title: 'MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch',
    color: 'Black',
    warranty: 'Гарантия',
    price: '1 000 000 сом'
  },
  {
    image: '/assets/iphone.png',
    title: 'Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air',
    color: 'Black',
    warranty: 'Гарантия',
    price: '1 000 000 сом',
  }
]

export const BasketProducts = () => {
  return (
    <>
      {listProducts.map((product, index) => (
        <Card key={index} className="my-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl duration-100 ease-linear">
          <div className="flex gap-4 items-center">
            <Image src={product.image} className="!w-40 rounded-lg" alt="product"/>
            <div className="flex-1">
              <Typography className="text-2xl font-bold">{product.title}</Typography>
              <Typography.Text type="secondary">Цвет: {product.color}</Typography.Text>
              <br/>
              <Typography.Text type="success">Бесплатная доставка</Typography.Text>
              <br/>
              <Typography.Text strong>{product.warranty}</Typography.Text>
              <br/>
              <Typography.Title level={3} className="text-green-600 mt-2">
                {product.price}
              </Typography.Title>
            </div>
            <Space size="middle" style={{marginTop: '8px'}}>
              <Button
                shape="circle"
                icon={<MinusOutlined/>}
                size="small"
              />
              <Typography>1</Typography>
              <Button
                shape="circle"
                icon={<PlusOutlined/>}
                size="small"
              />
              <Button
                shape="circle"
                icon={<DeleteOutlined/>}
                size="middle"
                danger
              />
            </Space>
          </div>
        </Card>
      ))}
    </>
  )
}