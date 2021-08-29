import { Button, Card, CardContent } from '@material-ui/core'
import React from 'react'
import "./Details.css"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Status from "../../Table/Status/Status";

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

const DetailHistoryAccepted = ({setCurrentSection}) => {
    const classes = useStyles()
const handleAccept=()=>{
    setCurrentSection(2)
    window.scrollTo(0,0)
}

    return (
        <div className="details">
            <div className='breadcrumbs'>
                <h3>
                    Home / History /{" "}
                    <span style={{ color: "#FFB600" }}>View Details</span>
                </h3>
            </div>
            <div className="detailscontainer">
                <div className="cards">
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Vendor Details</h3>
                    <hr style={{width:"50%",marginTop:"5px", borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent1">
                                <PersonIcon style={{marginRight:"2%"}}/>
                                <h4>Ramesh S.</h4>
                            </div>
                            <div className="cardcontent1">
                                <ApartmentIcon style={{marginRight:"2%"}}/>
                                <h4>Apartment</h4>
                            </div>
                            <div className="cardcontent1">
                                <EmailIcon style={{marginRight:"2%"}}/>
                                <h4>Email</h4>
                            </div>
                            <div className="cardcontent1">
                                <PhoneIcon style={{marginRight:"2%"}}/>
                                <h4>987654321</h4>
                            </div>
                            <div className="cardcontent1">
                                <WhatsAppIcon style={{marginRight:"2%"}}/>
                                <h4>123456789</h4>
                            </div>
                            <div className="cardcontent1">
                                <LocationOnOutlinedIcon style={{marginRight:"2%"}}/>
                                <h4>Location</h4>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent">
                                <h4 className="contentkey">Order:</h4>
                                <h4 className="contentvalue">Ultratech Cement</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Placed on:</h4>
                                <h4 className="contentvalue"> 08 April,2021</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Type:</h4>
                                <h4 className="contentvalue"> OPC 53</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Quantity:</h4>
                                <h4 className="contentvalue"> 20 bags</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Delivery Address:</h4>
                                <h4 className="contentvalue"> Lorem ips dolor sit amet</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <h4 className="contentvalue"> 10 April,2021</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <span className="contentvalue" style={{borderRadius:"32px",backgroundColor:"#ed4f4f",width:"20%",paddingRight:"15px",paddingBottom:"5px",color:"black"}}>URGENT</span>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Status:</h4>
                                <div><Status type="completed" style={{width:"100%"}}/></div>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Price Details</h3>
                    <hr style={{ width:"50%",borderColor:" #ffb600",marginTop:"5px" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                         <CardContent>
                            <div className="cardcontent">
                                <h4 className="contentkey">Price</h4>
                                <h4 className="contentvalue"> 10,400</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">+ GST</h4>
                                <h4 className="contentvalue"> 10%</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">+ Delivery Charges</h4>
                                <h4 className="contentvalue"> 500</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Extra Charges</h4>
                                <h4 className="contentvalue"> 700</h4>
                            </div>
                            <hr style={{ width:"100%",borderColor:" #fff" ,backgroundColor: "#fff",marginTop:"2rem"}}></hr>
                            <div className="cardcontent">
                                <h4 className="contentkey" style={{fontSize:"1.2rem",fontWeight:"700"}}>Grand Total</h4>
                                <h4 className="contentvalue" style={{fontSize:"1.2rem",fontWeight:"700"}}> 13,000</h4>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                </div>
                
                <div className="buttons">
                <Button className="acceptbutton" onClick={handleAccept}>OK</Button>

                
            </div>
            </div>
            
            
        </div>
    )
}

export default DetailHistoryAccepted
