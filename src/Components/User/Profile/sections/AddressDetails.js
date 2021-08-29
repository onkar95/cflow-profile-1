import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import axios from "axios";
import "./Profile.css"
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"

require('dotenv').config()
const AdressDetails = ({theme, formData, setFormData, getUser, filled, setFilled, handleClickOpen }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [building, setBuilding] = useState(formData?.company_building_name ? formData?.company_building_name : "");
    const [area, setArea] = useState(formData?.company_street ? formData?.company_street : "");
    const [city, setCity] = useState(formData?.company_city ? formData?.company_city : "");
    const [pin, setPin] = useState(formData?.company_pincode ? formData?.company_pincode : "");
    const [house_door, setHouse] = useState(formData?.company_house_no ? formData?.company_house_no : "");
    const [landmark, setLandmark] = useState(formData?.company_landmark ? formData?.company_landmark : "");
    const [state, setState] = useState(formData?.company_state ? formData?.company_state : "");

    // const [saved, setSaved] = useState("false");
    // const [disabled1, setDisabled] = useState("false");
    // const [Save, setSave] = useState("Save");
    // const [edit, setedit] = useState("Edit");

    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);

    const handleformdata = async (e) => {
        e.preventDefault();
        seteditable(!editable)
        if (!editable) {
            setBtnTxt("Edit")
            setFormData({ ...formData, company_building_name: building, company_street: area, company_city: city, company_pincode: pin, company_house_no: house_door, company_landmark: landmark, company_state: state })
            await axios.post(`${process.env.REACT_APP_URL}/user/updateUser/${userId}`, formData)
                .then(response => {
                    getUser()
                    setBtnTxt("Edit")
                })
            handleClickOpen();
        } else {
            setBtnTxt("Save")
        }
    }

    useEffect(() => {
        setFormData({ ...formData, company_building_name: building, company_street: area, company_city: city, company_pincode: pin, company_house_no: house_door, company_landmark: landmark, company_state: state })
        let temp = 0;
        if (building !== "") {
            temp++;
        }
        if (area !== "") {
            temp++;
        }
        if (city !== "") {
            temp++;
        }
        if (pin !== "") {
            temp++;
        }
        if (house_door !== "") {
            temp++;
        }
        if (landmark !== "") {
            temp++;
        }
        if (state !== "") {
            temp++;
        }
        setFilled({ ...filled, address: temp })
    }, [building, area, city, pin, house_door, landmark, state])


    return (
        <>
            {window.innerWidth > 600 ?
                <form
                    style={{
                        width: "100%",
                    }}
                >
                    <Row className="profile_section_heading">
                        <Column className="inputs_coloum_group">Address </Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">

                            <label htmlFor="">Building Name</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Building Name'
                                id='building'
                                type='text'
                                onChange={(e) => setBuilding(e.target.value)}
                                value={building}
                            />
                            <label htmlFor="">Area / Street</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Area / Street'
                                id='area'
                                type='text'
                                onChange={(e) => setArea(e.target.value)}
                                value={area}
                            />
                            <label htmlFor="">H.No / Door.No</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='H.No / Door.No'
                                id='house_door'
                                type='text'
                                onChange={(e) => setHouse(e.target.value)}
                                value={house_door}
                            />
                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">City</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='City'
                                id='city'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                            />
                            <label htmlFor="">PIN</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='PIN'
                                id='pin'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                            />

                            <label htmlFor="">Landmark</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Landmark'
                                id='landmark'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                            />

                        </Column>
                        <Column className="inputs_coloum">
                            <label htmlFor="">State</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='State'
                                id='state'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                            />
                        </Column>
                    </Row>
                    <div
                        onClick={handleformdata}
                        className="disabled_save_butn  "
                        // disabled={!building || !state || !area || !city || !house_door || !landmark | !pin}
                    >
                        <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                        {btnTxt}
                    </div>
                </form>
                :
                <form
                    style={{
                        width: "100%",
                    }}
                >
                    <Row>
                        <Column className="inputs_coloum_group">Address </Column>
                    </Row>
                    <hr />
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">

                            <label htmlFor="">Building Name</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Building Name'
                                id='building'
                                type='text'
                                onChange={(e) => setBuilding(e.target.value)}
                                value={building}
                            />
                            <label htmlFor="">Area / Street</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Area / Street'
                                id='area'
                                type='text'
                                onChange={(e) => setArea(e.target.value)}
                                value={area}
                            />

                            <label htmlFor="">H.No / Door.No</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='H.No / Door.No'
                                id='house_door'
                                type='text'
                                onChange={(e) => setHouse(e.target.value)}
                                value={house_door}
                            />
                            <label htmlFor="">City</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='City'
                                id='city'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                            />
                            <label htmlFor="">PIN</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='PIN'
                                id='pin'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                            />

                            <label htmlFor="">Landmark</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='Landmark'
                                id='landmark'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                            />

                            <label htmlFor="">State</label>
                            <Input
                            className={theme === true ? "white_input" : "dark_input"}
                                autoComplete="off"
                                disabled={editable}
                                placeholder='State'
                                id='state'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                            />
                        </Column>
                    </Row>
                    <div
                        onClick={handleformdata}
                        className="disabled_save_butn  "
                        // disabled={!building || !state || !area || !city || !house_door || !landmark | !pin}
                    >
                        <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                        {btnTxt}
                    </div>
                </form>

            }
        </>
    );
};

export default AdressDetails;
