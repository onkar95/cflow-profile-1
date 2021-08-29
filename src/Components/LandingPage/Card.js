import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import { Button, Card,  CardMedia, Typography } from '@material-ui/core'
const Card1 = ({setIsUser,img,title}) => {
    return (
        
            <Card className="vendor_card" onClick={() => {title==="Vendor"?setIsUser(false):setIsUser(true)}} component={Link} to={title==="Vendor"?"/home-vendor":"home-user"}>      
                      <CardMedia
                        className="vendor_icon"
                        image={img}
                        title={title}
                        // style={{width:"200px",height:"200px",marginBottom:"2rem"}}
                      />      
                      <Button size="small" color="primary" className="title-button" style={{color:"#FFB600",textTransform:"capitalize",fontSize:"1.75rem",marginBottom:"-5px",fontWeight:"600"}}>
                        {title}
                      </Button>
                      <Typography gutterBottom className="landingpage-signin" style={{color:"white",padding:"0px 1px",textAlign:"center",fontWeight:"600"}}>
                        SignIn as a {title}
                      </Typography>     
                    </Card>
        
    )
}

export default Card1
