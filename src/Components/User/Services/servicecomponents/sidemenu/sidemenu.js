import React from "react";
import styled from "styled-components";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const sideMenu = ({theme,currentSection , setCurrentSection}) => {

    const Column = styled.div`
    display: flex;
    flex-direction: column;
    `;
    const GhostButton = styled.button`
    margin: 0;
    padding: 0.2rem 1.5rem;
    border: solid 1px #2d2d2d;
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
                        currentSection === 0
                            ? {
                                  backgroundColor: "#ffb600",
                                  color: "black",
                                  borderStyle: "none",
                              }
                            :{}
                    }
                    onClick={() => setCurrentSection(0)}
                >
                    <div style={{display:"flex",justifyContent: "flex-start",alignItems: "center"}}>
                        <ChevronRightIcon/>
                        <h4 style={theme?{color:"black"}:{color:"white"}}>Construction Material</h4>
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
                    <div style={{display:"flex",justifyContent: "flex-start",alignItems: "center"}}>
                        <ChevronRightIcon/>
                        <h4 style={theme?{color:"black"}:{color:"white"}}>Agents</h4>
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
                    <div style={{display:"flex",justifyContent: "flex-start",alignItems: "center"}}>
                        <ChevronRightIcon/>
                        <h4 style={theme?{color:"black"}:{color:"white"}}> Commerical Vehicles</h4>
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
                        <h4 style={theme?{color:"black"}:{color:"white"}}> Construction Machines</h4>
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
                    <div style={{display:"flex",justifyContent: "flex-start",alignItems: "center"}}>
                        <ChevronRightIcon/>
                        <h4 style={theme?{color:"black"}:{color:"white"}}>Construction Chemicals</h4>
                    </div>
                    
                </GhostButton>
            </Column>
        </Column>
    );
};

export default sideMenu;

