import React, { useState, useEffect } from "react";
import "./HomeUser.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import Request from "../Requests/Request";
import Estimate from "../Estimate/Estimate";
import Profile from "../Profile/Profile";
import Services from "../Services/Services";
import Blog from "../blog/Blog";
import AboutUs from "../about us/AboutUs";
import Notifications from "../Notifications/Notifications";
// import HomecontentUser from '../HomeContentUser/HomeContentUser';
import HomePage from "../HomeContentUser/HomePage";
import Footer from "../../FooterJy/Footer";
import Details from "../Requests/Details";
import Details1 from "../Requests/Details1";
import DetailAccepted from "../Requests/DetailAccepted";
import DetailDeclined from "../Requests/DetailDeclined";
import DetailHistoryAccepted from "../Requests/DetailHistoryAccepted";
import DetailHistoryDeclined from "../Requests/DetailHistoryDeclined";
import Reorder from "../Requests/Reorder";
import HomeImage from "../../../Images/Home.png";
import ServicesImage from "../../../Images/Services.png";
import BlogImage from "../../../Images/blog.png";
import BlogImageBlack from "../../../Images/blogBlack.png";
import RequestsImage from "../../../Images/Leads.png";
import ProfileImage from "../../../Images/Profile.png";
import NotificationImage from "../../../Images/Notifications.png";
import EstimateImage from "../../../Images/estimates.png";
import HomeImageBlack from "../../../Images/Homeblack.png";
import ServicesImageBlack from "../../../Images/ServicesBlack.png";
import RequestsImageBlack from "../../../Images/LeadsBlack.png";
import ProfileImageBlack from "../../../Images/Profileblack.png";
import NotificationImageBlack from "../../../Images/Notificationblack.png";
import EstimateImageBlack from "../../../Images/estimateblack.png";
import LogoImage from "../../../Images/Logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import { getUser } from "./HomeUserApi";
import Cart from "../Cart/Cart";
import PopupSaved from "../../Popup/popupsaved/PopupSaved";

require("dotenv").config();

function HomeUser({ setIsUser, isSignup, setIsSignup }) {
  const sections = [
    "Home",
    "Services",
    "Requests",
    "Estimates",
    "Blog",
    "About us",
  ];
  const sections_logo_white = [
    HomeImage,
    ServicesImage,
    RequestsImage,
    EstimateImage,
    BlogImage,
    ProfileImage,
    NotificationImage,
  ];
  const sections_logo_black = [
    HomeImageBlack,
    ServicesImageBlack,
    RequestsImageBlack,
    EstimateImageBlack,
    BlogImageBlack,
    ProfileImageBlack,
    NotificationImageBlack,
  ];
  const [currentSection, setCurrentSection] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("profile"))?.data?.id
  );

  const [formData, setFormData] = useState(null);
  const [site, setSite] = useState([]);
  const [selectedTableItem, setSelectedTableItem] = useState(null);
  const [requestedVendor, setRequestedVendor] = useState(null);
  const [requestedVendorDetails, setRequestedVendorDetail] = useState(null);
  const [temp_filter_new_requests, setTemp_filter_new_requests] =
    useState(null);
  const [temp_filter_pitched_requests, setTemp_filter_pitched_requests] =
    useState(null);
  const [temp_filter_saved_requests, setTemp_filter_saved_requests] =
    useState(null);
  const [temp_filter, setTemp_filter] = useState(null);
  const [notification, setNotification] = useState(null);
  const [tableSwitch, setTableSwitch] = useState(0);
  const [toabout, setToabout] = useState(false);
  const [currentSectionProfile, setCurrentSectionProfile] = useState(
    toabout ? 4 : 0
  );
  const [currentSectionService, setCurrentSectionService] = useState(0);
  const [currentSectionEstimate, setCurrentSectionEstimate] = useState(0);
  const [currentSectionBlog, setCurrentSectionBlog] = useState(0);
  const [theme, setTheme] = useState(false);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const [option, setOption] = useState("");

  console.log(theme);
  const DarkWhite = (val) => {
    setTheme(val);
  };
  console.log(theme);
  const history = useHistory();
  let temp, ans;

  const getUser = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/user/get_user/${userId}`)
      .then(function (response) {
        temp = response?.data;
      });
    setFormData(temp?.data[0]);
  };

  // const [maximum_sales,setMaximum_sales]=useState(null)
  // const getMaximumSales=async()=>{
  //     const temp1={status: "accepted"}

  //     await axios.post(`${process.env.REACT_APP_URL}/product/maximum_sales`,temp1)
  //     .then(function (response) {
  //         ans=response

  //       })
  //     setMaximum_sales(ans?.data?.data)

  // }
  const [pendingRequests, setPendingRequests] = useState(0);
  const getPendingRequests = async () => {
    const temp1 = { status: "pending" };

    await axios
      .post(
        `${process.env.REACT_APP_URL}/product/no_of_requests/${userId}`,
        temp1
      )
      .then(function (response) {
        ans = response;
      });
    setPendingRequests(ans?.data?.data);
  };
  const [acceptedRequests, setAcceptedRequests] = useState(0);
  const getAcceptedRequests = async () => {
    const temp1 = { status: "accepted" };

    await axios
      .post(
        `${process.env.REACT_APP_URL}/product/no_of_requests/${userId}`,
        temp1
      )
      .then(function (response) {
        ans = response;
      });
    setAcceptedRequests(ans?.data?.data);
  };
  const [rejectedRequests, setRejectedRequests] = useState(0);
  const getrejectedRequests = async () => {
    const temp1 = { status: "rejected" };

    await axios
      .post(
        `${process.env.REACT_APP_URL}/product/no_of_requests/${userId}`,
        temp1
      )
      .then(function (response) {
        ans = response;
      });
    setRejectedRequests(ans?.data?.data);
  };

  const [newRequests, setNewRequests] = useState([]);
  const getNewRequests = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/product/new_requests/${userId}`)
      .then(function (response) {
        ans = response?.data?.data;
      });
    setNewRequests(ans);
    setTemp_filter_new_requests(ans);
  };
  const [pitchedRequests, setPitchedRequests] = useState([]);
  const getPitchedRequests = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/product/pitched_requests/${userId}`)
      .then(function (response) {
        ans = response?.data?.data;
      });
    setPitchedRequests(ans);
    setTemp_filter_pitched_requests(ans);
  };

  const [savedRequests, setSavedRequests] = useState([]);
  const getSavedRequests = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/product/saved_requests/${userId}`)
      .then(function (response) {
        ans = response?.data?.data;
      });
    setSavedRequests(ans);
    setTemp_filter_saved_requests(ans);
  };

  const getSite = async () => {
    let te;
    await axios
      .get(`${process.env.REACT_APP_URL}/user/get_site/${userId}`)
      .then(function (response) {
        te = response?.data?.data;
      });
    if (te?.length) {
      setSite(te);
    } else {
      setSite([]);
    }
  };
  const getVendorDetails = async () => {
    console.log(selectedTableItem, "selectedTableItem");
    setRequestedVendor(selectedTableItem?.Uid);
    let vendorid = selectedTableItem?.Uid;
    console.log(requestedVendor, "requestedVendor");
    await axios
      .get(`${process.env.REACT_APP_URL}/user/get_user/${vendorid}`)
      .then(function (response) {
        temp = response?.data?.data[0];
        console.log(temp, "getVendorDetails");
      });
    setRequestedVendorDetail(temp);
  };

  const getFilterDetails = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/user/tabel_filter/${userId}`)
      .then(function (response) {
        temp = response?.data?.data[0];
      });
    setTemp_filter(temp);
  };

  const getNotification = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/product/all_notification/${userId}`)
      .then(function (response) {
        temp = response?.data?.data;
      });
    setNotification(temp);
  };

  const [cart, setCart] = useState(null);
  const [cartLength, setCartLength]=useState(0)
  const getCart = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/product/get_cart/${userId}`)
      .then(function (response) {
        ans = response;
      });
    setCart(ans?.data?.data);
    setCartLength(ans?.data?.data?.length)
    console.log(cart, "cart");
  };
  const [recent_products, setRecentProducts] = useState();
  const getRecentProducts = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/user/recent_products/${userId}`)
      .then(function (response) {
        temp = response?.data?.data;
        console.log(temp, "recent products");
      });
    setRecentProducts(temp);
  };

  // console.log(formData,"formData")
  const getAllVendor = () => {
    getUser();
    getSite();
    // getMaximumSales();
    getPendingRequests();
    getAcceptedRequests();
    getrejectedRequests();
    getNewRequests();
    getPitchedRequests();
    getSavedRequests();
    getVendorDetails();
    getFilterDetails();
    getNotification();
    getCart();
    getRecentProducts();
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getSite();
  }, []);
  // useEffect(() =>{getMaximumSales()},[])
  useEffect(() => {
    getPendingRequests();
  }, []);
  useEffect(() => {
    getAcceptedRequests();
  }, []);
  useEffect(() => {
    getrejectedRequests();
  }, []);
  useEffect(() => {
    getNewRequests();
  }, []);
  useEffect(() => {
    getPitchedRequests();
  }, []);
  useEffect(() => {
    getSavedRequests();
  }, []);
  useEffect(() => {
    getFilterDetails();
  }, []);
  useEffect(() => {
    getNotification();
  }, []);
  useEffect(() => {
    getVendorDetails();
  }, [selectedTableItem]);
  useEffect(() => {
    getVendorDetails();
  }, []);
  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    getRecentProducts();
  }, []);

  useEffect(() => {
    if (isSignup) {
      setCurrentSection(0);
    } else {
      setCurrentSection(0);
    }
  }, []);

  // useEffect(() => {
  //     if (currentSection === 5 && userId === undefined) {
  //         setIsUser(true)
  //         // alert('Please Login')
  //         history.push('/auth-user')
  //     }
  // }, [currentSection])
  useEffect(() => {
    if (currentSection === 14 && userId === undefined) {
      setIsUser(true);
      setTitle("Please login first");
      setOpen(true);
      setTimeout(() => {
        history.push("/auth-user");
      }, 2000);
    }
  }, [currentSection]);

  const [winsize, setwinsize] = useState(window.screen.width);
  const [winheight, setwinheight] = useState(window.screen.height);
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setwinsize(window.innerWidth);
    } else {
      setwinsize(window.innerWidth);
    }
    if (window.innerHeight < 1000) {
      setwinheight(window.innerHeight);
    } else {
      setwinheight(window.innerHeight);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    console.log(winsize, winheight, "LandingPageImage");
  }, [window.screen.width, window.screen.height]);

  return (
    <div
      className="home-user-container"
      style={
        theme === true
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "rgb(18 17 17)", color: "white" }
      }
    >
      <Header
        DarkWhite={DarkWhite}
        currentSectionProfile={currentSectionProfile}
        setCurrentSectionProfile={setCurrentSectionProfile}
        setIsUser={setIsUser}
        sections={sections}
        currentSection={currentSection}
        LogoImage={LogoImage}
        setCurrentSection={setCurrentSection}
        setCurrentSectionProfile={setCurrentSectionProfile}
        setIsToggled={setIsToggled}
        getCart={getCart}
      />
      {winsize > 650 && (
        <Navbar
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          sections_logo_black={sections_logo_black}
          sections_logo_white={sections_logo_white}
          setIsToggled={setIsToggled}
        />
      )}
      <div className="home-user-content">
        {currentSection === 0 && (
          <HomePage
            option={option}
            setOption={setOption}
            setCurrentSection={setCurrentSection}
            setCurrentSectionProfile={setCurrentSectionProfile}
            toabout={toabout}
            setToabout={setToabout}
          />
        )}

        {currentSection === 1 && (
          <Services
            cartLength={cartLength}
            getCart={getCart}
            theme={theme}
            formData={formData}
            option={option}
            setOption={setOption}
            setCurrentSectionRequest={setCurrentSection}
            site={site}
            getAllVendor={getAllVendor}
            currentSection={currentSectionService}
            setCurrentSection={setCurrentSectionService}
            setCurrentSectionProfile={setCurrentSectionProfile}
            setCurrentSectionMain={setCurrentSection}
          />
        )}
        {currentSection === 2 && (
          <Request
            recent_products={recent_products}
            getAllVendor={getAllVendor}
            setCurrentSection={setCurrentSection}
            pendingRequests={pendingRequests}
            rejectedRequests={rejectedRequests}
            acceptedRequests={acceptedRequests}
            newRequests={newRequests}
            pitchedRequests={pitchedRequests}
            savedRequests={savedRequests}
            setSelectedTableItem={setSelectedTableItem}
            selectedTableItem={selectedTableItem}
            temp_filter_new_requests={temp_filter_new_requests}
            setTemp_filter_new_requests={setTemp_filter_new_requests}
            temp_filter_pitched_requests={temp_filter_pitched_requests}
            setTemp_filter_pitched_requests={setTemp_filter_pitched_requests}
            temp_filter_saved_requests={temp_filter_saved_requests}
            setTemp_filter_saved_requests={setTemp_filter_saved_requests}
            temp_filter={temp_filter}
            tableSwitch={tableSwitch}
            setTableSwitch={setTableSwitch}
          />
        )}
        {currentSection === 3 && (
          <Estimate
            setCurrentSectionRequest={setCurrentSection}
            setCurrentSection={setCurrentSectionEstimate}
            setCurrentSectionEstimate={setCurrentSectionEstimate}
            currentSection={currentSectionEstimate}
          />
        )}

        {currentSection === 4 && (
          <Blog
            theme={theme}
            setCurrentSectionRequest={setCurrentSection}
            setCurrentSection={setCurrentSectionBlog}
            setCurrentSectionBlog={setCurrentSectionBlog}
            currentSection={currentSectionBlog}
          />
        )}
        {currentSection === 5 && (
          <AboutUs
            theme={theme}
            setCurrentSectionRequest={setCurrentSection}
            // setCurrentSection={setCurrentSectionBlog}
            // setCurrentSectionBlog={setCurrentSectionBlog}
            // currentSection={currentSectionBlog}
          />
        )}
        {currentSection === 14 && (
          <Profile
            theme={theme}
            toabout={toabout}
            setToabout={setToabout}
            formData={formData}
            setFormData={setFormData}
            getUser={getUser}
            site={site}
            getSite={getSite}
            setSite={setSite}
            currentSection={currentSectionProfile}
            setCurrentSection={setCurrentSectionProfile}
          />
        )}
        {currentSection === 6 && (
          <Details
            setCurrentSection={setCurrentSection}
            selectedTableItem={selectedTableItem}
            getAllVendor={getAllVendor}
          />
        )}
        {currentSection === 7 && (
          <Details1
            setCurrentSection={setCurrentSection}
            selectedTableItem={selectedTableItem}
          />
        )}
        {currentSection === 8 && (
          <DetailAccepted
            setCurrentSection={setCurrentSection}
            selectedTableItem={selectedTableItem}
            requestedVendorDetails={requestedVendorDetails}
          />
        )}
        {currentSection === 9 && (
          <DetailDeclined
            setCurrentSection={setCurrentSection}
            selectedTableItem={selectedTableItem}
          />
        )}
        {currentSection === 10 && (
          <DetailHistoryAccepted setCurrentSection={setCurrentSection} />
        )}
        {currentSection === 11 && (
          <DetailHistoryDeclined setCurrentSection={setCurrentSection} />
        )}

        {currentSection === 12 && (
          <Cart
            setCurrentSectionProfile={setCurrentSectionProfile}
            setIsUser={setIsUser}
            setCurrentSection={setCurrentSection}
            currentSection={currentSection}
            cart={cart}
            setCart={setCart}
            getCart={getCart}
            site={site}
            getAllVendor={getAllVendor}
          />
        )}
        {currentSection === 13 && (
          <Reorder
            setCurrentSection={setCurrentSection}
            selectedTableItem={selectedTableItem}
          />
        )}
      </div>
      <Notifications
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        notification={notification}
        setCurrentSection={setCurrentSection}
        setTableSwitch={setTableSwitch}
      />
      <Footer
        setCurrentSection={setCurrentSection}
        currentSectionService={currentSectionService}
        setCurrentSectionService={setCurrentSectionService}
      />
      <PopupSaved title={title} open={open} setOpen={setOpen} />
    </div>
  );
}

export default HomeUser;
