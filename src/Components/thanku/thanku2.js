import React,{useState} from 'react'
import Logo from '../../Images/PopImages/cf logo-01.png';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import { Button, Checkbox, TextField,Typography } from '@material-ui/core'
import PopupSaved from "../Popup/popupsaved/PopupSaved"; 

import axios from "axios";

const notify = (msg) => 
        toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderBottomColor: "#ffffff"        
        }},
        input:{
            color:"white",
            
        },
        icon:{
            fill:'white',
        }
    });

const Thanku2 = ({id,token,isUser,setIsUser}) => {
    const [open,setopen]=useState(false)
    const history=useHistory();
    const classes = useStyles();
    let temp=id;
    let temp2=token;

    const [resetdata,setresetdata]=useState({email:"",password:""})

    const handleafter =  async (e)=>{
        e.preventDefault(); 
        console.log(resetdata)
        let temp1;
        await axios.post(`${process.env.REACT_APP_URL}/user/updatepass/${resetdata.password}/${resetdata.email}`)
        .then(function(response){
            temp1=response?.data
        })

        if(temp1?.status==="not authorized user"){
            notify("Enter valid email")
        }
        else if(temp1?.status==="error"){
            notify("OOPS! Link expired please try again")
                const timeout = setTimeout( () =>
                {
                    history.push('/auth-user')
                   
                },3000)

            
        }
        else{
          setopen(true)
          const timeout = setTimeout( () =>
                {
                    if(isUser==0){
                        setIsUser(false)
                    }
                    else{
                        setIsUser(true)
                    }
                    history.push('/auth-user') 
                 
                   
                },3000)

            

        }

    }



    let temp1;


     axios.post(`${process.env.REACT_APP_URL}/user/verifyresetlink/${temp}/${temp2}`)
    .then(function (response) {            
        temp1=response?.data
      })
    
    const handlec=(e)=>{
        e.preventDefault();
        setresetdata({...resetdata,[e.target.name]:e.target.value})
    }
    const handleClickopen1 = () => {
        setopen(false);

        
    };
    

    return (
        <div style={{background:"black",width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={Logo} alt="logo" height="120px" width="400px"  />             
                <Typography style={{paddingBottom:100,fontSize:20}}> Enter your email and New password </Typography>
                <TextField name="email" placeholder="E-mail Id" type="email" style={{  width:"50%",color:"#2D2D2D", borderBottom:"2px solid #ffffff", borderBottomColor:"#ffffff", marginBottom:"2rem"}} className={classes.root} InputProps={{className: classes.input, disableUnderline: true}} onChange={handlec}></TextField>
                <TextField name="password" placeholder="New Password" type="text" style={{ paddingTop:50,width:"50%",color:"#2D2D2D", borderBottom:"2px solid #ffffff", borderBottomColor:"#ffffff", marginBottom:"2rem"}} className={classes.root} InputProps={{className: classes.input, disableUnderline: true}} onChange={handlec}></TextField>
            <Button  style={{background:"#FFB600",margin:"2rem 0rem",height:"4rem",width:"10rem",fontWeight:"550",textTransform:"capitalize"}} onClick={handleafter}>Ok</Button>
            <ToastContainer/>
            <PopupSaved title="Password has been reset" handleClickOpen={handleClickopen1} open={open} setOpen={setopen}/>
        </div>
    )
}

export default Thanku2;