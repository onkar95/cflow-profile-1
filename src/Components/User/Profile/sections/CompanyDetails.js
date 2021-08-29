import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import axios from "axios";
import "./Profile.css"
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"

require('dotenv').config()

const CompanyDetails = ({ theme, formData, setFormData, getUser, filled, setFilled, handleClickOpen }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [name, setName] = useState(formData?.company_detail_name ? formData?.company_detail_name : "");
    const [companyName, setCompanyName] = useState(formData?.company_name ? formData?.company_name : "");
    const [phone, setPhone] = useState(formData?.company_phone_no ? formData?.company_phone_no : "");
    const [title, setTitle] = useState(formData?.company_title ? formData?.company_title : "");
    const [email, setEmail] = useState(formData?.company_email_address ? formData?.company_email_address : "");
    const [wpp, setWpp] = useState(formData?.company_whatsapp_no ? formData?.company_whatsapp_no : "");


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
        // if (!name || !wpp || !title || !phone || !companyName || !email) {
        //     setDisabled(0);
        // } else {
        //     setDisabled(1);
        seteditable(!editable)
        if (!editable) {
            setBtnTxt("Edit")
            setFormData({ ...formData, company_detail_name: name, company_name: companyName, company_phone_no: phone, company_title: title, company_email_address: email, company_whatsapp_no: wpp })
            if (validator.isMobilePhone(formData?.company_phone_no) && validator.isMobilePhone(formData?.company_whatsapp_no) && validator.isEmail(formData?.company_email_address)) {
                await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                    .then(response => {
                        getUser()
                        setBtnTxt("Edit")
                    })
                handleClickOpen()
            }
            else {
                if (!validator.isEmail(formData?.company_email_address)) {
                    notify("Enter Valid Email Address")
                }
                else {
                    notify("Enter Valid Mobile Number/Whatsapp Number")
                }
            }
        } else {
            setBtnTxt("Save")
        }
        // }
    }
    useEffect(() => {
        setFormData({ ...formData, company_detail_name: name, company_name: companyName, company_phone_no: phone, company_title: title, company_email_address: email, company_whatsapp_no: wpp })
        let temp = 0;
        if (name !== "") {
            temp++;
        }
        if (phone !== "") {
            temp++;
        }
        if (companyName !== "") {
            temp++;
        }
        if (title !== "") {
            temp++;
        }
        if (email !== "") {
            temp++;
        }
        if (wpp !== "") {
            temp++;
        }
        setFilled({ ...filled, company: temp })
    }, [name, companyName, phone, title, email, wpp])

    // useEffect(() => {
    //     if (!name || !wpp || !title || !phone || !companyName || !email) {
    //         setDisabled(0);
    //     } else {
    //         setDisabled(1);
    //     }
    // }, [name, phone, title, wpp, companyName, email])

    return (
        <>
            {window.innerWidth > 600 ?
                <form
                    style={{
                        width: "100%",
                    }}
                >

                    <Row className="profile_section_heading">
                        <Column className="inputs_coloum_group">company </Column>
                        <Column className="inputs_coloum_group">contact information</Column>
                        {/* <Column className="inputs_coloum_group">security</Column> */}
                    </Row>

                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">name</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Name'
                                autoComplete="off"
                                disabled={editable}
                                id='name'
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />


                            <label htmlFor="">Company Name</label>

                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Company Name'
                                autoComplete="off"
                                id='company'
                                type='text'
                                onChange={(e) => setCompanyName(e.target.value)}
                                value={companyName}
                                disabled={editable}
                                autoComplete="off"
                            />


                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">Phone no</label>

                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Phone No.'
                                id='phone'
                                type='text'
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">Title</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Title'
                                id='title'
                                type='text'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                disabled={editable}
                                autoComplete="off"

                            />
                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">Email</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Email ID'
                                id='email'
                                type='text'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">Fax no </label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Whatsapp No.'
                                id='wpp'
                                type='text'
                                onChange={(e) => setWpp(e.target.value)}
                                value={wpp}
                                disabled={editable}
                                autoComplete="off"

                            />

                        </Column>
                    </Row>

                    <div
                        onClick={handleformdata}
                        className="disabled_save_butn"
                    >
                        <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                        {btnTxt}
                    </div>
                    <ToastContainer />
                </form>
                :
                <form
                    style={{
                        width: "100%",
                    }}
                >

                    <Row>
                        <Column className="inputs_coloum_group">company </Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">name</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Name'
                                autoComplete="off"
                                id='name'
                                type='text'
                                disabled={editable}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />


                            <label htmlFor="">Company Name</label>

                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Company Name'
                                autoComplete="off"
                                id='company'
                                type='text'
                                onChange={(e) => setCompanyName(e.target.value)}
                                value={companyName}
                                disabled={editable}
                                autoComplete="off"

                            />



                        </Column>
                    </Row>
                    <Row>
                        <Column className="inputs_coloum_group">contact information</Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">Phone no</label>

                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Phone No.'
                                id='phone'
                                type='text'
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">Title</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Title'
                                id='title'
                                type='text'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">Email</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Email ID'
                                id='email'
                                type='text'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">Fax no </label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                style={!editable ? { color: "white" } : { color: "#727272" }}
                                placeholder='Whatsapp No.'
                                id='wpp'
                                type='text'
                                onChange={(e) => setWpp(e.target.value)}
                                value={wpp}
                                disabled={editable}
                                autoComplete="off"

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
                </form>

            }
        </>
    );
};

export default CompanyDetails;
