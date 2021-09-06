import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
function Cement({ formData, notify, setModalOpen, newService, setNewService, AddService, handleClickOpen, dropdownData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [trade, setTrade] = React.useState('trade');
  const trades = ["Trade", "Non-Trade"]
  useEffect(() => {
    setNewService({ ...newService, trade: trade === "Trade" ? true : false })
    console.log(trade)
  }, [trade])

  const useStyles = makeStyles((theme) => ({
    formControl: {
      //   margin: theme.spacing(1),
      // marginLeft: theme.spacing(2),

      // minWidth: 200,


      backgroundColor: "#08090C",
      color: "white",
      height: "100%",
      borderRadius: "10px",

      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid transparent",
        borderRadius: "10px 10px 0 0",
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
  const classes = useStyles();
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popover' : undefined;
  const [selectAll1, setSelectAll1] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [brandcheck, setBrandCheck] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  })
  const [gradecheck, setGradeCheck] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  })

   const brands = dropdownData?.cement_brands;
   const grades = dropdownData?.cement_grades;

  console.log(brands, grades, dropdownData?.cement_brands)


  useEffect(() => {

    setBrandCheck({ ...brandcheck, 0: selectAll, 1: selectAll, 2: selectAll, 3: selectAll, 4: selectAll, 5: selectAll, 6: selectAll, 7: selectAll, 8: selectAll, 9: selectAll })

  }, [selectAll])

  useEffect(() => {

    setGradeCheck({ ...gradecheck, 0: selectAll1, 1: selectAll1, 2: selectAll1, 3: selectAll1 })

  }, [selectAll1])


  useEffect(() => {
    let brandtemp = []
    let gradetemp = []
    let final_arr = []

    grades?.map((grade, index) => {
      if (gradecheck[index]) {
        gradetemp.push(grade)
      }

    })
    brands?.map((brand, index) => {
      if (brandcheck[index]) {
        brandtemp.push(brand)

      }
    })
    gradetemp.map((grade) => {
      brandtemp.map((brand) => {
        let final_dict = { type: grade, brand: brand, trade: trade }
        final_arr.push(final_dict)
      })
    })
    setNewService({ ...newService, info: final_arr, type: "cement" })
  }, [brandcheck, gradecheck])


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


  return (
    <div style={{ width: "100%", display: "flex", height: "100%", flexDirection: "column" }}>
      <div className="sand-form">
        <Button aria-describedby={id} className="cement-form-input-vendor" variant="contained" style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} onClick={handleClick}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <p style={{ color: "white", textTransform: "capitalize" }}>Brands</p>
            <ArrowDropDownIcon style={{ color: "#ffb600" }} />
          </div>
        </Button>
        <Button aria-describedby={id1} className="cement-form-input-vendor" variant="contained" style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px", marginLeft: "2%" }} onClick={handleClick1}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <p style={{ color: "white", textTransform: "capitalize" }}>Grade</p>
            <ArrowDropDownIcon style={{ color: "#ffb600" }} />
          </div>
        </Button>
        <FormControl
          variant='outlined'
          className={`${classes.formControl} cement-form-input-vendor `}
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
              brands?.map((brand, index) => (
                <FormControlLabel
                  control={
                    <Checkbox

                      checked={brandcheck[index]}
                      onChange={(e) => setBrandCheck({ ...brandcheck, [index]: e.target.checked })}
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                      checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

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
          <div style={{ display: "flex", flexDirection: "column" }}>

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
              grades?.map((grade, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gradecheck[index]}
                      onChange={(e) => setGradeCheck({ ...gradecheck, [index]: e.target.checked })}
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                      checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

                    />
                  }
                  label={grade}
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
      <div className="admixture-bottom-buttons" style={{ width: "20%", height: "45%" }}>
        <Button variant="contained" className="admixture-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default Cement
