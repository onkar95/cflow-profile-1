import React from "react";
import Carousel from "react-elastic-carousel";

import CementImage from "../../../Images/Construction material/black1/cement.svg";
import MarbleImage from "../../../Images/Construction material/black1/Marbles.svg";
import PaintImage from "../../../Images/Construction material/black1/Paints.svg";
import PipesImage from "../../../Images/Construction material/black1/Pipes.svg";
// import RMCImage from "../../../Images/Construction material/black/Rmc.svg";
// import SandImage from "../../../Images/Construction material/black/sand.svg";
import StoneImage from "../../../Images/Construction material/black1/stones.svg";
import TMTImage from "../../../Images/Construction material/black1/TMT.svg";

const breakPoints1 = [
  { width: 200, itemsToShow: 1 },
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  { width: 800, itemsToShow: 1 },
  { width: 1500, itemsToShow: 1 },
  { width: 1800, itemsToShow: 1 },
];
// const breakPoints4 = [
//   // { width: 1, itemsToShow: 1 },
//   // { width: 250, itemsToShow: 2 },
//   // { width: 0, itemsToShow: 2 },
//   { width: 1000, itemsToShow: 4 },
//   { width: 1200, itemsToShow: 4 },
//   { width: 1500, itemsToShow: 4 },
//   { width: 1800, itemsToShow: 4 },
// ];
const breakPoints3 = [
  // { width: 1, itemsToShow: 1 },
  // { width: 250, itemsToShow: 2 },
  // { width: 0, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 3 },
  { width: 1800, itemsToShow: 3 },
];
const breakPoints2 = [
  // { width: 1, itemsToShow: 1 },
  // { width: 250, itemsToShow: 2 },
  // { width: 0, itemsToShow: 2 },
  { width: 400, itemsToShow: 2 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
  { width: 1400, itemsToShow: 2 },
];

const CarouselBox = ({
  img,
  setCurrentSection,
  option,
  setOption,
  setClickedCard,
  trigger,
  setTrigger,
  selectedcard,
}) => {
  const img_arr1 = ["Cement", "Paint", "Stone", "Pipes", "Marbles", "TMT"];
  const img_arr = [
    CementImage,
    PaintImage,
    StoneImage,
    PipesImage,
    MarbleImage,
    TMTImage,
  ];
  const showMaterials = (val) => {
    setCurrentSection(1);
    window.scrollTo(0, 0);
    // setOption(val)
  };
  return (
    <>
      <div className="carousel-full">
        <Carousel
          // className="carousel-full"
          showArrows={true}
          breakPoints={
            window.innerWidth > 1230
              ? breakPoints3
              : window.innerWidth > 990
              ? breakPoints2
              : window.innerWidth > 900
              ? breakPoints2
              : breakPoints1
          }
          // style={{ marginTop: "15%", width: "60%", marginLeft: "30%" }}
        >
          {img_arr.map((img, index) => (
            <div className="carousal-main">
              <div className="carousal-upper">
                <img src={img} alt="construction Material" />
                <h4>{img_arr1[index]}</h4>
              </div>
              <div className="carousal-lower">
                <h4 onClick={showMaterials}>Get A Quote</h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselBox;
