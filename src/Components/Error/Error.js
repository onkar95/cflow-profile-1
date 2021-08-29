import React from 'react'
import Logo from '../../Images/PopImages/cf logo-01.png';
import Error404 from '../../Images/PopImages/Error404.png';

const Error = () => {

    return (
        <div style={{background:"black",width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={Logo} alt="logo" height="120px" width="400px"  />
            <img src={Error404} width="40%"  style={{display:"block",margin:"5%",marginBottom:"0px"}}/>
            <h2 style={{color:"white" ,textAlign:"center",paddingBottom:"20px"}}>Woops! Looks like this page doesn't exist</h2>
        </div>
    )
}

export default Error