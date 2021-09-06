import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import UserImage from "../../Images/User.png"
import VendorImage from "../../Images/Vendor.png"
import { Link } from 'react-router-dom'
import LandingPageImage from "../../Images/LandingPage.png"
import LogoImage from "../../Images/Logo.png"
import Card1 from "./Card"
require('dotenv').config()

const LandingPage = ({ setIsUser }) => {
  const [winsize, setwinsize] = useState(window.screen.width);
  const [winheight, setwinheight] = useState(window.screen.height);
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setwinsize(window.innerWidth)
    }
    else {
      setwinsize(window.innerWidth)
    }
    if (window.innerHeight < 1000) {
      setwinheight(window.innerHeight)
    }
    else {
      setwinheight(window.innerHeight)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", handleResize)
    console.log(winsize, winheight, "LandingPageImage")
  }, [window.screen.width, window.screen.height])
  return (
    <div className="super">
      {winsize > 1300 ?
        <div className="bg">
          <div className="cf">
            <div className="cf1">

              <img src={LogoImage} className="CF-Logo" />
            </div>
            <div className="middle_bar">
              <div className="card1">
                <Card1 setIsUser={setIsUser} img={VendorImage} title="Vendor" />

              </div>
              <div className="about">
                <h3>Our Aim</h3>
                <img alt=" Construction" src={LandingPageImage} ></img>
                <p style={{ fontWeight: "600", textAlign: "center", fontSize: "0.85rem" }}>Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites. It will help save time and money also make the communication between the vendor and buyer more fluent. We not only focus on the construction raw material but also construction vehicles, machines, and chemicals.
                </p>
                <p style={{ fontWeight: "600", textAlign: "center", marginTop: "-0.5rem" }}>
                  CONSTRUCT WITH A FLOW.</p>
                <span> Design by Digital Flow Team</span>
                <span>&#169; Copyright Reserverd by Construction Flow 2021 </span>
              </div>
              <div className="card2">
                <Card1 setIsUser={setIsUser} img={UserImage} title="User" />

              </div>
            </div>
          </div>

        </div>
        :

        <div className="bg-responsive">
          <div className="cf-responsive">
            <div className="cf1-responsive">

              <img src={LogoImage} className="CF-Logo-responsive" />
            </div>
            <div className="middle_bar-responsive">
              <div className="card1-responsive">
                <Card1 setIsUser={setIsUser} img={VendorImage} title="Vendor" />

              </div>
              <div className="card2-responsive">
                <Card1 setIsUser={setIsUser} img={UserImage} title="User" />

              </div>
            </div>
            <div className="about-responsive">
              <h3 className="about-responsive-h3" >Our Aim</h3>
              {winsize > 600 & winheight > 600 ? <img alt=" Construction" src={LandingPageImage} className="about-img" ></img> : ""}
              <p className="about-responsive-p1" >Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites. It will help save time and money also make the communication between the vendor and buyer more fluent. We not only focus on the construction raw material but also construction vehicles, machines, and chemicals.</p>
              <p className="about-responsive-p2">CONSTRUCT WITH A FLOW</p>
              <p className="about-responsive-p3">
                <p className="about-responsive-p2 "> Design by Digital Flow Team</p>
                <p className="about-responsive-p2">&#169; Copyright Reserverd by Construction Flow 2021 </p>
              </p>
            </div>


          </div>

        </div>
      }


    </div>
  )
}

export default LandingPage
