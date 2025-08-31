import React from "react";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {IoIosPricetags} from "react-icons/io";

export const ShowTotalCount = (
  {
    TotalQuantyProduct,
    TotalAmount
  }: {
    TotalQuantyProduct: number,
    TotalAmount: number
  }) => {
  return (
    <div className="
      w-full max-w-md
      rounded-xl
      bg-gradient-to-br from-indigo-500 to-purple-600
      text-white
      shadow-lg shadow-purple-500/30
      transition-all duration-200
      hover:shadow-xl hover:shadow-purple-500/40
      p-4
    ">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingCartOutlined className="
              text-xl
              transition-transform duration-150
              hover:scale-110
            "/>
            <span className="text-sm font-medium opacity-90">Товаров в корзине</span>
          </div>
          <div className="
            px-2.5 py-0.5
            rounded-full
            bg-white/10
            backdrop-blur-sm
            transition-transform duration-150
            hover:scale-105
          ">
            <span className="text-base font-semibold">{TotalQuantyProduct}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IoIosPricetags className="
              text-xl
              transition-transform duration-150
              hover:scale-110
            "/>
            <span className="text-sm font-medium opacity-90">Итого к оплате</span>
          </div>
          <div className="
            px-2.5 py-0.5
            rounded-full
            bg-white/10
            backdrop-blur-sm
            transition-transform duration-150
            hover:scale-105
          ">
            <span className="text-base font-semibold">{TotalAmount.toLocaleString()} сом</span>
          </div>
        </div>
      </div>
    </div>
  );
};