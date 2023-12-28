import React from "react";
import Card from "./Card";

const nfts = [
  "/assets/images/nft1.jpg",
  "/assets/images/bg.jpg",
  "/assets/images/nft3.jpg",
  "/assets/images/nft4.jpg",
  "/assets/images/nft5.jpg",
];

let key = 1;

const Itemscard = () => {
  return (
    <div className="border grid grid-cols-2 md:grid-cols-5 gap-7 justify-between border-transparent py-40">
      {nfts.map((index) => (
        <Card image={index} id={key++} />
      ))}
    </div>
  );
};

export default Itemscard;
