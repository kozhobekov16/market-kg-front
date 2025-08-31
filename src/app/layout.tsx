import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/style/globals.css";
import {Footer, Header} from "@/widgets";
import React from "react";
import {QueryProvider} from "@/shared";
import {ConfigProvider} from "antd";
import {theme} from "@/style";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Market-kg",
  description: "Интернет магазин",
  icons: {
    icon: '/assets/logo.png',
  }
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      cz-shortcut-listen="true"
    >
    <ConfigProvider theme={theme}>
      <QueryProvider>
        <Header/>
        {children}
        <Footer/>
      </QueryProvider>
    </ConfigProvider>
    </body>
    </html>
  );
}
