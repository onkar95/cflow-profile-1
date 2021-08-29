import { Button, Card, CardContent, makeStyles } from '@material-ui/core'
import React from 'react'
import './ViewDetailVehicles.css'
// import "../../../../Leads/leadscomponents/Table/Details.css"
// import Status from "../../../Table/Status/Status"

const useStyles = makeStyles({
    root: {
      minWidth: 400,
      maxWidth:400,
      minHeight:275,
      maxHeight:400,
      marginTop:20,
      borderWidth:1 ,
      borderRadius:10,
      borderColor:"#2D2D2D",
      backgroundColor:"#121417"
    },
})

const ViewDetailVehicles = ({displayVehicle , setCurrentSection}) => {

    console.log(displayVehicle , 'displayVehicle')
    const classes = useStyles()
    const handleAccept=()=>
    {
        setCurrentSection(1)
        window.scrollTo(0,235)
    }

    return (
        <div className="details">
            <div className='breadcrumbs'>
                <h3>
                    Services / Vehicle Details /{" "}
                    <span style={{ color: "#FFB600" }}>View Details</span>
                </h3>
            </div>
            <div className="detailscontainer">
                <div className="cards">
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Basic Information</h3>
                    <hr style={{width:"50%",marginTop:"5px", borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes?.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent1">
                                <h4 className="contentkey" ><b>Product Name:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.product_name }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Model Name:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.model_name }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Current Location:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.current_location }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Brand Name:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.brand_name }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>MFG Year:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.MFG_year }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Other Specifications:</b></h4>
                               <h4 className="content-h4">{ displayVehicle?.info[0]?.basic_information?.another_specification }</h4>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Paper Work</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent style={{paddingLeft:'10%'}}>
                            <div className="cardcontent">
                                <h4 className="contentkey"><b>Following Documents are available:</b></h4>
                            </div>
                            <div className="cardcontent">
                            <ul>
                                {
                                    displayVehicle?.info[0]?.paper_work?.map((doc,index) => <li style={{color:'white'}}>{doc}</li>)
                                }
                            </ul>
                            </div>

                        </CardContent>
                    </ Card>
                </div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Renting Details</h3>
                    <hr style={{ width:"50%",borderColor:" #ffb600",marginTop:"5px" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Driver:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.renting_details?.with_driver ? "Yes" : "No" }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>Start Date:</b></h4>
                                <h4 className="content-h4">{ displayVehicle?.info[0]?.renting_details?.start_date.slice(0,10) }</h4>
                            </div>
                            <div className="cardcontent1">
                                <h4 className="contentkey"><b>End Date:</b></h4>
                               <h4 className="content-h4">{ displayVehicle?.info[0]?.renting_details?.end_date.slice(0,10) }</h4>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                </div>
                
                <div className="buttons">
                <Button className="acceptbutton" onClick={handleAccept}>Confirm</Button>

                
            </div>
            </div>
            
            
        </div>
    )
}

export default ViewDetailVehicles;
