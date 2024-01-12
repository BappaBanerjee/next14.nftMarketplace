import React from "react";
import Collectioncard from "./Collectioncard";
import { nfts } from "@/data/test/nfts";

const Collectioncardholder = ({ heading }) => {
  return (
    <div className="py-20">
      <div className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
        {heading}
      </div>
      <div className="border grid grid-cols-2 md:grid-cols-5 gap-7 justify-between border-transparent">
        {nfts.map((nft) => (
          <Collectioncard image={nft.url} key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default Collectioncardholder;
