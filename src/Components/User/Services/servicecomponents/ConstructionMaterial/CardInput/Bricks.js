import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Bricks({ getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [clay, setClay] = useState(false)
    const [cement, setCement] = useState(false)
    const [fly, setFly] = useState(false)

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
            else if ((clay === true || cement === true || fly === true) && quantity > 0) {
                setModalOpen(true)
            }
            else if (clay === false && cement === false && fly === false) {
                notify('Please select something');
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
        if (clay) {
            setData({ type: "clay" })
        }
        else if (cement) {
            setData({ type: "cement" })
        }
        else if (fly) {
            setData({ type: "fly" })
        }
    }, [clay, cement, fly])

    useEffect(() => {
        if (clay) {
            setCement(false)
            setFly(false)
        }

    }, [clay])
    useEffect(() => {
        if (cement) {
            setClay(false)
            setFly(false)
        }

    }, [cement])
    useEffect(() => {
        if (fly) {
            setCement(false)
            setClay(false)
        }

    }, [fly])

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
            else if ((clay === true || cement === true || fly === true) && quantity > 0) {
                setNewRequest({ ...newRequest, quantity: quantity })


                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setClay(false)
                setCement(false)
                setFly(false)
                getCart()
            }
            else if (clay === false && cement === false && fly === false) {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
            }
        }
    }
    const useStyles = makeStyles({
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
    });

    useEffect(()=>{
        if(modalopen===false){
            setQuantity(0)
            setClay(false)
            setCement(false)
            setFly(false)
        }
    }, [modalopen])

    const classes = useStyles()
    return (
        <div className="selected-item">
        <div className="selected-header">Bricks</div>
        <div className="description" style={{marginBottom:'50px'}}>Add bricks to your products.</div>
        <div className="description" style={{marginBottom:'30px'}}>Save brick type</div>

        <div>
                <div className='checkbox'><FormControlLabel
                    control={
                        <Checkbox
                            checked={clay}
                            onChange={(e) => setClay(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{transform:"scale(1.5)"}} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ transform:"scale(1.5)", color: 'green' }} />}
                        />
                    }
                    label="Clay Bricks"
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
                            checked={cement}
                            onChange={(e) => setCement(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ transform: "scale(1.5)" }} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ transform:"scale(1.5)", color: 'green' }} />}
                        />
                    }
                    label="Cement Bricks"
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
                            checked={fly}
                            onChange={(e) => setFly(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{transform:"scale(1.5)"}} />}
                            checkedIcon={<CheckBoxIcon className="checked-icon" fontSize="small" style={{ color: 'green', transform:'scale(1.5)' }} />}
                        />
                    }
                    label="Fly Ash Bricks"
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
            {(clay === true || cement === true || fly === true)
                &&
                <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
                <TextField id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />
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

export default Bricks
