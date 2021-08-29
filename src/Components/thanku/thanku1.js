import React,{useEffect} from 'react'
import Logo from '../../Images/PopImages/cf logo-01.png';
import Saved from '../../Images/PopImages/Saved icon.png';
import { Button } from '../User/Styled/Styled';
import { useHistory } from 'react-router';
import axios from "axios";

const Thanku1 = ({id,token,isUser,setIsUser}) => {
    const history=useHistory();
    let temp=id;
    let temp2=token;
    let temp3=isUser;


    const handleafter= (e)=>{
        e.preventDefault(); 
        console.log(isUser,"isUser");
        history.push('/auth-user') 

    }
    let temp1;
    if(isUser==0){
        setIsUser(false)
    }
    else{
        setIsUser(true)
    }



    const send_details=async(e)=>{
    await axios.post(`${process.env.REACT_APP_URL}/user/verifing/${temp}/${temp2}/${temp3}`)
    .then(function (response) {            
        temp1=response?.data
      })
    }
    
    useEffect(() => {
        send_details();
    }, [temp,temp1])

    return (
        <div style={{background:"black",width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={Logo} alt="logo" height="120px" width="400px"  />
            <img src={Saved} width="10%"  style={{display:"block",margin:"5%",marginBottom:"0px"}}/>
            <h2 style={{color:"white" ,textAlign:"center",paddingBottom:"20px"}}>Your Email is Verified!!</h2>
            <Button  style={{background:"#FFB600",margin:"2rem 0rem",height:"4rem",width:"10rem",fontWeight:"550",textTransform:"capitalize"}} onClick={handleafter}>Ok</Button>
        </div>
    )
}

export default Thanku1;