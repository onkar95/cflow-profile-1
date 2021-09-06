import React , {useEffect, useState} from 'react'
import SandImage from "../../../../../Images/Construction material/white/sand.svg"
import BricksImage from "../../../../../Images/Construction material/white/bricks.svg"
import CementImage from "../../../../../Images/Construction material/white/cement.svg"
import RMCImage from "../../../../../Images/Construction material/white/Rmc.svg"
import StoneImage from "../../../../../Images/Construction material/white/stone.svg"
import MarbleImage from "../../../../../Images/Construction material/white/Marbles.svg"
import TMTImage from "../../../../../Images/Construction material/white/tmt.svg"
import PipesImage from "../../../../../Images/Construction material/white/pipes.svg"
import PaintImage from "../../../../../Images/Construction material/white/paint.svg"
import Card from "../Card/Card"

import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox, Dialog, DialogTitle, FormControlLabel, Popover } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Button , DialogContent , TextField} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./ConstructionChemicals.css"
import Admixture from './CardInput/Admixture'
import Waterproofing from './CardInput/waterproofing'
import ConcreteRepair from './CardInput/ConcreteRepair'
import Grout from './CardInput/Grout'
import Surface from './CardInput/Surface'
import Tiling from './CardInput/Tiling'
import Flooring from './CardInput/Flooring'
import Sealant from './CardInput/Sealant'
import axios from 'axios'
require('dotenv').config()

function ContructionChemicals({setCurrentSectionProfile,setOpenSaved,setCurrentSection,setSelected,site,newRequest,setNewRequest,getAllVendor,setCurrentSectionRequest,handleClickOpen}) {

    const [modalopen,setModalOpen]=useState(false)
    const [data,setData]=useState(null)
    const [check,setCheck]=useState(0)
    const [requestclicked,setRequestClicked] = React.useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const brands = ["site 1","site2","site 3","site 4","site 5"]
  const [brandcheck,setBrandCheck] = useState({
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
    6 : false,
    7 : false,
    8 : false,
    9 : false
})

    const sites=site
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
    const [startDate, setStartDate] = useState(new Date());

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
    const [quantity,setQuantity]=useState(0)
    const classes = useStyles();

        // 0 => Sand
        // 1 => Brick
        // 2 => Cement
        // 3 => RMC
        // 4 => Stones
        // 5 => Marble
        // 6 => TMT
        // 7 => Pipes
        // 8 => Paint
        
        let initialarr = {
        //    0 : {name:"Sand" , img:SandImage},
           
           1 : {name:"Waterproofing" , img:CementImage},
           2 : {name:"Surface treatments" , img:RMCImage},
           3 : {name:"Grout & Anchor" , img:StoneImage},
           4 : {name:"Concrete Repair" , img:MarbleImage},
           5: {name:"Sealant" , img:TMTImage},
           6: {name:"Flooring" , img:PipesImage},
           7 : {name:"Tiling" , img:PaintImage},
        }

        const [arr,setArr] = useState(initialarr)
        const [currentCard,setCurrentCard] = useState({name:"Concrete Admixture" , img:BricksImage})
        const [clickedCard,setClickedCard] = useState(0)
        const [trigger,setTrigger] = useState(false)


        useEffect(() => {
            if(clickedCard !== 0)
            {
            const currentCardData = arr[currentCard]
            const temp = currentCard
            setCurrentCard(arr[clickedCard])
            setArr({...arr,[clickedCard]:temp})
            }
        },[trigger])

        useEffect(()=>{
            setNewRequest({...newRequest,delivery_address:site[check],type:currentCard.name,urgent:urgent,quantity:quantity,deliver_by:startDate,data:data})
            },[requestclicked,check,modalopen,urgent,quantity,startDate,data])
    
            const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    
            const handleRequest=async(e)=>{
                e.preventDefault()
            if(newRequest?.quantity === 0 || site?.length === 0 ||  urgent === flexible)
            {
                alert("Enter All Details")
            }
            else
            {
                setModalOpen(false)
                setRequestClicked(true)
                await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,newRequest)
            .then(function (response) {            
                setUrgent(true)
                setFlexible(true)
                setStartDate( new Date())
                setCheck(0)
                setQuantity(0)
                setData(null)
                getAllVendor()
                handleClickOpen()
            // setCurrentSectionRequest(2)
                
              })
            }
                
            }
    




    return (
        <div className="construction-chemical-container">
            <div className="construction-chemical-top">
                <div className="construction-chemical-currentcard">
                    <Card img={currentCard.img} name={currentCard.name}/>
                </div>
                <div className="construction-chemical-cardinput">
                    {currentCard.name === "Concrete Admixture" && <Admixture setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}
                    {currentCard.name === "Waterproofing" && <Waterproofing setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}
                    {currentCard.name === "Grout & Anchor" && <Grout setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}   
                    {currentCard.name === "Concrete Repair" && <ConcreteRepair setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>} 
                    {currentCard.name === "Sealant" && <Sealant setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}     
                    {currentCard.name === "Flooring" && <Flooring setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>} 
                    {currentCard.name === "Tiling" && <Tiling setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}     
                    {currentCard.name === "Surface treatments" && <Surface setNewRequest={setNewRequest} setOpenSaved={setOpenSaved} newRequest={newRequest} quantity={quantity} setQuantity={setQuantity} setModalOpen={setModalOpen} setData={setData}/>}    
                                
                </div>
            </div>
            <div className="construction-chemical-bottom">
            <div className="construction-chemical-bottom-row-main">
                <div className="construction-chemical-bottom-row1">
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(1);  setTrigger(!trigger)}} >
                        <Card img={arr[1]["img"]} name={arr[1]["name"]}                          
                        />
                    </div>
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(2);  setTrigger(!trigger)}} >
                        <Card img={arr[2]["img"]} name={arr[2]["name"]} />
                    </div>
                    </div>
                    <div className="construction-chemical-bottom-row1">
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(3);  setTrigger(!trigger)}}>
                        <Card img={arr[3]["img"]} name={arr[3]["name"]} />
                    </div>
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(4);  setTrigger(!trigger)}}>
                        <Card img={arr[4]["img"]} name={arr[4]["name"]} />
                    </div>
                    </div>
                </div>
                <div className="construction-chemical-bottom-row-main">
                <div className="construction-chemical-bottom-row1">
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(5);  setTrigger(!trigger)}}>
                        <Card img={arr[5]["img"]} name={arr[5]["name"]} />
                    </div>
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(6);  setTrigger(!trigger)}}>
                        <Card img={arr[6]["img"]} name={arr[6]["name"]} />
                    </div>
                    </div>
                    <div className="construction-chemical-bottom-row1">
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(7);  setTrigger(!trigger)}}>
                        <Card img={arr[7]["img"]} name={arr[7]["name"]} />
                    </div>
                    
                    
                </div>
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
                            <p style={{color:"white",textTransform:"capitalize"}}>Select Delivery Address</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                    </Button>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="materials-form-date"/>
                    {/* <p style={{color:"white",textTransform:"capitalize",fontSize:"0.8rem",marginLeft:"2px",marginBottom:"2%",marginTop:"1%"}}>Quantity</p>
                    <TextField id="outlined-basic" placeholder="Enter a value" value={quantity} onChange={(e) => setQuantity(e.target.value)}variant="outlined"  className={classes.root} style={{backgroundColor:"#08090C",width:"95%",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px" }} InputProps={ {  className: classes.input }} /> */}
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
              :<h3 style={{backgroundColor:"#08090C",color:"white",width:"20rem",padding:"2% 10%",fontSize:"1rem",height:"3rem",cursor:"pointer",margin:0}} onClick={()=>{setCurrentSectionRequest(4);setCurrentSectionProfile(7)}}>Add site in profile section</h3>
          }
      </div>
        
      </Popover>

                    </div>
                    
              </div>
            </DialogContent>
        </Dialog>

        </div>
    )
}

export default ContructionChemicals
