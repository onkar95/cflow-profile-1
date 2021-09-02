import React from "react";
import Carousel from "react-elastic-carousel";
import CementImage from "../../../Images/Construction material/black/cement.svg";
import MarbleImage from "../../../Images/Construction material/black/Marbles.svg";
import PaintImage from "../../../Images/Construction material/black/Paints.svg";
import PipesImage from "../../../Images/Construction material/black/Pipes.svg";
// import RMCImage from "../../../Images/Construction material/black/Rmc.svg";
// import SandImage from "../../../Images/Construction material/black/sand.svg";
import StoneImage from "../../../Images/Construction material/black/stones.svg";
import TMTImage from "../../../Images/Construction material/black/TMT.svg";

const breakPoints1 = [
  { width: 200, itemsToShow: 1 },
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  { width: 800, itemsToShow: 1 },
  { width: 1500, itemsToShow: 1 },
  { width: 1800, itemsToShow: 1 },
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
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
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
    setCurrentSection(1)
    window.scrollTo(0, 0)
    // setOption(val)
  }
  return (
    <>
      <Carousel
        showArrows={true}
        breakPoints={
          window.innerWidth > 1230
            ? breakPoints4
            : window.innerWidth > 990
              ? breakPoints3
              : window.innerWidth > 730
                ? breakPoints2
                : breakPoints1
        }
        style={{ marginTop: "1%", width: "60%", marginLeft: "30%" }}
      >
        {img_arr.map((img, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #2d2d2d",
              borderRadius: "8px",
              width: "132px",
              height: "153px",
              left: "433px",
              background: "#ffcd01",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "70",

                height: "59",
              }}
            >
              <img
                src={img}
                alt="cement"
                height={58}
                width={65}
              // style={{ padding: ".5rem" }}
              />
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                {img_arr1[index]}
              </h4>
            </div>
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                color: "black",

                height: "45px",
                width: "132px",
                borderRadius: "0px 0px 8px 8px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
                onClick={showMaterials}
              >
                Get A Quote
              </h4>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselBox;
