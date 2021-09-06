import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Styles.css";

function Paint({ formData, notify, setModalOpen, newService, setNewService, AddService, handleClickOpen, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [active, setActive] = useState(0)
    const handleadd = () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (newService?.info?.length === 0) {
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


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [typecheck, setTypeCheck] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
    })

    const types = dropdownData?.paint_surface;
    const types0 = dropdownData?.paint_brands;
    const types1 = dropdownData?.paint_types;
    const types2 = dropdownData?.putty_brands;
    const types3 = dropdownData?.putty_types;

    const [anchorEl0, setAnchorEl0] = React.useState(null);
    const handleClick0 = (event) => {
        setAnchorEl0(event.currentTarget);
    };
    const handleClose0 = () => {
        setAnchorEl0(null);
    };
    const open0 = Boolean(anchorEl0);
    const id0 = open0 ? 'simple-popover' : undefined;
    const [typecheck0, setTypeCheck0] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
    })


    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;
    const [typecheck1, setTypeCheck1] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,


    })


    const [trade, setTrade] = React.useState('trade');
    const trades = ["Trade", "Non-Trade"]
    useEffect(() => {
        setNewService({ ...newService, trade: trade === "Trade" ? true : false })
        console.log(trade)
    }, [trade])
    const [trade1, setTrade1] = React.useState('trade');
    const trades1 = ["Trade", "Non-Trade"]
    useEffect(() => {
        setNewService({ ...newService, trade: trade1 === "Trade" ? true : false })
        console.log(trade1)
    }, [trade1])
    const useStyles = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginLeft: theme.spacing(2),

            // minWidth: 200,

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",
            borderRadius: "10px",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color: "white"
            }
        },
        icon: {
            fill: "#ffb600"
        },
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"
            }
        },
        input: {
            color: "white"
        },
        overflow: "hidden"
    }));


    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popover' : undefined;
    const [typecheck2, setTypeCheck2] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false

    })

    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    };
    const open3 = Boolean(anchorEl3);
    const id3 = open3 ? 'simple-popover' : undefined;
    const [typecheck3, setTypeCheck3] = useState({
        0: false,
        1: false,
        2: false,
        3: false,

    })
    const [color, setColor] = useState("")
    useEffect(() => {
        let brandtemp = []
        let surfacetemp = []
        let typetemp = []

        let final_arr = []

        types?.map((brand, index) => {
            if (typecheck[index]) {
                surfacetemp.push(brand)

            }
        })
        types0?.map((brand, index) => {
            if (typecheck0[index]) {
                brandtemp.push(brand)
            }
        })
        types1?.map((brand, index) => {
            if (typecheck1[index]) {
                typetemp.push(brand)
            }
        })


        surfacetemp.map((surface) => {
            typetemp.map((type) => {
                brandtemp.map((brand) => {
                    let final_dict = { type: type, surface: surface, brand: brand, color: color, trade: trade };
                    final_arr.push(final_dict)
                })

            })
        })


        setNewService({ ...newService, info: final_arr, type: "Paint & Putty" })
    }, [typecheck, typecheck0, typecheck1, typecheck2, typecheck3, color])
    useEffect(() => {

        let puttybrand = []
        let puttytype = []
        let final_arr = []


        types2?.map((brand, index) => {
            if (typecheck2[index]) {
                puttybrand.push(brand)
            }
        })
        types3?.map((brand, index) => {
            if (typecheck3[index]) {
                puttytype.push(brand)
            }
        })

        puttybrand.map((brand) => {
            puttytype.map((type) => {
                let final_dict = { type: type, brand: brand, trade1: trade1 }
                final_arr.push(final_dict)
            })
        })

        setNewService({ ...newService, info: final_arr, type: "Paint & Putty" })

    }, [typecheck2, typecheck3])

    const [selectAll, setSelectAll] = useState(false)
    const [selectAll0, setSelectAll0] = useState(false)
    const [selectAll1, setSelectAll1] = useState(false)
    const [selectAll2, setSelectAll2] = useState(false)
    const [selectAll3, setSelectAll3] = useState(false)

    useEffect(() => {
        setTypeCheck({ ...typecheck, 0: selectAll, 1: selectAll, 2: selectAll, 3: selectAll })
    }, [selectAll])

    useEffect(() => {
        setTypeCheck0({ ...typecheck0, 0: selectAll0, 1: selectAll0, 2: selectAll0, 3: selectAll0, 4: selectAll0, 5: selectAll0, 6: selectAll0, 7: selectAll0 })
    }, [selectAll0])

    useEffect(() => {
        setTypeCheck1({ ...typecheck1, 0: selectAll1, 1: selectAll1, 2: selectAll1, 3: selectAll1, 4: selectAll1, 5: selectAll1, 6: selectAll1, 7: selectAll1 })
    }, [selectAll1])
    useEffect(() => {
        setTypeCheck2({ ...typecheck2, 0: selectAll2, 1: selectAll2, 2: selectAll2, 3: selectAll2, 4: selectAll2, 5: selectAll2, 6: selectAll2, 7: selectAll2 })
    }, [selectAll2])
    useEffect(() => {
        setTypeCheck3({ ...typecheck3, 0: selectAll3, 1: selectAll3, 2: selectAll3, 3: selectAll3 })
    }, [selectAll3])









    const classes = useStyles()

    return (
        <div style={{ width: "100%", display: "flex", height: "300px", flexDirection: "column", marginBottom: "0%" }}>
            <div style={{ width: "100%", display: "flex", height: "60px" }}>
                <Button variant="contained" style={{ textTransform: "capitalize", height: "100%", width: "15rem", borderRadius: "10px", backgroundColor: active ? "#08090C" : "#ffb600", color: active ? "#fff" : "#000" }} onClick={() => setActive(0)}>
                    Paint
                </Button>
                <Button variant="contained" style={{ textTransform: "capitalize", height: "100%", width: "15rem", borderRadius: "10px", backgroundColor: !active ? "#08090C" : "#ffb600", color: !active ? "#fff" : "#000", marginLeft: "3%" }} onClick={() => setActive(1)}>
                    Putty
                </Button>
            </div>
            <div style={{ width: "100%", display: "flex", height: "180px", marginTop: "2%" }}>
                {active ?
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "105px" }}>
                        <div style={{ display: "flex", width: "80%", height: "100%" }}>
                            <Button aria-describedby={id} variant="contained" style={{ height: "100%", backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} onClick={handleClick2}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "capitalize" }}>Select Brand</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <Button aria-describedby={id} variant="contained" style={{ height: "100%", backgroundColor: "#08090C", width: "15rem", borderRadius: "10px", marginLeft: "2%" }} onClick={handleClick3}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "capitalize" }}>Select Type</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input `}
                                InputProps={{ disableOutline: true, classes: { icon: classes.icon } }}
                            >
                                <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>
                                    Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    style={{ color: "white" }}

                                >
                                    {trades1?.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setTrade1(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ width: "20%", height: "50px" }}>
                            <Button variant="contained" style={{ height: "100%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
                                Add
                            </Button>
                        </div>
                    </div>
                    :
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", height: "45%" }}>
                            <Button aria-describedby={id} variant="contained" style={{ height: "100%", backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} onClick={handleClick}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "capitalize" }}>Select Surface</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <Button aria-describedby={id} variant="contained" style={{ height: "100%", backgroundColor: "#08090C", width: "15rem", borderRadius: "10px", marginLeft: "2%" }} onClick={handleClick0}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "capitalize" }}>Select Brand</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <Button aria-describedby={id} variant="contained" style={{ height: "100%", backgroundColor: "#08090C", width: "15rem", borderRadius: "10px", marginLeft: "2%" }} onClick={handleClick1}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <p style={{ color: "white", textTransform: "capitalize" }}>Select Type</p>
                                    <ArrowDropDownIcon style={{ color: "#ffb600" }} />
                                </div>
                            </Button>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input `}
                                InputProps={{ disableOutline: true, classes: { icon: classes.icon } }}
                            >
                                <InputLabel id='demo-simple-select-label' style={{ color: 'white' }}>
                                    Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    style={{ color: "white" }}

                                >
                                    {trades.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setTrade(filter)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ marginTop: "2%" }}>
                            <TextField id="outlined-basic" placeholder="Enter Color Code or Name" variant="outlined" value={color} onChange={(e) => setColor(e.target.value)} className={classes.root} style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} InputProps={{ className: classes.input }} />
                        </div>
                        <div style={{ width: "20%", height: "50px" }}>
                            <Button variant="contained" style={{ height: "100%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
                                Add
                            </Button>
                        </div>
                    </div>

                }

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
                                <Checkbox
                                    checked={selectAll}
                                    onChange={(e) => setSelectAll(e.target.checked)}
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
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
                            types?.map((type, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={typecheck[index]}
                                            onChange={(e) => setTypeCheck({ ...typecheck, [index]: e.target.checked })}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        />
                                    }
                                    label={type}
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
                <Popover
                    id={id0}
                    open={open0}
                    anchorEl={anchorEl0}
                    onClose={handleClose0}
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
                                <Checkbox
                                    checked={selectAll0}
                                    onChange={(e) => setSelectAll0(e.target.checked)}
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
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
                            types0?.map((type, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={typecheck0[index]}
                                            onChange={(e) => setTypeCheck0({ ...typecheck0, [index]: e.target.checked })}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        />
                                    }
                                    label={type}
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
                                <Checkbox
                                    checked={selectAll1}
                                    onChange={(e) => setSelectAll1(e.target.checked)}
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
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
                            types1?.map((type, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={typecheck1[index]}
                                            onChange={(e) => setTypeCheck1({ ...typecheck1, [index]: e.target.checked })}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        />
                                    }
                                    label={type}
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
                <Popover
                    id={id2}
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
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
                                <Checkbox
                                    checked={selectAll2}
                                    onChange={(e) => setSelectAll2(e.target.checked)}
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

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
                            types2?.map((type, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={typecheck2[index]}
                                            onChange={(e) => setTypeCheck2({ ...typecheck2, [index]: e.target.checked })}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

                                        />
                                    }
                                    label={type}
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
                <Popover
                    id={id3}
                    open={open3}
                    anchorEl={anchorEl3}
                    onClose={handleClose3}
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
                                <Checkbox
                                    checked={selectAll3}
                                    onChange={(e) => setSelectAll3(e.target.checked)}
                                    color="primary"
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
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
                            types3?.map((type, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={typecheck3[index]}
                                            onChange={(e) => setTypeCheck3({ ...typecheck3, [index]: e.target.checked })}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}
                                        />
                                    }
                                    label={type}
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
        </div>
    )
}

export default Paint
