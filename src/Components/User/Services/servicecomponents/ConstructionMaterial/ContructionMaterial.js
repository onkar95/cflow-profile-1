import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, Popover } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import SelectProduct from "../../../../../Images/Select Product.svg"
import BricksImage from "../../../../../Images/Construction material/white/bricks.svg"
import CementImage from "../../../../../Images/Construction material/white/cement.svg"
import MarbleImage from "../../../../../Images/Construction material/white/Marbles.svg"
import PaintImage from "../../../../../Images/Construction material/white/paint.svg"
import PipesImage from "../../../../../Images/Construction material/white/pipes.svg"
import PipesBlackImage from "../../../../../Images/Construction material/black/pipes.svg"
import RMCImage from "../../../../../Images/Construction material/white/Rmc.svg"
import SandImage from "../../../../../Images/Construction material/white/sand.svg"
import StoneImage from "../../../../../Images/Construction material/white/stone.svg"
import TMTImage from "../../../../../Images/Construction material/white/tmt.svg"
import WoodImage from "../../../../../Images/Construction material/white/wood.svg"
import BricksBlackImage from "../../../../../Images/Construction material/black/bricks.svg"
import CementBlackImage from "../../../../../Images/Construction material/black/cement.svg"
import MarbleBlackImage from "../../../../../Images/Construction material/black/Marbles.svg"
import PaintBlackImage from "../../../../../Images/Construction material/black/paint.svg"
// import PipesBlackImage from "../../../../../Images/Construction material/black/pipes.svg"
import RMCBlackImage from "../../../../../Images/Construction material/black/Rmc.svg"
import SandBlackImage from "../../../../../Images/Construction material/black/sand.svg"
import StoneBlackImage from "../../../../../Images/Construction material/black/stone.svg"
import TMTBlackImage from "../../../../../Images/Construction material/black/tmt.svg"
import WoodBlackImage from "../../../../../Images/Construction material/black/wood.svg"
import Card from "../Card/Card"
import BrickInput from "./CardInput/Bricks"
import CementInput from "./CardInput/Cement"
import MarbleInput from "./CardInput/Marble"
import PaintInput from "./CardInput/Paint"
import PipesInput from "./CardInput/Pipes"
import RMCInput from "./CardInput/RMC"
import SandInput from "./CardInput/Sand"
import StoneInput from "./CardInput/Stones"
import TMTInput from "./CardInput/TMT"
import WoodInput from "./CardInput/Wood"
import CartItemNumber from "../../CartItemNumber"
import Fuse from "fuse.js"
import "./ConstructionMaterial.css"

require('dotenv').config()

function ContructionMaterial({ cartLength, getCart, theme, formData, setCurrentSectionMain, setCurrentSection, setCurrentSectionProfile, newRequest, setNewRequest, site, getAllVendor, setCurrentSectionRequest, handleClickOpen, setOpenSaved, clickedCard, setClickedCard, trigger, setTrigger, dropdownData }) {
    const [winsize, setwinsize] = useState(window.screen.width);
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setwinsize(window.innerWidth)
        }
        else {
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)

    }, [window.screen.width])

    const [arr, setArr] = useState([
        { name: "Sand", img: SandImage, blackimg: SandBlackImage },
        { name: "Bricks & Blocks", img: BricksImage, blackimg: BricksBlackImage },
        { name: "Cement", img: CementImage, blackimg: CementBlackImage },
        { name: "RMC Mixture", img: RMCImage, blackimg: RMCBlackImage },
        { name: "Stones", img: StoneImage, blackimg: StoneBlackImage },
        { name: "Marble & Tile", img: MarbleImage, blackimg: MarbleBlackImage },
        { name: "TMT Bars", img: TMTImage, blackimg: TMTBlackImage },
        { name: "Pipes", img: PipesImage, blackimg: PipesBlackImage },
        { name: "Paint & Putty", img: PaintImage, blackimg: PaintBlackImage },
        { name: "Wood", img: WoodImage, blackimg: WoodBlackImage }
    ])
    let fuse = new Fuse(arr, { keys: ["name"], threshold: 0.3 })

    const [option, setOption] = useState("")
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [quantity, setQuantity] = useState("");
    const [data, setData] = useState(null);
    const [check, setCheck] = useState("");
    const [modalopen, setModalOpen] = useState(false)
    const [currentUnit, setCurrentUnit] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [requestclicked, setRequestClicked] = React.useState(false)

    function handleSearch(event) {
        event.preventDefault();
        let res = fuse.search(search);
        res = res.map(o => o.item)
        setSearchResult(res)
        console.log(searchResult)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const brands = site

    const [urgent, setUrgent] = useState(true)
    const [flexible, setFlexible] = useState(true)
    const onClickUrgent = () => {
        setFlexible(false)
    }
    const onClickFlexible = () => {
        setUrgent(false)
    }
    const handleCloseIcon = () => {
        setModalOpen(false)
        setUrgent(true)
        setFlexible(true)
    }
    const [startDate, setStartDate] = useState(new Date());



    const useStyles = makeStyles({
        dialogPaper: {
            minHeight: '60vh',
            maxHeight: '60vh',
            minWidth: "25%",
            maxWidth: "50%",
            backgroundColor: "#121417",
            padding: "1rem 1.25rem"
        },
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",

            }
        },
        input: {
            color: "white",

        },
        overflow: "hidden"
    })
    /*useEffect(() => {
        if (clickedCard !== 0) {
            const currentCardData = arr[option]
            const temp = option
            
            setArr({ ...arr, [clickedCard]: temp })
        }
    }, [trigger])*/
    let quantitywithunit

    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        console.log(currentUnit, "currentUnit")
        setNewRequest({ ...newRequest, delivery_address: site ? site[check] : null, type: option, urgent: urgent, quantity: quantitywithunit, deliver_by: startDate, data: data })
        console.log(newRequest)
    }, [requestclicked, check, option, modalopen, urgent, quantity, startDate, data, currentUnit])

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)

    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        setNewRequest({ ...newRequest, quantity: quantitywithunit })
        console.log(newRequest, "useEffect")
    }, [currentUnit, quantity])

    const handleRequest = async (e) => {
        e.preventDefault()
        if (newRequest?.quantity === 0 || site?.length === 0 || urgent === flexible || !newRequest?.quantity || check === "" || check === null) {
            alert("Enter All Details")
        }
        else {
            setModalOpen(false)
            setRequestClicked(true)
            quantitywithunit = quantity + " " + currentUnit
            setNewRequest({ ...newRequest, quantity: quantitywithunit })
            console.log(newRequest, "axios")
            await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`, newRequest)
                .then(function (response) {
                    setUrgent(true)
                    setFlexible(true)
                    setStartDate(new Date())
                    setQuantity("")
                    setData(null)
                    getAllVendor()
                    setCheck("")
                    handleClickOpen();
                })
        }

    }


    useEffect(() => {
        setQuantity(0)
    }, [option])

    const [name, setName] = useState("")
    const classes = useStyles();
    return (
        <div className="option-container">
            <div className="selection-section">
                <div className="component-header">Construction materials</div>
                <div className="description" style={{ marginBottom: '50px' }}>Browse for construction materials. Specify your request and get multiple quotations. Add to cart now!</div>
                <form className="search-form">
                    <div className="search"><input type="text" placeholder="Search construction materials" className="item-search" onChange={(event) => setSearch(event.target.value)} value={search} style={{ backgroundColor: theme ? "#D8D8D8" : "", color: theme ? "black" : "" }}></input>
                        <button className="search-button" onClick={handleSearch}><SearchIcon style={{ height: "10px" }} /></button>
                    </div>
                </form>
                <div className="items-to-be-selected">
                    {(searchResult.length === 0) ? arr.map((item, index) => { return (<div className="card" id={item.name} onClick={() => { setOption(item.name) }}><Card theme={theme} option={option} img={theme ? arr[index]["blackimg"] : arr[index]["img"]} name={arr[index]["name"]} /></div>); })
                        :
                        searchResult.map((item, index) => { return (<div className="card" id={item.name} onClick={() => { setOption(item.name) }}><Card theme={theme} option={option} img={theme ? searchResult[index]["blackimg"] : searchResult[index]["img"]} name={searchResult[index]["name"]} /></div>); })}
                </div>
            </div>
            <div className="right-side">
                <CartItemNumber setCurrentSectionMain={setCurrentSectionMain} cartLength={cartLength} theme={theme} />
                <div className="right-side-div" style={{ backgroundColor: theme ? "#F8F8F8" : "" }}>
                    {option === "" && <div style={{ textAlign: 'center', marginTop: '40%' }}><img src={SelectProduct}></img><div className="selected-header">Select a product</div><div className="description" style={{ width: '60%', margin: 'auto' }}>Please select a particular product or service first.</div></div>}
                    {option === "Sand" && <SandInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} />}
                    {option === "Bricks & Blocks" && <BrickInput getCart={getCart} theme={theme} formData={formData} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} />}
                    {option === "Cement" && <CementInput getCart={getCart} theme={theme} formData={formData} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "RMC Mixture" && <RMCInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "Stones" && <StoneInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "Marble & Tile" && <MarbleInput getCart={getCart} theme={theme} formData={formData} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "TMT Bars" && <TMTInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "Pipes" && <PipesInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "Paint & Putty" && <PaintInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} newRequest={newRequest} data={data} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setNewRequest={setNewRequest} setData={setData} dropdownData={dropdownData} />}
                    {option === "Wood" && <WoodInput getCart={getCart} theme={theme} formData={formData} currentUnit={currentUnit} setCurrentUnit={setCurrentUnit} setOpenSaved={setOpenSaved} quantity={quantity} setQuantity={setQuantity} check={check} modalopen={modalopen} setModalOpen={setModalOpen} setData={setData} newRequest={newRequest} setNewRequest={setNewRequest} dropdownData={dropdownData} />}
                </div>
            </div>


            <Dialog open={modalopen} classes={{ paper: classes.dialogPaper }}>
                <DialogTitle>
                    <div className="ModalHeader">

                        <CloseIcon className="CloseButton" onClick={handleCloseIcon} style={{ marginBottom: "1rem" }} />
                    </div>

                </DialogTitle>
                <DialogContent className="DialogClass">
                    <div className="ModalContainer">


                        <div className="ModalApplicationHeader">
                            <Button aria-describedby={id} variant="contained" style={{ backgroundColor: "#08090C", width: "95%", height: "80%", marginBottom: "1rem", borderRadius: "2px" }} onClick={handleClick}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "none" }}>{check === "" ? "Select Delivery Address" : `site${check + 1}`}</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="materials-form-date" />
                            {/* <p style={{color:"white",textTransform:"capitalize",fontSize:"0.8rem",marginLeft:"2px",marginBottom:"2%",marginTop:"1%"}}>Quantity</p>
                <TextField id="outlined-basic" placeholder="Enter a value" value={quantity} onChange={(e) => setQuantity(e.target.value)} variant="outlined"  className={classes.root} style={{backgroundColor:"#08090C",width:"95%",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px" }} InputProps={ {  className: classes.input }} /> */}
                            <p style={{ color: "white", textTransform: "capitalize", fontSize: "1rem", marginLeft: "2px", marginTop: "2%" }}>Order Type</p>
                            <div style={{ width: "100%", height: "70%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: "2%" }}>
                                {urgent && <Button variant="contained" style={{ height: "80%", marginTop: "2%", marginRight: "10%", backgroundColor: "#ED4F4F", borderRadius: "20px" }} onClick={onClickUrgent}>

                                    urgent
                                </Button>}
                                {flexible && <Button variant="contained" style={{ height: "80%", marginTop: "2%", backgroundColor: "#3CC13B", borderRadius: "20px" }} onClick={onClickFlexible}>

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

                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Button variant="contained" style={{ height: "70%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleRequest}>
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
                                <div style={{ display: "flex", flexDirection: "column", fontSize: "1rem" }}>

                                    {
                                        (site?.length > 0) ? site?.map((brand, index) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox

                                                        checked={check === index ? true : false}
                                                        onChange={(e) => setCheck(index)}
                                                        color="primary"
                                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                                        checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

                                                    />
                                                }
                                                label={`site ${index + 1}`}
                                                style={{
                                                    width: "15rem",
                                                    padding: "4%",
                                                    backgroundColor: "#08090C",
                                                    color: "white",
                                                    height: "45%"
                                                }}
                                            />
                                        ))
                                            : <h3 style={{ backgroundColor: "#08090C", color: "white", width: "20rem", padding: "2% 10%", fontSize: "1rem", height: "3rem", cursor: "pointer", margin: 0 }} onClick={() => { setCurrentSectionRequest(4); setCurrentSectionProfile(7) }}>Add site in profile section</h3>
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