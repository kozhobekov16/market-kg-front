"use client"

import {Card, Button, Row, Col, Typography, Space} from 'antd';
import {MailOutlined, PhoneOutlined, FileTextOutlined} from '@ant-design/icons';
import '@ant-design/v5-patch-for-react-19';
import {AboutForm} from "@/app/about/form";
import Image from "next/image";

const {Title, Paragraph, Text} = Typography;

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
                  <Image src={'/assets/logo.png'} alt={'logo'} width={50} height={50}/>
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
                    href="/docs/cooperation-agreement"
                    target="_blank"
                    icon={<FileTextOutlined/>}
                  >
                    Договор с Поставщиками ЮР ЛИЦО
                  </Button>
                  <Button
                    type="link"
                    href="/docs/public-offer"
                    target="_blank"
                    icon={<FileTextOutlined/>}
                  >
                    Публичная оферта MarketKG
                  </Button>
                  <Button
                    type="link"
                    href="/docs/security-policy"
                    target="_blank"
                    icon={<FileTextOutlined/>}
                  >
                    Политика Безопасности MarketKG
                  </Button>
                  <Button
                    type="link"
                    href="/docs/privacy-policy"
                    target="_blank"
                    icon={<FileTextOutlined/>}
                  >
                    Политика конфиденциальности MarketKG
                  </Button>
                </Space>
              </div>
            </Card>
          </Col>
          <AboutForm/>
        </Row>
      </div>
    </div>
  );
};