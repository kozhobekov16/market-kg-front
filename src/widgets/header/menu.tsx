"use client"

import {useCallback, useEffect, useMemo, useState} from "react";
import {Button, Drawer, Image, Menu, MenuProps, Spin} from "antd";
import {AiOutlineHeart, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMenu, AiOutlineShop,} from "react-icons/ai";
import {MdOutlineCategory} from "react-icons/md";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {$api} from "@/shared";
import {CategoriesResponseModel, Category} from "@/models";
import {EndPath} from "@/shared/api/endpoints";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuHeader = () => {
  const [current, setCurrent] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {data: categoriesData} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return (await $api.get<ResponseModel<CategoriesResponseModel>>(EndPath.Categories.GetCategoriesList)).data;
    },
  });

  const mapCategoriesToMenuItems = useCallback((
    categories: Category[],
    parentPath: string = "/categories"
  ): MenuItem[] => {
    return categories.map((category) => {
      const path = `${parentPath}/${category.Code}`;
      return {
        key: `category:${category.Id}`,
        label: <Link href={path} className={'ml-2'}>{category.Name}</Link>,
        icon: category.PhotoBase64 ? (
          <Image
            src={category.PhotoBase64}
            alt={category.Name}
            width={18}
            className="rounded-md"
            preview={false}
          />
        ) : (
          <Spin size="small"/>
        ),
        children: category.SubCategories?.length
          ? mapCategoriesToMenuItems(category.SubCategories, path)
          : undefined,
      };
    });
  }, []);

  const menuItems: MenuItem[] = useMemo(() => {
    const dynamicCategoryItems = categoriesData?.data?.Categories
      ? mapCategoriesToMenuItems(categoriesData.data.Categories)
      : [];

    return [
      {
        label: <Link href="/">Главная</Link>,
        key: "home",
        icon: <AiOutlineHome/>,
      },
      {
        label: <Link href="/stores">Магазины</Link>,
        key: "stores",
        icon: <AiOutlineShop/>,
      },
      {
        label: "Категории",
        key: "categories",
        icon: <MdOutlineCategory/>,
        children: dynamicCategoryItems,
      },
      {
        label: <Link href="/favorites">Избранные</Link>,
        key: "favorites",
        icon: <AiOutlineHeart/>,
      },
      {
        label: <Link href="/about">О нас</Link>,
        key: "about",
        icon: <AiOutlineInfoCircle/>,
      },
    ];
  }, [categoriesData?.data.Categories, mapCategoriesToMenuItems]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (isMobile) setDrawerVisible(false);
  };

  return (
    <div className="w-full px-6 md:p-0">
      {isMobile ? (
        <>
          <div className="flex justify-between items-center h-12">
            <Link href="/" className="text-xl font-bold">
              <Image
                preview={false}
                src="/assets/logo.png"
                className="!w-16"
                alt="logo"
              />
            </Link>
            <Button
              icon={<AiOutlineMenu/>}
              onClick={() => setDrawerVisible(true)}
            />
          </div>
          <Drawer
            title="Меню"
            placement="right"
            closable
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="inline"
              items={menuItems}
            />
          </Drawer>
        </>
      ) : (
        <div className="flex justify-center items-center h-12">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems}
            triggerSubMenuAction="hover"
            className="max-w-4xl flex justify-center w-full"
          />
        </div>
      )}
    </div>
  );
};
