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
import SandInput from "./CardInput/Sand"
import BrickInput from "./CardInput/Bricks"
import CementInput from "./CardInput/Cement"
import RMCInput from "./CardInput/RMC"
import StoneInput from "./CardInput/Stones"
import MarbleInput from "./CardInput/Marble"
import TMTInput from "./CardInput/TMT"
import PipesInput from "./CardInput/Pipes"
import PaintInput from "./CardInput/Paint"
import "./ConstructionMaterial.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox, Dialog, DialogTitle, FormControlLabel, Popover } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/core/styles";
import { Button , DialogContent , TextField} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'axios'
require('dotenv').config()
// req.body.id,req.body.service_type,req.body.type, req.body.quantity, JSON.stringify(req.body.data),"pending",req.body.urgent,req.body.delivery_address,req.body.deliver_by
function ContructionMaterial({setCurrentSection,setCurrentSectionProfile,newRequest,setNewRequest,site,getAllVendor,setCurrentSectionRequest,handleClickOpen,setOpenSaved}) {
    const [winsize,setwinsize]=useState(window.screen.width);
    const handleResize=()=>{
        if (window.innerWidth <1000) {
            setwinsize(window.innerWidth)
        }
        else{
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
  
    }, [window.screen.width])
    console.log(winsize)
    
    const [modalopen,setModalOpen]=useState(false)
    const [check,setCheck]=useState(0)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [requestclicked,setRequestClicked] = React.useState(false)
    const [data,setData]=useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const brands = site

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
    const [quantity,setQuantity]=useState("")
    const [currentUnit, setCurrentUnit] = useState("")
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
           1 : {name:"Bricks & Blocks" , img:BricksImage},
           2 : {name:"Cement" , img:CementImage},
           3 : {name:"RMC Mixture" , img:RMCImage},
           4 : {name:"Stones" , img:StoneImage},
           5 : {name:"Marble & Tile" , img:MarbleImage},
           6 : {name:"TMT Bars" , img:TMTImage},
           7 : {name:"Pipes" , img:PipesImage},
           8 : {name:"Paint & Putty" , img:PaintImage},
        }

        const [arr,setArr] = useState(initialarr)
        const [currentCard,setCurrentCard] = useState({name:"Sand" , img:SandImage})
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
        let  quantitywithunit
        
        useEffect(()=>{
            quantitywithunit=quantity + " " + currentUnit
            console.log(currentUnit,"currentUnit")
        setNewRequest({...newRequest,delivery_address:site ? site[check] : null,type:currentCard.name,urgent:urgent,quantity:quantitywithunit,deliver_by:startDate,data:data})
      
        },[requestclicked,check,currentCard.name,modalopen,urgent,quantity,startDate,data,currentUnit])

        const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)

        useEffect(()=>{
            quantitywithunit=quantity + " " + currentUnit
            setNewRequest({...newRequest,quantity:quantitywithunit})
            console.log(newRequest,"useEffect")
        },[currentUnit,quantity])

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
                    quantitywithunit=quantity + " " + currentUnit
                    setNewRequest({...newRequest,quantity:quantitywithunit})
                    console.log(newRequest,"axios")
                    await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,newRequest)
                .then(function (response) {            
                    setUrgent(true)
                    setFlexible(true)
                    setStartDate( new Date())
                    setCheck(0)
                    setQuantity("")
                    setData(null)
                    getAllVendor()
                    // setCurrentSectionRequest(2)
                    handleClickOpen();
                })
            }
            
        }



    return (
        <div className="construction-material-container">
            <div className="construction-material-top">
                <div className="construction-material-currentcard">
                    <Card img={currentCard.img} name={currentCard.name}/>
                </div>
                <div className="construction-material-cardinput">
                    {currentCard.name === "Sand" && <SandInput currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}

                    {currentCard.name === "Bricks & Blocks" && <BrickInput setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}
                    {currentCard.name === "Cement" && <CementInput setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}   
                    {currentCard.name === "RMC Mixture" && <RMCInput currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>} 
                    {currentCard.name === "Stones" && <StoneInput currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}     
                    {currentCard.name === "Marble & Tile" && <MarbleInput setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>} 
                    {currentCard.name === "TMT Bars" && <TMTInput currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}     
                    {currentCard.name === "Pipes" && <PipesInput currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check}setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData}/>}    
                    {currentCard.name === "Paint & Putty" && <PaintInput setOpenSaved={setOpenSaved} check={check} setModalOpen={setModalOpen} setData={setData} newRequest={newRequest} setNewRequest={setNewRequest}/>}              
                </div>
            </div>
            <div className="construction-material-bottom">
            <div className="construction-material-bottom-row-main">
                <div className="construction-material-bottom-row1">
                    <div className="construction-material-card" onClick={() => {setClickedCard(1);  setTrigger(!trigger)}} >
                        <Card img={arr[1]["img"]} name={arr[1]["name"]}                          
                        />
                    </div>
                    <div className="construction-material-card" onClick={() => {setClickedCard(2);  setTrigger(!trigger)}} >
                        <Card img={arr[2]["img"]} name={arr[2]["name"]} />
                    </div>
                </div>
                <div className="construction-material-bottom-row1">
                    <div className="construction-material-card" onClick={() => {setClickedCard(3);  setTrigger(!trigger)}}>
                        <Card img={arr[3]["img"]} name={arr[3]["name"]} />
                    </div>
                    <div className="construction-material-card" onClick={() => {setClickedCard(4);  setTrigger(!trigger)}}>
                        <Card img={arr[4]["img"]} name={arr[4]["name"]} />
                    </div>
                </div>
                </div>
                <div className="construction-material-bottom-row-main">
                <div className="construction-material-bottom-row1">
                    <div className="construction-material-card" onClick={() => {setClickedCard(5);  setTrigger(!trigger)}}>
                        <Card img={arr[5]["img"]} name={arr[5]["name"]} />
                    </div>
                    <div className="construction-material-card" onClick={() => {setClickedCard(6);  setTrigger(!trigger)}}>
                        <Card img={arr[6]["img"]} name={arr[6]["name"]} />
                    </div>
                </div>
                <div className="construction-material-bottom-row1">
                    <div className="construction-material-card" onClick={() => {setClickedCard(7);  setTrigger(!trigger)}} >
                        <Card img={arr[7]["img"]} name={arr[7]["name"]} />
                    </div>
                    <div className="construction-material-card" onClick={() => {setClickedCard(8);  setTrigger(!trigger)}}>
                        <Card img={arr[8]["img"]} name={arr[8]["name"]} />
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
                {/* <div style={{width: "100%",height: "100%",display:"flex",alignItems: "flex-start",justifyContent: "flex-start",flexDirection:"column"}}>
                <p style={{color:"white",textTransform:"capitalize",fontSize:"1rem",marginLeft:"2px",marginTop:"2%",marginBottom:"2%"}}>Trade</p>
                   
                    <RadioGroup row aria-label="Trade" name="Trade" value={value} onChange={handleChange} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <FormControlLabel value="trade" control={<Radio color="primary"/>} label="Trade" style={{color:"white"}}/>

                        <FormControlLabel value="Non-trade" control={<Radio color="primary" />} label="Non-trade" style={{color:"white"}} />
                        
                    </RadioGroup>
                    
                    </div> */}

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

export default ContructionMaterial
