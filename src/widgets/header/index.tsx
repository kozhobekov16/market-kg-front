import React from "react";
import {Space} from "antd";
import Link from "next/link";
import Image from "next/image";
import {MenuHeader} from "./menu";
import {SearchGlobal} from "./search";
import {Profile} from "./profile";
import {Basket} from "./basket";

export const Header: React.FC = () => {

  return (
    <header className="border-b border-gray-200 py-3 sticky top-0 z-[99] bg-white">
      <div
        className="bg-white --container">
        <div className="flex justify-between items-center">
          <Link href="/" className="hidden md:block">
            <Image width={110} height={110} src="/assets/logo.png" alt="logo" priority={true}/>
          </Link>
          {/*<MenuHeader/>*/}
          <Space>
            <SearchGlobal/>
            <Basket/>
            <Profile/>
          </Space>
        </div>
      </div>
    </header>
  );
};
