import React from "react";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
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
      <div className="relative overflow-x-hidden">
        <img
          src="images/carousel/11.png"
          className="w-full h-[750px] object-cover overflow-x-hidden"
          alt=""
        />
        <div className=" absolute  top-0 bg-gray-700 bg-opacity-50 z-10 w-full h-full text-center text-white flex justify-center items-center">
          <p className="text-3xl sm:text-5xl font-bold top-1/2">
            Revolutionizing Education Across GCC Regions for Future Leaders
          </p>
        </div>
      </div>
      <div className="relative overflow-x-hidden">
        <img
          src="images/carousel/22.png"
          className="w-full h-[750px] object-cover overflow-x-hidden"
          alt=""
        />
        <div className=" absolute top-0 bg-gray-900 bg-opacity-50 w-full h-full text-center text-white flex justify-center items-center">
          <p className="text-3xl sm:text-5xl font-bold top-1/2">
            Pioneering Progressive Learning Pathways for Aspiring Minds
          </p>
        </div>
      </div>
      <div className="relative overflow-x-hidden">
        <img
          src="images/carousel/33.png"
          className="w-full h-[750px] object-cover overflow-x-hidden"
          alt=""
        />
        <div className=" absolute top-0 bg-gray-900 bg-opacity-50 w-full h-full text-center text-white flex justify-center items-center">
          <p className="text-3xl sm:text-5xl font-bold top-1/2">
            Where Tradition Meets Innovation in Education, Shaping Tomorrow's
            Visionaries
          </p>
        </div>
      </div>
      <div className="relative overflow-x-hidden">
        <img
          src="images/carousel/33.png"
          className="w-full h-[750px] object-cover overflow-x-hidden"
          alt=""
        />
        <div className=" absolute top-0 bg-gray-900 bg-opacity-50 w-full h-full text-center text-white flex justify-center items-center">
          <p className="text-3xl sm:text-5xl font-bold top-1/2">
            Empowering Students to Excel Beyond Boundaries
          </p>
        </div>
      </div>
    </Slider>
  );
}
