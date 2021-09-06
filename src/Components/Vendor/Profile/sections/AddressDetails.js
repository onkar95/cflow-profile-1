// import validate from "validator";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Column, Input, Row, SectionTitle } from "../../Styled/Styled";
require('dotenv').config()
const AdressDetails = ({ formData, setFormData, getUser, handleClickOpen }) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [building, setBuilding] = useState(formData?.company_building_name ? formData?.company_building_name : "");
    const [area, setArea] = useState(formData?.company_street ? formData?.company_street : "");
    const [city, setCity] = useState(formData?.company_city ? formData?.company_city : "");
    const [pin, setPin] = useState(formData?.company_pincode ? formData?.company_pincode : "");
    const [house_door, setHouse] = useState(formData?.company_house_no ? formData?.company_house_no : "");
    const [landmark, setLandmark] = useState(formData?.company_landmark ? formData?.company_landmark : "");
    const [state, setState] = useState(formData?.company_state ? formData?.company_state : "");



    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);



    const handleformdata = async (e) => {
        e.preventDefault();
        seteditable(!editable)
        if (!editable) {
            setFormData({ ...formData, company_building_name: building, company_street: area, company_city: city, company_pincode: pin, company_house_no: house_door, company_landmark: landmark, company_state: state })
            await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                .then(response => {
                    getUser()
                })
                .catch(err => {
                    console.log(err)
                })
            handleClickOpen();
        } else {
            setBtnTxt("Save")
        }
    }

    useEffect(() => {
        setFormData({ ...formData, company_building_name: building, company_street: area, company_city: city, company_pincode: pin, company_house_no: house_door, company_landmark: landmark, company_state: state })
    }, [building, area, city, pin, house_door, landmark, state])

    return (
        <form
            style={{
                width: "100%",
            }}
        >
            <Row>
                <SectionTitle>Company Address</SectionTitle>
                {/* <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        alignSelf: "flex-start",
                        marginTop: ".8rem",
                        
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
                        placeholder='Building Name'
                        id='building'
                        type='text'
                        onChange={(e) => setBuilding(e.target.value)}
                        value={building}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Area / Street'
                        id='area'
                        type='text'
                        onChange={(e) => setArea(e.target.value)}
                        value={area}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='City'
                        id='city'
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='PIN'
                        id='pin'
                        type='text'
                        onChange={(e) => setPin(e.target.value)}
                        value={pin}
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
                        placeholder='H.No / Door.No'
                        id='house_door'
                        type='text'
                        onChange={(e) => setHouse(e.target.value)}
                        value={house_door}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='Landmark'
                        id='landmark'
                        type='text'
                        onChange={(e) => setLandmark(e.target.value)}
                        value={landmark}
                    />
                    <Input
                        disabled={editable}
                        style={!editable ? { color: "white" } : { color: "#727272" }}
                        autoComplete="off"
                        placeholder='State'
                        id='state'
                        type='text'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
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
            // disabled={!building || !state || !area || !city || !house_door || !landmark}
            // style={!disabled?{backgroundColor:"gray"}:{backgroundcolor: "#ffb600"}}
            // disabled={disabled1}
            >{btnTxt}
            </button>
        </form>
    );
};

export default AdressDetails;
