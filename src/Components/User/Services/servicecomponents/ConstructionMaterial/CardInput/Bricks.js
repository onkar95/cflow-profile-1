import React ,{useEffect, useState} from 'react'
import "./Styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom"
import { makeStyles , TextField } from '@material-ui/core';
import axios from 'axios';

function Bricks({setModalOpen,newRequest,setNewRequest,data,setData,quantity,setQuantity,setOpenSaved}) {
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [clay, setClay] = useState(false)
    const [cement, setCement] = useState(false)
    const [fly,setFly] = useState(false)
    
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
            if(clay===true||cement===true||fly===true){
                setModalOpen(true)
            }
            else{
                notify('Please select something');
            }
        }
        
    }

    useEffect(() => {
        if(clay){
            setData({type:"clay"})
        }
        else if(cement){
            setData({type:"cement"})
        }
        else if(fly){
            setData({type:"fly"})
        }
    },[clay,cement,fly])

    useEffect(()=>{
        if(clay){
            setCement(false)
            setFly(false)
        }

    },[clay])
    useEffect(()=>{
        if(cement){
            setClay(false)
            setFly(false)
        }

    },[cement])
    useEffect(()=>{
        if(fly){
            setCement(false)
            setClay(false)
        }

    },[fly])

    const handleCart=async(e)=>{
        e.preventDefault()
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if(clay===true||cement===true||fly===true){
                setNewRequest({...newRequest,quantity:quantity})
                
                
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)
                 setQuantity(0)
                 setClay(false)
                 setCement(false)
                 setFly(false)
            }
            else{
                notify('Please select something');
            }
        }
        
        

    }
    const useStyles = makeStyles({
            root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"        
                }},
                input:{
                    color:"white"
                },
                overflow:"hidden"
            });
    const classes = useStyles()
    return (
        <div style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
                <div className="sand-form" >
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={clay}
                                onChange={(e) => setClay(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox"  fontSize="small" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon  fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Clay Bricks"
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
                                checked={cement}
                                onChange={(e) => setCement(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox"  fontSize="small" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Cement Bricks"
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
                                checked={fly}
                                onChange={(e) => setFly(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox"  fontSize="small" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Fly Ash Bricks"
                    className="sand-form-input"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                </div>
                   {(clay===true||cement===true||fly===true)
                    && 

                    <div className="quantity" style={{marginTop:"2%",width:"30%",height:"80px"}}>
                         <TextField id="outlined-basic20" type="number" value={quantity} style={{backgroundColor:"#08090C",width:"100%",height:"100%",borderRadius:"10px",color:"white"}} onChange={(e)=>setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{className: classes.input}} placeholder="Quantity" variant="outlined" />                       
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

export default Bricks
