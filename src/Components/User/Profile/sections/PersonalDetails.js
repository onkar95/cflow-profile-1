import React, { useEffect, useState } from "react";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import "./Profile.css"
import { makeStyles } from '@material-ui/core/styles';
import Pincode from "react-pincode";
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"

require('dotenv').config()


const PersonalDetails = ({ theme, formData, setFormData, getUser, filled, setFilled, handleClickOpen }) => {
    // console.log(formData);

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [name, setName] = useState(formData?.first_name ? formData?.first_name : "");
    const [phone, setPhone] = useState(formData?.phone_no ? formData?.phone_no : "");
    const [city, setCity] = useState(formData?.city ? formData?.city : "");
    const [pin, setPin] = useState(formData?.pin ? formData?.pin : "");
    const [email, setEmail] = useState(formData?.email ? formData?.email : "");
    const [wpp, setWpp] = useState(formData?.whatsapp_no ? formData?.whatsapp_no : "");
    const [state, setState] = useState(formData?.state ? formData?.state : "");

    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);

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
        console.log("clicked");
        seteditable(!editable)
        // if (!formData || !formData.email) {
        //     bt
        // }
        if (!name || !wpp || !city || !pin || !state) {
            setDisabled(0);
        } else {
            setDisabled(1);

            if (!editable) {
                setFormData({ ...formData, first_name: name, phone_no: phone, city: city, pin: pin, email: email, whatsapp_no: wpp, state: state })

                if (validator.isMobilePhone(formData?.phone_no) && validator.isMobilePhone(formData?.whatsapp_no)) {
                    await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                        .then(response => {
                            getUser()
                            // alert("data saved")
                            setBtnTxt("Edit")

                            // setSaved("true")
                        })
                    handleClickOpen();
                }
                else {
                    setBtnTxt("Edit")

                    notify("Enter Valid Mobile Number/Whatsapp Number")
                }

            }
            else {
                setBtnTxt("Save")
            }
        }
    }

    useEffect(() => {
        setFormData({ ...formData, first_name: name, phone_no: phone, city: city, pin: pin, email: email, whatsapp_no: wpp, state: state })
        let temp = 1;
        if (name !== "") {
            temp++;
        }
        if (phone !== "") {
            temp++;
        }
        if (city !== "") {
            temp++;
        }
        if (pin !== "") {
            temp++;
        }
        if (email !== "") {
            temp++;
        }
        if (wpp !== "") {
            temp++;
        }
        if (state !== "") {
            temp++;
        } else {
            temp = 0;
        }
        setFilled({ ...filled, personal: temp })
    }, [name, phone, city, pin, email, wpp, state])


    const emailClick = () => {

        notify("Email Cant be Changed . Send Special Request");
    }
    const phoneClick = () => {

        notify("mobile no Cant be Changed . Send Special Request");
    }

    // useEffect(() => {
    //     if (!name || !wpp || !city || !pin || !state) {
    //         setDisabled(0);
    //     } else {
    //         setDisabled(1);
    //     }
    // }, [name, phone, city, pin, email, wpp, state])

    // const ableToEdit = (a) => {
    //     a.preventDefault();
    //     seteditable(!editable)
    //     if (!editable) {
    //         setedit("Edit")
    //     } else {
    //         setedit("Cancle")
    //     }
    // }
    // const disabledButn = () => {
    //     notify("please fill all the details");

    // }

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = (e) => {
        e.preventDefault()


        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {

                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                // Get formatted address, city, state, country from latitude & longitude when
                // Geocode.setLocationType("ROOFTOP") enabled
                // the below parser will work for most of the countries

                axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
                    .then((response) => {
                        console.log(response, "location")
                        setState(response?.data?.principalSubdivision)
                        console.log(response?.data?.principalSubdivision)
                    })

            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    // console.log(formData.email);

    return (
        <>
            {window.innerWidth > 600 ?
                <div>
                    <Row className="profile_section_heading">
                        <Column className="inputs_coloum_group">Personal information</Column>
                        <Column className="inputs_coloum_group"></Column>
                        <Column className="inputs_coloum_group">security</Column>
                    </Row>

                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">Name</label>
                            <Input
                                placeholder='Name'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='name'
                                type='text'
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                className={theme === true ? "white_input" : "dark_input"}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <label htmlFor="">Email</label>

                            <input
                                // className="email"
                                className={theme === true ? "white_input email" : "dark_input email"}
                                autoComplete="off"
                                placeholder='Email ID'
                                id='email'
                                type='text'
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                                // disabled
                                // onChange={handleClick}
                                value={email}
                                onClick={emailClick}
                            />


                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">Phone no</label>

                            <input
                                // style={{ backgroundColor: "orange", color: "black" }}
                                className={theme === true ? "white_input number" : "dark_input number"}
                                // className="number"
                                placeholder='Phone No.'
                                autoComplete="off"
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                                id='phone'
                                type='text'
                                // onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                onClick={phoneClick}
                            />
                            <label htmlFor="">Whatsapp no</label>
                            <Input
                                placeholder='Whatsapp No.'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='wpp'
                                type='text'
                                onChange={(e) => setWpp(e.target.value)}
                                value={wpp}
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                            />
                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">Password</label>
                            <Input
                                placeholder='State'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='state'
                                type='password'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                            />
                            {/* <Button onClick={getLocation}>Locate me</Button> */}

                        </Column>
                    </Row>

                    <div
                        onClick={handleformdata}
                        // className={`${disabled1 == 0 ? "disabled_save_butn_block  " : "disabled_save_butn "}`}
                        className="disabled_save_butn"
                    // disabled={!name || !wpp || !city || !pin || !state}
                    >
                        <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                        {btnTxt}
                    </div>

                    <ToastContainer />
                </div>

                :
                <div>
                    <Row>
                        <Column className="inputs_coloum_group">Personal information</Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">name</label>
                            <Input
                                placeholder='Name'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='name'
                                type='text'
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <label htmlFor="">Email</label>

                            <input
                                className="email"
                                className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                placeholder='Email ID'
                                id='email'
                                type='text'
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                                // disabled
                                // onChange={handleClick}
                                value={email}
                                onClick={emailClick}
                            />



                            <label htmlFor="">Phone no</label>

                            <input
                                // style={{ backgroundColor: "orange", color: "black" }}
                                className={theme === true ? "white_input" : "dark_input"}
                                className="number"
                                placeholder='Phone No.'
                                autoComplete="off"
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                                id='phone'
                                type='text'
                                // onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                onClick={phoneClick}
                            />
                            <label htmlFor="">Whatsapp no</label>
                            <Input
                                placeholder='Whatsapp No.'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='wpp'
                                type='text'
                                onChange={(e) => setWpp(e.target.value)}
                                value={wpp}
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                            />

                            {/* <Button onClick={getLocation}>Locate me</Button> */}

                        </Column>
                    </Row>
                    <Row>
                        <Column className="inputs_coloum_group">security</Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation" >

                        <Column className="inputs_coloum">
                            <label htmlFor="">PAssword</label>
                            <Input
                                placeholder='State'
                                className={theme === true ? "white_input" : "dark_input"}
                                id='state'
                                type='password'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                disabled={editable}
                                autoComplete="off"
                                style={!editable ? { color: "white" } : { color: "#727272" }}

                            />
                        </Column>
                    </Row>

                    <div
                        onClick={handleformdata}
                        // className={`${disabled1 == 0 ? "disabled_save_butn_block  " : "disabled_save_butn "}`}
                        className="disabled_save_butn"
                    // disabled={!name || !wpp || !city || !pin || !state}
                    >
                        <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                        {btnTxt}
                    </div>

                    <ToastContainer />
                </div>

            }
        </>
    );
};

export default PersonalDetails;


//     <Button
//         style={{
//             position: "relative",
//             left: "50%",
//             transform: "translate(-50%)",
//         }}
//         onClick={handleformdata}
//     >
//     Save
// </Button> 
//     { formData.email ? edit : Save }
//     <button
//         style={{ marginRight: "10px" }}
//         onClick={ableToEdit}
//         className="disabled_save_butn "
//     >{edit}
//     </button>
////<Input
  //  style={{ backgroundColor: "orange", color: "black" }}
  //  className="email"
  //  autoComplete="off"
//
  //  placeholder='Email ID'
  //  id='email'
  //  type='text'
  //  disabled={editable}
  //  autoComplete="off"
  //  style={!editable ? { color: "white" } : { color: "#727272" }}
//
  //  disabled
  //  onChange={handleClick}
  //  onChange={(a)=>setemail(a.target.value)}
  //  value={email}
  //  onClick={emailClick}
///>