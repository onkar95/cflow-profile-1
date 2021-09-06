import React, { useState } from 'react'
import Card from "../Card/Card"
import AgentImage from "../../../../../Images/Vector.png"
import AgentInput from "./CardInput/Agent"
import "./Agents.css"
function Agents({site,newRequest,setNewRequest,setCurrentSectionRequest,getAllVendor,handleClickOpen,setOpenSaved}) {


    const materialagent = ["Sand" , "Stones" , "Bricks"]
    const [materialagentCheck , setMaterialagentCheck] = useState({
      0 : false,
      1 : false,
      2 : false,
      3 : false,
  })
    return (
        <div className="agents-container">
            <div className="agents-top">
                <div className="agents-currentcard">
                    <Card img={AgentImage} name="Agents"/>
                </div>
                <div className="agents-cardinput">
                    <AgentInput setOpenSaved={setOpenSaved} site={site} setCurrentSectionRequest={setCurrentSectionRequest} getAllVendor={getAllVendor} newRequest={newRequest} setNewRequest={setNewRequest} handleClickOpen={handleClickOpen}/>
                </div>
            </div>
            
        </div>
    )
}

export default Agents
