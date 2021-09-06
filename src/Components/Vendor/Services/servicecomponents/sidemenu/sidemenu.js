import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from "react";
import styled from "styled-components";
const sideMenu = ({ currentSection, setCurrentSection }) => {

    const Column = styled.div`
    display: flex;
    flex-direction: column;
    `;
    // padding: 0.4rem 1.5rem;
    const GhostButton = styled.button`
    margin: 0;
    border: solid 1px #2d2d2d;
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    color: white;
    text-align: left;
    transition: all 0.8s;
    :hover {
        cursor: pointer;
        background-color: #313338;
    }
    `;
    return (
        <Column
            style={{

                width: "100%",
                padding: "0rem .7rem",
                borderRadius: "4px",
                margin: " 0 3rem 0 0",
                justifyContent: "space-between",
                maxHeight: "500px"
            }}
        >
            <Column>
                <GhostButton
                    style={
                        currentSection === 6
                            ? {
                                backgroundColor: "#ffb600",
                                color: "black",
                                borderStyle: "none",
                            }
                            : {}
                    }
                    onClick={() => setCurrentSection(6)}
                >
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <ChevronRightIcon />
                        <h4>Dashboard</h4>
                    </div>
                </GhostButton>
                <GhostButton
                    style={
                        currentSection === 0
                            ? {
                                backgroundColor: "#ffb600",
                                color: "black",
                                borderStyle: "none",
                            }
                            : {}
                    }
                    onClick={() => setCurrentSection(0)}
                >
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <ChevronRightIcon />
                        <h4>Construction Material</h4>
                    </div>
                </GhostButton>
                <GhostButton
                    style={
                        currentSection === 1
                            ? {
                                backgroundColor: "#ffb600",
                                color: "black",
                                borderStyle: "none",
                            }
                            : {}
                    }
                    onClick={() => setCurrentSection(1)}
                >
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <ChevronRightIcon />
                        <h4>Agents</h4>
                    </div>
                </GhostButton>
                <GhostButton
                    style={
                        currentSection === 2 || currentSection === 5
                            ? {
                                backgroundColor: "#ffb600",
                                color: "black",
                                borderStyle: "none",
                            }
                            : {}
                    }
                    onClick={() => setCurrentSection(2)}
                >
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <ChevronRightIcon />
                        <h4> Commerical Vehicles</h4>
                    </div>
                </GhostButton>
                {/* <GhostButton
                    style={
                        currentSection === 3 
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                              }
                            : {}
                    }
                    onClick={() => setCurrentSection(3)}
                >
                    <div style={{display:"flex",justifyContent: "flex-start",alignItems: "center"}}>
                        <ChevronRightIcon/>
                        <h4> Construction Machines</h4>
                    </div>
                    
                </GhostButton> */}
                <GhostButton
                    style={
                        currentSection === 4
                            ? {
                                backgroundColor: "#ffb600",
                                color: "black",
                                borderStyle: "none",
                            }
                            : {}
                    }
                    onClick={() => setCurrentSection(4)}
                >
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <ChevronRightIcon />
                        <h4>Construction Chemicals</h4>
                    </div>

                </GhostButton>

            </Column>
        </Column>
    );
};

export default sideMenu;

