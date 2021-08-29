import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Styles.css"
import {FormControl,Select, TextField} from '@material-ui/core';
import {  InputLabel, MenuItem  } from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom"
import axios from 'axios';

function Pipes({setModalOpen,newRequest,setNewRequest,data,setData,quantity,setQuantity,setOpenSaved}) {
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()
  const types = ["Galvanized Iron Pipes","Polythene Pipes","Concrete Pipes","Cast Iron Pipes","Stoneware Pipes","PVC Pipes","PVC Suction Pipes","UPVC Pipes" , "HDPE Pipes" , "Asbestos Cement Pipes" , "Mild Steel Pipes"]
  const [selectedtype,setSelectedType]=useState(null)
  
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

const handlemodal=()=>{
             if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
  if(selectedtype===null){
      notify('Please select something');

  }
  else{
    setModalOpen(true)

  }
}
}

    const handleCart=async(e)=>{
        e.preventDefault()
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if((selectedtype!==null)){
                setNewRequest({...newRequest,quantity:quantity})
                
                
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setQuantity(0)
                 setSelectedType(null)
            }
            else{
                notify('Please select something');
            }
        }
        
        

    }

  const useStyles = makeStyles((theme) => ({
    formControl: {
        //   margin: theme.spacing(1),
        marginRight: theme.spacing(2),
        // minWidth: 200,
        
        backgroundColor: "#08090C",
        color:"white",
        height:"100%",
    
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color:"white"
        }
    },
    icon:{
      fill:"#ffb600"
    },
                        root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"        
                }},
                input:{
                    color:"white"
                },
                overflow:"hidden"
}));
  useEffect(() => {
    setData({type:selectedtype})
    
  },[selectedtype])

  const classes = useStyles()


  

  
    return (
        <div style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
            <div className="sand-form">
            <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input ` }
                                InputProps={{ disableOutline: true,classes:{icon:classes.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Types
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {types.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedType(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                
     
      </div>
                {(selectedtype!==null)
                    && 

                    <div className="quantity" style={{marginTop:"2%",width:"30%",height:"80px"}}>
                         <TextField id="outlined-basic20" type="number" value={quantity} style={{backgroundColor:"#08090C",width:"100%",height:"100%",borderRadius:"10px",color:"white"}} onChange={(e)=>setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{className: classes.input}} placeholder="Quantity" variant="outlined" />                       
                    </div>
                }
                <div className="pipes-bottom-buttons"  style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                <Button className="pipes-cart-button" variant="contained" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button className="pipes-cart-button"  variant="contained" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal}>
                    Request
                </Button>
                </div>
        <ToastContainer />
    </div>
    )
}

export default Pipes
