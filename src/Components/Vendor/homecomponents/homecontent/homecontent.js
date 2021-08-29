import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core'
import p1 from "../Images/slide/slide2.jpg"
import "./homecontent.css"
import Vendor from "../Stepper/Stepper "
import Buttongrp from "../Buttongrp/buttongrp";
import Serviceweprovide from "../serviceweprovide/serviceweprovide";
import Stats from "../Stats/Stats";
import Aboutus from "../Aboutus/Aboutus";
import Carousel1 from "../carousel/carousel"
import Footer from "../../../FooterJy/Footer"

const Homecontent = ({countMatters,currentSectionService,setCurrentSectionService,setCurrentSection , setCurrentSectionProfile}) => {
    const [winsize,setwinsize]=useState(window.screen.width);
    const handleResize=()=>{
        if (window.innerWidth <1000) {
            setwinsize(window.innerWidth)
        }
        else{
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [window.screen.width])
    return (
        <>
            <div className="container1vendor1" style={{backgroundColor:'#08090C'}} >
                <Carousel1/>
                <Typography style={{textAlign:'center',fontSize:winsize >1000 ? 30:20,color:'#F9B308',marginTop:25,marginBottom:winsize>600 ?15:15}} >Vendor Approach</Typography>
                <Vendor/>
             </div>
             <div className="container1vendor" style={{backgroundColor:'#121417',paddingBottom:"2rem"}} >
             {winsize>900?<Typography style={{textAlign:'center',fontSize:winsize >1000 ? 30:28,color:'#F9B308',marginTop:"1rem",fontWeight:'500',marginBottom:"2.5rem"}} >Unit Convertor</Typography>:<div></div>}
                        <Buttongrp/>
             </div>
             <div className="container1vendor" style={{backgroundColor:'#08090C'}}>
                            <Typography style={{textAlign:'center',fontSize:winsize >1000 ? 30:28,color:'#F9B308',fontWeight:'500',marginTop:"5rem",marginBottom:"2rem"}} >Service we provide</Typography>
                            <Serviceweprovide currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection}/>
             </div> 
             <div className="container1vendor" style={{backgroundColor:'#121417'}}>
                    <Stats c='#2D2D2D' countMatters={countMatters}/>
             </div>
             <div className="container1vendor" style={{backgroundColor:'#121417'}}>
                    <Aboutus setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSection={setCurrentSection}/>
             </div>            
                       
        </>
    )
}

export default Homecontent
