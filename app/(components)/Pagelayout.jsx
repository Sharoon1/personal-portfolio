import React from "react";
import FrontPage from "./frontPage";
import PersonalDetail from "./personalDetail";
import Experience from "./experience";
import Services from "./services";
import RecentProjects from "./recentProjects";
import Map from "./map";
import Contect from "./contect";
import MyBlogs from "./myBlogs";
import ClientsComenets from "./clientsComenets";
import Slidebar from "./slidebar";

function Pagelayout() {
  return (
    <div className="flex">
      <div className="fixed px-10 hidden md:inline-block border-e-2 ">
        <Slidebar />
      </div>
      <div className="overflow-hidden md:ms-72">
        <FrontPage />
        <PersonalDetail />
        <Experience />
        <Services />
        <RecentProjects />
        <MyBlogs />
        <div className="bg-mapbg py-5">
          <Contect />
          <Map />
        </div>
        <ClientsComenets />
      </div>
    </div>
  );
}

export default Pagelayout;
