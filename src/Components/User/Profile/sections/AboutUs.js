import React from "react";
import { Row, Column,  SectionTitle } from "../../Styled/Styled";
import { MdPhoneIphone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import About from '../../../../Images/AboutUs.jpg'
import "./Profile.css" 
import Facebook from "../../../../Images/Facebook.png"
import Twitter from "../../../../Images/Twitter.png"
import Instagram from "../../../../Images/Instagram.png"
const AboutUs = () => {
    return (
        <Column>
            <SectionTitle
                style={{
                    alignSelf: "flex-start",
                    marginTop: "1rem",
                }}
            >
                About Us
            </SectionTitle>
            <Row className="about-profile-row">
                <Column style={{ marginRight: "1.5rem" ,display:"flex",justifyContent: "space-between",flexDirection:"column"}}>
                    <p
                        style={{
                            padding: ".5rem",
                            textAlign: "justify",
                            fontSize: "90%",
                        }}
                    >
                        Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites. It will help save time and money also make the communication between the vendor and buyer more fluent. We not only focus on the construction raw material but also construction vehicles, machines, and chemicals.
                    </p>
                    <div className="reach" style={{display: 'flex',height:"1.5rem"}}>
                    <p
                        style={{
                            paddingTop: ".25rem",
                            fontSize: "90%",
                            fontWeight: "bold",
                            margin: " 0",
                        }}
                    >
                        Reach us at:
                    </p>
                    <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                cursor: "pointer",
                                
                                marginRight: ".5rem",
                            }}
                        >
                            <MdPhoneIphone
                                color={"#ffb600"}
                                style={{
                                    width: "90%",
                                    height: "1.5rem",
                                }}
                            />
                        </button>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                cursor: "pointer",
                                marginRight: ".5rem",
                             
                            }}
                        >
                            <HiMail
                                color={"#ffb600"}
                                style={{
                                    width: "100%",
                                    height: "1.5rem",
                                }}
                            />
                        </button>
                        <a href="https://www.facebook.com/ConstructionFlow" target="_blank"><img src={Facebook}  style={{paddingTop:"0.25rem",width:"1.5rem",marginRight: ".75rem",width: "100%",height: "1.1rem",objectFit: "contain"}}/></a>
                
                <a href="https://www.instagram.com/constructionflow_" target="_blank"><img src={Instagram}  style={{paddingTop:"0.25rem",width:"1.5rem",marginRight: "2.25rem",width: "100%",height: "1.1rem",objectFit: "contain"}}/></a>
                <a href="https://twitter.com/ConstructionFlo/" target="_blank"><img src={Twitter} style={{paddingTop:"0.25rem",width:"1.5rem",width: "100%",height: "1.1rem",objectFit: "contain"}}/></a>
                    </div>
                    
                    {/* <Row
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                cursor: "pointer",
                                width: "2rem",
                                height: "2rem",
                                marginRight: ".5rem",
                            }}
                        >
                            <MdPhoneIphone
                                color={"#ffb600"}
                                style={{
                                    width: "90%",
                                    height: "90%",
                                }}
                            />
                        </button>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                cursor: "pointer",
                                width: "2rem",
                                height: "2rem",
                            }}
                        >
                            <HiMail
                                color={"#ffb600"}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </button>
                    </Row> */}
                </Column>
                <Column>
                    {/* <div style={{
                            width: "20rem",
                            height: "10rem",
                            backgroundColor: "transparent",
                            borderRadius: "4px",
                            marginBottom: "1rem",
                            objectFit: "cover"
                        }}></div> */}
                    <img
                        src={About}
                        className="img-about-profile"
                    />
                    
                </Column>
            </Row>
        </Column>
    );
};

export default AboutUs;
