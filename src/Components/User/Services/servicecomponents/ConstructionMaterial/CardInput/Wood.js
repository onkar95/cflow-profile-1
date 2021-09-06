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

function Wood({ getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()

    const names=dropdownData?.wood_names;
    const grades=dropdownData?.wood_grades;
    const types=dropdownData?.wood_types;

    const [selectedname, setSelectedName]=useState("")
    const [selectedgrade, setSelectedGrade]=useState("")
    const [selectedtype, setSelectedType]=useState("")
    const units = ["Ton", "Metric ton", "kilogram(kg)"]

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
                else if (selectedname === "" || selectedgrade === "" || selectedtype === "") {
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
                // borderRadius: "5px 5px 0 0",
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
        overflow: "hidden"
    }));


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
            else if ((selectedname !== "" && selectedgrade !== "" && selectedtype !== "") && quantity > 0 && currentUnit) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setCurrentUnit("")
                setSelectedName("")
                setSelectedType("")
                setSelectedGrade("")
                getCart()
            }
            else if ( selectedname === "" || selectedgrade === "" || selectedtype === "") {
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
    useEffect(() => {
        setData({ brand: selectedname+"/"+selectedgrade, type: selectedtype })

    }, [selectedname, selectedgrade, selectedtype])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setCurrentUnit("")
            setSelectedName("")
            setSelectedType("")
            setSelectedGrade("")
        }
    }, [modalopen])

    const [placeholder1, setPlaceholder1]=useState("Wood names")
    const [placeholder2, setPlaceholder2]=useState("Wood grades")
    const [placeholder3, setPlaceholder3]=useState("Wood types")

    const classes = useStyles()

    return (
        <div className="selected-item">
        <div className="selected-header">Woods</div>
        <div className="description" style={{marginBottom:'30px'}}>Add woods to your products.</div>
        <div className="description">Select name, grade and type.</div>

  
       <div>
        <Autocomplete
        value={selectedname}
        id="combo-box-demo"
        onChange={(event, newInputValue) => {
            setSelectedName(newInputValue);
            }}
        options={names?.length>0?names:[]}
        classes={{
            listbox: theme?classes.input:""
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search Wood name")}} onBlur={()=>{setPlaceholder1("Wood names")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
        )}
      />




      <Autocomplete
      value={selectedgrade}
      id="combo-box-demo"
      onChange={(event, newInputValue) => {
          setSelectedGrade(newInputValue);
          }}
      options={grades?.length>0?grades:[]}
      classes={{
        listbox: theme?classes.input:""
      }}
      getOptionLabel={option => option}
      style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
      renderInput={params => (
        <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search wood grade")}} onBlur={()=>{setPlaceholder2("Wood grades")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
      )}
    />

    <Autocomplete
    value={selectedtype}
    id="combo-box-demo"
    onChange={(event, newInputValue) => {
        setSelectedType(newInputValue);
        }}
    options={types?.length>0?types:[]}
    classes={{
        listbox: theme?classes.input:""
      }}
    getOptionLabel={option => option}
    style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
    renderInput={params => (
      <TextField  placeholder={placeholder3} {...params}  variant="outlined" onFocus={()=>{setPlaceholder3("Search wood type")}} onBlur={()=>{setPlaceholder3("Wood types")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
    )}
  />
    </div>  
      







    {(selectedname !=="" && selectedgrade !=="" && selectedtype!=="")
        &&
        <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
        <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />
        <FormControl
        variant='outlined'
        className={classes.formControl}
        InputProps={{ disableOutline: true }}
        style={{backgroundColor: theme?"#D8D8D8":"#08090C", marginLeft:'5%', height:'52px'}}
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

export default Wood