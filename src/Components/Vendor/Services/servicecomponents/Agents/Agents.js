import React, { useState } from 'react'
import Card from "../Card/Card"
import AgentImage from "../../../../../Images/Agent.svg"
import AgentInput from "./CardInput/Agent"
import "./Agents.css"
function Agents({formData, notify,newService,setNewService,AddService,handleClickOpen}) {


    return (
        <div className="agents-container">
            <div className="agents-top">
                <div className="agents-currentcard">
                    <Card img={AgentImage} name="Agents"/>
                </div>
                <div className="agents-cardinput">
                    <AgentInput formData={formData} notify={notify} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen}/>
                </div>
            </div>
            
        </div>
    )
}

export default Agents
