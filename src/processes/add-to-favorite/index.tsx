import React from 'react'
import {useAuthUser} from "@/store";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Button, notification, Tooltip} from "antd";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {$api, EndPath} from "@/shared";

export const AddToFavorite = ({id}: { id: number }) => {
  const [api, contextHolder] = notification.useNotification();
  const {user} = useAuthUser()
  const queryClient = useQueryClient();

  const {data: favoriteProduct, isFetching} = useQuery({
    queryKey: ['favorite', id],
    queryFn: async () => {
      const res = await $api.get<{
        success: boolean;
        data: { Products: { FavoriteProductId?: number; Id: number }[] }
      }>(EndPath.FavoriteProducts.GetFavoriteProducts, {
        params: {userId: user?.UserId}
      });
      return res.data.data.Products.find(p => p.Id === id) || null;
    },
    enabled: !!user?.UserId,
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      await $api.post(EndPath.FavoriteProducts.AddFavoriteProducts, {
        UserId: user?.UserId,
        ProductId: id
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['favorite', id]});
      api.success({
        message: 'Добавлено в избранное',
        duration: 3
      });
    },
    onError: () => {
      api.error({
        message: 'Ошибка при добавлении',
        duration: 3
      });
    }
  });

  const removeMutation = useMutation({
    mutationFn: async () => {
      if (!favoriteProduct?.FavoriteProductId) return;
      await $api.delete(EndPath.FavoriteProducts.DeleteFavoriteProducts, {
        params: {Id: favoriteProduct.FavoriteProductId}
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['favorite', id]});
      api.info({
        message: 'Удалено из избранного',
        duration: 3
      });
    },
    onError: () => {
      api.error({
        message: 'Ошибка при добавлении',
        duration: 3
      });
    }
  });

  const handleToggle = () => {
    if (!user?.UserId) {
      api.warning({
        message: 'Вы не зарегистрированы!',
        duration: 3
      });
      return;
    }
    if (favoriteProduct) {
      removeMutation.mutate();
    } else {
      addMutation.mutate();
    }
  };

  return (
    <>
      {contextHolder}
      <Tooltip title={favoriteProduct?.FavoriteProductId ? 'Удалить с избранного' : 'Добавить в избранное'}>
        <div
          onClick={handleToggle}
          className="absolute top-1 cursor-pointer transition-colors duration-300 p-2"
        >
          {favoriteProduct ? (
            <Button type={'text'} disabled={isFetching}>
              <HeartFilled className="text-lg text-pink"/>
            </Button>
          ) : (
            <Button type={'text'} disabled={isFetching}>
              <HeartOutlined className="text-lg text-blue"/>
            </Button>
          )}
        </div>
      </Tooltip>
    </>
  )
}