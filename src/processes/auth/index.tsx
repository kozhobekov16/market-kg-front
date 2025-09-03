'use client';

import React, {useState} from 'react';
import {Button, Divider, Modal, Space, notification} from "antd";
import {InputField} from "@/shared";
import {useYup} from "@/hooks";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation} from "@tanstack/react-query";
import {useAuthUser} from "@/store";
import {authApi} from './api';
import Cookies from 'js-cookie';

interface RequestForm {
  phonesNumber: string;
  CodeOTP?: string;
}

interface Props {
  openAuthModal: boolean;
  setOpenAuthModal: (open: boolean) => void;
}

export const AuthProcess = ({openAuthModal, setOpenAuthModal}: Props) => {
  const {box, string} = useYup();
  const {setUser} = useAuthUser()
  const [step, setStep] = useState<"send" | "verify">("send");
  const [api, contextHolder] = notification.useNotification();

  const {control, handleSubmit, reset} = useForm<RequestForm>({
    resolver: yupResolver(box({
      phonesNumber: string
    }))
  });

  const sendOtpMutation = useMutation({
    mutationFn: async (data: RequestForm) => {
      await authApi.sendOtp(data.phonesNumber);
    },
    onSuccess: () => {
      api.success({ message: 'Код успешно отправлен!', duration: 5 });
      setStep("verify");
    },
    onError: () => {
      api.error({ message: 'Ошибка при отправке кода', duration: 5 });
    }
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async (data: RequestForm) => {
      return await authApi.verifyOtp(data.phonesNumber, data.CodeOTP!);
    },
    onSuccess: (data) => {
      setUser(data.data);
      Cookies.set('user', JSON.stringify(data.data));
      api.success({ message: 'Вы успешно вошли!', duration: 5 });
      reset();
      setStep("send");
      setOpenAuthModal(false);
    },
    onError: () => {
      api.error({ message: 'Неверный код', duration: 5 });
    }
  });

  const onSubmit = (data: RequestForm) => {
    if (step === "send") {
      sendOtpMutation.mutate(data);
    } else {
      verifyOtpMutation.mutate(data);
    }
  };

  return (
    <Modal centered open={openAuthModal} onCancel={() => {
      setStep("send");
      setOpenAuthModal(false);
    }} footer={null}>
      <>
        {contextHolder}
        <p className="text-2xl text-center">Войдите в MarketKG</p>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <Space direction="vertical" className="w-full">
            <InputField
              name="phonesNumber"
              control={control}
              placeholder="Введите номер телефона +996 (___) __-__-__"
              size="large"
              disabled={step === "verify"}
            />

            {step === "verify" && (
              <InputField
                name="CodeOTP"
                control={control}
                placeholder="Введите код из SMS"
                size="large"
              />
            )}
          </Space>

          <Button
            type="primary"
            className="mt-2 w-full"
            htmlType="submit"
            loading={sendOtpMutation.isPending || verifyOtpMutation.isPending}
            disabled={sendOtpMutation.isPending || verifyOtpMutation.isPending}
          >
            {step === "send" ? "Отправить код" : "Подтвердить код"}
          </Button>
        </form>
      </>
    </Modal>
  );
};