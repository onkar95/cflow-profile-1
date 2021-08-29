import { Button, Card, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Details.css"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import axios from 'axios';
import pincode from "pincode-distance"
import Status from '../../../Table/Status/Status';

require('dotenv').config()


const Details1 = ({getAll,setCurrentSection,selectedRequest,setOpen}) => {
    const data=JSON.parse(selectedRequest?.data)

    console.log(selectedRequest , 'REQUEST SELECTED');
    
    const [price,setPrice]=useState(0)
    const [gst,setGst]=useState(0)
    const [deliverycharges,setDeliverycharges]=useState(0)
    const [extracharges,setExtracharges]=useState(0)

              const [winsize,setwinsize]=useState(window.screen.width);
  const [winheight,setwinheight]=useState(window.screen.height);
  const handleResize=()=>{
      if (window.innerWidth <1000) {
          setwinsize(window.innerWidth)
      }
      else{
          setwinsize(window.innerWidth)
      }
      if (window.innerHeight <1000) {
        setwinheight(window.innerHeight)
    }
    else{
      setwinheight(window.innerHeight)
    }
  }
  useEffect(() => {
      window.addEventListener("resize", handleResize)
      window.addEventListener("resize", handleResize)
      console.log(winsize,winheight,"LandingPageImage")
  }, [window.screen.width,window.screen.height])
    
    
    const useStyles = makeStyles({
    root: {
      minWidth: winsize > 450 ? 400 : 300,
    //   maxWidth:400,
    //   minHeight:300,
    //   maxHeight:300,
    //   marginTop:20,
      borderWidth:1 ,
      borderRadius:10,
      borderColor:"#2D2D2D",
      backgroundColor:"#121417"
    },
})

    
    const DeliveryAddress = JSON.parse(selectedRequest?.delivery_address)
  
    const DeliveryAddress1 = DeliveryAddress ?  DeliveryAddress?.city + "," + DeliveryAddress?.state : "___"
    const DeliveryDate = selectedRequest?.deliver_by!=="0000-00-00 00:00:00" ? selectedRequest?.deliver_by.toString().substring(0,10):JSON.parse(selectedRequest?.data)?.startDate ? JSON.parse(selectedRequest?.data)?.startDate?.slice(0,10) + " to " +JSON.parse(selectedRequest?.data)?.endDate?.slice(0,10) :"___" 
  
    const classes = useStyles()
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
const handlePitch=async()=>{
    let price_detail = {price:price , gst : gst , deliverycharges : deliverycharges , extracharges : extracharges}
    const sendingData={Pid:selectedRequest?.id,pitch_value:parseFloat(price) + parseFloat(gst)+ parseFloat(deliverycharges) + parseFloat(extracharges) , price_detail:price_detail}
    await axios.post(`${process.env.REACT_APP_URL}/user/vendor_pitched/${userId}`,sendingData)
        .then(function (response) {            
            console.log(response,"success")
          })
          getAll()
    setCurrentSection(2)     
    setOpen(true)

    window.scrollTo(0,0)
}
const handleDecline=async()=>{
    const sendingData={Pid:selectedRequest?.id}
    await axios.post(`${process.env.REACT_APP_URL}/user/vendor_rejected/${userId}`,sendingData)
        .then(function (response) {            
            console.log(response,"success")
          })
          getAll()
          
    
    setCurrentSection(2)
    window.scrollTo(0,0)
}

    return (
        <div className="details">
            <div className='breadcrumbs'>
                <h3>
                    Home / New Leads /{" "}
                    <span style={{ color: "#FFB600" }}>View Details</span>
                </h3>
            </div>
            <div className="detailscontainer">
                <div className="cards">
                    <div className="detailscontent">
                        <h3 style={{color: "#FFB600",fontWeight: "550"}}>User Details</h3>
                        <hr style={{width:"50%",marginTop:"5px", borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                        <Card className={`${classes.root} view-detail-card`} variant="outlined">
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
                                    User details will be revealed when Order is accepted
                                </div>
                            </CardContent>
                        </ Card>
                    </div>
                {/* <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={`${classes.root} view-detail-card`} variant="outlined">
                        <CardContent>
                            <div className="cardcontent">
                                <h4 className="contentkey">Order:</h4>
                                <h4 className="contentvalue">{data?.brand ?data?.brand :""}{selectedRequest?.type}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Placed on:</h4>
                                <h4 className="contentvalue"> {selectedRequest?.placed_on?.toString().substring(0,10)}</h4>
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
                                <h4 className="contentvalue"> {selectedRequest?.quantity} units</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Delivery Address:</h4>
                                <h4 className="contentvalue">{DeliveryAddress1}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <h4 className="contentvalue"> {DeliveryDate}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <span className="contentvalue" style={{borderRadius:"32px",backgroundColor:selectedRequest?.urgent?"#ed4f4f":"green",width:"20%",paddingRight:"15px",paddingBottom:"5px",color:"black"}}>{selectedRequest?.urgent?"URGENT":"FLEXIBLE"}</span>
                            </div>
                            {(selectedRequest?.type==="Cement" || selectedRequest?.type==="RMC" || selectedRequest?.type==="Paint & Putty") && 
                                <div className="cardcontent">
                                <h4 className="contentkey">Trade type:</h4>
                                <h4 className="contentvalue">{selectedRequest?.trade ? "Trade": "Non-trade"}</h4>
                            </div>
                            }
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
                                <h4 className="contentkey"></h4>
                                <h4 className="contentvalue"></h4>
                            </div>
                        </CardContent>
                    </ Card>
                </div> */}
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root}>
                        <CardContent>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>Order:</h4>
                                <h4 style={{fontWeight:'400'}}>{data?.brand ?data?.brand :""}{selectedRequest?.type}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4>Placed On:</h4>
                                <h4 style={{fontWeight:'400'}}>{selectedRequest?.placed_on?.toString().substring(0,10)}</h4>
                            </div>
                            {
                                data?.materials ?
                                <>
                                    <div className="card2-user" style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                        <h4>Materials:</h4>
                                        <h4 style={{fontWeight:'400'}}>{data?.materials}</h4>
                                    </div>
                                    <div className="card2-user" style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                        <h4>Labour:</h4>
                                        <h4 style={{fontWeight:'400'}}>{data?.labour ? "Required" : "Not Required"}</h4>
                                    </div>
                                    <div className="card2-user" style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                        <h4>Gender:</h4>
                                        <h4 style={{fontWeight:'400'}}>{data?.gender }</h4>
                                    </div>
                                </>
                                :
                                data?.driver ?
                                    <>
                                        <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                            <h4>Driver:</h4>
                                            <h4 style={{fontWeight:'400'}}>{data?.driver ? "Required" : "Not Required"}</h4>
                                        </div>
                                    </>
                                :
                                    <>
                                        <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                            <h4>Grade/Type:</h4>
                                            <h4 style={{fontWeight:'400'}}>{data?.type ?data?.type :data?.grade ? data?.grade:"____"}</h4>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                            <h4>Size:</h4>
                                            <h4 style={{fontWeight:'400'}}>{data?.size ?data?.size :"____"}</h4>
                                        </div>
                                    </>
                            }
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4 >Quantity:</h4>
                                <h4 style={{fontWeight:'400'}}>{selectedRequest?.quantity} </h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'fit-content',marginTop:'-10px'}}>
                                <h4 >Delivery Address</h4>
                                <h4 style={{fontWeight:'400'}}>{DeliveryAddress1}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4>Deliver by:</h4>
                                <h4 style={{fontWeight:'400'}}>{DeliveryDate}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'5px'}}>
                                <h4 >Deliver by:</h4>
                                <span style={{borderRadius:"32px",backgroundColor:selectedRequest?.urgent === 1 ?"#ed4f4f":"green",width:winsize > 500 ?"20%" : "25%",color:"black",display:'flex',justifyContent:'center',alignItems: 'center' , marginTop:'10px',fontSize:winsize < 450 && '0.85rem'}}>{selectedRequest?.urgent === 1 ?"URGENT":"FLEXIBLE"}</span>
                            </div>
                            {
                                data?.special_requirement &&
                                <>
                                <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'5px'}}>
                                <h4 >Special requirement:</h4>
                                <h4 style={{fontWeight:'400'}}>{data?.special_requirement}</h4>
                            </div>
                                </>
                            }
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'5px'}}>
                                <h4 >Status:</h4>
                                <h4  style={{width:winsize > 500 ? '50%' : '75%',marginTop:'40px',justifyContent:'flex-end',alignItems:'flex-end',display:'flex'}}><Status type={selectedRequest?.status}/></h4>
                            </div>
                            {
                            (selectedRequest?.type==="Cement" || selectedRequest?.type==="RMC" || selectedRequest?.type==="Paint & Putty") && 
                                <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4 >Trade type:</h4>
                                <h4 style={{fontWeight:'400'}}>{selectedRequest?.trade ? "Trade": "Non-trade"}</h4>
                            </div>
                            }
                        </CardContent>
                    </Card>

                </div>
                <div>
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550",marginTop:"3rem"}}>Pitch Value</h3>
                    <hr style={{ width:"50%",borderColor:" #ffb600",marginTop:"5px" ,backgroundColor: "#ffb600"}}></hr>
                    <div className="vendorcard3">
                        <p style={{fontSize:"1rem",marginTop:"0.5rem"}}>Your Price</p>
                        <input className="vendorcard3input" placeholder="Enter an Amount" type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <p style={{fontSize:"1rem",marginTop:"0.5rem"}}>+ GST</p>
                        <input className="vendorcard3input" placeholder="Enter a Value" type="number" value={gst} onChange={(e)=>setGst(e.target.value)}/>
                        <p style={{fontSize:"1rem",marginTop:"0.5rem"}}>+ Delivery Charges</p>
                        <input className="vendorcard3input" placeholder="Enter an Amount" type="number" value={deliverycharges} onChange={(e)=>setDeliverycharges(e.target.value)}/>
                        <p style={{fontSize:"1rem",marginTop:"0.5rem"}}>Extra Charges</p>
                        <input className="vendorcard3input" placeholder="Enter an Amount" type="number" value={extracharges} onChange={(e)=>setExtracharges(e.target.value)}/>
                        <hr style={{marginTop:"1rem",width:"100%",backgroundColor:"#2d2d2d",height:"2px",border:"none"}}></hr>
                    <br></br>
                <input className="vendorcard3input" placeholder="Total Amount" disabled value={parseFloat(price) + parseFloat(gst)+ parseFloat(deliverycharges) + parseFloat(extracharges) }/>
                    </div>
                    
                </div> 
               
                </div>
            </div>                
            <div className="buttons">
                <Button className="acceptbutton" onClick={handlePitch}>Pitch</Button>
                <Button className="rejectbutton" onClick={handleDecline}>Decline</Button>                   
            </div>
            </div>
            
            
            
        </div>
    )
}

export default Details1
