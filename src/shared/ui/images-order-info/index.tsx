import React from 'react'
import {Image} from "antd";

interface Props {
  images: string[]
}

export const ImagesOrderInfo = ({images}: Props) => {
  return (
    <div className={'flex gap-1 w-full overflow-aut items-center'}>
      {images && images.map((item, index) => (
        <Image
          key={index}
          className={'!w-44'}
          src={item}
          alt={item}
        />
      ))}
    </div>
  )
}