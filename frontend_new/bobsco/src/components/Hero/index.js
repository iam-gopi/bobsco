import React from "react";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <img
        src="images/carousel/11.png"
        className="w-full h-[750px] object-cover"
        alt=""
      />

      <div>
        <img
          src="images/carousel/22.png"
          className="w-full h-[750px] object-cover"
          alt=""
        />
      </div>
      <div>
        <img
          src="images/carousel/11.png"
          className="w-full h-[750px] object-cover"
          alt=""
        />
      </div>
      <div>
        <img
          src="images/carousel/22.png"
          className="w-full h-[750px] object-cover"
          alt=""
        />
      </div>
    </Slider>
  );
}
