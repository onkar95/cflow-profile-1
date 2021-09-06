import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero1 from "../../../../Images/Banners/1.png";
import Hero10 from "../../../../Images/Banners/10.png";
import Hero11 from "../../../../Images/Banners/11.png";
import Hero12 from "../../../../Images/Banners/12.png";
import Hero13 from "../../../../Images/Banners/13.png";
import Hero14 from "../../../../Images/Banners/14.png";
import Hero15 from "../../../../Images/Banners/15.png";
import Hero16 from "../../../../Images/Banners/16.png";
import Hero17 from "../../../../Images/Banners/17.png";
import Hero18 from "../../../../Images/Banners/18.png";
import Hero19 from "../../../../Images/Banners/19.png";
import Hero2 from "../../../../Images/Banners/2.png";
import Hero20 from "../../../../Images/Banners/20.png";
import Hero21 from "../../../../Images/Banners/21.png";
import Hero22 from "../../../../Images/Banners/22.png";
import Hero23 from "../../../../Images/Banners/23.png";
import Hero24 from "../../../../Images/Banners/24.png";
import Hero25 from "../../../../Images/Banners/25.png";
import Hero26 from "../../../../Images/Banners/26.png";
import Hero27 from "../../../../Images/Banners/27.png";
import Hero28 from "../../../../Images/Banners/28.png";
import Hero29 from "../../../../Images/Banners/29.png";
import Hero3 from "../../../../Images/Banners/3.png";
import Hero30 from "../../../../Images/Banners/30.png";
import Hero31 from "../../../../Images/Banners/31.png";
import Hero32 from "../../../../Images/Banners/32.png";
import Hero33 from "../../../../Images/Banners/33.png";
import Hero34 from "../../../../Images/Banners/34.png";
import Hero35 from "../../../../Images/Banners/35.png";
import Hero36 from "../../../../Images/Banners/36.png";
import Hero37 from "../../../../Images/Banners/37.png";
import Hero4 from "../../../../Images/Banners/4.png";
import Hero5 from "../../../../Images/Banners/5.png";
import Hero6 from "../../../../Images/Banners/6.png";
import Hero7 from "../../../../Images/Banners/7.png";
import Hero8 from "../../../../Images/Banners/8.png";
import Hero9 from "../../../../Images/Banners/9.png";
import "./carousel.css";


const Carousel1 = () => {   
    //const img_arr = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12, Hero13, Hero14, Hero15, Hero16, Hero17, Hero18, Hero19, Hero20, Hero21, Hero22, Hero23, Hero24, Hero25, Hero26, Hero27, Hero28, Hero29, Hero30, Hero31, Hero32, Hero33, Hero34, Hero35, Hero36, Hero37]
    
    const [img_arr, setimg_arr]=useState([])
    const allAds = async () => {
        let imgarr;
        await axios.get(`${process.env.REACT_APP_URL}/user/all_advertisement`)
            .then(function (response) {
                setimg_arr(response?.data.data.map(o=>o.path))
            })
    }

    useEffect(()=>{allAds()},[])

    return (
        <>
            <div className="home-content-carouselvendor">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
                    {
                        img_arr.map((img, index) => (
                            <a href="">
                                {" "}
                                <div style={{ height: "100%" }} key={index}>
                                    <img alt="" src={img} className="carousel-image" />
                                </div>
                            </a>
                        ))
                    }
                </Carousel>
            </div>
        </>

    )
}

export default Carousel1;
