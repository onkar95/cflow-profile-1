import React from 'react'
import EditImage from '../../../Images/edit.png'
import MailImage from '../../../Images/mail.png'
import FileImage from '../../../Images/file.png'
import CheckCircleImage from '../../../Images/check-circle.png'
import "./HomeContentUser.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const HomeContentHow = () => {
    return (
        <div className="home-content-how">
        <h1 className="home-content-how-title">How It Works</h1>
        <div className="home-content-how-icons">
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                <img src={EditImage} className="home-content-how-icon"/>
                <h4 style={{color:"white",fontSize:18,fontWeight:"600",margin:0,textAlign:"center"}}>Select Your Requirement</h4>                         
            </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}}>
                    <ArrowForwardIcon className="arrow-icon"/>
                </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src={MailImage} style={{color:"#ffb600",fontSize:"5rem",marginBottom:"1rem"}}/>
                <h4 style={{color:"white",paddingTop:"1rem",fontSize:18,fontWeight:"600",margin:0,textAlign:"center"}}>Post Your Needs</h4>                         
            </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}}>
                    <ArrowForwardIcon className="arrow-icon"/>
                </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src={FileImage} style={{color:"#ffb600",fontSize:"5rem",marginBottom:"1rem"}}/>
                <h4 style={{color:"white",paddingTop:"1rem",fontSize:18,fontWeight:"600",margin:0,textAlign:"center"}}>Get Free Multiple Quotes</h4>                         
            </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}}>
                    <ArrowForwardIcon className="arrow-icon"/>
                </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src={CheckCircleImage} style={{color:"#ffb600",fontSize:"5rem",marginBottom:"1rem"}}/>
                <h4 style={{color:"white",paddingTop:"1rem",fontSize:18,fontWeight:"600",margin:0,textAlign:"center"}}>Choose The Right Vendor</h4>                         
            </div>
            
        </div>
</div>
    )
}

export default HomeContentHow
