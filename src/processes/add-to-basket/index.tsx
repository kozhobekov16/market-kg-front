import React, {useState} from 'react'
import {Button, notification, Space, Tooltip} from 'antd'
import {PiTrolleyDuotone} from 'react-icons/pi'
import {DeleteOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {useAuthUser} from "@/store";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {$api, EndPath} from "@/shared";
import {GetShoppingCartsByUserIdModel} from '@/models';

export const AddToBasket = ({productId}: { productId: number }) => {
  const [count, setCount] = useState(0)
  const {user} = useAuthUser()
  const [api, contextHolder] = notification.useNotification();
  const queryClient = useQueryClient();

  const {data: cartId} = useQuery({
    queryKey: [productId, user?.UserId],
    queryFn: async () => {
      if (!user?.UserId) return null;

      const res = await $api.get<ResponseModel<GetShoppingCartsByUserIdModel>>(
        EndPath.ShopingCarts.GetShoppingCartsByUserId,
        {
          params: {userId: user.UserId}
        }
      );

      for (const magazine of res.data.data.MagazineProducts) {
        const product = magazine.Products.find(p => p.Id === productId);
        if (product && product.CartId) {
          return product.CartId;
        }
      }
      return null;
    },
    enabled: !!user?.UserId,
  })

  const handleAdd = useMutation({
    mutationFn: async () => {
      if (!user?.UserId) {
        throw new Error('User ID is required');
      }

      return await $api.post(EndPath.ShopingCarts.AddProductToCarts, {
        userId: user.UserId,
        ProductId: productId
      });
    },
    onSuccess: () => {
      setCount(1)
      queryClient.invalidateQueries({queryKey: ['basket']});
      api.success({
        message: 'Добавлено в корзину',
        duration: 3
      });
    },
    onError: (error) => {
      if (error.message === 'User ID is required') {
        api.error({
          message: 'Ошибка',
          description: 'Необходимо авторизоваться',
          duration: 3
        });
      } else {
        api.info({
          message: 'Удалено из избранного',
          duration: 3
        });
      }
    }
  })
  const changeQuantity = useMutation({
    mutationFn: async (newQuantity: number) => {
      return await $api.put(EndPath.ShopingCarts.ChangeQuantyProductCart, {
        CartId: cartId,
        QuantyProduct: newQuantity
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['basket']});
    },
    onError: (error) => {
      api.error({
        message: 'Ошибка при изменении количества',
        description: error.message,
        duration: 3
      });
    }
  })

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (cartId) {
      changeQuantity.mutate(newCount);
    }
  }

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (cartId) {
        changeQuantity.mutate(newCount);
      }
    } else {
      setCount(0);
      if (cartId) {
        clearProduct.mutate();
      }
    }
  }

  const clearProduct = useMutation({
    mutationFn: async () => {
      await $api.delete(EndPath.ShopingCarts.ClearProductCart, {
        params: {userId: user?.UserId}
      })
    },
    onSuccess: () => {
      setCount(0)
      api.success({
        message: 'Успешно очищен!',
        duration: 3
      });
      queryClient.invalidateQueries({queryKey: ['basket']});
    },
    onError: () => {
      api.error({
        message: 'Ошибка при добавлении',
        duration: 3
      });
    }
  })

  return (
    <>
      {contextHolder}
      <Tooltip title="Купить" key={'Купить'}>
        <>
          {count === 0 ? (
            <Button type="text" onClick={() => handleAdd.mutate()}>
              <PiTrolleyDuotone/>
            </Button>
          ) : (
            <Space size="small" style={{marginTop: '8px'}}>
              <Button
                shape="circle"
                icon={<MinusOutlined/>}
                size="small"
                onClick={decrement}
                loading={changeQuantity.isPending}
              />
              <span>{count}</span>
              <Button
                shape="circle"
                icon={<PlusOutlined/>}
                size="small"
                onClick={increment}
                loading={changeQuantity.isPending}
              />
              <Button
                shape="circle"
                icon={<DeleteOutlined/>}
                onClick={() => clearProduct.mutate()}
                size="small"
                danger
                loading={clearProduct.isPending}
              />
            </Space>
          )}
        </>
      </Tooltip>
    </>
  )
}