// import React from 'react'
import React, { useEffect, useState } from "react";
import "./Estimate.css"
import { Row, Column } from "../Styled/Styled";
import BricksEstimate from './SideMenuEstimate/BricksEstimate'
import CPWDManual from './SideMenuEstimate/CPWDManual'
import FloorEstimate from './SideMenuEstimate/FloorEstimate'
import PaintingEstimate from './SideMenuEstimate/PaintingEstimate'
import PlasterEstimate from './SideMenuEstimate/PlasterEstimate'
import Pcc_Ecc_Calculation from './SideMenuEstimate/Pcc_Ecc_Calculation'
import SideMenu from "./SideMenuEstimate/SideMenu.js";
import PopupSaved from "../../Popup/popupsaved/PopupSaved"


function Estimate({ setCurrentSectionRequest, site, getAllVendor, currentSection, setCurrentSection, setCurrentSectionProfile }
) {
    const [selected, setSelected] = useState(null)
    // const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const estimates = { 0: "Pcc_Ecc_Calculation", 1: "BricksEstimate", 2: "PaintingEstimate", 3: "PlasterEstimate", 4: "FloorEstimate", 5: "CPWDManual" }


    let initialarr = { service_type: estimates.currentSection, type: "", quantity: "", data: null, urgent: false, delivery_address: "", deliver_by: new Date() }
    // req.body.id,req.body.service_type,req.body.type, req.body.quantity, JSON.stringify(req.body.data),"pending",req.body.urgent,req.body.delivery_address,req.body.deliver_by


    const [newRequest, setNewRequest] = useState(initialarr)
    useEffect(() => {

        setNewRequest({ ...newRequest, service_type: estimates[currentSection] })
    }, [currentSection])
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [openSaved, setOpenSaved] = useState(false);

    return (
        // <div className="estimate">
        <div className="service-user-container">
            <div className='breadcrumbsuser'>
                <h3 style={{ margin: 0 }}>
                    Home / {" "}
                    <span style={{ color: "#FFB600" }}>Estimates</span>
                </h3>
            </div>
            <div className="service-user-ourservice">
                <h2 style={{ fontWeight: '700', marginLeft: 5 }}>Estimates</h2>
            </div>
            <div className="service-user-content">
                <div className="service-user-sidemenu">
                    <SideMenu currentSection={currentSection} setCurrentSection={setCurrentSection} />
                </div>
                <div className="service-user-detail">

                    {currentSection === 0 && <Pcc_Ecc_Calculation setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 1 && <BricksEstimate setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 2 && <PaintingEstimate setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 3 && <PlasterEstimate setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 4 && <FloorEstimate setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}
                    {currentSection === 5 && <CPWDManual setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest}  site={site} handleClickOpen={handleClickOpen} />}

                    {/* <div className="gotorequestpage"> */}
                        {/* <h3 style={{ fontWeight: "600" }}>Check your Lead/Pitch Status</h3>
                            <div style={{ display: "flex", margin: 0, marginTop: "0%", cursor: "pointer", height: 'fit-content', alignItems: "center", justifyContent: "center" }} onClick={() => setCurrentSectionRequest(2)}>
                                <h4 style={{ fontWeight: "400", fontSize: "1rem" }} className="view">View</h4>
                                <ArrowRightAltIcon />
                            </div> */}
                    {/* </div> */}
                    {/* <PopupSaved title="Your Request Has Been Sent" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
                    <PopupSaved title="Your Request Has Been Added to cart" handleClickOpen={() => setOpenSaved(true)} open={openSaved} setOpen={setOpenSaved} /> */}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Estimate



