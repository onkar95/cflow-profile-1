import { Button } from '@material-ui/core'
import React from 'react'
import "./FooterVendor.css"
import PlayStore from "../../Images/Playstore.png"
import Facebook from "../../Images/Facebook.png"
import Twitter from "../../Images/Twitter.png"
import Instagram from "../../Images/Instagram.png"
import LinkedIn from "../../Images/Linkedin.svg"
import { GrWindowsLegacy } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const FooterVendor = ({setCurrentSection , setCurrentSectionService , setCurrentSectionProfile}) => {
 
    return (
        <>
        <div className="footer">
            <div className="section">
                <h2>SERVICES PROVIDED</h2>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(0);window.scrollTo(0,300)}}>Construction Material </Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(1);window.scrollTo(0,300)}}>Agents</Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(0);window.scrollTo(0,300)}}>Construction Machines</Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(2);window.scrollTo(0,300)}}>Commercial Vehicles</Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(4);window.scrollTo(0,300)}}>Construction Chemicals</Button>
                
            </div>
            <div className="section">
                <h2>About</h2>
                <Button className="services_button"onClick={()=>{setCurrentSection(3);setCurrentSectionProfile(4);window.scrollTo(0,200)}}>About Us </Button>
                <Button className="services_button"onClick={()=>{setCurrentSection(3);setCurrentSectionProfile(4);window.scrollTo(0,200)}}>Why use Construction Flow</Button>
            </div>
            <div className="section">
                <h2>Help</h2>
                <Button className="services_button">Privacy Policy </Button>
                <Button className="services_button">Terms and Conditions</Button>
            </div>
            <div className="section">
                Download Our App
                <img src={PlayStore} style={{marginTop:"1rem"}}/>
                <div className="follow">
            <h2 style={{marginTop:"0.5rem",color:"white"}}>Follow Us :</h2>
            <div className="icons">
                <a href="https://www.facebook.com/ConstructionFlow" target="_blank"><img src={Facebook}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/company/constructionflow" target="_blank"><img src={LinkedIn}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://www.instagram.com/constructionflow" target="_blank"><img src={Instagram}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://twitter.com/ConstructionFlo/" target="_blank"><img src={Twitter} style={{padding:"0.5rem"}}/></a>
            </div>
           
            </div>
            </div>
            

            
        </div>
        <div className="Footer-CopyRights">
                <div className="copyrightfooter">Copyrights Reserved</div>
                <div className="con-flow">Construction Flow</div>
        </div>
        </>
    )
}

export default FooterVendor
