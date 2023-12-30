"use client";

import Slider from "react-slick";
import Imagecard from "@/components/Imagecard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const nfts = [
  "/assets/images/nft1.jpg",
  "/assets/images/nft2.jpg",
  "/assets/images/nft3.jpg",
  "/assets/images/nft4.jpg",
  "/assets/images/nft5.jpg",
  "/assets/images/nft6.jpg",
  "/assets/images/nft7.jpg",
  "/assets/images/nft8.jpg",
];

let key = 1;

const ImageSlider = () => {
  return (
    <div className="py-20">
      <Slider {...settings}>
        {nfts.map((index) => (
          <Imagecard image={index} key={key++} />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
