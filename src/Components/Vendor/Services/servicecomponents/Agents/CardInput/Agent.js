import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from "@material-ui/core/colors";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Popover from '@material-ui/core/Popover';
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
function Agent({ formData, notify, newService, setNewService, AddService, handleClickOpen }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [labour, setLabour] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const handleadd = () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (newService?.info?.length === 0) {
                notify('Request cannot be empty!')
            }
            else if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else {
                AddService();
                handleClickOpen();
            }

        }
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;


    const [selectAll, setSelectAll] = useState(false)
    const materials = ["Sand", "Stones", "Bricks"]
    const [materialcheck, setMaterialCheck] = useState({
        0: false,
        1: false,
        2: false,
    })
    const [selectAll1, setSelectAll1] = useState(false)
    const genders = ["Men", "Women"]
    const [gendercheck, setGenderCheck] = useState({
        0: false,
        1: false
    })

    useEffect(() => {
        setMaterialCheck({ ...materialcheck, 0: selectAll, 1: selectAll, 2: selectAll })
    }, [selectAll])

    useEffect(() => {
        setGenderCheck({ ...gendercheck, 0: selectAll1, 1: selectAll1 })
    }, [selectAll1])

    const GreenCheckbox = withStyles({
        root: {
            //color: green[400],
            "&$checked": {
                color: `${green[600]}!important`,
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    useEffect(() => {
        let materialtemp = []
        let gendertemp = []
        let final_arr = []
        console.log(materialcheck, gendercheck, "BBBBBBBBBBBBBBBBBBB")
        materials.map((material, index) => {
            if (materialcheck[index]) {
                materialtemp.push(material)
            }
        })
        genders.map((gender, index) => {
            if (gendercheck[index]) {
                gendertemp.push(gender)
            }
        })
        materialtemp.map((brand) => {
            gendertemp.map((gender) => {
                let final_dict = { material: brand, labour: labour, gender: gender }
                final_arr.push(final_dict)
            })
        })
        console.log(final_arr, "ARR")
        setNewService({ ...newService, info: final_arr, type: "Agents" })
        console.log(newService, "newService")
    }, [labour, materialcheck, gendercheck])

    return (
        <div style={{ width: "100%", display: "flex", height: "100%", flexDirection: "column" }}>
            <div className="agent-form">
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={labour}
                            onChange={(e) => setLabour(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Labour Agent"
                    className="sand-form-input"
                    style={{
                        backgroundColor: "#08090C",
                        // width: "15rem",
                        // padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                />

                <Button aria-describedby={id} variant="contained" className="agent-form-input" style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} onClick={handleClick}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <p style={{ color: "white", textTransform: "capitalize" }}>Select Material</p>
                        <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                    </div>
                </Button>
                <Button aria-describedby={id1} variant="contained" className="agent-form-input1" style={{ backgroundColor: "#08090C", width: "15rem", marginLeft: "3%", borderRadius: "10px" }} onClick={handleClick1}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <p style={{ color: "white", textTransform: "capitalize" }}>Select Gender</p>
                        <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                    </div>
                </Button>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", fontSize: "1rem" }}>

                    <FormControlLabel
                        control={

                            <GreenCheckbox

                                checked={selectAll}
                                onChange={(e) => setSelectAll(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}

                            />
                        }
                        label="Select All"
                        style={{
                            width: "15rem",
                            padding: "4%",
                            backgroundColor: "#08090C",
                            color: "white",
                            height: "45%"
                        }}
                    />

                    {
                        materials.map((brand, index) => (



                            <FormControlLabel
                                control={

                                    <GreenCheckbox

                                        checked={materialcheck[index]}
                                        onChange={(e) => setMaterialCheck({ ...materialcheck, [index]: e.target.checked })}
                                        color="primary"
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}

                                    />
                                }
                                label={brand}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor: "#08090C",
                                    color: "white",
                                    height: "45%"
                                }}
                            />
                        ))
                    }
                </div>

            </Popover>

            <div className="agent-bottom-buttons" style={{ width: "20%", height: "45%" }}>
                <Button variant="contained" className="agent-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
                    Add
                </Button>
            </div>
            <Popover
                id={id1}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose1}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", fontSize: "1rem" }}>

                    <FormControlLabel
                        control={

                            <GreenCheckbox

                                checked={selectAll1}
                                onChange={(e) => setSelectAll1(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}

                            />
                        }
                        label="Both"
                        style={{
                            width: "15rem",
                            padding: "4%",
                            backgroundColor: "#08090C",
                            color: "white",
                            height: "45%"
                        }}
                    />

                    {
                        genders.map((gender, index) => (



                            <FormControlLabel
                                control={

                                    <GreenCheckbox

                                        checked={gendercheck[index]}
                                        onChange={(e) => { setGenderCheck({ ...gendercheck, [index]: e.target.checked }); console.log(index, "CLICKED ME", gendercheck) }}
                                        color="primary"
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}

                                    />
                                }
                                label={gender}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor: "#08090C",
                                    color: "white",
                                    height: "45%"
                                }}
                            />
                        ))
                    }
                </div>

            </Popover>
        </div>
    )
}

export default Agent
