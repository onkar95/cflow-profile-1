import React from 'react'
import Logo from '../../Images/PopImages/cf logo-01.png';
import Saved from '../../Images/PopImages/Saved icon.png';
import { Button } from '../User/Styled/Styled';
import { useHistory } from 'react-router';

const Thanku = (props) => {
    const history=useHistory();

    const handleafter=(e)=>{
        e.preventDefault(); 
        history.push('/auth-user') 

    }

    return (
        <div style={{background:"black",width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={Logo} alt="logo" height="120px" width="400px"  />
            <img src={Saved} width="10%"  style={{display:"block",margin:"5%",marginBottom:"0px"}}/>
            <h2 style={{color:"white" ,textAlign:"center",paddingBottom:"20px"}}>{props.mssg}</h2>
            <Button  style={{background:"#FFB600",margin:"2rem 0rem",height:"4rem",width:"10rem",fontWeight:"550",textTransform:"capitalize"}} onClick={handleafter}>Ok</Button>
        </div>
    )
}

export default Thanku;