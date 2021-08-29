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
import Status from "../../Table/Status/Status"



const DetailDeclined = ({setCurrentSection,selectedTableItem}) => {
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
    console.log(selectedTableItem,"selectedTableItem-declined")

    const useStyles = makeStyles({
    root: {
      minWidth: winsize > 450 ? 400 : 300,
    //   maxWidth:400,
    //   minHeight:275,
    //   maxHeight:400,
    //   marginTop:20,
      borderWidth:1 ,
      borderRadius:10,
      borderColor:"#2D2D2D",
      backgroundColor:"#121417"
    },
})
    const classes = useStyles()
const handleAccept=()=>{
    setCurrentSection(2)
    window.scrollTo(0,0)
}
const DeliveryAddress = selectedTableItem  ?  JSON.parse(selectedTableItem?.delivery_address):""
const DeliveryAddress1 = DeliveryAddress ?  DeliveryAddress?.city + "," + DeliveryAddress?.state : "___"
const DeliveryDate = selectedTableItem?.deliver_by!=="0000-00-00 00:00:00" ? selectedTableItem?.deliver_by.toString().substring(0,10):JSON.parse(selectedTableItem?.data)?.startDate ? JSON.parse(selectedTableItem?.data)?.startDate?.slice(0,10) + " to " +JSON.parse(selectedTableItem?.data)?.endDate?.slice(0,10) :"___" 


    const data= selectedTableItem ?JSON.parse(selectedTableItem?.data):""
    const price_detail = selectedTableItem ? JSON.parse(selectedTableItem?.price_detail):""

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
                    <Card className={`${classes.root} view-detail-card`} variant="outlined">
                        <CardContent>
                            <div className="cardcontent1">
                                <PersonIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent1">
                                <ApartmentIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent1">
                                <EmailIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent1">
                                <PhoneIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent1">
                                <WhatsAppIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                            <div className="cardcontent1">
                                <LocationOnOutlinedIcon style={{marginRight:"2%"}}/>
                                <input disabled style={{backgroundColor:"#2d2d2d",width:"90%",marginLeft:"2%",float:"left"}}/>
                            </div>
                        </CardContent>
                    </ Card>
                </div>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={classes.root}>
                        <CardContent>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>Order:</h4>
                                <h4 style={{fontWeight:'400'}}>{data?.brand ?data?.brand :""}{selectedTableItem?.type}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4>Placed On:</h4>
                                <h4 style={{fontWeight:'400'}}>{selectedTableItem?.placed_on.slice(0,10)}</h4>
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
                                <h4 style={{fontWeight:'400'}}>{selectedTableItem?.quantity}</h4>
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
                                <span style={{borderRadius:"32px",backgroundColor:selectedTableItem?.urgent === 1 ?"#ed4f4f":"green",width:winsize > 500 ?"20%" : "25%",color:"black",display:'flex',justifyContent:'center',alignItems: 'center' , marginTop:'10px',fontSize:winsize < 450 && '0.85rem'}}>{selectedTableItem?.urgent === 1 ?"URGENT":"FLEXIBLE"}</span>
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
                                <h4  style={{width:winsize > 500 ? '50%' : '75%',marginTop:'40px',justifyContent:'flex-end',alignItems:'flex-end',display:'flex'}}><Status type={selectedTableItem?.product_status}/></h4>
                            </div>
                            {
                            (selectedTableItem?.type==="Cement" || selectedTableItem?.type==="RMC" || selectedTableItem?.type==="Paint & Putty") && 
                                <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px',marginTop:'-10px'}}>
                                <h4 >Trade type:</h4>
                                <h4 style={{fontWeight:'400'}}>{selectedTableItem?.trade ? "Trade": "Non-trade"}</h4>
                            </div>
                            }
                        </CardContent>
                    </Card>

                </div>
                {/* <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Order Details</h3>
                    <hr style={{ width:"50%",marginTop:"5px",borderColor:" #ffb600" ,backgroundColor: "#ffb600"}}></hr>
                    <Card className={`${classes.root} view-detail-card`} variant="outlined">
                        <CardContent>
                            <div className="cardcontent">
                                <h4 className="contentkey">Order:</h4>
                                <h4 className="contentvalue">{data?.brand ?data?.brand :""}{selectedTableItem?.type}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Placed on:</h4>
                                <h4 className="contentvalue">{selectedTableItem?.placed_on.slice(0,10)}</h4>
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
                                <h4 className="contentvalue">{selectedTableItem?.quantity}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Delivery Address</h4>
                                <h4 className="contentvalue">{DeliveryAddress1}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Deliver by:</h4>
                                <h4 className="contentvalue">{DeliveryDate}</h4>
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
                                <h4 className="contentvalue"><Status type="rejectedPitch"/></h4>
                            </div>
                            {(selectedTableItem?.type==="Cement" || selectedTableItem?.type==="RMC" || selectedTableItem?.type==="Paint & Putty") && 
                                <div className="cardcontent">
                                <h4 className="contentkey">Trade type:</h4>
                                <h4 className="contentvalue">{selectedTableItem?.trade ? "Trade": "Non-trade"}</h4>
                            </div>
                            }
                        </CardContent>
                    </ Card>
                </div> */}
                <div className="detailscontent">
                    <h3 style={{color: "#FFB600",fontWeight: "550"}}>Price Details</h3>
                    <hr style={{ width:"50%",borderColor:" #ffb600",marginTop:"5px" ,backgroundColor: "#ffb600"}}></hr>
<Card className={classes.root} variant="outlined" style={{minWidth:'500'}}>
                        <CardContent>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>Price</h4>
                                <h4 style={{fontWeight:'400'}}>{price_detail?.price}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>+ GST</h4>
                                <h4 style={{fontWeight:'400'}}>{price_detail?.gst}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>+ Delivery Charges</h4>
                                <h4 style={{fontWeight:'400'}}>{price_detail?.deliverycharges}</h4>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',color:'white',height:'40px'}}>
                                <h4>+ Extra Charges</h4>
                                <h4 style={{fontWeight:'400'}}>{price_detail?.extracharges}</h4>
                            </div>
                            {/* <div className="cardcontent">
                                <h4 className="contentkey">Price</h4>
                                <h4 className="contentvalue">{price_detail?.price}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">+ GST</h4>
                                <h4 className="contentvalue">{price_detail?.gst}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">+ Delivery Charges</h4>
                                <h4 className="contentvalue">{price_detail?.deliverycharges}</h4>
                            </div>
                            <div className="cardcontent">
                                <h4 className="contentkey">Extra Charges</h4>
                                <h4 className="contentvalue">{price_detail?.extracharges}</h4>
                            </div> */}
                            <hr style={{ width:"100%",borderColor:" #fff" ,backgroundColor: "#fff",marginTop:"2rem"}}></hr>
                            <div className="cardcontent">
                                <h4 className="contentkey" style={{fontSize:"1.2rem",fontWeight:"700"}}>Grand Total</h4>
                                <h4 className="contentvalue" style={{fontSize:"1.2rem",fontWeight:"700"}}>{selectedTableItem?.pitch_value}</h4>
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

export default DetailDeclined
