import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { Column, Input, Row, SectionTitle } from "../../Styled/Styled";
require('dotenv').config()

const PersonalDetails = ({ formData, setFormData, getUser, handleClickOpen }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [name, setName] = useState(formData?.first_name ? formData?.first_name : "");
    const [phone, setPhone] = useState(formData?.phone_no ? formData?.phone_no : "");
    const [email, setEmail] = useState(formData?.email ? formData?.email : "");
    const [wpp, setWpp] = useState(formData?.whatsapp_no ? formData?.whatsapp_no : "");
    const [password, setPassword] = useState("")

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);


    const getLocation = (e) => {
        e.preventDefault()
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }


    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleformdata = async (e) => {
        e.preventDefault();
        seteditable(!editable)
        if (!editable) {
            setFormData({ ...formData, first_name: name, phone_no: phone, email: email, whatsapp_no: wpp })
            if (validator.isMobilePhone(formData?.phone_no) && validator.isMobilePhone(formData?.whatsapp_no)) {
                await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                    .then(response => {
                        getUser()
                        setBtnTxt("Edit")
                    })
                handleClickOpen();
            }
            else {
                setBtnTxt("Edit")
                notify("Enter Valid Mobile Number/Whatsapp Number")
            }
        } else {
            setBtnTxt("Save")
        }
    }

    useEffect(() => {
        setFormData({ ...formData, first_name: name, phone_no: phone, email: email, whatsapp_no: wpp })
    }, [name, phone, email, wpp])

    const handleClick = () => {
        notify("Email Cant be Changed . Send Special Request")
    }
    return (
        <form
            style={{
                width: "100%",
            }}
        >
            <Row>
                <SectionTitle>Personal Details</SectionTitle>
                {/* <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        alignSelf: "flex-start",
                        marginTop: ".8rem",
                        borderRadius:'5px',
                    }}
                >
                    <FiEdit color={"#ffb600"} />
                </button> */}
            </Row>

            <Row className="input-orientation">
                <Column
                    style={{
                        minWidth: "45%",
                    }}
                >
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Name'
                        id='name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Phone No.'
                        id='phone'
                        type='text'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    {/* <Input
                     disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Password'
                        id='phone'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    /> */}
                </Column>
                <Column
                    style={{
                        minWidth: "45%",
                    }}
                >
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Email ID'
                        id='email'
                        type='text'
                        // onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        onClick={handleClick}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Whatsapp No.'
                        id='wpp'
                        type='text'
                        onChange={(e) => setWpp(e.target.value)}
                        value={wpp}
                    />
                </Column>
            </Row>
            {/* <Button
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%)",
                }}
                onClick={handleformdata}
            >
                Save
            </Button>
             */}
            <button
                onClick={handleformdata}
                className="disiabled_save_butn"
            // className={`${disabled1==0?"disiabled_save_butn_block  ":"disiabled_save_butn "}`}
            // disabled={!name || !phone || !wpp}
            >
                {btnTxt}
            </button>
            <ToastContainer />
        </form>
    );
};

export default PersonalDetails;
