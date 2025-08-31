import React from 'react'
import {ImagesOrderInfo} from "@/shared";

const images = ['/assets/iphone.png', '/assets/mac.png', '/assets/mac.png', '/assets/vr.png',]

export const OrderPlaced = () => {
  return (
    <>
      <ImagesOrderInfo images={images}/>
    </>
  )
}