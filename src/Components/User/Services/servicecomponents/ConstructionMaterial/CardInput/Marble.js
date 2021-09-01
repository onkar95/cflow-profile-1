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





function Marble({ formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()


    const brands = dropdownData?.marble_tile_brands;
    const types = dropdownData?.marble_tile_types;
    const sizes = dropdownData?.marble_tile_sizes;



    const [selectedbrand, setSelectedBrand] = useState("")
    const [selectedtype, setSelectedType] = useState("")
    const [selectedsize, setSelectedSize] = useState("")
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
            if (selectedbrand === "" || selectedsize === "" || selectedtype === "") {

                notify('Please fill all the details');
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else {
                setModalOpen(true)
            }
        }
    }

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
            else if ((selectedbrand !== "" && selectedtype !== "" && selectedsize !== "") && quantity > 0) {
                setNewRequest({ ...newRequest, quantity: quantity })


                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setSelectedBrand("")
                setSelectedType("")
                setSelectedSize("")
            }
            else if (selectedbrand === "" || selectedtype === "" || selectedsize === "") {
                notify('Please select something')
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
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
            "& .MuiInputBase-input": {height:'0.3rem'}
        },
        input1: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
        },
        overflow: "hidden"
    }));
    useEffect(() => {
        setData({ brand: selectedbrand, type: selectedtype, size: selectedsize })

    }, [selectedbrand, selectedtype, selectedsize])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setSelectedBrand("")
            setSelectedType("")
            setSelectedSize("")
        }
    }, [modalopen])

    const classes = useStyles()

    const [placeholder1, setPlaceholder1]=useState("Marble brands")
    const [placeholder2, setPlaceholder2]=useState("Marble types")
    const [placeholder3, setPlaceholder3]=useState("Marble sizes")

    const [more, setMore]=useState(false)
    useEffect(()=>{
        setSelectedBrand("")
        setSelectedType("")
    }, [more])

    return (
        <div className="selected">
        <div className="selected-header">Marbles and tiles</div>
        <div className="description" style={{marginBottom:'30px'}}>Add marbles and tiles to your products.</div>
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
            input: classes.input
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor:'#08090C', marginBottom: '1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search marble brand")}} onBlur={()=>{setPlaceholder1("Marble brands")}} {...params}  variant="outlined"  classes={{ root: classes.input }} />
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
          input: classes.input
        }}
      getOptionLabel={option => option}
      style={{ width: '100%', backgroundColor:'#08090C', marginBottom:'1rem' }}
      renderInput={params => (
        <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search marble type")}} onBlur={()=>{setPlaceholder2("Marble types")}} classes={{ root: classes.input }} />
      )}
    />


    <div style={{marginTop:'10%', marginBottom:'5%'}}>Didn't find your brand? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>

    </div>  
      }


     {more===true &&
        <div>
        <div className="quantity1" style={{ marginTop: "2%", width: "100%", height: "60px" }}>
        <TextField type="text" value={selectedbrand} style={{ backgroundColor: "#08090C", width: "100%", height: "70%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedBrand(e.target.value)} name="BrandInput" className={`${classes.root} InputField1`} InputProps={{ className: classes.input }} placeholder="Brand" variant="outlined" />
        </div>
        <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
        <TextField type="text" value={selectedtype} style={{ backgroundColor: "#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedType(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className: classes.input }} placeholder="Grade" variant="outlined" />
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
        input: classes.input
      }}
    getOptionLabel={option => option}
    style={{ width: '100%', backgroundColor:'#08090C', marginBottom:'1rem' }}
    renderInput={params => (
      <TextField  placeholder={placeholder3} {...params}  variant="outlined" onFocus={()=>{setPlaceholder3("Search TMT Bar Size")}} onBlur={()=>{setPlaceholder3("Sizes")}} classes={{ root: classes.input }} />
    )}
  />


    {(selectedbrand !=="" && selectedtype !=="" && selectedsize!=="")
        &&

        <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
        <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: "#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: classes.input1 }} placeholder="Quantity" variant="outlined" />
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

export default Marble
