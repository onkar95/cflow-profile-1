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

function Cement({ formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()


    const [selectedtype, setSelectedType] = useState("")
    const [selectedsize, setSelectedSize] = useState("")
    const units = ["kilograms(kg)", "Ton"]

    const types = dropdownData?.stones_types;
    const sizes = dropdownData?.stones_sizes;


    let quantitywithunit
    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        setNewRequest({ ...newRequest, quantity: quantitywithunit })
    }, [currentUnit, quantity])

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
            else if (selectedtype === "" || selectedsize === "") {
                notify('Please select something');
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
                setModalOpen(true)
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
            minWidth: "9%",

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                // borderRadius: "5px 5px 0 0",
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
        input1: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
        },
        input: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
            "& .MuiInputBase-input": {height:'0.3rem'}
        },
        overflow: "hidden"
    }));
    useEffect(() => {
        setData({ type: selectedtype, sizes: selectedsize })

    }, [selectedtype, selectedsize])

    const classes = useStyles()

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
            else if ((selectedtype !== "" && selectedsize !== "") && quantity > 0 && currentUnit) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setSelectedType("")
                setCurrentUnit("")
                setSelectedSize("")
            }
            else if (selectedtype === "" || selectedsize === "") {
                notify('Please select something');
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

    const [placeholder1, setPlaceholder1]=useState("Stone types")
    const [placeholder2, setPlaceholder2]=useState("Stone sizes")
    const [more, setMore]=useState(false)
    useEffect(()=>{
        setSelectedType("")
    }, [more])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setSelectedType("")
            setCurrentUnit("")
            setSelectedSize("")
        }
    }, [modalopen])

    return (
        <div className="selected">
        <div className="selected-header">Stones</div>
        <div className="description" style={{marginBottom:'30px'}}>Add stones to your products.</div>
        <div className="description">Select stone type</div>



    { more===false &&
       <div>
        <Autocomplete
        value={more===false?selectedtype:""}
        id="combo-box-demo"
        onChange={(event, newInputValue) => {
            setSelectedType(newInputValue);
            }}
        options={types?.length>0?types:[]}
        classes={{
            input: classes.input
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor:'#08090C', marginBottom: '1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search stone type")}} onBlur={()=>{setPlaceholder1("Stone types")}} {...params}  variant="outlined"  classes={{ root: classes.input }} />
        )}
      />


    <div style={{marginTop:'10%', marginBottom:'5%'}}>Didn't find your brand? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>
    </div>  
      }


     {more===true &&
        <div>
        <div className="quantity1" style={{ marginTop: "2%", width: "100%", height: "60px", marginBottom: '3%' }}>
        <TextField type="text" value={selectedtype} style={{ backgroundColor: "#08090C", width: "100%", height: "70%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedType(e.target.value)} name="BrandInput" className={`${classes.root} InputField1`} InputProps={{ className: classes.input }} placeholder="Stone type" variant="outlined" />
        </div>
        <div className='span-container' style={{marginTop:'5.4%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>
        </div>
    }


    <Autocomplete
    value={selectedsize}
    id="combo-box-demo"
    onChange={(event, newInputValue) => {
        setSelectedSize(newInputValue);
        }}
    options={sizes?.length>0?sizes:[]}
    classes={{
        input: classes.input
      }}
    getOptionLabel={option => option}
    style={{ width: '100%', backgroundColor:'#08090C', marginBottom:'1rem' }}
    renderInput={params => (
      <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search stone Size")}} onBlur={()=>{setPlaceholder2("Stone sizes")}} classes={{ root: classes.input }} />
    )}
  />
    {(selectedtype !=="" && selectedsize!=="")
        &&

        <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
        <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: "#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: classes.input1 }} placeholder="Quantity" variant="outlined" />
        <FormControl
        variant='outlined'
        className={classes.formControl}
        InputProps={{ disableOutline: true }}
        style={{marginLeft:'5%', height:'52px'}}
    >  
        <InputLabel id='demo-simple-select-label' name="Units" placeholder="Unit" style={{ color: "white" }}>
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
