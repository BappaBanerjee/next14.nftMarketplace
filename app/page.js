"use client";

import Imagecard from "@/components/Imagecard";
import Card from "@/components/card";
import React from "react";

import Slider from "react-slick";

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

const App = () => {
  return (
    <section>
      <Slider {...settings}>
        {nfts.map((index) => (
          <Imagecard image={index} key={key++} />
        ))}
      </Slider>
      {/* <div className="border grid grid-cols-3 gap-4 justify-between border-transparent"> */}
    </section>
  );
};

export default App;
