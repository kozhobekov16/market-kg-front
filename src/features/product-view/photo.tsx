"use client"

import {useState, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Divider, Image} from "antd";

export const ProductPhoto = () => {
  const [navSlider, setNavSlider] = useState<Slider | null>(null);
  const mainSliderRef = useRef<Slider | null>(null);

  const images = [
    '/assets/iphone.png',
    '/assets/mac.png',
    '/assets/vr.png',
    '/assets/ipad.png',
  ];

  return (
    <div className="p-4 bg-white rounded-lg">
      <Slider
        asNavFor={navSlider || undefined}
        ref={(slider) => {
          mainSliderRef.current = slider;
        }}
        infinite
        arrows
        slidesToShow={1}
        slidesToScroll={1}
        className="mb-4"
      >
        {images.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="!w-5/12 object-cover rounded-lg mx-auto"
            />
          </div>
        ))}
      </Slider>
      <Divider/>
      <Slider
        asNavFor={mainSliderRef.current || undefined}
        ref={(slider) => setNavSlider(slider)}
        infinite
        arrows={false}
        centerPadding={'500px'}
        slidesToShow={3}
        slidesToScroll={1}
        focusOnSelect
        className="space-x-2"
      >
        {images.map((src, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              preview={false}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="!w-44 h-[180px] object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
