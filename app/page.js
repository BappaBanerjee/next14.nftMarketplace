"use client";

import ImageSlider from "@/components/ImageSlider";
import React from "react";
import Itemscardholder from "@/components/Itemscardholder";
import Collectioncardholder from "@/components/Collectioncardholder";

const App = () => {
  return (
    <section>
      <ImageSlider />
      <Itemscardholder heading={"Newest Items"} />
      <Itemscardholder heading={"Live Bidding"} />
      <Itemscardholder heading={"Explore Product"} />
      <Collectioncardholder heading={"Top Collection"} />
    </section>
  );
};

export default App;
