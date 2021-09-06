import { FormControl, InputLabel, MenuItem, TextField, Select, ListItem, List, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Cement({ getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [selectedbrand, setSelectedBrand] = useState("")
    const [trade, setTrade] = React.useState('Trade');
    const trades = ["Trade", "Non-Trade"]

    const brands = dropdownData?.rmc_brands;

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

    const handlemodal = () => {
        if (userId === undefined) {
            alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if (selectedbrand === "") {
                notify('Please select something');

            }
            else if (quantity <= 0 && !currentUnit) {
                notify('Select a unit and the quantity should be greater than 0');
            }
            else if (!currentUnit) {
                notify('Select a unit')
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0');
            }
            else {
                setModalOpen(true)
            }
        }

    }

    const units = ["Cubic Ft", "Cubic Mt", "Cubic Yards"]
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
            else if ((selectedbrand !== "") && quantity > 0 && currentUnit) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setSelectedBrand("")
                setCurrentUnit("")
                getCart()
            }
            else if (selectedbrand === "") {
                notify('Please select something');
            }
            else if (quantity <= 0 && !currentUnit) {
                notify('Select a unit and the quantity should be greater than 0');
            }
            else if (!currentUnit) {
                notify('Select a unit')
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0');
            }
        }
    }

    const useStyles = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            // minWidth: 200,

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color: "white"
            }
        },
        formControl1: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: "10%",

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
                borderColor: "transparent"
            }
        },
        input: {
            color: "white",   
            "& input::placeholder":{color:"#fffafa"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"white"},
            "&.MuiAutocomplete-listbox": {backgroundColor:"white", color:"black"}
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
        condition: {
            "& .MuiFormControlLabel-label": {
                color: "#ffb600"
            }
        },
        overflow: "hidden"
    }));
    useEffect(() => {
        setData({ type: selectedbrand })
    }, [selectedbrand])

    const classes = useStyles()

    const [placeholder1, setPlaceholder1]=useState("RMC mixture grades")
    const [more, setMore]=useState(false)
    useEffect(()=>{
        setSelectedBrand("")
    }, [more])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setSelectedBrand("")
            setCurrentUnit("")
        }
    }, [modalopen])

    return (
        <div className="selected-item">
            <div className="selected-header">RMC mixtures</div>
            <div className="description" style={{marginBottom:'30px'}}>Add RMC mixture to your products.</div>
            <div className="description">Select RMC mixture grade</div>



        { more===false &&
           <div>
            <Autocomplete
            value={more===false?selectedbrand:""}
            id="combo-box-demo"
            onChange={(event, newInputValue) => {
                setSelectedBrand(newInputValue);
                }}
            options={brands?.length>0?brands:[]}
            classes={{
                listbox: theme?classes.input:""
              }}
            getOptionLabel={option => option}
            style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
            renderInput={params => (
              <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search RMC mixture grade")}} onBlur={()=>{setPlaceholder1("RMC mixture grades")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
            )}
          />


        <div style={{marginTop:'9.5%', marginBottom:'5%'}}>Didn't find your brand? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>

        </div>  
          }


         {more===true &&
            <div>
            <div className="quantity1" style={{ marginTop: "2%", width: "100%", height: "60px", marginBottom:"2.5%" }}>
            <TextField type="text" value={selectedbrand} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedBrand(e.target.value)} name="BrandInput" className={`${classes.root} InputField1`} InputProps={{ className:theme?classes.inputtheme:classes.input}} placeholder="Brand" variant="outlined" />
            </div>
            <div className='span-container' style={{marginTop:'4.9%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>

            </div>
        }





         <div class="button-group">
         <FormControl component="fieldset">
         <FormLabel component="legend"></FormLabel>
         <RadioGroup row aria-label="position" name="position" defaultValue="top">
         {trades.map((option)=>{
             return (
                 <div>
                    <FormControlLabel
                    value={option}
                    control={<Radio color="secondary" />}
                    label={option}
                    classes={{root:trade===option?classes.condition:"" }}
                    labelPlacement="start"
                    checked={trade===option}
                    onChange={()=>setTrade(option)}
               />
                 </div>
             )
         })}
         </RadioGroup>
         </FormControl>
         </div>




        {(selectedbrand !=="")
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

export default Cement
