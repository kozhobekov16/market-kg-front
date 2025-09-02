import {Button, Card, Flex, Radio, Space, Typography} from "antd";
import {SlBasket} from "react-icons/sl";
import {FcOk} from "react-icons/fc";
import {ProductResponseModel} from "@/models";

export const ProductActions = ({price}: {price: ProductResponseModel['Price']}) => {
  return (
    <Card className={'mt-6'}>
      <Typography.Title>{price} сом</Typography.Title>
      <Flex vertical={true} gap={10}>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Space direction="vertical">
            <Radio value={1}>Оплатить сейчас</Radio>
            <Radio value={2}>Оформить в рассрочку</Radio>
          </Space>
        </Radio.Group>
        <Radio.Group optionType="button" name="radiogroup" defaultValue={1}>
          <Radio value={1}>3 Месяца</Radio>
          <Radio value={2}>6 Месяца</Radio>
          <Radio value={3}>12 Месяца</Radio>
          <Radio value={4}>18 Месяца</Radio>
        </Radio.Group>
      </Flex>
      <Flex vertical={true} gap={4} style={{marginTop: 10}}>
        <Button type={'primary'} size={'large'} icon={<FcOk/>}>Купить сейчас</Button>
        <Button size={'large'} icon={<SlBasket/>}>Добавить в корзину</Button>
      </Flex>
    </Card>
  )
}