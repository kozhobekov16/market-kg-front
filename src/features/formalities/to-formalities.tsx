import {Button, Card, Divider, Input, message, Modal, Typography} from "antd";
import React, {useState} from "react";

interface Props {
  current: number
  steps: {
    title: string
    content: React.ReactNode
  }[]
  setCurrent: (arg: number) => void;
}

// interface ToPayRequest {
//   cardNumber: string;
//   nameCard: string
//   date: string
//   cvv: string
// }

export const ToFormalities = ({current, steps, setCurrent}: Props) => {
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Сохранено успешно!',
    });
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // api {control, handleSubmit} = useForm<ToPayRequest>()

  return (
    <>
      {contextHolder}
      <Card
        title={'Детали оплаты'}
        className="my-6 rounded-2xl border border-gray-200 flex flex-col shadow-lg hover:shadow-2xl duration-100 ease-linear"
      >
        <div className={'w-96'}>
          <Typography>
            Итого: 50000 сом
          </Typography>
          <Typography>
            Скидка: 10000 сом
          </Typography>
          <Typography>
            Стоимость доставки: 0 сом
          </Typography>
          <Divider className={'my-1'}/>
          <Typography className={'font-bold text-md'}>
            Общий итог: 5000 сом
          </Typography>
          {current < steps.length - 1 && (
            <>
              <Button
                type="primary" size={"large"}
                className={'w-full mt-4'}
                onClick={() => next()}
              >
                Перейти к оформлению
              </Button>
              {(current === 1 && steps.length - 1) && (
                <Button
                  type="dashed" size={"large"} className={'w-full mt-4'}
                  onClick={() => prev()}>
                  Вернуться в корзину
                </Button>
              )}
            </>
          )}
          {current === steps.length - 1 && (
            <>
              <Button type="primary" className={'mt-2 w-full'} onClick={showModal}>
                Оплатить
              </Button>
              {(current === 2 && steps.length - 1) && (
                <Button
                  type="dashed" size={"large"} className={'w-full mt-4'}
                  onClick={() => prev()}>
                  Вернуться в корзину
                </Button>
              )}
            </>
          )}
        </div>
      </Card>
      <Modal
        centered title="Добавьте способ оплаты" open={isModalOpen} onCancel={handleCancel} footer={null}
        onOk={handleCancel}
      >
        <div className={'flex gap-2 flex-col'}>
          <div>
            <p>
              Кредитные или дебетовые карты
              Оплата по кредитным картам осуществляются через Freedom Pay.
            </p>
          </div>
          <Input placeholder="Card number"/>
          <Input placeholder="Name on card"/>
          <Input placeholder="Expiration date (MM/YY)"/>
          <Input placeholder="CVV"/>
          <div className={'flex gap-2'}>
            <Button className={'w-full'} color="pink" variant="filled" onClick={handleCancel}>Назад</Button>
            <Button
              color="pink" variant="solid"
              className={'w-full'}
              onClick={() => {
                success();
                handleCancel();
              }}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}