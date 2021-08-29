import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import axios from "axios";
import "./Profile.css"
import pincode from "pincode-distance"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"

require('dotenv').config()

const AddNewAddress = ({ setCurrentSection, formData, setFormData, getUser, getSite, handleClickOpen }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [buildingname, setBuildingname] = useState("");
    const [doorno, setDoorno] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    const [addtitle, setAddtitle] = useState("");


    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);


    const [site, setSite] = useState(null);

    const Pincode = new pincode();
    const location = Pincode.getlatLng("470002");
    console.log(location);


    const handleformdata = async (e) => {
        e.preventDefault();
        console.log(editable)
        setSite({ ...site, building_name: buildingname, door_no: doorno, street: street, landmark: landmark, city: city, state: state, pin: pin, add_title: addtitle })
        await axios.post(`${process.env.REACT_APP_URL}/user/add_site/${userId}`, site)
            .then(response => {
            })
        getSite();
        setCurrentSection(7);
        handleClickOpen();
    }

    useEffect(() => {
        setSite({ ...site, building_name: buildingname, door_no: doorno, street: street, landmark: landmark, city: city, state: state, pin: pin, add_title: addtitle })

    }, [buildingname, doorno, street, landmark, city, state, pin, addtitle])

    useEffect(() => {
        if (formData?.site !== null) {
            let index = 0;
            let newArr = [...formData?.site];
            newArr[index] = site;
            setFormData({ ...formData, site: newArr })
        }
    }, [site])

    useEffect(() => {
        if (!buildingname || !state || !addtitle || !city || !doorno || !landmark || !street || !pin) {
            setDisabled(0);
        } else {
            setDisabled(1);
        }
    }, [buildingname, doorno, street, landmark, city, state, pin, addtitle])
    const handleClick = () => {
        setCurrentSection(7)
    }
    return (
        <>
            {window.innerWidth > 600 ?
                <form
                    style={{
                        width: "100%",
                    }}
                >
                    <div className="backArrow" onClick={handleClick}>
                        <span>
                            <ArrowBackIosIcon />
                        </span>
                        <h4>back</h4>
                    </div>
                    <Row>
                        <div style={{ margin: "10px" }}>
                            Add site Address
                        </div>
                    </Row>
                    <Row className="input_orientation">

                        <Column className="inputs_coloum"
                        >
                            <label htmlFor="">Building Name</label>
                            <Input
                                placeholder='Building Name'
                                id='name'
                                // disabled={editable}
                                autoComplete="off"
                                type='text'
                                onChange={(e) => setBuildingname(e.target.value)}
                                value={buildingname}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Area/Street</label>
                            <Input
                                placeholder='Area/Street'
                                id='company'
                                type='text'
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"

                            />
                           <label htmlFor="">H No / Door No</label>
                            <Input
                                placeholder='H No / Door No'
                                id='title'
                                type='text'
                                onChange={(e) => setDoorno(e.target.value)}
                                value={doorno}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                        </Column>

                        <Column className="inputs_coloum">

                           <label htmlFor="">City</label>
                            <Input
                                placeholder='City'
                                id='phone'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                           <label htmlFor="">Pincode</label>
                            <Input
                                placeholder='Pincode'
                                id='phone'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                           <label htmlFor="">Landmark</label>
                            <Input
                                placeholder='Landmark'
                                id='email'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                        </Column>


                        <Column className="inputs_coloum"
                        >


                           <label htmlFor="">State</label>
                            <Input
                                placeholder='State'
                                id='wpp'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                           <label htmlFor="">Address Title</label>
                            <Input
                                placeholder='Address Title'
                                id='wpp'
                                type='text'
                                onChange={(e) => setAddtitle(e.target.value)}
                                value={addtitle}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                        </Column>

                    </Row>
                    <button
                        onClick={handleformdata}
                        className="disiabled_save_butn"
                        className={`${disabled1 == 0 ? "disiabled_save_butn_block  " : "disiabled_save_butn "}`}
                        disabled={!buildingname || !state || !addtitle || !city || !doorno || !landmark || !street || !pin}
                    >
                        save
                    </button>
                </form>

                :
                <form
                    style={{
                        width: "100%",
                    }}
                >
                    <div className="backArrow" onClick={handleClick}>
                        <span>
                            <ArrowBackIosIcon />
                        </span>
                        <h4>back</h4>
                    </div>
                    <Row className="profile_section_heading">
                        <div style={{ margin: "10px" }}>
                            Add site Address
                        </div>
                    </Row>
                    <Row className="input_orientation">

                        <Column className="inputs_coloum"
                        >

                            <label htmlFor="">Building Name</label>
                            <Input
                                placeholder='Building Name'
                                id='name'
                                // disabled={editable}
                                autoComplete="off"
                                type='text'
                                onChange={(e) => setBuildingname(e.target.value)}
                                value={buildingname}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Area/Street</label>
                            <Input
                                placeholder='Area/Street'
                                id='company'
                                type='text'
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"

                            />
                            <label htmlFor="">H No / Door No</label>
                            <Input
                                placeholder='H No / Door No'
                                id='title'
                                type='text'
                                onChange={(e) => setDoorno(e.target.value)}
                                value={doorno}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />

                            <label htmlFor="">City</label>
                            <Input
                                placeholder='City'
                                id='phone'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                            <label htmlFor="">Pincode</label>
                            <Input
                                placeholder='Pincode'
                                id='phone'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                            <label htmlFor="">Landmark</label>
                            <Input
                                placeholder='Landmark'
                                id='email'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />


                            <label htmlFor="">State</label>
                            <Input
                                placeholder='State'
                                id='wpp'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                            <label htmlFor="">Address Title</label>
                            <Input
                                placeholder='Address Title'
                                id='wpp'
                                type='text'
                                onChange={(e) => setAddtitle(e.target.value)}
                                value={addtitle}
                                style={{ marginBottom: "2rem" }}
                                // disabled={editable}
                                autoComplete="off"
                            />
                        </Column>

                    </Row>
                    <button
                        onClick={handleformdata}
                        className="disiabled_save_butn"
                        className={`${disabled1 == 0 ? "disiabled_save_butn_block  " : "disiabled_save_butn "}`}
                        disabled={!buildingname || !state || !addtitle || !city || !doorno || !landmark || !street || !pin}
                    >
                        save
                    </button>
                    
                </form>

            }
        </>
    );
};

export default AddNewAddress;
