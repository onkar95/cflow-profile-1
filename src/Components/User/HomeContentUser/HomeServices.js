import React from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import CarouselBox from "./CarouselBox";

const HomeService = ({setCurrentSection,setOption,option}) => {
  const openServices = () => {
    setCurrentSection(1)
    window.scrollTo(0,0)

  }
  return (
    <div>
      <div className="service-our">
        <div className="our-services-box">
          <ul className="service-material">
            <li>
              {" "}
              <Link onClick={openServices}>Construction Material</Link>
            </li>
            <li>
              {" "}
              <Link >Agents</Link>
            </li>
            <li>
              {" "}
              <Link >Construction Vehicles</Link>
            </li>
            <li>
              {" "}
              <Link >Construction Vehicles</Link>
            </li>
          </ul>
          <h1>Our Services</h1> <CarouselBox setCurrentSection={setCurrentSection} option={option}  setOption={setOption}/>
        </div>

        <div className="customer-satisfy">
          <ul>
            <li>100% Customer Satisfaction</li>
            <li> 1000+ Active users & Vendors</li>
            <li> 10,000 tons Material Transported</li>
          </ul>
        </div>
        <div className="dot-line"></div>
      </div>
    </div>
  );
};

export default HomeService;