import React ,{useEffect, useState} from 'react'
import "./Styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { makeStyles, TextField } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {  InputLabel, MenuItem  } from "@material-ui/core";

function Sand({setModalOpen,newRequest,setNewRequest,data,setData,quantity,setQuantity,setOpenSaved,currentUnit,setCurrentUnit}) {
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [low, setLow] = useState(false)
    const [medium, setMedium] = useState(false)
    const [high,setHigh] = useState(false)
    
    const units=["Cubic Ft","Cubic Mt","Ton","kilograms(kg)"]
    
    // const [tempQuantity,setTempQuantity]=useState("")

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

        const useStyles = makeStyles((theme) =>({
            root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"        
                }},
                input:{
                    color:"white"
                },
                formControl: {
                    //   margin: theme.spacing(1),
                    marginRight: theme.spacing(2),
                    minWidth:"15%",
                    backgroundColor: "#08090C",
                    height:"100%",
                    
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "0px solid #484850",
                            borderRadius: "5px 5px 0 0",
                            color:"white"
                    }
                },
                icon: {
                    fill: "#ffb600",
                    boxShadow: "-4px -4px 15px rgba(232, 237, 243, 0.05),10px 4px 15px rgba(2, 3, 3, 0.2)"
                },
                overflow:"hidden"
            })
            
            );
           
    const handlemodal=()=>{
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if(low===true||medium===true||high===true){
            setModalOpen(true)
            }
            else{
                notify('Please select something');
            }
        }
        
        
    }
    useEffect(() =>{
        if(low){
            setData({type:"low"})
        }
        else if(medium){
            setData({type:"medium"})
        }
        else if(high){
            setData({type:"high"})
        }

        
    },[low,medium,high])

    useEffect(()=>{
        if(low){
            setMedium(false)
            setHigh(false)
        }

    },[low])
    useEffect(()=>{
        if(medium){
            setLow(false)
            setHigh(false)
        }

    },[medium])
    useEffect(()=>{
        if(high){
            setMedium(false)
            setLow(false)
        }

    },[high])
    let quantitywithunit
    useEffect(()=>{
        quantitywithunit=quantity + " " + currentUnit
        setNewRequest({...newRequest,quantity:quantitywithunit})
    },[currentUnit,quantity])
    const handleCart=async(e)=>{
        e.preventDefault()
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if(low===true||medium===true||high===true){
                console.log(typeof quantity,typeof currentUnit)
                // quantitywithunit=quantity + " " + currentUnit
                console.log(quantitywithunit,"quantity")
                // setNewRequest({...newRequest,quantity:quantitywithunit})
                console.log(newRequest,"request")
                
                
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setQuantity("")
                 setLow(false)
                 setMedium(false)
                 setHigh(false)
            }
            else{
                notify('Please select something');
            }
        }
        
        

    }
    const classes = useStyles()
    return (
        <div  style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
                <div className="sand-form" >
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={low}
                                onChange={(e) => setLow(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Low / Coarse"
                    className="sand-form-input"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={medium}
                                onChange={(e) => setMedium(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" className="sand-input-checkbox1"  style={{border:"1px solid white"}}/>}
                            />
                            }
                    className="sand-form-input"
                    label="Medium"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={high}
                                onChange={(e) => setHigh(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    className="sand-form-input"
                    label="High / Fine"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                
                </div>
                {(low===true||medium===true||high===true)
                    && 

                    <div className="quantity" style={{marginTop:"2%",height:"80px",display:"flex",justifyContent:"flex-start",alignItems: "center",borderRadius:"10px"}}>
                         <TextField id="outlined-basic5" value={quantity} className="quantity-text" style={{backgroundColor:"#08090C",width:"15%",height:"100%",color:"white"}} onChange={(e)=>setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{className: classes.input}} placeholder="Quantity" variant="outlined" />
                         <FormControl
                                variant='outlined'
                                className={classes.formControl}
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
                

                
                <div className="sand-bottom-buttons" style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                <Button variant="contained" className="sand-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button variant="contained" className="sand-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal}>
                    Request
                </Button>
                </div> 
                <ToastContainer />
        </div>
    )
}

export default Sand
