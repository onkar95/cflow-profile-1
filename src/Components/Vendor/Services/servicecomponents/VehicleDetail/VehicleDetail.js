import { Button } from '@material-ui/core'
import React , {useEffect, useState} from 'react'
import "./VehicleDetail.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import BasicInfo from "../VehicleInput/Basic/Basic"
import Paper from '../VehicleInput/Paper/Paper';
import Renting from '../VehicleInput/Renting/Renting'
function VehicleDetail({formData, notify,setCurrentSection,selected,newService,setNewService,AddService,handleClickOpen}) {

    const [section,setSection] = useState(0)
    const [service_type,,setServiceType] = useState("vehicles")
    const [type,setType] = useState(selected.name)
    const [basic_information,setBasic_information] = useState({product_name:"",
                                                brand_name:"",
                                                model_name:"",
                                                MFG_year:"",
                                                current_location:"",
                                                another_specification:""})
    const [paper_work,setPaper_work] = useState([])
    const [renting_details,setRenting_details] = useState({
                                            with_driver:true,
                                            start_date:new Date(),
                                            end_date:new Date()
                                        })
    
    useEffect(() => {
        console.log("here")
        let final_arr=[]
        let temp_info = {basic_information:basic_information , paper_work:paper_work , renting_details:renting_details}
        final_arr.push(temp_info)
        console.log(final_arr,"final_arr")
        setNewService({...newService ,info:final_arr  , type : selected?.name})
    },[basic_information,paper_work,renting_details])


    return (
        <div className="vehicle-detail-container">
            <div className="vehicle-detail-back">
                <Button className="vehicle-detail-back-button" onClick={() => setCurrentSection(2)}>
                    <div className="vehicle-detail-back-button-div">
                        <ArrowBackIosIcon style={{fontSize:"1rem"}}/>
                        <p>Back</p>
                    </div>
                </Button>
            </div> 
            <div className="vehicle-detail-subcontainer">
                <h3>{selected.name} Detail Information</h3>
                <div className="vehicle-detail-switch">
                    <Button className="vehicle-detail-button" style={section === 0 ? {backgroundColor:"#ffb600" , color:"black" } : {backgroundColor:"#2d2d2d" , color:"white"}} onClick={() => setSection(0)}>Basic Information</Button>
                    <Button className="vehicle-detail-button" style={section === 1 ? {backgroundColor:"#ffb600" , color:"black" } : {backgroundColor:"#2d2d2d" , color:"white"}} onClick={() => setSection(1)}>Paper Work</Button>
                    <Button className="vehicle-detail-button" style={section === 2 ? {backgroundColor:"#ffb600" , color:"black" } : {backgroundColor:"#2d2d2d" , color:"white"}} onClick={() => setSection(2)}>Renting Details</Button>
                </div>
                <hr className="vehicle-detail-hr"></hr>
                <div className="vehicle-detail-content">
                    {section === 0 && <BasicInfo notify={notify} basic_information={basic_information} setBasic_information={setBasic_information} setSection={setSection}/>}
                    {section === 1 && <Paper paper_work={paper_work} setPaper_work={setPaper_work} setSection={setSection}/>}
                    {section === 2 && <Renting formData={formData} notify={notify} newService={newService} setNewService={setNewService} basic_information={basic_information} paper_work={paper_work} setCurrentSection={setCurrentSection} renting_details={renting_details} setRenting_details={setRenting_details} AddService={AddService} handleClickOpen={handleClickOpen}/>}
                </div>
            </div>          
        </div>
    )
}

export default VehicleDetail
