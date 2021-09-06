import React, { useEffect, useState } from "react";
import { Column, GhostButton, Button } from "../../Styled/Styled";
import "./Profile.css"
import "./profileNav.css"
import ProfilePercent from "./ProfilePercent";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pendingIcon from "../../../../Images/newProfile/Verification pending.png"
import logutIcon from "../../../../Images/newProfileYellow/Logout.png"
import completedIcon from "../../../../Images/newProfile/Verification Completed.svg"
import LogoutPopup from "../../../Vendor/Profile/sections/Logout/LogoutPopup";


const ProfileNav = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [phone, setPhone] = useState(props.formData?.phone_no ? props.formData?.phone_no : "");
    const [email, setEmail] = useState(props.formData?.email ? props.formData?.email : "");
    const [wpp, setWpp] = useState(props.formData?.whatsapp_no ? props.formData?.whatsapp_no : "");

    const [filled, setFilled] = useState("")
    const [open, setOpen]=useState(false);

    const handleLogoutConfirmation = () => {
        setOpen(true)
    }
    const handleLogout = () => {
        props.function(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    useEffect(() => {
        if (filled.company >= 6 && filled.personal >= 6) {
            setFilled("complete")
        } else {
            setFilled("incomplete")
        }

    }, [])
    console.log(props.filled);
    return (
        <>

            <div className="profile_navbar">
                <div className="userInfo">
                    <div className="profilePercent">
                        <ProfilePercent filled={props.filled} height="170" />
                    </div>
                    <div className="userdetail">
                        <div className="row">
                            <div className="custName_icon">
                                <h1>Customer name</h1>
                                {email!="" ? <div className="profileCompleted_icon" >
                                    <img src={completedIcon} style={{ width: "40px",height:"30px" }} alt="" />
                                    <span className="hover_txt" > profile is verified</span>
                                </div>
                                    :
                                    <div className="profileCompleted_icon" >
                                        <img src={pendingIcon} style={{ width: "30px",color:"gray",height:"30px" }} alt="" />
                                        <span className="hover_txt" style={{ color:"gray" }}> profile is not verified</span>
                                    </div>}
                            </div>
                            <h3>Customer</h3>
                        </div>
                        <div className="info">
                            <div>
                                <h3>phone</h3>
                                <h4>{phone}</h4>
                            </div>
                            <div>
                                <h3>whatsapp</h3>
                                <h4>{wpp}</h4>
                            </div>
                            <div>
                                <h3>email</h3>
                                <h4>{email} </h4>
                            </div>
                        </div>
                        <div className="logout_btn">
                            <Button onClick={handleLogoutConfirmation} style={{display:"flex",alignItems:"center"}}> <img src={logutIcon} alt="" /> logout</Button>
                        </div>
                    </div>
                </div>
                {filled === "complete" ?

                    <div className="usersActivity">
                        <div >
                            <h1>complete your prfile</h1>
                            <h5>please complete your profile so that tou can start ordering products</h5>
                        </div>
                        <div className="row" style={{ width: "max-content", padding: "3px" }}>
                            <h3>complete profile</h3>
                        </div>
                    </div>
                    :
                    <div className="usersActivity_div">
                        <div className="users_pitch" style={props.theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>168</h1>
                            <h5>Total pitch recived today</h5>
                            <h5><b>10.02%</b>  this week</h5>
                        </div>

                        <div className="users_delivery" style={props.theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>1.2K</h1>
                            <h5>Total Delivery</h5>
                            <h5> <b>10.02%</b> this Month</h5>
                        </div>
                    </div>
                }
            </div>
            <LogoutPopup open={open} setOpen={setOpen} handleLogout={handleLogout} />

        </>
    );
};

export default ProfileNav;
