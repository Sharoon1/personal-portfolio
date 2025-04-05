import React from "react";
import Header from "./header";
import Footer from "./footer";

function Slidebar() {
  return (
    <div className="flex flex-col space-y-2 py-8">
      <Header />
      <div className=""></div>
      <Footer />
    </div>
  );
}

export default Slidebar;
