"use client";

import CollectionBanner from "@/components/CollectionBanner";
import Itemscard from "@/components/Itemscard";
import React, { useRef } from "react";

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

const Account = () => {
  const elementsRef = useRef([]);
  const tabClick = (e) => {
    e.preventDefault();
    let elements = document.getElementsByClassName("tab_active");
    const elementsArray = Array.from(elements);
    elementsRef.current = elementsArray;
    elementsRef.current.forEach((element) => {
      element.classList.remove("tab_active");
    });
    e.target.classList.add("tab_active");
  };
  return (
    <>
      <div>
        <CollectionBanner />
      </div>
      <div className="user_details flex justify-between pt-5">
        <div className="bio">The internet's friendliest designer kid.</div>
        <div>
          <button className="btn_gradient text-white font-bold py-2 px-4 rounded">
            Oxhsckd...sjdhcv
          </button>
        </div>
      </div>
      {/* tabs */}
      <div className="tab full_width pt-20 ">
        <div className="grid grid-cols-3 gap-4 border-y border-slate-700 px-4">
          <button
            className="tablinks tab_active "
            id="created"
            onClick={(e) => {
              tabClick(e);
            }}
          >
            Created
          </button>
          <button
            className="tablinks"
            id="owned"
            onClick={(e) => {
              tabClick(e);
            }}
          >
            Owned
          </button>
          <button
            className="tablinks"
            id="collection"
            onClick={(e) => {
              tabClick(e);
            }}
          >
            Collection
          </button>
        </div>
      </div>

      {/* render collection nft's */}
      <div className="border grid grid-cols-2 md:grid-cols-5 gap-x-7 gap-y-16 justify-between border-transparent py-20">
        {nfts.map((url, index) => (
          <Itemscard image={url} key={index} />
        ))}
      </div>
    </>
  );
};

export default Account;
