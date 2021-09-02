import React, { useEffect, useState } from 'react'
import "./HomeContentUser.css"
import { Carousel } from "react-responsive-carousel";
const HomeCarousel = ({img_arr}) => {

    return (
        <div className="home-content-carousel">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
                    {
                        img_arr.map((img,index) => (
                            <div style={{height:"100%"}} key={index}>
                            <img alt="" 
                            src={img}
                            className="carousel-image"/>
                    </div>
                        ))
                    }
                </Carousel>
            </div>
    )
}

export default HomeCarousel
