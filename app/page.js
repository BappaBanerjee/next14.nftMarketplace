import Imagecard from "@/components/Imagecard";
import Card from "@/components/card";
import React from "react";

const App = () => {
  return (
    <section>
      <div className="border grid grid-cols-3 gap-4 justify-between border-transparent">
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
      </div>
    </section>
  );
};

export default App;
