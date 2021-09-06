import React from "react";
import { Link } from "react-router-dom";

import HomeService from "./HomeServices";
import HomeCarousel from "./HomeCarousel";
import "./HomePage.css";
import HomeAbout from "./HomeAbout";
import BlogSection from "./BlogSection";

function HomePage({ setCurrentSection, option, setOption }) {
  return (
    <>
      <div className="home-main-full">
        <HomeCarousel />
        <HomeService
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
        <HomeAbout
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
        <BlogSection
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
      </div>
    </>
  );
}

export default HomePage;
