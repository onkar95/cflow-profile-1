import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,Select, TextField} from '@material-ui/core';
import {  InputLabel, MenuItem  } from "@material-ui/core";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useHistory} from "react-router-dom"
function TMT({notify,setModalOpen,newService,setNewService,AddService,handleClickOpen}) {
    const [anchorEl0 , setAnchorEl0] = React.useState(null);
            const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
  const handleClick0 = (event) => {
    setAnchorEl0(event.currentTarget);
  };
  const handleClose0 = () => {
    setAnchorEl0(null);
  };
  const open0 = Boolean(anchorEl0);
  const id0 = open0 ? 'simple-popover' : undefined;


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
  const [selectAll1,setSelectAll1] = useState(false)
  const [selectAll,setSelectAll] = useState(false)
  const [selectAll0,setSelectAll0] = useState(false)

  const [trade, setTrade] = React.useState('trade');
  const trades=["Trade","Non-Trade"]
  useEffect(() => {
    setNewService({...newService,trade: trade==="Trade"?true:false})
    console.log(trade)
  },[trade])

  const useStyles = makeStyles((theme) => ({
    formControl: {
        //   margin: theme.spacing(1),
        marginLeft: theme.spacing(2),

        // minWidth: 200,
        
        backgroundColor: "#08090C",
        color:"white",
        height:"100%",
        borderRadius:"10px",
    
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color:"white"
        }
    },
    icon:{
      fill:"#ffb600"
    },
                root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"        
                }},
                input:{
                    color:"white"
                },
                overflow:"hidden"
}));
  const classes = useStyles();
  const brands = ["TATA TMT Steel " , "Vizag TMT Steel" , "Jindal TMT Steel " , "Simhadri TMT Steel","Mangal TMT Steel" , "Essar Steel","Mesco Steel","SRMB Steel" , "SAIL Steel"  ,"Kamdhenu Steel","Vinayak Steel","Visa Steel"]
  const [brandcheck,setBrandCheck] = useState({
      0 : false,
      1 : false,
      2 : false,
      3 : false,
      4 : false,
      5 : false,
      6 : false,
      7 : false,
      8 : false,
      9 : false,
      10:false,
      11:false
  })

  const types = ["Fe 450" , "Fe 500","Fe 500D","Fe 550","Fe 550D" ]
  const [typecheck,setTypeCheck] = useState({
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    
      
  })
  const sizes = ["8 mm",
  "10 mm",
  "12 mm",
  "16 mm",
  "18 mm",
  "20 mm","22 mm","25 mm","32 mm","36 mm"]
  const [sizecheck , setSizeCheck] = useState({
    0 : false,
      1 : false,
      2 : false,
      3 : false,
      4 : false,
      5 : false,
      6 : false,
      7 : false,
      8 : false,
      9:false
     
  })
  
  useEffect(() => {
      
    setBrandCheck({...brandcheck , [0] : selectAll0,[1] : selectAll0,[2] : selectAll0,[3] : selectAll0,[4] : selectAll0,[5] : selectAll0,[6] : selectAll0,[7] : selectAll0,[8] : selectAll0,[9] : selectAll0,[10] : selectAll0,[11] : selectAll0})
      
  },[selectAll0])


  useEffect(() => {
      
    setTypeCheck({...typecheck , [0] : selectAll,[1] : selectAll,[2] : selectAll,[3] : selectAll,[4] : selectAll})
      
  },[selectAll])

  useEffect(() => {
      
    setSizeCheck({...sizecheck , [0] : selectAll1,[1] : selectAll1,[2] : selectAll1,[3] : selectAll1,[4] : selectAll1,[5] : selectAll1,[6] : selectAll1,[7] : selectAll1,[8] : selectAll1,[9] : selectAll1})
      
  },[selectAll1])

    useEffect(() => {
    let brandtemp=[]
    let typetemp=[]
    let sizetemp=[]
    let final_arr =[]
    brands.map((brand,index)=>{
      if(brandcheck[index]){
        brandtemp.push(brand)    
    }
    
  })
  types.map((type,index)=>{
    if(typecheck[index]){
      typetemp.push(type)    
    }
  })
  sizes.map((size,index)=>{
    if(sizecheck[index]){
      sizetemp.push(size)    
    }
  })
    typetemp.map((type) => {
    sizetemp.map((size) => {
      brandtemp.map((brand) =>
        {
           let final_dict = {type:type , size: size , brand:brand,trade:trade}
            final_arr.push(final_dict)
        })
     
    })
  })
  setNewService({...newService , info:final_arr , type:"TMT Steel & Iron"})
},[brandcheck,typecheck,sizecheck])
const handleadd =()=>{
        if(userId === undefined)
        {
            alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
  if( newService?.info?.length===0)
  {
      notify('Request cannot be empty!')
  }
  else
  {
    AddService();
    handleClickOpen();  
  }
}
}

    return (
        <div style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
            <div className="sand-form">
            <Button aria-describedby={id} variant="contained" className="cement-form-input-vendor" style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px"}} onClick={handleClick0}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Brands</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                </Button>
                <Button aria-describedby={id} variant="contained" className="cement-form-input-vendor" style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px",marginLeft:"2%"}} onClick={handleClick}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Types</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                </Button>
                <Button aria-describedby={id1} variant="contained"  className="cement-form-input-vendor"style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px",marginLeft:"2%"}} onClick={handleClick1}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Sizes</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                </Button>
                <FormControl
                                variant='outlined'
                                className={`${classes.formControl} cement-form-input-vendor ` }
                                InputProps={{ disableOutline: true,classes:{icon:classes.icon}}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: 'white'}}>
                                   Trade type
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"white"}}
                                    
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
          <div style={{display:"flex",flexDirection:"column",fontSize:"1rem"}}>
          <FormControlLabel
                control={
                        
                        <Checkbox
                            
                            checked={selectAll0}
                            onChange={(e) => setSelectAll0(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                        />
                        }
                label="Select All"
                style={{
                    width: "15rem",
                    padding: "4%",
                    backgroundColor:"#08090C",
                    color:"white",
                    height: "45%"
                }}
                        />
              {
                  brands.map((brand,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            
                                            checked={brandcheck[index]}
                                            onChange={(e) => setBrandCheck({...brandcheck , [index] : e.target.checked})}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={brand}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
              }
          </div>
        
      </Popover>
      
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
          <div style={{display:"flex",flexDirection:"column",fontSize:"1rem"}}>
          <FormControlLabel
                control={
                        
                        <Checkbox
                            
                            checked={selectAll}
                            onChange={(e) => setSelectAll(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                        />
                        }
                label="Select All"
                style={{
                    width: "15rem",
                    padding: "4%",
                    backgroundColor:"#08090C",
                    color:"white",
                    height: "45%"
                }}
                        />
              {
                  types.map((type,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            
                                            checked={typecheck[index]}
                                            onChange={(e) => setTypeCheck({...typecheck , [index] : e.target.checked})}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={type}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
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
          <div style={{display:"flex",flexDirection:"column"}}>

          <FormControlLabel
                control={
                        
                        <Checkbox
                            
                            checked={selectAll1}
                            onChange={(e) => setSelectAll1(e.target.checked)}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                        />
                        }
                label="Select All"
                style={{
                    width: "15rem",
                    padding: "4%",
                    backgroundColor:"#08090C",
                    color:"white",
                    height: "45%"
                }}
                        />
              {
                  sizes.map((size,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            checked={sizecheck[index]}
                                            onChange={(e) => setSizeCheck({...sizecheck , [index]: e.target.checked})}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={size}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
              }
          </div>
      </Popover>
      </div>
      <div className="admixture-bottom-buttons" style={{width: "20%",height: "45%"}}>
                <Button variant="contained" className="tmt-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleadd}>
                    Add
                </Button>
        </div>
    </div>
    )
}

export default TMT
