import React from "react";
import { Link } from "react-router-dom";
// import HomeService from "./HomeService";
import HomeService from "./HomeServices";
import "./HomePage.css";
import HomeAbout from "./HomeAbout";
import BlogSection from "./BlogSection";
// import React, { useEffect, useState } from "react";

function HomePage({
  setCurrentSection,
  option,
  setOption,
}) {
  return (
    <>
      <div className="home-main-full">
        <div className="home-banner-header">
          <p>
            We are here to help you.
            <br />
            <span> Welcome To Construction Flow</span> <br />
            Hey User, Can’t find your product in market? <br />
            Surely you’ll find here with best price and great quality.
          </p>
        </div>
        <HomeService setCurrentSection={setCurrentSection} option={option} setOption={setOption}/>
        <HomeAbout   setCurrentSection={setCurrentSection} option={option} setOption={setOption}/>
        <BlogSection setCurrentSection={setCurrentSection} option={option} setOption={setOption}/>
      </div>
    </>
  );
}

export default HomePage;