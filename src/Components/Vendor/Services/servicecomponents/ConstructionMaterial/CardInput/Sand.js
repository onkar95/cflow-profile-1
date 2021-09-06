import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Styles.css";
function Sand({ formData, notify, setModalOpen, newService, setNewService, AddService, handleClickOpen, servicesInfo }) {
    // console.log(servicesInfo[0]?.info?.type,"sand")
    // const arr=servicesInfo[0]?.info?.type
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()


    const [low, setLow] = useState(false)
    const [medium, setMedium] = useState(false)
    const [high, setHigh] = useState(false)
    const handleadd = () => {
        if (userId === undefined) {
            // alert('Please Login');
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!low && !medium && !high) {
                // alert('Request cannot be empty!')
                notify('Request cannot be empty!');
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

    useEffect(() => {
        let arr = []
        let info_arr = [];
        if (low) {
            arr.push("low")
            info_arr.push({ type: "low" })
        }
        if (medium) {
            arr.push("medium")
            info_arr.push({ type: "medium" })
        }
        if (high) {
            arr.push("high")
            info_arr.push({ type: "high" })
        }
        setNewService({ ...newService, info: info_arr, type: "Sand" })
    }, [low, medium, high])

    return (
        <div style={{ width: "100%", display: "flex", height: "100%", flexDirection: "column" }}>
            <div className="sand-form">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={low}
                            onChange={(e) => setLow(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Low / Coarse"
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
                        <Checkbox
                            checked={medium}
                            onChange={(e) => setMedium(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="Medium"
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
                        <Checkbox
                            checked={high}
                            onChange={(e) => setHigh(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{ border: "1px solid white" }} />}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white", color: 'green' }} />}
                        />
                    }
                    label="High / Fine"
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

export default Sand
