import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero1 from "../../../Images/Banners/1.png";
import Hero10 from "../../../Images/Banners/10.png";
import Hero11 from "../../../Images/Banners/11.png";
import Hero12 from "../../../Images/Banners/12.png";
import Hero13 from "../../../Images/Banners/13.png";
import Hero14 from "../../../Images/Banners/14.png";
import Hero15 from "../../../Images/Banners/15.png";
import Hero16 from "../../../Images/Banners/16.png";
import Hero17 from "../../../Images/Banners/17.png";
import Hero18 from "../../../Images/Banners/18.png";
import Hero19 from "../../../Images/Banners/19.png";
import Hero2 from "../../../Images/Banners/2.png";
import Hero20 from "../../../Images/Banners/20.png";
import Hero21 from "../../../Images/Banners/21.png";
import Hero22 from "../../../Images/Banners/22.png";
import Hero23 from "../../../Images/Banners/23.png";
import Hero24 from "../../../Images/Banners/24.png";
import Hero25 from "../../../Images/Banners/25.png";
import Hero26 from "../../../Images/Banners/26.png";
import Hero27 from "../../../Images/Banners/27.png";
import Hero28 from "../../../Images/Banners/28.png";
import Hero29 from "../../../Images/Banners/29.png";
import Hero3 from "../../../Images/Banners/3.png";
import Hero30 from "../../../Images/Banners/30.png";
import Hero31 from "../../../Images/Banners/31.png";
import Hero32 from "../../../Images/Banners/32.png";
import Hero33 from "../../../Images/Banners/33.png";
import Hero34 from "../../../Images/Banners/34.png";
import Hero35 from "../../../Images/Banners/35.png";
import Hero36 from "../../../Images/Banners/36.png";
import Hero37 from "../../../Images/Banners/37.png";
import Hero4 from "../../../Images/Banners/4.png";
import Hero5 from "../../../Images/Banners/5.png";
import Hero6 from "../../../Images/Banners/6.png";
import Hero7 from "../../../Images/Banners/7.png";
import Hero8 from "../../../Images/Banners/8.png";
import Hero9 from "../../../Images/Banners/9.png";
import PopupSaved from "../../Popup/popupsaved/PopupSaved";
import Agents from "./servicecomponents/Agents/Agents";
import CommercialVehicles from "./servicecomponents/CommercialVehicles/CommercialVehicles";
import ConstructionChemicals from "./servicecomponents/ConstructionChemicals/ConstructionChemicals";
import ConstructionMachines from "./servicecomponents/ConstructionMachines/ConstructionMachines";
import ConstructionMaterial from "./servicecomponents/ConstructionMaterial/ContructionMaterial";
import Sidemenu from './servicecomponents/sidemenu/sidemenu';
import VehicleDetail from './servicecomponents/VehicleDetail/VehicleDetail';
import "./Services.css";



function Services({ cartLength, getCart, theme, formData, setCurrentSectionRequest, site, getAllVendor, currentSection, setCurrentSection, setCurrentSectionProfile, setCurrentSectionMain, clickedCard, setClickedCard, trigger, setTrigger }) {
    // const [currentSection, setCurrentSection] = useState(0)
    const [selected, setSelected] = useState(null)
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const service = { 0: "Construction Materials", 1: "Agents", 2: "Commercial Vehicles", 4: "Construction Chemicals", 5: "Commercial Vehicles" }
    const img_arr = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12, Hero13, Hero14, Hero15, Hero16, Hero17, Hero18, Hero19, Hero20, Hero21, Hero22, Hero23, Hero24, Hero25, Hero26, Hero27, Hero28, Hero29, Hero30, Hero31, Hero32, Hero33, Hero34, Hero35, Hero36, Hero37]
    const [openSaved, setOpenSaved] = useState(false);
    const [open, setOpen] = React.useState(false);
    let initialarr = { service_type: service.currentSection, type: "", quantity: 0, typecapacity: 0, data: null, urgent: false, delivery_address: "", deliver_by: new Date() }
    const [newRequest, setNewRequest] = useState(initialarr)
    const [dropdownData, setDropDownData] = useState([]);
    const [chemicalDropDown, setChemicalDropDown] = useState([]);

    // req.body.id,req.body.service_type,req.body.type, req.body.quantity, JSON.stringify(req.body.data),"pending",req.body.urgent,req.body.delivery_address,req.body.deliver_by

    useEffect(() => {
        setNewRequest({ ...newRequest, service_type: service[currentSection] })
    }, [currentSection])
    const handleClickOpen = () => {
        setOpen(true);
    };

    //dropdown api's
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/construction_material_dropdown`)
            .then(res => {
                setDropDownData(res.data.data);
                console.log(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/construction_chemical_dropdown`)
            .then(res => {
                setChemicalDropDown(res.data.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="service-user-container">
            <div className='breadcrumbsuser'>
                <h3 style={{ margin: 0 }}>
                    Home / {" "}
                    <span style={{ color: "#FFB600" }}>Services</span>
                </h3>
            </div>
            {/* <div className="home-content-carousel">
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
            </div> */}
            <div className="service-user-ourservice">
                <h2 style={{ fontWeight: '700', marginLeft: 5 }}>Our Services</h2>
            </div>
            <div className="service-user-content">
                <div className="service-user-sidemenu">
                    <Sidemenu theme={theme} currentSection={currentSection} setCurrentSection={setCurrentSection} />
                </div>
                <div className="service-user-detail">
                    {currentSection === 0 && <ConstructionMaterial cartLength={cartLength} getCart={getCart} theme={theme} formData={formData} setCurrentSectionMain={setCurrentSectionMain} setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest} getAllVendor={getAllVendor} newRequest={newRequest} setNewRequest={setNewRequest} site={site} handleClickOpen={handleClickOpen} clickedCard={clickedCard} setClickedCard={setClickedCard} trigger={trigger} setTrigger={setTrigger} dropdownData={dropdownData} />}
                    {currentSection === 1 && <Agents formData={formData} setOpenSaved={setOpenSaved} getAllVendor={getAllVendor} setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSectionRequest={setCurrentSectionRequest} newRequest={newRequest} setNewRequest={setNewRequest} site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 2 && <CommercialVehicles getAllVendor={getAllVendor} setCurrentSectionRequest={setCurrentSectionRequest} newRequest={newRequest} setNewRequest={setNewRequest} setCurrentSection={setCurrentSection} setSelected={setSelected} site={site} />}
                    {currentSection === 3 && <ConstructionMachines />}
                    {currentSection === 4 && <ConstructionChemicals formData={formData} setOpenSaved={setOpenSaved} setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSectionRequest={setCurrentSectionRequest} getAllVendor={getAllVendor} newRequest={newRequest} setNewRequest={setNewRequest} site={site} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentSection === 5 && (selected !== null ? <VehicleDetail formData={formData} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest} getAllVendor={getAllVendor} selected={selected} setCurrentSection={setCurrentSection} newRequest={newRequest} setNewRequest={setNewRequest} handleClickOpen={handleClickOpen} site={site} /> : <CommercialVehicles getAllVendor={getAllVendor} setCurrentSectionRequest={setCurrentSectionRequest} newRequest={newRequest} setNewRequest={setNewRequest} setCurrentSection={setCurrentSection} setSelected={setSelected} site={site} />)}
                    <div className="gotorequestpage" onClick={() => setCurrentSectionRequest(2)}>
                        <h3 style={{ fontWeight: "600" }}>Check your Lead/Pitch Status</h3>
                        <div style={{ display: "flex", margin: 0, marginTop: "0%", cursor: "pointer", height: 'fit-content', alignItems: "center", justifyContent: "center" }} >
                            <h4 style={{ fontWeight: "400", fontSize: "1rem" }} className="view">View</h4>
                            <ArrowRightAltIcon />
                        </div>
                    </div>
                    <PopupSaved title="Your Request Has Been Sent" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
                    <PopupSaved title="Your Request Has Been Added to cart" handleClickOpen={() => setOpenSaved(true)} open={openSaved} setOpen={setOpenSaved} />
                </div>
            </div>
        </div>
    )
}

export default Services
