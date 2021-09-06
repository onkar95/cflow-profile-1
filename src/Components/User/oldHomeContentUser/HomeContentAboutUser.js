import { Button } from '@material-ui/core'
import React from 'react'

import AboutUs from '../../../Images/AboutUs.jpg'
import "./HomeContentUser.css"
const HomeContentAboutUser = ({handleAbout}) => {
    return (
        <div className="home-content-aboutuser">
        <div className="home-content-about-imageuser">
        <img src={AboutUs} alt="cement" height="100%" width="100%" style={{objectFit:"cover"}}/>                
        </div>
            <div className="home-content-aboutususer">
                <h2 className="home-content-about-user-h2" style={{color:"#ffb600",fontWeight:"600",fontSize:24}}>About us</h2>
                <p className="home-content-about-user-p" style={{align:"center",justifyContent:"center",fontWeight:"400",fontSize:16,width:"90%"}}>Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites.</p>
                <Button className="btn-learn-more" style={{backgroundColor:"#ffb600",color:"black",width:219,textTransform:"capitalize",height:48,marginTop:"5%",fontSize:16,fontWeight:"600",borderRadius:"3px"}} onClick={handleAbout} className="btn-learn-more">Learn More</Button>
            </div>
    </div>
    )
}

export default HomeContentAboutUser
