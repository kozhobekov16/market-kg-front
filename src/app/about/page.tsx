"use client"

import {Card, Form, Input, Button, Row, Col, Typography, Space} from 'antd';
import {MailOutlined, PhoneOutlined, ShopOutlined, FileTextOutlined} from '@ant-design/icons';
import {TbSquareRoundedCheckFilled} from "react-icons/tb";
import '@ant-design/v5-patch-for-react-19';

const {Title, Paragraph, Text} = Typography;
const {TextArea} = Input;

export default function AboutPage() {
  return (
    <div className={'bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-24 sm:py-10 md:py-10'}>
      <div
        className={'--container'}>
        <Title level={2} style={{textAlign: 'center', marginBottom: '40px'}}>
          О нашем интернет-магазине
        </Title>

        <Row gutter={32} wrap={true}>
          <Col xs={24} md={24}>
            <Card
              title={
                <Space>
                  <ShopOutlined style={{fontSize: 24, color: '#1890ff'}}/>
                  <Text strong>Наша компания</Text>
                </Space>
              }
              style={{boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}}
            >
              <Title level={4}>Почему выбирают нас?</Title>
              <Paragraph>
                Мы предоставляем лучший ассортимент товаров с гарантией качества и доступными ценами.
                Наша миссия – сделать шопинг удобным и приятным для всех.
              </Paragraph>
              <Paragraph>
                <strong>Адрес:</strong> ул. Примерная, 123, Город, Страна
              </Paragraph>
              <Space direction="vertical" size="middle">
                <div>
                  <MailOutlined style={{marginRight: 8}}/>
                  <Text>info@shop.com</Text>
                </div>
                <div>
                  <PhoneOutlined style={{marginRight: 8}}/>
                  <Text>+123 456 7890</Text>
                </div>
              </Space>

              {/* Добавленный раздел с документами */}
              <div style={{marginTop: '24px'}}>
                <Title level={5} style={{marginBottom: '16px'}}>
                  <FileTextOutlined style={{marginRight: '8px'}}/>
                  Наши документы
                </Title>
                <Space direction="vertical" size="small" style={{width: '100%'}}>
                  <Button
                    type="link"
                    href="/assets/docs/Договор с Поставщиками ЮР ЛИЦО.docx"
                    target="_blank"
                    icon={<FileTextOutlined />}
                  >
                    Договор с Поставщиками ЮР ЛИЦО
                  </Button>
                  <Button
                    type="link"
                    href="/assets/docs/Политика_Безопасности_Маркет_кж_.docx"
                    target="_blank"
                    icon={<FileTextOutlined />}
                  >
                    Публичная оферта MarketKG
                  </Button>
                  <Button
                    type="link"
                    href="/assets/docs/Политика_конфиденциальность_MarketKG_Partner.docx"
                    target="_blank"
                    icon={<FileTextOutlined />}
                  >
                    Политика Безопасности MarketKG
                  </Button>
                  <Button
                    type="link"
                    href="/assets/docs/Публичная_оферта_Маркет_кж_Анарбек_.docx"
                    target="_blank"
                    icon={<FileTextOutlined />}
                  >
                    Политика конфиденциальности MarketKG
                  </Button>
                </Space>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={24} className={'sm:mt-0 mt-5 md:mt-4'}>
            <Card
              title={<Text strong>Свяжитесь с нами</Text>}
              style={{boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}}
            >
              <Form layout="vertical">
                <Form.Item
                  label="Ваше имя"
                  name="name"
                  rules={[{required: true, message: 'Пожалуйста, введите ваше имя'}]}
                >
                  <Input placeholder="Введите имя"/>
                </Form.Item>

                <Form.Item
                  label="Ваш email"
                  name="email"
                  rules={[
                    {required: true, message: 'Пожалуйста, введите ваш email'},
                    {type: 'email', message: 'Введите корректный email'},
                  ]}
                >
                  <Input placeholder="Введите email"/>
                </Form.Item>

                <Form.Item
                  label="Сообщение"
                  name="message"
                  rules={[{required: true, message: 'Пожалуйста, введите сообщение'}]}
                >
                  <TextArea rows={4} placeholder="Введите ваше сообщение"/>
                </Form.Item>

                <Form.Item>
                  <Button
                    iconPosition={'end'} type="primary" htmlType="submit" block size={'large'}
                    icon={<TbSquareRoundedCheckFilled/>}
                  >
                    Отправить
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};