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

function TMT({ getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()


    const brands = dropdownData?.tmt_bars_brands;
    const types = dropdownData?.tmt_bars_types;
    const sizes = dropdownData?.tmt_bars_sizes;

    const [trade, setTrade] = React.useState('Trade');
    const trades = ["Trade", "Non-Trade"]
    const [selectedbrand, setSelectedBrand] = useState("")
    const [selectedtype, setSelectedType] = useState("")
    const [selectedsize, setSelectedSize] = useState("")
    const units = ["Ton", "Metric ton", "kilogram(kg)"]
    let quantitywithunit
    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        setNewRequest({ ...newRequest, quantity: quantitywithunit })
    }, [currentUnit, quantity])

    useEffect(() => {
        setNewRequest({ ...newRequest, trade: trade === "Trade" ? true : false })
        console.log(trade)
    }, [trade])

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
                else if (selectedbrand === "" || selectedtype === "" || selectedtype === "") {
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
            condition: {
                "& .MuiFormControlLabel-label": {
                    color: "#ffb600"
                }
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
            else if ((selectedbrand !== "" && selectedtype !== "" && selectedsize !== "") && quantity > 0 && currentUnit) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setCurrentUnit("")
                setSelectedBrand("")
                setSelectedType("")
                setSelectedSize("")
                getCart()
            }
            else if (selectedbrand === "" || selectedtype === "" || selectedsize === "") {
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
        setData({ brand: selectedbrand, type: selectedtype, size: selectedsize })

    }, [selectedbrand, selectedtype, selectedsize])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setCurrentUnit("")
            setSelectedBrand("")
            setSelectedType("")
            setSelectedSize("")
        }
    }, [modalopen])

    const [placeholder1, setPlaceholder1]=useState("TMT bar brands")
    const [placeholder2, setPlaceholder2]=useState("TMT bar grades")
    const [placeholder3, setPlaceholder3]=useState("TMT bar sizes")

    const [more, setMore]=useState(false)
    useEffect(()=>{
        setSelectedBrand("")
        setSelectedType("")
    }, [more])

    const classes = useStyles()
    return (
        <div className="selected-item">
            <div className="selected-header">TMT bars</div>
            <div className="description" style={{marginBottom:'30px'}}>Add TMT bars to your products.</div>
            <div className="description">Select Brand and Grade.</div>



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
              <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search TMT bar Brand")}} onBlur={()=>{setPlaceholder1("TMT brands")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
            )}
          />




          <Autocomplete
          value={more===false?selectedtype:""}
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
            <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search TMT Bar Grade")}} onBlur={()=>{setPlaceholder2("TMT bar grades")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
          )}
        />


        <div style={{marginTop:'10%', marginBottom:'5%'}}>Didn't find your brand? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>
        </div>  
          }


         {more===true &&
            <div>
            <div className="quantity1" style={{ marginTop: "2%", width: "100%", height: "60px" }}>
            <TextField type="text" value={selectedbrand} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedBrand(e.target.value)} name="BrandInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Brand" variant="outlined" />
            </div>
            <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
            <TextField type="text" value={selectedtype} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedType(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Grade" variant="outlined" />
            </div>
            <div className='span-container' style={{marginTop:'4.9%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>
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
            listbox: theme?classes.input:""
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder3} {...params}  variant="outlined" onFocus={()=>{setPlaceholder3("Search TMT Bar Size")}} onBlur={()=>{setPlaceholder3("Sizes")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
        )}
      />


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




        {(selectedbrand !=="" && selectedtype !=="" && selectedsize!=="")
            &&

            <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex', flexWrap:'wrap' }}>
            <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />
            <FormControl
            variant='outlined'
            className={classes.formControl}
            InputProps={{ disableOutline: true }}
            style={{backgroundColor: theme?"#D8D8D8":"#08090C",marginLeft:'5%', height:'52px'}}
        >  
            <InputLabel id='demo-simple-select-label' name="Units" placeholder="Unit" style={{ color: theme?"black":"white" }}>
                Units
            </InputLabel>
            <Select
                id='demo-simple-select'
                className='select'
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
            <Button variant="contained" className="cement-cart-button"  onClick={handleCart}>
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

export default TMT
