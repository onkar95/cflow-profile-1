import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { Column, Input, Row, SectionTitle } from "../../Styled/Styled";
import './Profile.css';
require('dotenv').config()

const CompanyDetails = ({ formData, setFormData, getUser, handleClickOpen }) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [name, setName] = useState(formData?.company_detail_name ? formData?.company_detail_name : "");
    const [companyName, setCompanyName] = useState(formData?.company_name ? formData?.company_name : "");
    const [phone, setPhone] = useState(formData?.company_phone_no ? formData?.company_phone_no : "");
    const [title, setTitle] = useState(formData?.company_title ? formData?.company_title : "");
    const [email, setEmail] = useState(formData?.company_email_address ? formData?.company_email_address : "");
    const [wpp, setWpp] = useState(formData?.company_whatsapp_no ? formData?.company_whatsapp_no : "");
    const [Fax, setFax] = useState(formData?.fax ? formData?.fax : "");

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
        seteditable(!editable)
        if (!editable) {

            setFormData({ ...formData, company_detail_name: name, company_name: companyName, company_phone_no: phone, company_title: title, company_email_address: email, company_whatsapp_no: wpp, fax: Fax })
            if (validator.isMobilePhone(formData?.company_phone_no) && validator.isMobilePhone(formData?.company_whatsapp_no) && validator.isEmail(formData?.company_email_address)) {
                await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                    .then(response => {
                        getUser()
                        console.log(response);
                        // if(response==)
                        setBtnTxt("Edit")
                    })
                    .catch(err => {
                        setBtnTxt("Edit")
                        console.log(err)
                    })

                handleClickOpen();
            }
            else {
                seteditable(editable)
                setBtnTxt("Save")
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

    }


    useEffect(() => {
        setFormData({ ...formData, company_detail_name: name, company_name: companyName, company_phone_no: phone, company_title: title, company_email_address: email, company_whatsapp_no: wpp, fax: Fax })
    }, [name, companyName, phone, title, email, Fax])


    return (
        <form
            style={{
                width: "100%",
            }}
        >
            <Row >
                <SectionTitle>Company Details</SectionTitle>
                {/* <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        alignSelf: "flex-start",
                        marginTop: "1rem",
                        // marginTop: ".1rem",5
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
                        placeholder='Company Name'
                        id='company'
                        type='text'
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
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
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Fax'
                        id='Fax'
                        type='text'
                        onChange={(e) => setFax(e.target.value)}
                        value={Fax}
                    />
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
                        placeholder='Title'
                        id='title'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Email ID'
                        id='email'
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
            </Button> */}
            <button
                onClick={handleformdata}
                className="disiabled_save_butn"
            // className={`${disabled1==0?"disiabled_save_butn_block  ":"disiabled_save_butn "}`}
            // disabled={!name || !phone || !wpp ||!Fax||!companyName ||!title}
            // style={!disabled?{backgroundColor:"gray"}:{backgroundcolor: "#ffb600"}}
            // disabled={disabled1}
            >
                {/* {!name == "" && !phone == "" && !wpp == "" && !email == "" && !Fax == "" && !companyName == "" ? edit : Save} */}
                {btnTxt}
            </button>
            <ToastContainer />
        </form>
    );
};

export default CompanyDetails;
