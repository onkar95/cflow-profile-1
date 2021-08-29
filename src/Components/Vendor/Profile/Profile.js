import React, { useState } from "react";
import { Row, Column } from "../Styled/Styled";

import SideMenu from "./sections/SideMenu";

import PersonalDetails from "./sections/PersonalDetails";
import CompanyDetails from "./sections/CompanyDetails";
import AddressDetails from "./sections/AddressDetails";
import Feedback from "./sections/Feedback";
import AboutUs from "./sections/AboutUs";
import Help from "./sections/Help";
import PopupSaved from  "../../Popup/popupsaved/PopupSaved"
import LogoutPopover from "./sections/Logout/LogoutPopup"
import "./sections/Profile.css"

const Profile = ({formData,setFormData , getUser , currentSection, setCurrentSection}) => {
    
    const [open, setOpen] = React.useState(false);
    const [openLogoutModal,setLogoutModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleChange = (i) => {
        setCurrentSection(i);
    };
    return (
        <Row
            // style={{
            //     justifyContent: "center",
            // }}
            className="main-row"
        >
            <SideMenu current={currentSection} function={handleChange} setOpen={setLogoutModal} open={openLogoutModal} />
            <Column
                // style={{
                //     width: "70%",
                //     padding: ".5rem 2.5rem",
                //     borderRadius: "8px",
                //     backgroundColor: "#08090C",
                // }}
                className="main-content"
            >
                {/* {currentSection < 3 && (
                    <h3
                        style={{
                            margin: "1.5rem",
                            marginBottom: "2.5rem",
                            marginTop: ".1rem",
                            color:'#FFB600'
                        }}
                    >
                        My Profile
                    </h3>
                )} */}
                {currentSection === 0 && <PersonalDetails formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen}/>}
                {currentSection === 1 && <CompanyDetails formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen}/>}
                {currentSection === 2 && <AddressDetails formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen}/>}
                {currentSection === 3 && <Feedback formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen}/>}
                {currentSection === 4 && <AboutUs />}
                {currentSection === 5 && <Help />}
            </Column>
            <PopupSaved title="Saved" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
            <LogoutPopover title="Saved"  open={openLogoutModal} setOpen={setLogoutModal}/>
        </Row>        
    );
};

export default Profile;
