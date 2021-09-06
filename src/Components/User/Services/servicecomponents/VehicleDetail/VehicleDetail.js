import { Button } from '@material-ui/core'
import React , {useEffect, useState} from 'react'
import "./VehicleDetail.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Card from "../Card/Card"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DatePicker from "react-datepicker";
import {TextField} from "@material-ui/core"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import {  DialogContent } from '@material-ui/core';
import { Dialog, DialogTitle, Popover } from '@material-ui/core'
import {useHistory} from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'axios';
require('dotenv').config()

function VehicleDetail({formData, site,setOpenSaved,setCurrentSection,selected,newRequest,setNewRequest,setCurrentSectionRequest,getAllVendor,handleClickOpen}) {
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [val,setVal] = useState(0)
    const [data,setData]=useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [checked,setChecked] = useState(false)
    const [text,setText] = useState("")
    const [capacity,setCapacity] = useState()
    const [requestclicked,setRequestClicked] = React.useState(false)
    const [modalopen,setModalOpen]=useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [check,setCheck]=useState("")
    const [typeCapacity, setTypeCapacity]=useState(0)
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleIncrease = () => {
        setVal(val+1)
    }
    const handleDecrease = () => {
        if(val !== 0)
        {
            setVal(val-1)
        }        
    }

    const handleCapacityIncrease=()=>{
        setTypeCapacity(typeCapacity+1);
    }
    const handleCapacityDecrease = () => {
        if(typeCapacity !== 0)
        {
            setTypeCapacity(typeCapacity-1)
        }        
    }

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
  
//   const handlemodal=()=>{
//     if(val===0||data===null||checked===false||capacity===){
//       notify('Please select something');
//     }
//     else{
//       setModalOpen(true)
        
//     }
    
//   }
    const [urgent,setUrgent]=useState(true)
    const [flexible,setFlexible]=useState(true)
    const onClickUrgent=()=>{
        setFlexible(false)
    }
    const onClickFlexible=()=>{
        setUrgent(false)
    }
    const handleCloseIcon=()=>{
        setModalOpen(false)
        setUrgent(true)
        setFlexible(true)
    }

    const useStyles = makeStyles({
        dialogPaper: {
        minHeight: '60vh',
        maxHeight: '60vh',
        minWidth:"25%",
        maxWidth:"50%",
        backgroundColor: "#121417",
        padding:"1rem 1.25rem"
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        
        }},
        input:{
            color:"white",
            
        },
        overflow:"hidden"
})


// const useStyles = makeStyles({
//     root: {
//         "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//         borderColor: "transparent",
//         // backgroundColor:"white"        
//         }},
//         input:{
//             color:"white"
//         },
//         overflow:"hidden"
//     });
    const classes = useStyles();

    useEffect(()=>{
        setData({capacity:capacity,driver:checked,startDate:startDate,endDate:endDate,special_requirement:text})

    },[startDate,endDate,checked,text,capacity])

    useEffect(()=>{
        setNewRequest({...newRequest,type:selected.name,quantity:val, typecapacity:typeCapacity,data:data,delivery_address:site[check],deliver_by:startDate})

        },[requestclicked,selected,val,data, typeCapacity, check, startDate])


    const handleRequest=async(e)=>{
        e.preventDefault()
        if(userId === undefined)
            {
                // alert('Please Login');
                history.push('/auth-user')
            }
        else
            {
                if(!formData?.phone_no || !formData?.first_name){
                    notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
                }
                else if(newRequest?.quantity === 0 || newRequest?.typecapacity === 0 || check==="")
                    {
                        notify("Enter All Details")
                    }
                else
                    {
                        setModalOpen(false)
                        setRequestClicked(true)
                        await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,newRequest)
                        .then(function (response) 
                        {            
                            setCheck("")
                            setStartDate( new Date())
                            setEndDate( new Date())
                            setChecked(false)
                            setVal(0)
                            setData(null)
                            getAllVendor()
                            setTypeCapacity(0)
                            // setCurrentSectionRequest(2)
                            handleClickOpen()
        
                        })
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
            if(!formData?.phone_no || !formData?.first_name){
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if((val !== 0 && typeCapacity!==0)){
                setNewRequest({...newRequest,quantity:val, typecapacity:typeCapacity})
                
                
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`,newRequest)
                .then(function (response) { 

                    console.log(response,"add")
                 })
                 setOpenSaved(true)

                 setStartDate( new Date())
                            setEndDate( new Date())
                            setChecked(false)
                            setVal(0)
                            setData(null)
                            getAllVendor()
                            setTypeCapacity(0)
            }
            else{
                notify('Quantity and type capacity should be greater than 0');
            }
        }
        
        

    }
    return (
        <div className="vehicle-detail-container">
            <div className="vehicle-detail-back">
                <Button className="vehicle-detail-back-button" onClick={() => setCurrentSection(2)}>
                    <div className="vehicle-detail-back-button-div">
                        <ArrowBackIosIcon style={{fontSize:"1rem"}}/>
                        <p>Back</p>
                    </div>
                </Button>
            </div>
            <h2>{selected.name}</h2>
            <hr className="vehicle-detail-line"></hr>
            <div className="vehicle-detail-row">
                <div className="vehicle-detail-card">
                    <Card img={selected.img} name={selected.name}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"2%",justifyContent:"flex-start"}}>
                    <div style={{display:"flex",width:"100%"}} className="vehicle-detail-row1">
                        <div className="vehicle-detail-quantity">
                            <RemoveCircleOutlineIcon className="vehicle-detail-icon" onClick={handleDecrease}/>
                            <p>{val === 0 ? "Quantity" : val}</p>
                            <ControlPointIcon className="vehicle-detail-icon" onClick={handleIncrease}/>
                        </div>
                        <div className="vehicle-detail-type">
                            <RemoveCircleOutlineIcon className="vehicle-detail-icon" onClick={handleCapacityDecrease}/>
                            <p>{typeCapacity === 0 ? "Type Capacity(tons)" : typeCapacity}</p>
                            <ControlPointIcon className="vehicle-detail-icon" onClick={handleCapacityIncrease}/>
                            
                        </div>
                    </div>
                    <div className="required-row" style={{display:"flex",width:"100%",marginTop:"2%"}} >
                            <div >
                                <p>Required From</p>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="vehicle-detail-date"/>
                            </div>
                            <div style={{marginLeft:"17%"}} className="vehicle-detail-enddate">
                                <p>Required To</p>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="vehicle-detail-date"/>
                            </div>
                    </div>
                    <div style={{display:"flex"}}>
                            <FormControlLabel
                                control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(e) => setChecked(e.target.checked)}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid #FFB600"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid #FFB600"}}/>}
                                        />
                                        }
                                label="Driver Requirement"
                                style={{
                                    backgroundColor:"transparent",
                                    width: "15rem",
                                    padding: "3%",
                                    color:"#ffb600"
                                }}
                            />
                    </div>
                    <div style={{marginBottom:"1rem"}}>
                        <TextField 
                        multiline 
                        
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        name="Message" 
                        className={`${classes.root} MultiLineField`} 
                        InputProps={{className: classes.input }} 
                        placeholder="Type Special Requirement If Any ( Brands , MFG Year , Model No , Experience Years , etc )" 
                        variant="outlined" 
                        rows={4}/>
                    </div>
                <div className="vehicle-bottom-buttons" style={{width: "25%",height: "45%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                <Button variant="contained" className="vehicle-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button variant="contained" className="vehicle-cart-button"  style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={() => {(val === 0 || typeCapacity===0) ? notify('Please select something') : setModalOpen(true)}}>
                    Request
                </Button>
                </div>
                    <ToastContainer/>
                </div>
            </div>
            <Dialog open={modalopen} classes={{ paper: classes.dialogPaper }}>
          <DialogTitle>
              <div className="ModalHeader">
                
                <CloseIcon className="CloseButton" onClick={handleCloseIcon}style={{marginBottom:"1rem"}}/>
              </div>
              
          </DialogTitle>
          <DialogContent className="DialogClass">              
              <div className="ModalContainer">
                    
                    
                    <div className="ModalApplicationHeader">
                    <Button aria-describedby={id} variant="contained" style={{backgroundColor:"#08090C",width:"95%",height:"80%",marginBottom: "1rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"2px"}} onClick={handleClick}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"}}>
                            <p style={{color:"white",textTransform:"none"}}>{check===""?"Select Delivery Address":`site${check +1}`}</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                    </Button>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="materials-form-date"/>
                    {/* <p style={{color:"white",textTransform:"capitalize",fontSize:"0.8rem",marginLeft:"2px",marginBottom:"2%",marginTop:"1%"}}>Quantity</p>
                    <TextField id="outlined-basic" placeholder="Enter a value" value={quantity} onChange={(e) => setQuantity(e.target.value)} variant="outlined"  className={classes.root} style={{backgroundColor:"#08090C",width:"95%",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px" }} InputProps={ {  className: classes.input }} /> */}
                    <p style={{color:"white",textTransform:"capitalize",fontSize:"1rem",marginLeft:"2px",marginTop:"2%"}}>Order Type</p>
                    <div style={{width: "100%",height: "70%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",marginBottom:"2%"}}>
                {urgent && <Button variant="contained" style={{height:"80%",marginTop:"2%",marginRight:"10%",backgroundColor: "#ED4F4F",borderRadius:"20px"}} onClick={onClickUrgent}>
                    
                    urgent
                </Button>}
                {flexible && <Button variant="contained" style={{height:"80%",marginTop:"2%",backgroundColor: "#3CC13B",borderRadius:"20px"}} onClick={onClickFlexible}>
                    
                   Flexible
                </Button>}
                </div>

                <div style={{width: "100%",height: "100%",display:"flex",alignItems: "center",justifyContent: "center"}}>
                <Button variant="contained" style={{height:"70%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleRequest}>
                    Request
                </Button>
                </div>
                    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{display:"flex",flexDirection:"column",fontSize:"1rem"}}>
          
              {
                  (site?.length >0) ? site?.map((brand,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            
                                            checked={check===index? true:false}
                                            onChange={(e) => setCheck(index)}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={`site ${index +1}`}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
                  :<h3 style={{backgroundColor:"#08090C",color:"white",width:"20rem",padding:"2% 10%",fontSize:"1rem",height:"3rem",margin:0}}>Add site in profile section</h3>
              }
          </div>
        
      </Popover>

                    </div>
                    
              </div>
              {/* <div style={{display:"flex",justifyContent:"center",alignItems: "center"}}>
                  <Button type="submit"  className="ModalSubmit" onClick={handleRequest}>Submit</Button>
              </div> */}
            </DialogContent>
        </Dialog>
            
        </div>
    )
}

export default VehicleDetail
