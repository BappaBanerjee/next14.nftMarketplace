import React from "react";
import Itemscard from "./Itemscard";

const nfts = [
  { id: 1, url: "/assets/images/nft1.jpg" },
  { id: 2, url: "/assets/images/bg.jpg" },
  { id: 3, url: "/assets/images/nft3.jpg" },
  { id: 4, url: "/assets/images/nft4.jpg" },
  { id: 5, url: "/assets/images/nft5.jpg" },
  { id: 6, url: "/assets/images/nft7.jpg" },
  { id: 7, url: "/assets/images/nft8.jpg" },
];

const ItemscardHolder = ({ heading }) => {
  return (
    <div className="py-20">
      <div className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
        {heading}
      </div>
      <div className="border grid grid-cols-2 md:grid-cols-5 gap-7 justify-between border-transparent">
        {nfts.map((nft) => (
          <Itemscard image={nft.url} key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemscardHolder;
