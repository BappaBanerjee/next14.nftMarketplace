import React from "react";

import Image from "next/image";

const Imagecard = ({ image, key }) => {
  return (
    <div className="relative bg-background-color-1 rounded-lg p-4 flex-center justify-center">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="nft"
          key={key}
          height={300}
          width={300}
          className="rounded-lg hover:scale-110 duration-700"
        />
      </div>
      <div className="absolute bottom-14 left-14">Great NFT!</div>
    </div>
  );
};

export default Imagecard;
