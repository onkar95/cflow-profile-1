import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import "./HomeUser.css"

const Navbar = ({sections ,currentSection,setCurrentSection,sections_logo_black,sections_logo_white,setIsToggled}) => {
    return (
            <div className="home-user-sections">
                <div style={{display:"flex",width:"100%",height:'100%'}}>
                    {
                    sections.map((section,index) => (
                            <div  className="home-user-section" style={currentSection === index ? {backgroundColor:"#ffb600",color:"black"}:{backgroundColor:"transparent"}} onClick={() => setCurrentSection(index)} key={index} >
                                <img src={currentSection === index ? sections_logo_black[index] :sections_logo_white[index]} style={{marginRight:"0.5rem"}}/>
                                {section}
                            </div>
                            
                    ))
                    }
                </div>                          
            </div>  
        
    )
}

export default Navbar
