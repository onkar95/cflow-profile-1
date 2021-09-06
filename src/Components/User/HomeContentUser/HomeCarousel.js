import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from "react-elastic-carousel";
import homeimg from "../../../Images/home-banner.png";

const HomeCarousel = ({ img }) => {
  const img_arr = [homeimg, homeimg];

  return (
    <>
      <Carousel
        showArrows={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
      >
        {img_arr.map((img, index) => (
          <div
            className="home-banner-header"
            // style={{ height: "100vh" }}
            key={index}
          >
            <img alt="" src={homeimg} />
            <p>
              {" "}
              {/* <img src={homeimg} alt="construction Material" /> */}
              We are here to help you.
              <br />
              <span> Welcome To Construction Flow</span> <br />
              Hey User, Can’t find your product in market? <br />
              Surely you’ll find here with best price and great quality.
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HomeCarousel;
