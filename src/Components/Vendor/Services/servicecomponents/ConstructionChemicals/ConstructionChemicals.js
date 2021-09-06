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
import SandInput from "../ConstructionMaterial/CardInput/Sand"
import BrickInput from "../ConstructionMaterial/CardInput/Bricks"
import CementInput from "../ConstructionMaterial/CardInput/Cement"
import RMCInput from "../ConstructionMaterial/CardInput/RMC"
import StoneInput from "../ConstructionMaterial/CardInput/Stones"
import MarbleInput from "../ConstructionMaterial/CardInput/Marble"
import TMTInput from "../ConstructionMaterial/CardInput/TMT"
import PipesInput from "../ConstructionMaterial/CardInput/Pipes"
import PaintInput from "../ConstructionMaterial/CardInput/Paint"

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

function ContructionChemicals({notify,newService,setNewService,AddService,handleClickOpen}) {

    const [modalopen,setModalOpen]=useState(false)

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
    const [quantity,setQuantity]=useState()
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




    return (
        <div className="construction-chemical-container-vendor">
            <div className="construction-chemical-top-vendor">
                <div className="construction-chemical-currentcard-vendor">
                    <Card img={currentCard.img} name={currentCard.name}/>
                </div>
                <div className="construction-chemical-cardinput-vendor">
                    {currentCard.name === "Concrete Admixture" && <Admixture notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen}/>}
                    {currentCard.name === "Waterproofing" && <Waterproofing notify={notify} setModalOpen={setModalOpen}  newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}
                    {currentCard.name === "Grout & Anchor" && <Grout notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}   
                    {currentCard.name === "Concrete Repair" && <ConcreteRepair notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />} 
                    {currentCard.name === "Sealant" && <Sealant notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}     
                    {currentCard.name === "Flooring" && <Flooring notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen}/>} 
                    {currentCard.name === "Tiling" && <Tiling notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}     
                    {currentCard.name === "Surface treatments" && <Surface notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}    
                                
                </div>
            </div>
            <div className="construction-chemical-bottom-vendor">
            <div className="construction-chemical-bottom-row-main-vendor">
                <div className="construction-chemical-bottom-row1-vendor">
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(1);  setTrigger(!trigger)}} >
                        <Card img={arr[1]["img"]} name={arr[1]["name"]}                          
                        />
                    </div>
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(2);  setTrigger(!trigger)}} >
                        <Card img={arr[2]["img"]} name={arr[2]["name"]} />
                    </div>
                    </div>
                    <div className="construction-chemical-bottom-row1-vendor">
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(3);  setTrigger(!trigger)}}>
                        <Card img={arr[3]["img"]} name={arr[3]["name"]} />
                    </div>
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(4);  setTrigger(!trigger)}}>
                        <Card img={arr[4]["img"]} name={arr[4]["name"]} />
                    </div>
                    </div>
                </div>
                <div className="construction-chemical-bottom-row-main-vendor">
                <div className="construction-chemical-bottom-row1-vendor">
                    <div className="construction-chemical-card" onClick={() => {setClickedCard(5);  setTrigger(!trigger)}}>
                        <Card img={arr[5]["img"]} name={arr[5]["name"]} />
                    </div>
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(6);  setTrigger(!trigger)}}>
                        <Card img={arr[6]["img"]} name={arr[6]["name"]} />
                    </div>
                    </div>
                    <div className="construction-chemical-bottom-row1-vendor">
                    <div className="construction-chemical-card-vendor" onClick={() => {setClickedCard(7);  setTrigger(!trigger)}}>
                        <Card img={arr[7]["img"]} name={arr[7]["name"]} />
                    </div>
                    
                    
                </div>
                </div>
            </div> 

            

        </div>
    )
}

export default ContructionChemicals
