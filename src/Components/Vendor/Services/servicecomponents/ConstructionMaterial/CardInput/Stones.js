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

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popover' : undefined;
  const [selectAll1, setSelectAll1] = useState(false)
  const [selectAll, setSelectAll] = useState(false)

  const types = dropdownData?.stones_types;
  const sizes = dropdownData?.stones_sizes;

  const [typecheck, setTypeCheck] = useState({
    0: false,
    1: false,

  })
  const [sizecheck, setSizeCheck] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  })

  useEffect(() => {

    setTypeCheck({ ...typecheck, 0: selectAll, 1: selectAll })

  }, [selectAll])

  useEffect(() => {

    setSizeCheck({ ...sizecheck, 0: selectAll1, 1: selectAll1, 2: selectAll1, 3: selectAll1, 4: selectAll1, 5: selectAll1, 6: selectAll1, 7: selectAll1, 8: selectAll1 })

  }, [selectAll1])
  useEffect(() => {
    let sizetemp = []
    let typetemp = []
    let final_arr = []
    types?.map((grade, index) => {
      if (typecheck[index]) {
        typetemp.push(grade)

      }

    })
    sizes?.map((brand, index) => {
      if (sizecheck[index]) {
        sizetemp.push(brand)

      }

    })
    typetemp.map((type) => {
      sizetemp.map((size) => {
        let final_dict = { type: type, size: size }
        final_arr.push(final_dict)
      })
    })

    setNewService({ ...newService, info: final_arr, type: "Stones" })
  }, [sizecheck, typecheck])

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
            <p style={{ color: "white", textTransform: "capitalize" }}>Types</p>
            <ArrowDropDownIcon style={{ color: "#ffb600" }} />
          </div>
        </Button>
        <Button aria-describedby={id1} className="cement-form-input-vendor" variant="contained" style={{ backgroundColor: "#08090C", width: "15rem", borderRadius: "10px", marginLeft: "2%" }} onClick={handleClick1}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <p style={{ color: "white", textTransform: "capitalize" }}>Sizes</p>
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
              sizes?.map((size, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sizecheck[index]}
                      onChange={(e) => setSizeCheck({ ...sizecheck, [index]: e.target.checked })}
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{ border: "1px solid white" }} />}
                      checkedIcon={<CheckBoxIcon fontSize="small" style={{ border: "1px solid white" }} />}

                    />
                  }
                  label={size}
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
