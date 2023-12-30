"use client";

import Image from "next/image";

const Itemscard = ({ image, id }) => {
  return (
    <div className="card z-20 hover:scale-105 duration-700 flex flex-col max-w-sm bg-grey border border-gray-200 rounded-lg shadow dark:bg-dark-grey dark:border-gray-700">
      <div className="overflow-hidden card_image min-h-60">
        <Image
          src={image}
          alt="nft_image"
          width={400}
          height={400}
          className="rounded-t-lg h-full object-cover object-center"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-yellow-green">
          NFT Name
        </h5>
        <p className="mb-3 font-normal text-primary-yellow-green">120 Eth</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-background-color-4 rounded-lg hover:background-color-3 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-yellow-green dark:hover:secondary-yellow-green dark:focus:ring-blue-800"
        >
          Buy Now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Itemscard;
