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

function TMT({setModalOpen,newRequest,setNewRequest,data,setData,quantity,setQuantity,setOpenSaved,currentUnit,setCurrentUnit}) {
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()

  const brands = ["TATA TMT Steel " , "Vizag TMT Steel" , "Jindal TMT Steel " , "Simhadri TMT Steel","Mangal TMT Steel" , "Essar Steel","Mesco Steel","SRMB Steel" , "SAIL Steel"  ,"Kamdhenu Steel","Vinayak Steel","Visa Steel"]
  

  const types = ["Fe 450" , "Fe 500","Fe 500D","Fe 550","Fe 550D" ]
 
  const sizes = ["8 mm",
  "10 mm",
  "12 mm",
  "16 mm",
  "18 mm",
  "20 mm","22 mm","25 mm","32 mm","36 mm"]
  const [trade, setTrade] = React.useState('trade');
  const trades=["Trade","Non-Trade"]
  const [selectedbrand,setSelectedBrand]=useState(null)
  const [selectedtype,setSelectedType]=useState(null)
  const [selectedsize,setSelectedSize]=useState(null)
  const units=["Ton","Metric ton","kilogram(kg)"]
    let quantitywithunit
    useEffect(()=>{
        quantitywithunit=quantity + " " + currentUnit
        setNewRequest({...newRequest,quantity:quantitywithunit})
    },[currentUnit,quantity])

    useEffect(() => {
        setNewRequest({...newRequest,trade: trade==="Trade"?true:false})
        console.log(trade)
      },[trade])

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
  if(selectedbrand===null||selectedtype===null||selectedtype===null){
      notify('Please select something');

  }
  else{
    setModalOpen(true)

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
                // borderRadius: "5px 5px 0 0",
                color:"white"
        }
    },
    formControl1: {
        //   margin: theme.spacing(1),
        marginRight: theme.spacing(2),
        minWidth: "9%",
        
        backgroundColor: "#08090C",
        color:"white",
        height:"100%",
    
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                // borderRadius: "5px 5px 0 0",
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


    const handleCart=async(e)=>{
        e.preventDefault()
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if((selectedbrand!==null && selectedtype!==null && selectedsize!==null)){
                setNewRequest({...newRequest,quantity:quantity})
                
                
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setQuantity(0)
                 setSelectedBrand(null)
                 setSelectedType(null)
                 setSelectedSize(null)
            }
            else{
                notify('Please select something');
            }
        }
        
        

    }
  useEffect(() => {
    setData({brand:selectedbrand,type:selectedtype,size:selectedsize})
    
  },[selectedbrand,selectedtype,selectedsize])

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
                                    Brand
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {brands.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedBrand(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input ` }
                                InputProps={{ disableOutline: true,classes:{icon:classes.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Size
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {sizes.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedSize(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input ` }
                                InputProps={{ disableOutline: true,classes:{icon:classes.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                   Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {trades.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                              setTrade(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
      </div>
                {(selectedbrand!==null && selectedtype!==null && selectedsize !== null)
                    && 

                    <div className="quantity" style={{marginTop:"2%",height:"80px",display:"flex",justifyContent:"flex-start",alignItems: "center",borderRadius:"10px"}}>
                         <TextField id="outlined-basic20" type="number" value={quantity} style={{backgroundColor:"#08090C",width:"12%",height:"100%",color:"white"}} onChange={(e)=>setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{className: classes.input}} placeholder="Quantity" variant="outlined" />                       
                         <FormControl
                                variant='outlined'
                                className={classes.formControl1}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' name="Units" placeholder="Unit" style={{color:"white"}}>
                                    Units
                                </InputLabel>
                                <Select
                               
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"#ffb600"}}
                                >
                                    {units?.map((filter, index) => (
                                        <MenuItem
                                            style={{color:"white"}}
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setCurrentUnit(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                    </div>
                }
                <div className="cement-bottom-buttons" style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                <Button variant="contained" className="tmt-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button variant="contained" className="tmt-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal}>
                    Request
                </Button>
                </div>
        <ToastContainer />

    </div>
    )
}

export default TMT
