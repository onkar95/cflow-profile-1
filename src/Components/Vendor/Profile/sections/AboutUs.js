import React from "react";
import { Row, Column,  SectionTitle } from "../../Styled/Styled";
import { MdPhoneIphone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import AboutImage from "../../../../Images/AboutUs1.jpeg"
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
                <Column style={{ marginRight: "1.5rem" }}>
                    <p
                        style={{
                            padding: ".5rem",
                            textAlign: "justify",
                            fontSize: "90%",
                            color:'white',
                        }}
                    >
Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites. It will help save time and money also make the communication between the vendor and buyer more fluent. We not only focus on the construction raw material but also construction vehicles, machines, and chemicals.
                    </p>
                    <p
                        style={{
                            padding: ".5rem",
                            fontSize: "90%",
                            fontWeight: "bold",
                            margin: "1rem 0",
                            color:'white',

                        }}
                    >
                        Reach us at:
                    </p>
                    <Row
                        style={{
                            justifyContent: "flex-start",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                cursor: "pointer",
                                width: "2rem",
                                height: "2rem",
                            }}
                            type="phone"
                        >
                            <a href="tel:+918810223181" style={{textDecoration:"none",color:"inherit"}}>
                            <MdPhoneIphone
                                color={"#ffb600"}
                                style={{
                                    width: "90%",
                                    height: "90%",
                                }}
                            />
                            </a>
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
                            <a href = "mailto: digitalflow.in@gmail.com" style={{textDecoration:"none",color:"inherit"}}> 
                            <HiMail
                                color={"#ffb600"}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                            </a>
                        </button>
                    </Row>
                </Column>
                <Column>
                    <img src={AboutImage} className="img-about-profile"/>
                </Column>
            </Row>
        </Column>
    );
};

export default AboutUs;
