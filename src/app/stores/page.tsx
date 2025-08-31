"use client";

import React, {useState} from "react";
import {Card, Image, Typography, Space, Tag, Button, Spin, Pagination, Result} from "antd";
import {useQuery} from "@tanstack/react-query";
import {$api, EndPath} from "@/shared";
import {EnvironmentOutlined, PhoneOutlined, RightOutlined} from "@ant-design/icons";

const {Title, Text, Paragraph} = Typography;

interface Shop {
  Items: {
    Id: number;
    Name: string;
    Description: string;
    Address: string;
    PhoneNumber: string;
    PhotoLogoURL: string;
    PhotoLogoBase64: string;
    UserId: string;
  }[];
  HasNextPage: boolean;
  HasPreviousPage: boolean;
  PageNumber: number;
  TotalCount: number;
  TotalPages: number;
}

export default function StoresPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const {data, isLoading} = useQuery({
    queryKey: ["shops", currentPage],
    queryFn: async () => {
      return (
        await $api.get<ResponseModel<Shop>>(
          `${EndPath.Magazines.GetMagazinesList}?PageNumber=${currentPage}&PageSize=${pageSize}`
        )
      ).data;
    },
  });

  return (
    <div className="--container bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16 tracking-wide">
          ✨ Магазины рядом с вами
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large"/>
          </div>
        ) : (
          <>
            {data?.data?.Items?.length ? (
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                {data?.data?.Items?.map((shop) => (
                  <Card
                    key={shop.Id}
                    hoverable
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.6)",
                    }}
                    cover={
                      <Image
                        alt={shop.Name}
                        src={shop.PhotoLogoBase64}
                        preview={false}
                        fallback="https://via.placeholder.com/400x250?text=Логотип+магазина"
                        style={{
                          height: 300,
                          objectFit: "cover",
                          transition: "transform 0.5s",
                        }}
                        className="group-hover:scale-105"
                      />
                    }
                  >
                    <Title level={4} style={{marginBottom: 8}}>{shop.Name}</Title>
                    {shop.Description && (
                      <Paragraph ellipsis={{rows: 2}} type="secondary">
                        {shop.Description}
                      </Paragraph>
                    )}

                    <Space direction="vertical" size="small" style={{marginBottom: 16}}>
                      <Text type="secondary"><EnvironmentOutlined/> {shop.Address}</Text>
                      <Text type="secondary"><PhoneOutlined/> {shop.PhoneNumber}</Text>
                    </Space>

                    {/*<div className="flex items-center justify-between">*/}
                    {/*  <Tag color="purple">ID: {shop.Id}</Tag>*/}
                    {/*  <Button type="link" onClick={() => console.log(`Go to shop ${shop.Id}`)}>*/}
                    {/*    Подробнее <RightOutlined/>*/}
                    {/*  </Button>*/}
                    {/*</div>*/}
                  </Card>
                ))}
              </div>
            ) : (
              <Result
                title="Данные отсутствуют!"
                status={'info'}
              />
            )}
            <div className="flex justify-center mt-8">
              <Pagination
                current={data?.data?.PageNumber || 1}
                total={data?.data?.TotalCount || 0}
                pageSize={pageSize}
                showSizeChanger={false}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
