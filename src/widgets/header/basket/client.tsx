'use client';

import {Badge, Button, Typography, Space, Row, Col, Image, Drawer, Spin, notification, Popconfirm} from 'antd';
import {SlBasket} from "react-icons/sl";
import {useRouter} from 'next/navigation'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {$api, EndPath, ShowTotalCount} from "@/shared";
import {useState} from "react";
import {FaShopify} from "react-icons/fa";
import {TbShoppingCartCheck} from "react-icons/tb";
import {DeleteOutlined} from "@ant-design/icons";
import {GetShoppingCartsByUserIdModel} from "@/models";

const {Text, Title} = Typography;

interface BasketClientProps {
  initialData: ResponseModel<GetShoppingCartsByUserIdModel> | null;
}

export function BasketClient({ initialData }: BasketClientProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const [api, contextHolder] = notification.useNotification();

  // Используем initialData как начальное значение
  const {data, isLoading} = useQuery({
    queryKey: ['basket'],
    queryFn: async () => {
      const response = await $api.get<ResponseModel<GetShoppingCartsByUserIdModel>>(
        EndPath.ShopingCarts.GetShoppingCartsByUserId
      );
      return response.data;
    },
    initialData: initialData || undefined,
    enabled: false // Отключаем автоматический запрос, т.к. данные уже есть
  });

  const totalItems = data?.data?.MagazineProducts?.reduce((acc: number, current: any) => acc + (current.Products?.length || 0), 0) || 0;

  const removeMutation = useMutation({
    mutationFn: async (cartId: number) => {
      await $api.delete(EndPath.ShopingCarts.DeletePoductCart, {
        params: { cartId }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['basket'] });
      api.success({
        message: 'Товар удален из корзины',
        duration: 3
      });
    },
    onError: () => {
      api.error({
        message: 'Ошибка при удалении товара',
        duration: 3
      });
    }
  });

  const content = (
    <div className="max-h-[90vh] overflow-y-auto">
      {isLoading ? (
        <Spin/>
      ) : totalItems > 0 ? (
        <Space direction="vertical" className="w-full">
          {contextHolder}
          {data?.data.MagazineProducts.map((magazineGroup) => (
            <div
              key={magazineGroup.Magazine.MagazineName}
              className="border-b last:border-b-0 pb-3 mb-3"
            >
              <div className={'flex items-center gap-2'}>
                <FaShopify size={25}/>
                <Title level={5} className="!text-lg font-semibold mt-2">
                  Магазин: {magazineGroup.Magazine.MagazineName}
                </Title>
              </div>
              <Space direction="vertical" className="w-full">
                {magazineGroup.Products.map((product) => (
                  <div
                    key={product.Id}
                    className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <Row gutter={[16, 4]} align="middle">
                      <Col span={7}>
                        <Image
                          src={product.Images[0]?.PhotoBase64 || '/placeholder.png'}
                          alt={product.Name}
                          className="rounded-lg object-cover"
                        />
                      </Col>
                      <Col span={12}>
                        <Space direction="vertical" size="small" className="w-full">
                          <Text strong className="!text-base">{product.Name}</Text>
                          <Text className="!text-base">{product.Model}</Text>
                          <Text type="secondary" className="!text-sm">
                            Цена: {product.Price} тг
                          </Text>
                        </Space>
                      </Col>
                      <Col span={5}>
                        <Popconfirm
                          title="Удалить товар из корзины?"
                          description="Вы уверены, что хотите удалить этот товар?"
                          onConfirm={() => removeMutation.mutate(product.CartId)}
                          okText="Да"
                          cancelText="Нет"
                        >
                          <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            className="absolute top-2 right-2"
                            loading={removeMutation.isPending && removeMutation.variables === product.CartId}
                          />
                        </Popconfirm>
                      </Col>
                    </Row>
                  </div>
                ))}
                <ShowTotalCount
                  TotalQuantyProduct={data?.data.TotalQuantyProduct}
                  TotalAmount={data?.data.TotalAmount}
                />
              </Space>
            </div>
          ))}
          <Button
            size="large"
            type={'dashed'}
            icon={<TbShoppingCartCheck/>}
            onClick={() => router.push('/formalities')}
            disabled={totalItems === 0}
            className="w-full"
          >
            Перейти к оформлению
          </Button>
        </Space>
      ) : (
        <div className="text-center py-10">
          <SlBasket size={50} className="mx-auto text-gray-400 mb-4"/>
          <Text className="text-xl">Корзина пуста 😔</Text>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Button
        shape="circle"
        size="large"
        type="text"
        onClick={() => setOpen(true)}
        className="relative p-0 border-none transition-transform duration-200 hover:scale-110"
      >
        <Badge count={data?.data?.TotalQuantyProduct} size="small" color="blue" offset={[8, 0]}>
          <SlBasket size={22} className="text-gray-700 hover:text-blue-500 transition-colors"/>
        </Badge>
      </Button>

      <Drawer
        title={<Title level={4} className="!m-0">🛒 Ваша корзина</Title>}
        placement="right"
        width={typeof window !== "undefined"
          ? Math.min(window.innerWidth * 0.9, 500)
          : 400}
        onClose={() => setOpen(false)}
        open={open}
      >
        {content}
      </Drawer>
    </>
  );
}