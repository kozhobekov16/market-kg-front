"use client"

import React from 'react'
import {Collapse, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {ItemType} from "rc-collapse/es/interface";

export function SupportCollapse({list}: {list: ItemType[]}) {
  const {token} = theme.useToken();

    return (
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
        style={{background: token.colorBgContainer}}
        items={list}
      />
    )
}