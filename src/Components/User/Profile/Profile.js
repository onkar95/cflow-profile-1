import React, { useEffect, useState } from "react";
import { Row, Column } from "../Styled/Styled";

import ProfileNav from "./sections/ProfileNav";

import PersonalDetails from "./sections/PersonalDetails";
import CompanyDetails from "./sections/CompanyDetails";
import AddressDetails from "./sections/AddressDetails";
import Feedback from "./sections/Feedback";
import AboutUs from "./sections/AboutUs";
import Help from "./sections/Help";
import axios from "axios"
import AddressBook from "./sections/AddressBook";
import EditAddress from "./sections/EditAddress";
import AddNewAddress from "./sections/AddNewAddress";
import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import "./sections/Profile.css"
import ProfileNavMobile from "./sections/ProfileNavMobile";
import personalDetialsYellow from "../../../Images/newProfileYellow/Personal Details.png";
import companyDetailsYellow from "../../../Images/newProfileYellow/Company details.png";
import companyAddressYellow from "../../../Images/newProfileYellow/Company address.png";
import addressBookYellow from "../../../Images/newProfileYellow/Site address book.png";
import FeedbackYellow from "../../../Images/newProfileYellow/Feedback.png";
import helpYellow from "../../../Images/newProfileYellow/Help.png";
import personalDetials from "../../../Images/newProfile/Personal Details.png";
import companyDetails from "../../../Images/newProfile/Company details.png";
import companyAddress from "../../../Images/newProfile/Compay address.png";
import addressBook from "../../../Images/newProfile/Site address book.png";
import help from "../../../Images/newProfile/Help small.png";
import feedback from "../../../Images/newProfile/Feedback.png";
// import personalDetials from "../../../Images/fe";

const Profile = ({ theme, toabout, setToabout, formData, setFormData, getUser, site, getSite, setSite, currentSection, setCurrentSection }) => {

    const profilSections = [personalDetials, companyAddress, companyDetails, addressBook, feedback, help]
    const profilSectionsYellow = [personalDetialsYellow, companyAddressYellow, companyDetailsYellow, addressBookYellow, FeedbackYellow, helpYellow]
    const [siteNo, setSiteNo] = useState(0)
    const [filled, setFilled] = useState({ address: 0, company: 0, personal: 0 })
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    console.log(theme);
    useEffect(() => {
        if (toabout) {
            setToabout(false)
        }
    }, [toabout])

    const handleChange = (i) => {
        setCurrentSection(i);
    };
    return (
        <>
            <div className='breadcrumbsuser'>
                <h3 style={{ margin: 0 }}>
                    Home / {" "}
                    <span style={{ color: "#FFB600" }}>Profile</span>
                </h3>
            </div>
            {window.innerWidth > 600 ?
                <ProfileNav theme={theme} formData={formData} current={currentSection} function={handleChange} filled={filled} />
                :
                <ProfileNavMobile formData={formData} current={currentSection} function={handleChange} filled={filled} />
            }
            <div className="profile_sections" style={theme === true ? { backgroundColor: "#f6f5f2", color: "black" } : { Color: "#2d2d2d" }}>
                {window.innerWidth > 600 ?
                    <Row >
                        <div className="profile_button">
                            <div className="profile_button_nav" style={theme === true ? { color: "black" } : { Color: "#2d2d2d" }}>
                                <div className="profile_button_nav1">
                                    <div className="profile_button_div" style={currentSection === 0 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                        <img src={currentSection === 0 ? profilSectionsYellow[0] : profilSections[0]} alt="" />
                                        <button
                                            style={
                                                currentSection === 0
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(0)}

                                        >personal details</button>
                                    </div>
                                    <div className="profile_button_div" style={currentSection === 1 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>

                                        <img src={currentSection === 1 ? profilSectionsYellow[1] : profilSections[1]} alt="" />
                                        <button
                                            style={
                                                currentSection === 1
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(1)}>company details</button>
                                    </div>
                                    <div className="profile_button_div" style={currentSection === 2 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                        <img src={currentSection === 2 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                                        <button
                                            style={
                                                currentSection === 2
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(2)}>company adderess</button>
                                    </div>
                                    <div className="profile_button_div" style={currentSection === 7 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                        <img src={currentSection === 7 ? profilSectionsYellow[3] : profilSections[3]} alt="" />
                                        <button
                                            style={
                                                currentSection === 7
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(7)}>Address Book</button>
                                    </div>
                                </div>
                                <div className="profile_button_nav2">
                                    <div className="profile_button_div" style={currentSection === 3 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }} >
                                        <img src={currentSection === 3 ? profilSectionsYellow[4] : profilSections[4]} alt="" />
                                        <button
                                            style={
                                                currentSection === 3
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(3)}>feedback</button>
                                    </div>
                                    <div className="profile_button_div" style={currentSection === 5 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }} >
                                        <img src={currentSection === 5 ? profilSectionsYellow[5] : profilSections[5]} alt="" />
                                        <button
                                            style={
                                                currentSection === 5
                                                    ? {
                                                        color: "#ffb600",
                                                        borderStyle: "none",
                                                    } : theme === true ? { color: "#2D2D2D" }
                                                        : {}
                                            } onClick={() => setCurrentSection(5)}>help</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    :
                    <Row style={theme === true ? { color: "black" } : { Color: "#2d2d2d" }}>
                        <div className="profile_button">
                            <div className="profile_button_div" style={currentSection === 0 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 0 ? profilSectionsYellow[0] : profilSections[0]} alt="" />
                                <button
                                    style={
                                        currentSection === 0
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(0)}

                                >personal details</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 1 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 1 ? profilSectionsYellow[1] : profilSections[1]} alt="" />
                                <button
                                    style={
                                        currentSection === 1
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(1)}>company details</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 2 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 2 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                                <button
                                    style={
                                        currentSection === 2
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(2)}>company adderess</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 7 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 7 ? profilSectionsYellow[3] : profilSections[3]} alt="" />
                                <button
                                    style={
                                        currentSection === 7
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(7)}>Address Book</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 3 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 3 ? profilSectionsYellow[4] : profilSections[4]} alt="" />
                                <button
                                    style={
                                        currentSection === 3
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(3)}>feedback</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 5 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 5 ? profilSectionsYellow[5] : profilSections[5]} alt="" />
                                <button
                                    style={
                                        currentSection === 5
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }: theme === true ? { color: "#2D2D2D" }
                                            : {}
                                    } onClick={() => setCurrentSection(5)}>help</button>
                            </div>
                        </div>
                    </Row>
                }
                <Row>
                    <Column className="main_content"  >
                        {currentSection === 0 && <PersonalDetails theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 1 && <CompanyDetails theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 2 && <AddressDetails theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 3 && <Feedback theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen} />}
                        {currentSection === 4 && <AboutUs />}
                        {currentSection === 5 && <Help theme={theme} />}
                        {currentSection === 7 && <AddressBook theme={theme} setCurrentSection={setCurrentSection} site={site} setSiteNo={setSiteNo} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen} />}
                        {currentSection === 8 && <EditAddress theme={theme} setCurrentSection={setCurrentSection} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen} />}
                        {currentSection === 9 && <AddNewAddress theme={theme} setCurrentSection={setCurrentSection} formData={formData} setFormData={setFormData} getUser={getUser} getSite={getSite} handleClickOpen={handleClickOpen} />}
                    </Column>
                    <PopupSaved title="Saved" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
                </Row>
            </div >
        
        </>
    );
};

export default Profile;
