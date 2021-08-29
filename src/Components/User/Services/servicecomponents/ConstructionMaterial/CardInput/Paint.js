import React ,{useEffect, useState} from 'react'
import "./Styles.css"
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,Select} from '@material-ui/core';
import {  InputLabel, MenuItem  } from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom"
import axios from 'axios';

function Paint({setModalOpen,setData,newRequest,setNewRequest,setOpenSaved}) {
    const [active, setActive] = useState(0)
      const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()



  const surfaces = ["Interior" , "Exterior"  , "Floor Paint"  , "Tile Paint"]
 

  
  const brands = ["Berger Paints","Nippon Paints" , "Kansai Nerolac Paints", "Asian Paints" , "Indigo Paints", "Dulux Paints" , "Shalimar Paints" , "Jenson and Nicholson"]
  
  const types = ["Enamel Paint","Oil Paint","Emulsion Paint","Cement Paint","Bituminous Paint","Plastic Paint","Anti - Corrosive Paint","Cellulose Paint"]
  
  const puttybrands = ["Birla Wall Putty","JK Protomax Acrylic Wall Putty","JK Cement","Iris Paint Wall Putty","Asian paints","Bird White","Dulux Paint","V V Paints"]
  
  const puttytypes = ["White Cement Wall Putty","Acrylic Wall Putty","POP"]

  const [selectedbrand,setSelectedBrand]=useState(null)
  const [selectedtype,setSelectedType]=useState(null)
  const [selectedsurface,setSelectedSurface]=useState(null)
  const [selectedputtybrand,setSelectedPuttybrand]=useState(null)
  const [selectedputtytype,setSelectedPuttytype]=useState(null)
  const [trade, setTrade] = React.useState('trade');
  const [trade1, setTrade1] = React.useState('trade');
  const trades=["Trade","Non-Trade"]
  const trades1=["Trade","Non-Trade"]
  useEffect(() => {
    setNewRequest({...newRequest,trade: trade==="Trade"?true:false})
    console.log(trade)
  },[trade])
  useEffect(() => {
    setNewRequest({...newRequest,trade: trade1==="Trade"?true:false})
    console.log(trade)
  },[trade1])

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




  
  useEffect(() => {
    setData({paint:{brand:selectedbrand,type:selectedtype,size:selectedsurface,color:color}})
    
    
  },[selectedbrand,selectedtype,selectedsurface])
  
  useEffect(() => {
    setData({putty:{brand:selectedputtybrand,type:selectedputtytype}})
    
    
  },[selectedputtybrand,selectedputtytype])
const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"        
        }},
        
        input:{
            color:"white"
        },
        overflow:"hidden",
        
    });
    const useStyles1 = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: 200,
            
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
        }
    }));

  const [color,setColor] = useState("")
  const classes = useStyles()
  const classes1 = useStyles1()

  const handlemodal=()=>{
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
            {
            if(selectedbrand===null||selectedtype===null||selectedsurface===null||color==="")
            {   console.log("fill")
                notify('Please fill all the details');
            }
            else
            {   

                setModalOpen(true)
      
            }
            }
  
}
const handleCart=async()=>{
    if(userId === undefined)
    {
        // alert('Please Login');
        history.push('/auth-user')
    }
    else
        {
        if(selectedbrand===null||selectedtype===null||selectedsurface===null||color==="")
        {
            console.log("fill")
            notify('Please fill all the details');
        }
        else
        {   
               
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setSelectedBrand(null)
                 setSelectedType(null)
                 setSelectedSurface(null)
        }
        }

}
const handlemodal1=()=>{
    if(userId === undefined)
    {
        // alert('Please Login');
        history.push('/auth-user')
    }
    else
        {
        if(selectedputtybrand===null||selectedputtytype===null)
        {
            notify('Please fill all the details');
        }
        else
        {   

            setModalOpen(true)
  
        }
        }

}
const handleCart1=async()=>{
    if(userId === undefined)
    {
        // alert('Please Login');
        history.push('/auth-user')
    }
    else
        {
        if(selectedputtybrand===null||selectedputtytype===null)
        {
            notify('Please fill all the details');
        }
        else
        {       console.log(newRequest,"add to cart")
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setSelectedPuttybrand(null)
                 setSelectedPuttytype(null)
              
        }
        }

}



  
    return (
        <div style={{width:"100%",display:"flex",height:"300px",flexDirection:"column",marginBottom:"0%"}}>
                <div style={{width:"100%",display:"flex",height:"60px"}}>
                    <Button variant="contained"  style={{textTransform:"capitalize",height:"100%",width:"15rem",borderRadius:"10px",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)",backgroundColor: active?"#08090C":"#ffb600",color: active?"#fff":"#000"}} onClick={()=>setActive(0)}>
                        Paint
                    </Button>
                    <Button variant="contained" style={{textTransform:"capitalize",height:"100%",width:"15rem",borderRadius:"10px",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)",backgroundColor: !active?"#08090C":"#ffb600",color: !active?"#fff":"#000",marginLeft:"3%"}} onClick={()=>setActive(1)}>
                        Putty
                    </Button>
                </div>
                <div style={{width:"100%",display:"flex",height:"180px",marginTop:"2%"}}>
                    {!active ?
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%"}}>
                            <div style={{display:"flex",justifyContent:"space-between",width:"90%",height:"45%"}}>
                            <FormControl
                                variant='outlined'
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Brand
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
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
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Types
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
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
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Surface
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {surfaces.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedSurface(filter)
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
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
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
                            <div style={{marginTop:"2%"}}>
                                <TextField id="outlined-basic" placeholder="Enter Color Code or Name"  variant="outlined" value={color} onChange={(e) => setColor(e.target.value)} className={classes.root} style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px" }} InputProps={ {  className: classes.input }} />
                            </div>
                            <div style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                            <Button variant="contained" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart}>
                                ADD TO CART
                            </Button>
                            <Button variant="contained" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal}>
                                Request
                            </Button>
                            </div>                       
                        </div>
                        :
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"105px"}}>
                            <div style={{display:"flex",width:"80%",height:"100%"}}>
                            <FormControl
                                variant='outlined'
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Brand
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {puttybrands.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedPuttybrand(filter)
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
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Types
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {puttytypes.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setSelectedPuttytype(filter)
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
                                className={classes1.formControl}
                                InputProps={{ disableOutline: true,classes:{icon:classes1.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                    Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes1.icon}}}
                                    style={{color:"white"}}
                                    
                                >
                                    {trades1.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setTrade1(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            
                                
                            </div> 
                            <div style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                            <Button variant="contained" style={{height:"100%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart1}>
                                ADD TO CART
                            </Button>
                                <Button variant="contained" style={{height:"100%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal1}>
                                    Request
                                </Button>
                                </div>
                                <ToastContainer />                    
                        </div>
                    }
                   
                

                    

                </div>
                
        </div>
    )
}

export default Paint
