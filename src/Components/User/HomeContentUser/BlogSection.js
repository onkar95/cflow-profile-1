import React from "react";
// import blog1 from "../../../Images/blog-box1.png";
// import blog2 from "../../../Images/blog-box2.png";
// import blog3 from "../../../Images/blog-box3.png";
import blog1 from "../../../Images/blog-box1.png";
import blog2 from "../../../Images/blog-box2.png";
import blog3 from "../../../Images/blog-box3.png";
// import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints1 = [
  { width: 200, itemsToShow: 1 },
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  //   { width: 800, itemsToShow: 1 },
  //   { width: 1500, itemsToShow: 1 },
  //   { width: 1800, itemsToShow: 1 },
];
const breakPoints4 = [
  { width: 1000, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 3 },
  { width: 1800, itemsToShow: 3 },
];
const breakPoints3 = [
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 3 },
  { width: 1800, itemsToShow: 3 },
];
const breakPoints2 = [
  { width: 400, itemsToShow: 2 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
  { width: 1400, itemsToShow: 2 },
];
const BlogSection = ({setCurrentSection}) => {
  const img_arr2 = [
    blog1,
    blog2,
    blog3,
    blog1,
    blog2,
    blog3,
    blog1,
    blog2,
    blog3,
  ];
  const showBlog = () => {
    setCurrentSection(4);
    window.scrollTo(0,0)

  }
  return (
    <div>
      <div className="blog-adds">
        <h1>Blogs & News</h1>
        <div className="box-square1"></div>{" "}
        <div className="box-vertical1"></div>{" "}
        <div className="home-carousel3">
          <Carousel
            showArrows={false}
            breakPoints={
              window.innerWidth > 1230
                ? breakPoints4
                : window.innerWidth > 990
                ? breakPoints3
                : window.innerWidth > 730
                ? breakPoints2
                : breakPoints1
            }
            style={{
              marginTop: "10%",
              width: "100%",
              padding: "30",
              height: "10%",
            }}
          >
            {img_arr2.map((img, index) => (
              <div
                style={{
                  height: "50%",
                }}
                key={index}
                className="blog-new"
              >
                <img alt="" src={img} /> <p>Blog</p>
                <a onClick={showBlog}>Read More </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;