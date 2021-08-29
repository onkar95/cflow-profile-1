import { Button } from '@material-ui/core'
import React from 'react'
import "./Footer.css"
import PlayStore from "../../Images/Playstore.png"
import Facebook from "../../Images/Facebook.png"
import Twitter from "../../Images/Twitter.png"
import Instagram from "../../Images/Instagram.png"
import LinkedIn from "../../Images/Linkedin.svg"
import { GrWindowsLegacy } from 'react-icons/gr'
const Footer = ({setCurrentSection,currentSectionService,setCurrentSectionService}) => {
 
    return (
        <>
        <div className="footer-main">
        <div className="footer">
            <div className="section">
                <h2 style={{fontWeight:'600',fontSize:18}}>SERVICES PROVIDED</h2>
                <Button  className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(0);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14,margin:0}}>Construction Material</span> </Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(1);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14,margin:0,padding:0}}>Agents</span></Button>
                {/* <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(0);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14}}>Construction Machines</span></Button> */}
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(2);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14}}>Commercial Vehicles</span></Button>
                <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(4);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14}}>Construction Chemicals</span></Button>
                
            </div>
            <div className="section">
                <h2 style={{fontWeight:'600',fontSize:18}}>ABOUT</h2>
                <Button className="services_button"onClick={()=>{setCurrentSection(4);window.scrollTo(0,200)}}><span style={{fontWeight:'500',fontSize:14}}>About Us</span></Button>
                <Button className="services_button"onClick={()=>{setCurrentSection(4);window.scrollTo(0,200)}}><span style={{fontWeight:'500',fontSize:14}}>Why use Construction Flow</span></Button>
            </div>
        </div>
        <div className="footer">
            <div className="section">
                <h2 style={{fontWeight:'600',fontSize:18}}>HELP</h2>
                <Button className="services_button"><span style={{fontWeight:'500',fontSize:14}}>Privacy Policy</span></Button>
                <Button className="services_button"><span style={{fontWeight:'500',fontSize:14}}>Terms and Conditions</span></Button>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems: "flex-start"}}>
                <h2 style={{fontWeight:'600',fontSize:18}}>Download Our App</h2>
                <img src={PlayStore} style={{marginTop:"1rem"}}/>
                <div className="follow">
            <h2 style={{marginTop:"1rem",color:"white",fontWeight:'600',fontSize:18}}>Follow Us :</h2>
            <div className="icons">
                <a href="https://www.facebook.com/ConstructionFlow" target="_blank"><img src={Facebook}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/company/constructionflow" target="_blank"><img src={LinkedIn}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://www.instagram.com/constructionflow_" target="_blank"><img src={Instagram}  style={{padding:"0.5rem",paddingRight:"1rem"}}/></a>
                <a href="https://twitter.com/ConstructionFlo/" target="_blank"><img src={Twitter} style={{padding:"0.5rem"}}/></a>
            </div>
           
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

export default Footer
