import React from "react";
import Collectioncard from "./Collectioncard";

const nfts = [
  "/assets/images/nft1.jpg",
  "/assets/images/bg.jpg",
  "/assets/images/nft3.jpg",
  "/assets/images/nft4.jpg",
  "/assets/images/nft5.jpg",
];

let key = 1;

const Collectioncardholder = ({ heading }) => {
  return (
    <div className="py-20">
      <div className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
        {heading}
      </div>
      <div className="border grid grid-cols-2 md:grid-cols-5 gap-7 justify-between border-transparent">
        {nfts.map((index) => (
          <Collectioncard image={index} id={key++} />
        ))}
      </div>
    </div>
  );
};

export default Collectioncardholder;
