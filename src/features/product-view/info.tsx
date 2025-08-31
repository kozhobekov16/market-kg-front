"use client";

import {Typography, Divider, Rate, Flex} from "antd";
import {Guids} from "./guids";
import {Description} from "./descriptions";

export const ProductInfo = () => {

  return (
    <>
      {/*<Typography.Title level={2} style={{fontWeight: 400}}>{title}</Typography.Title>*/}
      <Divider/>
      <Flex align="center" gap={10}>
        <Rate allowHalf defaultValue={2.5}/>
        <Typography.Text disabled>Продавец: MarketKG</Typography.Text>
      </Flex>
      <Guids/>
      <Divider/>
      <Description/>
    </>
  );
};
