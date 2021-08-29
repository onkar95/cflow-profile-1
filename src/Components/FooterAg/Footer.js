import React from "react";
import { Row, Column, LinkButton } from "../Styled/Styled";
const Footer = () => {
    return (
        <Column
            style={{
                backgroundColor: "#08090C",
                width: "calc(85% + 3rem)",
                justifyContent: "center",
                margin: "3.5rem auto 0 auto",
            }}
        >
            <Row
                style={{
                    backgroundColor: "#08090C",
                    padding: "1.2rem 5rem 8rem",
                    fontSize: "75%",
                    width: "100%",
                }}
            >
                <Column style={{ marginRight: "4.5rem" }}>
                    <h4
                        style={{
                            marginBottom: "1rem",
                        }}
                    >
                        SERVICES PROVIDED
                    </h4>
                    <LinkButton>Construction Material</LinkButton>
                    <LinkButton>Agents</LinkButton>
                    <LinkButton>Construction Machines</LinkButton>
                    <LinkButton>Construction Vehicles</LinkButton>
                    <LinkButton>Construction Chemicals</LinkButton>
                </Column>
                <Column style={{ marginRight: "4.5rem" }}>
                    <h4
                        style={{
                            marginBottom: "1rem",
                        }}
                    >
                        ABOUT US
                    </h4>
                    <LinkButton>About Us</LinkButton>
                    <LinkButton>Why Use Construction Flow</LinkButton>
                </Column>
                <Column>
                    <h4
                        style={{
                            marginBottom: "1rem",
                        }}
                    >
                        HELP
                    </h4>
                    <LinkButton>Privacy Policy</LinkButton>
                    <LinkButton>Terms &#38; Conditions</LinkButton>
                </Column>
                <Column
                    style={{
                        alignSelf: "flex-end",
                        margin: "0 0 0 auto",
                    }}
                >
                    <h4
                        style={{
                            marginBottom: "1rem",
                            marginLeft: ".2rem",
                        }}
                    >
                        Download Our App
                    </h4>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <h4
                        style={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            marginLeft: ".2rem",
                        }}
                    >
                        Follow Us:
                    </h4>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </Column>
            </Row>
            <Row
                style={{
                    backgroundColor: "#2D2D2D",
                    padding: ".2rem 2.5rem",
                    fontSize: "90%",
                    paddingLeft: "5rem",
                }}
            >
                <p style={{ marginRight: "1rem" }}> Copyrights Reserved </p>
                <p>Construction Flow</p>
            </Row>
        </Column>
    );
};

export default Footer;
