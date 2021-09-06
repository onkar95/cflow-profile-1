import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Popover from '@material-ui/core/Popover';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Styles.css";

function Cement({ formData, notify, setModalOpen, newService, setNewService, AddService, handleClickOpen, dropdownData }) {
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const [selectAll, setSelectAll] = useState(false)

  const brands = dropdownData?.rmc_brands;

  const [brandcheck, setBrandCheck] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false

  })


  useEffect(() => {

    setBrandCheck({ ...brandcheck, 0: selectAll, 1: selectAll, 2: selectAll, 3: selectAll, 4: selectAll, 5: selectAll, 6: selectAll, 7: selectAll })

  }, [selectAll])
  useEffect(() => {
    let brandtemp = []
    let final_arr = []
    brands?.map((brand, index) => {
      if (brandcheck[index]) {
        brandtemp.push(brand)
      }
    })
    brandtemp.map((brand) => {
      let final_dict = { grade: brand }
      final_arr.push(final_dict)
    })
    setNewService({ ...newService, info: final_arr, type: "RMC Mixture" })
  }, [brandcheck])

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
        <Button aria-describedby={id} variant="contained" className="cement-form-input-vendor" style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px" }} onClick={handleClick}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <p style={{ color: "white", textTransform: "capitalize" }}>Grades</p>
            <ArrowDropDownIcon style={{ color: "#ffb600" }} />
          </div>
        </Button>
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
      </div>
      <div className="pipes-bottom-buttons" style={{ width: "20%", height: "45%" }}>
        <Button variant="contained" className="pipes-cart-button" style={{ height: "80%", marginTop: "10%", backgroundColor: "#ffb600" }} onClick={handleadd}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default Cement
