"use client";

import Slider from "react-slick";
import Imagecard from "@/components/Imagecard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nfts } from "@/data/test/nfts";

let settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
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

const ImageSlider = () => {
  return (
    <div className="py-20">
      <Slider {...settings}>
        {nfts.map((nft) => (
          <Imagecard image={nft.url} key={nft.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
