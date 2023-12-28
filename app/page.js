"use client";

import ImageSlider from "@/components/ImageSlider";
import React from "react";
import Itemscard from "@/components/Itemscard";
import Collectioncardholder from "@/components/Collectioncardholder";

const App = () => {
  return (
    <section>
      <ImageSlider />
      <Itemscard heading={"Newest Items"} />
      <Itemscard heading={"Live Bidding"} />
      <Itemscard heading={"Explore Product"} />
      <Collectioncardholder heading={"Top Collection"} />

      {/* <div className="border grid grid-cols-3 gap-4 justify-between border-transparent"> */}
    </section>
  );
};

export default App;
