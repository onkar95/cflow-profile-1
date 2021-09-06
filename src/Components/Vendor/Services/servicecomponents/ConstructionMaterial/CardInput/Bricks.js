import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from "@material-ui/core/colors";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Styles.css";



function Bricks({ formData, notify, setModalOpen, newService, setNewService, AddService, handleClickOpen }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [clay, setClay] = useState(false)
    const [cement, setCement] = useState(false)
    const [fly, setFly] = useState(false)

    const handleadd = () => {
        if (userId === undefined) {
            // alert('Please Login'); 
            history.push('/auth-user')
        }
        else {
            if (!clay && !cement && !fly) {
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

    const GreenCheckbox = withStyles({
        root: {
            //color: green[400],
            "&$checked": {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    useEffect(() => {
        let arr = []
        let info_arr = []
        if (clay) {
            // arr.push("clay")
            info_arr.push({ type: "clay" })
        }
        if (cement) {
            // arr.push("cement")
            info_arr.push({ type: "cement" })
        }
        if (fly) {
            // arr.push("fly ash")
            info_arr.push({ type: "fly ash" })
        }
        // let info_arr={type:arr}
        setNewService({ ...newService, info: info_arr, type: "Bricks & Blocks" })
    }, [clay, cement, fly])


    return (
        <div style={{ width: "100%", display: "flex", height: "100%", flexDirection: "column" }}>
            <div className="sand-form">
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={clay}
                            onChange={(e) => setClay(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Clay Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor: "#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                />
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={cement}
                            onChange={(e) => setCement(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Cement Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor: "#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                />
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            checked={fly}
                            onChange={(e) => setFly(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Fly Ash Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor: "#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius: "10px",
                        
                    }}
                />
            </div>
            <div className="sand-bottom-buttons" style={{ width: "20%", height: "45%" }}>
                <Button variant="contained" className="sand-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
                    Add
                </Button>
            </div>
        </div>
    )
}

export default Bricks
