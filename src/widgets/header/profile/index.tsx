"use client"

import {Button, Dropdown, MenuProps} from "antd";
import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5";
import {FcCustomerSupport} from "react-icons/fc";
import {MdLabelImportant, MdOutlineProductionQuantityLimits} from "react-icons/md";
import {FaUserLarge} from "react-icons/fa6";
import Link from "next/link";
import {useState} from "react";
import {AuthProcess} from "@/processes/auth";
import {useAuthUser} from "@/store";

export const Profile = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const signIn = () => setOpenAuthModal(true)
  const {user, clearUser} = useAuthUser()
  const isAuth = !!user?.UserId

  const items: MenuProps['items'] = isAuth ? [
    {
      key: '1',
      label: <p className={'text-sm'}>{user?.PhoneNumber}</p>,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: <Link href={'/orders'}>Мои заказы</Link>,
      icon: <MdOutlineProductionQuantityLimits size={18}/>
    },
    {
      key: '3',
      label: <Link href={'/favorites'}>Мои избранные</Link>,
      icon: <MdLabelImportant size={18}/>
    },
    {
      key: '4',
      label: <Link href={'/support'}>Служба поддержки</Link>,
      icon: <FcCustomerSupport size={18}/>
    },
    {
      key: '5',
      label: <Button className={'w-full'} onClick={clearUser} icon={<IoLogOutOutline size={18}/>}>Выйти</Button>,
    },
  ] : [
    {
      key: '1',
      label: <p className={'text-sm'}>Вы не вошли в свой кабинет. Для входа нажмите на кнопку Войти</p>,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: <Button
        className={'w-full'} icon={<IoLogInOutline size={18}/>}
        type={'primary'} onClick={signIn}
      >
        Войти
      </Button>,
    },
  ];

  return (
    <>
      <AuthProcess openAuthModal={openAuthModal} setOpenAuthModal={setOpenAuthModal}/>
      <Dropdown menu={{items}} trigger={['click']}>
        <Button
          type="text" shape="circle" size={'large'}
          onClick={(e) => e.preventDefault()}
        >
          <FaUserLarge size={20}/>
        </Button>
      </Dropdown>
    </>
  )
}