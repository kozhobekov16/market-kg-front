"use client"

import {Button, Card, Col, Form, notification, Typography} from "antd";
import {TbSquareRoundedCheckFilled} from "react-icons/tb";
import {useForm} from "react-hook-form";
import {$api, EndPath, InputField, PhoneInputField} from "@/shared";
import {FiLink} from "react-icons/fi";
import {FcBusinessman} from "react-icons/fc";

import {FcLibrary} from "react-icons/fc";
import Image from "next/image";
import {BsTelephoneFill} from "react-icons/bs";
import {useRouter} from "next/navigation";

const {Text} = Typography;

interface FormData {
  FullName: string,
  ContactPhone: string,
  TypeAcvity: string,
  InstagramUrl: string
}

export const AboutForm = () => {
  const {control, handleSubmit} = useForm<FormData>()
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      await $api.post(EndPath.AppCoorperation.CreateAppCoorperation, data)
      api.success({
        message: 'Успешно отправлен!',
        duration: 3
      });
      router.back()
    } catch (e) {
      api.error({
        message: 'Ошибка при отправки формы',
        duration: 3
      });
      console.log(e)
    }
  }

  return (
    <>
      {contextHolder}
        <Col xs={24} md={24} className={'sm:mt-0 mt-5 md:mt-4'}>
          <Card
            title={<div className={'flex gap-4 items-center'}>
              <Image src={'/assets/logo.png'} alt={'logo'} width={50} height={50}/>
              <Text strong>Завявка на сотрудничество MarketKG</Text>
            </div>}
            style={{boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}}
          >
            <Form layout="vertical" size={'middle'} onFinish={handleSubmit(onSubmit)}>
              <InputField
                size={'large'} name={'FullName'} control={control} label={'Ваше ФИО'}
                placeholder={'Асанов Асан'} required prefix={<FcBusinessman/>}/>
              <PhoneInputField
                size={'large'} name={'ContactPhone'} control={control}
                label={'Контакты'} type={'number'} required prefix={<BsTelephoneFill/>}
              />
              <InputField
                size={'large'} name={'InstagramUrl'} control={control} label={'Instagram или сайт'}
                placeholder={'https://instagram.com/brand-name'} type={'url'} required prefix={<FiLink/>}/>
              <InputField
                size={'large'} name={'TypeAcvity'} control={control} label={'Вид деятельности'}
                placeholder={'Опишите кратко'} required prefix={<FcLibrary/>}/>
              <Button
                iconPosition={'end'} type="primary" htmlType="submit" block size={'large'}
                icon={<TbSquareRoundedCheckFilled/>}
              >
                Отправить
              </Button>
            </Form>
          </Card>
        </Col>
    </>
  );
};
