import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Column, GhostButton } from "../../Styled/Styled";
import "./Profile.css"
import ProfilePercent from "./ProfilePercent";


const SideMenu = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        props.function(6)
        dispatch({type: "LOGOUT" })      
        history.push("/")
    }
    // const handleLogoutPopup=()=>{
    //     props.setOpen(true)
        

        

    // }
    
    return (
        <Column
            // style={{
            //     width: "15%",
            //     padding: "1rem .7rem",
            //     // borderRadius: "5px",
            //     margin: " 0 3rem 0 0",
            //     backgroundColor: "#08090C",
            //     justifyContent: "space-between",
            // }}
            className="sidemenu"
        >
            <ProfilePercent />
            {/* <div>
                <br /> 
            </div> */}
            <Column>
                <GhostButton
                    style={
                        props.current === 0
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',

                            }
                    }
                    onClick={() => props.function(0)}
                >
                    Personal Details
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 1
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={() => props.function(1)}
                >
                    Company Details
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 2
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={() => props.function(2)}
                >
                    Company Address
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 3
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={() => props.function(3)}
                >
                    Feedback
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 4
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={() => props.function(4)}
                >
                    About Us
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 5
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={() => props.function(5)}
                >
                    Help
                </GhostButton>
                <GhostButton
                    style={
                        props.current === 6
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                                  borderRadius:'5px',
                              }
                            : {
                                borderRadius:'5px',
                            }
                    }
                    onClick={handleLogout}
                >
                    Logout
                </GhostButton>
            </Column>
        </Column>
    );
};

export default SideMenu;
