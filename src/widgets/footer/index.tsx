"use client"

import {Policy} from './policy';
import {IoLocationOutline} from 'react-icons/io5';
import {MdWifiCalling3} from 'react-icons/md';
import {TbMailFilled} from 'react-icons/tb';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram, BsYoutube} from 'react-icons/bs';
import Link from "next/link";
import {FloatButton} from "antd";
import React from "react";

export const Footer = () => {
  return (
    <>
      <FloatButton.BackTop/>
      <div className={'bg-gradient-to-b from-[#021736] to-[#021736] opacity-95 px-4 sm:px-4 md:px-4'}>
        <div
          className="--container flex justify-between text-white flex-wrap py-12 text-sm">
          <div className="flex flex-col gap-4">
            <Link href="#">Компании</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Вакансии</Link>
            <Link href="#">Магазины</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#">Информации</Link>
            <Link href="#">Как это работает?</Link>
            <Link href="#">Наши обещания</Link>
            <Link href="#">FAQ</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#">Связаться с нами</Link>
            <Link href="#" className="flex items-center">
              <IoLocationOutline className="mr-2"/>
              Chui, Bishkek
            </Link>
            <Link href="#" className="flex items-center">
              <MdWifiCalling3 className="mr-2"/>
              +996 (555) 123-467
            </Link>
            <Link href="#" className="flex items-center">
              <TbMailFilled className="mr-2"/>
              MarketkgSupport@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#">Подпишитесь на наши соц сети</Link>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com"
                className="inline-block rounded-full bg-[#4267B2] p-2 text-white"
                title="Facebook"
              >
                <FaFacebookF/>
              </Link>
              <Link
                href="https://www.instagram.com"
                className="inline-block rounded-full bg-[#E1306C] p-2 text-white"
                title="Instagram"
              >
                <BsInstagram/>
              </Link>
              <Link
                href="https://www.youtube.com"
                className="inline-block rounded-full bg-[#FF0000] p-2 text-white"
                title="YouTube"
              >
                <BsYoutube/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Policy/>
    </>
  );
};
