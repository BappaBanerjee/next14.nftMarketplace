"use client";

import Image from "next/image";

const Collectioncard = ({ image }) => {
  return (
    <div className="collectioncard z-20 flex flex-col max-w-sm bg-grey border border-gray-200 rounded-lg shadow dark:bg-dark-grey dark:border-gray-700">
      <div className="overflow-hidden card_image min-h-60">
        <Image
          src={image}
          alt="nft_image"
          width={400}
          height={400}
          className="rounded-t-lg h-full object-cover object-center hover:scale-105 duration-700"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-yellow-green">
          NFT Name
        </h5>
        <p className="mb-3 font-normal text-primary-yellow-green">120 Eth</p>
      </div>
    </div>
  );
};

export default Collectioncard;
