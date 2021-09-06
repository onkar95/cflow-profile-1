import { InputLabel, makeStyles, MenuItem, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from "@material-ui/core/Select";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Sand({ getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [low, setLow] = useState(false)
    const [medium, setMedium] = useState(false)
    const [high, setHigh] = useState(false)

    const units = ["Cubic Ft", "Cubic Mt", "Ton", "kilograms(kg)"]

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

    const useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"
            }
        },
        input: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"white"} 
        },
        input1: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
        },
        inputtheme:{
            color: "black",
            "& input::placeholder":{color:"#000000"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"#000000"}
        },
        inputtheme1:{
            color: "black",
            "& input::placeholder":{color:"#000000"},
            "& .MuiInputBase-input": {color:"#000000"}
        },
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: "15%",
            backgroundColor: "#08090C",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #484850",
                borderRadius: "5px 5px 0 0",
                color: "white"
            }
        },
        icon: {
            fill: "#ffb600"
        },
        overflow: "hidden"
    })

    );

    const handlemodal = () => {
        if (userId === undefined) {
            alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if ((low === true || medium === true || high === true) && quantity > 0 && currentUnit) {
                setModalOpen(true)
            }
            else if (low === false && medium === false && high === false) {
                notify('Please select something')
            }
            else if (quantity <= 0 && !currentUnit) {
                notify('Select a unit and the quantity should be greater than 0')
            }
            else if (!currentUnit) {
                notify('Select a unit')
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
            }
        }

    }
    useEffect(() => {
        if (low) {
            setData({ type: "low" })
        }
        else if (medium) {
            setData({ type: "medium" })
        }
        else if (high) {
            setData({ type: "high" })
        }


    }, [low, medium, high])

    useEffect(() => {
        if (low) {
            setMedium(false)
            setHigh(false)
        }

    }, [low])
    useEffect(() => {
        if (medium) {
            setLow(false)
            setHigh(false)
        }

    }, [medium])
    useEffect(() => {
        if (high) {
            setMedium(false)
            setLow(false)
        }

    }, [high])
    let quantitywithunit
    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        setNewRequest({ ...newRequest, quantity: quantitywithunit })
    }, [currentUnit, quantity])
    const handleCart = async (e) => {
        e.preventDefault()
        if (userId === undefined) {
            alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if ((low === true || medium === true || high === true) && quantity > 0 && currentUnit) {
                console.log(typeof quantity, typeof currentUnit)
                // quantitywithunit=quantity + " " + currentUnit
                console.log(quantitywithunit, "quantity")
                // setNewRequest({...newRequest,quantity:quantitywithunit})
                console.log(newRequest, "request")


                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity("")
                setCurrentUnit("")
                setLow(false)
                setCurrentUnit("")
                setMedium(false)
                setHigh(false)
                getCart()
            }
            else if (low === false && medium === false && high === false) {
                notify('Please select something')
            }
            else if (quantity <= 0 && !currentUnit) {
                notify('Select a unit and the quantity should be greater than 0')
            }
            else if (!currentUnit) {
                notify('Select a unit')
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
            }
        }
    }

    useEffect(()=>{
        if(modalopen===false){
            setQuantity("")
            setCurrentUnit("")
            setLow(false)
            setCurrentUnit("")
            setMedium(false)
            setHigh(false)
        }
    }, [modalopen])

    const classes = useStyles()
    return (
        <div className="selected">
        <div className="selected-header">Sand</div>
        <div className="description" style={{marginBottom:'50px'}}>Add sand to your products.</div>
        <div className="description" style={{marginBottom:'30px'}}>Save sand type</div>

        <div>
                <div className='checkbox'><FormControlLabel
                    control={
                        <Checkbox
                            checked={low}
                            onChange={(e) => setLow(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ transform: "scale(1.5)" }} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ transform:"scale(1.5)", color: 'green' }} />}
                        />
                    }
                    label="Low/Coarse"
                    className="sand-form-input"
                    style={{
                        backgroundColor: theme?"#D8D8D8":"#08090C",
                        //width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                    labelPlacement="start"
                /></div>
                <div className='checkbox'><FormControlLabel
                    control={
                        <Checkbox
                            checked={medium}
                            onChange={(e) => setMedium(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ transform: "scale(1.5)" }} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ transform:"scale(1.5)", color: 'green' }} />}
                        />
                    }
                    label="Medium"
                    className="sand-form-input"
                    style={{
                        backgroundColor: theme?"#D8D8D8":"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                    labelPlacement="start"
                /></div>
                <div className='checkbox'><FormControlLabel
                    control={
                        <Checkbox
                            checked={high}
                            onChange={(e) => setHigh(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ transform: "scale(1.5)" }} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ transform:"scale(1.5)", color: 'green' }} />}
                        />
                    }
                    label="High/Fine"
                    className="sand-form-input"
                    style={{
                        backgroundColor: theme?"#D8D8D8":"#08090C",
                        //width: "15rem",
                        padding: "3%",
                        borderRadius: "10px"
                        
                    }}
                    labelPlacement="start"
                /></div>
            </div>
            {(low === true || medium === true || high === true)
                &&

                <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
                <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />
                <FormControl
                variant='outlined'
                className={classes.formControl}
                InputProps={{ disableOutline: true }}
                style={{marginLeft:'5%', height:'52px', backgroundColor:theme?"#D8D8D8":""}}
            >  
                <InputLabel id='demo-simple-select-label' name="Units" placeholder="Unit" style={{ color: theme?"black":"white" }}>
                    Units
                </InputLabel>
                <Select
                className='select'
                    id='demo-simple-select'
                    inputProps={{ classes: { icon: classes.icon } }}
                    style={{ color: "#ffb600", height: '52px', width: '150px' }}
                >
                    {units?.map((filter, index) => (
                        <MenuItem
                            style={{ color: "white" }}
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
            <div className="cement-bottom-buttons">
            <Button variant="contained" className="cement-cart-button" onClick={handleCart}>
                ADD TO CART
            </Button>
            <Button variant="contained" className="cement-cart-button1" onClick={handlemodal}>
                Request
            </Button>
        </div>
            <ToastContainer />
        </div>
    )
}

export default Sand