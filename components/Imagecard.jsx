import React from "react";

import Image from "next/image";

const Imagecard = () => {
  return (
    <div className=" relative bg-background-color-1 rounded-lg p-4">
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/assets/images/dogNFT.jpg"
          alt="nft"
          height={400}
          width={400}
          className="rounded-lg hover:scale-110 duration-700"
        />
      </div>

      <div className="absolute bottom-8 left-8">Great NFT!</div>
    </div>
  );
};

export default Imagecard;
