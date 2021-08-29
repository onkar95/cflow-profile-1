import { Button, Card, CardContent } from '@material-ui/core'
import React,{ useEffect, useState} from 'react'
import "./Details.css"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Status from '../../Table/Status/Status';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

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

const Reorder = ({setCurrentSection,selectedTableItem}) => {
    
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [quantity,setQuantity]=useState(selectedTableItem?.quantity)

    console.log(selectedTableItem,"selectedTableItem")
    const classes = useStyles()
    


const DeliveryAddress = selectedTableItem  ?  JSON.parse(selectedTableItem?.delivery_address):""
const DeliveryAddress1 = DeliveryAddress ?  DeliveryAddress?.city + "," + DeliveryAddress?.state : "___"
const [DeliveryDate,setDeliveryDate] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '))

    const data= selectedTableItem ?JSON.parse(selectedTableItem?.data):""
    
    const placedOn = new Date().toString().substring(0,15)
    let initial_arr={service_type:selectedTableItem?.service_type,type:selectedTableItem?.type,quantity:quantity,data:JSON.parse(selectedTableItem?.data),urgent:selectedTableItem?.urgent,delivery_address:selectedTableItem?.delivery_address,deliver_by:new Date(),trade:selectedTableItem?.trade,delivery_address:JSON.parse(selectedTableItem?.delivery_address)}
        const [newRequest,setNewRequest]=useState(initial_arr)
    useEffect(()=>{
        setNewRequest({...newRequest,quantity:quantity,deliver_by:DeliveryDate})
    },[DeliveryDate,quantity])
    const handleAccept=async()=>{
        setNewRequest({...newRequest,quantity:quantity,deliver_by:DeliveryDate})
        console.log(newRequest,"new request")
        await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,newRequest)
                .then(function (response) {   
                    console.log(response,"success")
                         })
        setCurrentSection(2)
        window.scrollTo(0,0)
    }

    return (
        <div className="details">
            <div className='breadcrumbs'>
                <h3>
                    Home / New Requests /{" "}
                    <span style={{ color: "#FFB600" }}>View Details</span>
                </h3>
            </div>
            <div className="detailscontainer">
                <h4 style={{color:"#ffb600"}}>Note* - You are only allowed to change quantity ,Delivery Date</h4>
                <div className="cards">
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Vendor Details</h3>
                    <hr style={{width:"50%",marginTop:"5px", borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent">
                                <PersonIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent">
                                <ApartmentIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent">
                                <EmailIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent">
                                <PhoneIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent">
                                <WhatsAppIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent">
                                <LocationOnOutlinedIcon/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="card1-footer">
                                Vendor details will be revealed when Order is accepted
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                {console.log(data,"REQQ")}
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div className="cardcontent">
                                <h4 className="contentkey">Order:</h4>
                                <h4 className="contentvalue">{data?.brand ?data?.brand :""}{selectedTableItem?.type}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Placed on:</h4>
                                
                                <h4 className="contentvalue">{placedOn}</h4>
                            </div>
                            {
                                data?.materials ? 
                                // console.log(data, "re")
                                <>
                                <div className="cardcontent">
                                    <h4 className="contentkey">Materials:</h4>
                                    <h4 className="contentvalue">{data?.materials}</h4>
                                </div>
                                <div className="cardcontent">
                                    <h4 className="contentkey">Labour:</h4>
                                    <h4 className="contentvalue">{data?.labour ? "Required" : "Not Required"}</h4>
                                </div>
                                <div className="cardcontent">
                                    <h4 className="contentkey">Gender:</h4>
                                    <h4 className="contentvalue">{data?.gender }</h4>
                                </div>
                                </>
                            :
                                data?.driver ?
                                    <>
                                    <div className="cardcontent">
                                    <h4 className="contentkey">Driver:</h4>
                                    <h4 className="contentvalue">{data?.driver ? "Required" : "Not Required"}</h4>
                                </div>
                                    </>
                                    :
                                <>
                                <div className="cardcontent">
                                    <h4 className="contentkey">Grade/Type:</h4>
                                    <h4 className="contentvalue">{data?.type ?data?.type :data?.grade ? data?.grade:"____"}</h4>
                                </div>
                                <div className="cardcontent">
                                    <h4 className="contentkey">Size:</h4>
                                    <h4 className="contentvalue">{data?.size ?data?.size :"____"}</h4>
                                </div>
                                </>
                            }
                            <div className="cardcontent">
                                <h4 className="contentkey">Quantity:</h4>
                                <input  value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="contentvalue" style={{background:"transparent",color:"white",border:"none",float:"right",textAlign:"end"}} autoFocus/>
                               
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Delivery Address</h4>
                                <h4 className="contentvalue">{DeliveryAddress1}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <input value={DeliveryDate} onChange={(e)=>setDeliveryDate(e.target.value)} className="contentvalue" style={{background:"transparent",color:"white",border:"none",float:"right",textAlign:"end"}} autoFocus/>
                               
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>

                                <span className="contentvalue" style={{borderRadius:"32px",backgroundColor:selectedTableItem?.urgent?"#ed4f4f":"green",width:"20%",paddingRight:"15px",paddingBottom:"5px",color:"black"}}>{selectedTableItem?.urgent?"URGENT":"FLEXIBLE"}</span>
                            </div>
                            {
                                data?.special_requirement &&
                                <>
                                <div className="cardcontent">
                                <h4 className="contentkey">Special requirement:</h4>
                                <h4 className="contentvalue">{data?.special_requirement}</h4>
                            </div>
                                </>
                            }
                            <div className="cardcontent">
                                <h4 className="contentkey">Status:</h4>
                                <h4 className="contentvalue"><Status type="pending"/></h4>
                            </div>
                            {(selectedTableItem?.type==="Cement" || selectedTableItem?.type==="RMC" || selectedTableItem?.type==="Paint & Putty") && 
                                <div className="cardcontent">
                                <h4 className="contentkey">Trade type:</h4>
                                <h4 className="contentvalue">{selectedTableItem?.trade ? "Trade": "Non-trade"}</h4>
                            </div>
                            }
                        </CardContent>
                    </ Card>
                </div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Price Details</h3>
                    <hr style={{ width:"50%",borderColor:" #ffb600",marginTop:"5px" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root} variant="outlined">
                        <CardContent className="card3content">
                            <div className="card3">
                                Price details will be displayed when you get a pitch
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                </div>
                
                <div className="buttons">
                <Button className="acceptbutton" onClick={handleAccept}>Order</Button>
                <Button className="rejectbutton" onClick={()=>setCurrentSection(2)}>Cancel</Button>

                
            </div>
            </div>
            
            
        </div>
    )
}

export default Reorder
