import CollectionBanner from "@/components/CollectionBanner";
import Itemscard from "@/components/Itemscard";
import Image from "next/image";
import React from "react";

const nfts = [
  "/assets/images/nft1.jpg",
  "/assets/images/nft2.jpg",
  "/assets/images/nft3.jpg",
  "/assets/images/nft4.jpg",
  "/assets/images/nft5.jpg",
  "/assets/images/nft6.jpg",
  "/assets/images/nft7.jpg",
  "/assets/images/nft8.jpg",
  "/assets/images/bg.jpg",
  "/assets/images/dogNFT.jpg",
];

let key = 1;

const MyCollection = () => {
  return (
    <>
      <CollectionBanner />

      {/* description of the collection */}
      <div></div>

      {/* render collection nft's */}
      <div className="border grid grid-cols-2 md:grid-cols-5 gap-x-7 gap-y-16 justify-between border-transparent py-20">
        {nfts.map((url, index) => (
          <Itemscard image={url} key={index} />
        ))}
      </div>
    </>
  );
};

export default MyCollection;
