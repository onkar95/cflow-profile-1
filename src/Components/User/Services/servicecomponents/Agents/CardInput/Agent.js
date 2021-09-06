import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Popover, Select, TextField } from '@material-ui/core';
import { green } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Agents.css";
require('dotenv').config()


function Agent({ formData, setCurrentSectionProfile, newRequest, setNewRequest, site, getAllVendor, setCurrentSectionRequest, handleClickOpen, setOpenSaved }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [labour, setLabour] = useState(false)
    const [modalopen, setModalOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl0, setAnchorEl0] = React.useState(null);

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

    // reference dn3 np 70953
    // license num 62 1354 88 24

    const GreenCheckbox = withStyles({
        root: {
            //color: green[400],
            "&$checked": {
                color: `${green[600]}!important`,
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick0 = (event) => {
        setAnchorEl0(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose0 = () => {
        setAnchorEl0(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const open0 = Boolean(anchorEl0);
    const id0 = open ? 'simple-popover' : undefined;

    const useStyles = makeStyles((theme) => ({
        dialogPaper: {
            minHeight: '60vh',
            maxHeight: '60vh',
            minWidth: "25%",
            maxWidth: "50%",
            backgroundColor: "#121417",
            padding: "1rem 1.25rem"
        },
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            // minWidth: 300,
            // borderRadius:"10px 10px 10px 10px",

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color: "white"
            }
        },
        icon: {
            fill: "#ffb600"
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
    }))
    const [check, setCheck] = useState("")
    const sites = site

    const classes = useStyles();

    const handleCloseIcon = () => {
        setModalOpen(false)
        setUrgent(true)
        setFlexible(true)
    }
    const [urgent, setUrgent] = useState(true)
    const [flexible, setFlexible] = useState(true)
    const onClickUrgent = () => {
        setFlexible(false)
    }
    const onClickFlexible = () => {
        setUrgent(false)
    }
    const [startDate, setStartDate] = useState(new Date());

    const [quantity, setQuantity] = useState(0)
    const genders = ["Men", "Women", "Both"]
    const [gender, setGender] = useState("")
    const [requestclicked, setRequestClicked] = React.useState(false)


    const materials = ["Sand", "Stones", "Bricks"]
    const [selectedmaterial, setSelectedMaterial] = useState(null)

    const handlemodal = () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if (selectedmaterial === null) {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify("The quantity should be greater than 0")
            }
            else {
                setModalOpen(true)

            }
        }
    }





    const [data, setData] = useState(null)

    useEffect(() => {

        setData({ labour: labour, materials: selectedmaterial, gender: gender })
        console.log(data, "Data")
    }, [selectedmaterial, labour, gender])

    useEffect(() => {
        setNewRequest({ ...newRequest, delivery_address: site[check], type: "agent", urgent: urgent, quantity: quantity, deliver_by: startDate, data: data })
    }, [requestclicked, check, modalopen, urgent, quantity, startDate, data])


    const handleRequest = async (e) => {
        e.preventDefault()
        if (newRequest?.quantity === 0 || site?.length === 0 || urgent === flexible || !newRequest?.quantity || check === "") {
            notify("Enter All Details")
        }
        else {
            setModalOpen(false)
            setRequestClicked(true)
            await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`, newRequest)
                .then(function (response) {
                    setUrgent(false)
                    setFlexible(false)
                    setStartDate(new Date())
                    setCheck(0)
                    setQuantity(0)
                    setData(null)
                    getAllVendor()
                    handleClickOpen()
                    setCheck("")
                })
        }
    }

    const handleCart = async (e) => {
        e.preventDefault()
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if ((selectedmaterial !== null) && quantity > 0 && quantity) {
                setNewRequest({ ...newRequest, quantity: quantity, data: data })


                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setSelectedMaterial(null)
                setLabour(false)
            }
            else if (selectedmaterial === null) {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify("The quantity should be greater than 0")
            }
        }
    }
    return (
        <div style={{ width: "100%", display: "flex", height: "100%", flexDirection: "column" }}>
            <div className="agent-form">
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={labour}
                            onChange={(e) => setLabour(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Labour Agent"
                    className="sand-form-input"
                    style={{
                        backgroundColor: "#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                />
                <FormControl
                    variant='outlined'
                    className={`${classes.formControl} agent-form-input `}
                    InputProps={{ disableOutline: true, classes: { icon: classes.icon } }}
                >
                    <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>
                        Materials
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        inputProps={{ classes: { icon: classes.icon } }}
                        style={{ color: "white" }}

                    >
                        {materials.map((filter, index) => (
                            <MenuItem
                                className='filter_itemuser'
                                onClick={() =>
                                    setSelectedMaterial(filter)
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
                    className={`${classes.formControl} agent-form-input `}
                    InputProps={{ disableOutline: true, classes: { icon: classes.icon } }}
                >
                    <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>
                        Gender
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        inputProps={{ classes: { icon: classes.icon } }}
                        style={{ color: "white" }}

                    >
                        {genders.map((filter, index) => (
                            <MenuItem
                                className='filter_itemuser'
                                onClick={() =>
                                    setGender(filter)
                                }
                                value={index}
                            >
                                {filter}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
            {(selectedmaterial !== null)
                &&

                <div className="quantity" style={{ marginTop: "2%", width: "30%", height: "80px" }}>
                    <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: "#08090C", width: "100%", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: classes.input }} placeholder="Quantity" variant="outlined" />
                </div>
            }
            <div className="agent-bottom-buttons" style={{ width: "25%", height: "45%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button variant="contained" className="agent-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button variant="contained" className="agent-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handlemodal}>
                    Request
                </Button>
            </div>
            <ToastContainer />


            {/* <div style={{width: "20%",height: "45%"}}>
                    <Button variant="contained" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handlemodal}>
                        Request
                    </Button>
                </div> */}

            <Dialog open={modalopen} classes={{ paper: classes.dialogPaper }}>
                <DialogTitle>
                    <div className="ModalHeader">

                        <CloseIcon className="CloseButton" onClick={handleCloseIcon} style={{ marginBottom: "1rem" }} />
                    </div>

                </DialogTitle>

                <DialogContent className="DialogClass">
                    <div className="ModalContainer">


                        <div className="ModalApplicationHeader">
                            <Button aria-describedby={id} variant="contained" style={{ backgroundColor: "#08090C", width: "95%", height: "80%", marginBottom: "1rem", borderRadius: "2px" }} onClick={handleClick0}>
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

                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Button variant="contained" style={{ height: "70%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleRequest}>
                                    Request
                                </Button>
                            </div>

                            <Popover
                                id={id0}
                                open={open0}
                                anchorEl={anchorEl0}
                                onClose={handleClose0}
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
                                                        checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}

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

export default Agent