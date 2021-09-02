import React from "react";
// import about from "about-box.jpg";
import about from "../../../Images/about-box.jpg";

const HomeAbout = () => {
  return (
    <div>
      <div className="be-a-real">
        Be a real Businessman
        <br />
        Be part of Construction Flow
      </div>
      <div className="about-us-box">
        <h1>
          About <span>Construction Flow</span>
          <div class="history-tl-container">
            <ul class="tl">
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">
                  Everything for the construction site
                </div>
                <div class="item-detail">
                  Whether sand, gravel or gravel - you get everything that can
                  be poured well through Construction Flow ... except beer.
                </div>
              </li>
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">No more paperwork</div>
                <div class="item-detail">
                  Whether order, delivery note or invoice - with us everything
                  is 100% digital and immediately available. So you can put the
                  promotional pen back in.
                </div>
              </li>
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">
                  The best deals free construction site
                </div>
                <div class="item-detail">
                  Where can you get the best deals? With Construction Flow you
                  will find out immediately - because we provide you with 99%
                  genuine usersto optimize your business deals.
                </div>
              </li>
            </ul>
          </div>
        </h1>{" "}
        <img src={about} alt="logo" className="about-img"></img>{" "}
        <div className="box-square"></div> <div className="box-vertical"></div>{" "}
      </div>
    </div>
  );
};

export default HomeAbout;