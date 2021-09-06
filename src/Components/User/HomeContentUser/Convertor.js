import React, { useEffect, useState } from 'react'

import { InputLabel, MenuItem , FormControl ,Select ,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import unitConvertor from "./unitConvertor"
import "./HomeContentUser.css"
const Convertor = () => {
    const [value,setValue] = useState(0)
    const quantity = [ "Distance","Area", "Weight","Volume"]
    const [currentQuantity, setCurrentQuantity] = useState(0);
    const [currentUnitFrom, setCurrentUnitFrom] = useState(0);
    const [currentUnitTo, setCurrentUnitTo] = useState(0);


    const [answer,setAnswer] = useState(0)

    useEffect(() => {
        setAnswer(unitConvertor(units ,currentQuantity, currentUnitFrom , currentUnitTo , value));
    },[value,currentUnitFrom,currentUnitTo,currentQuantity])

    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginRight: theme.spacing(2),
            marginTop:theme.spacing(2),
            // width:1000,
            backgroundColor: "#2D2D2D",
            // height:79,
            borderRadius: theme.spacing(1),
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #484850",
                    borderRadius: "5px 5px 0 0",
                    color:"white"
            }
        },
        formControl1: {
            marginRight: theme.spacing(2),
            marginTop:theme.spacing(2),
            backgroundColor: "#2D2D2D",
            borderRadius: theme.spacing(1),
            height:128,
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #484850",
                    borderRadius: "5px 5px 0 0",
                    color:"white"
            }
        },
        input:{
            color:"white"            
        },
        select: {
            "& .MuiSvgIcon-root": {
                color: "white",
                fontSize:"2rem"
            },
        },
        icon: {
               fill: 'white',
            },
    }));
    const classes = useStyles();

   
    const units = [
                        ["mm","cm","m","km","yd","mi","ft","in"],
                        ["mm2","cm2","m2","km2","yd2","mi2","ft2","in2"],
                        ["mg","g","kg","t","lb"],
                        ["mm3","cm3","m3","km3","mi3","yd3","ft3","in3"],
                  ]


    return (
        <div className="home-content-convertor">
                                <h1 className="home-content-convertor-title">Unit Convertor</h1>
                                <FormControl variant='outlined' className={`${classes.formControl} unit-input`}  inputprops={{ disableOutline: true}} >
                                    <InputLabel id='demo-simple-select-label' style={{color:"white",height:79}}> Select Unit </InputLabel>
                                    <Select 
                                    labelId='demo-simple-select-label' 
                                    id='demo-simple-select' 
                                    style={{backgroundColor: "#2D2D2D", color:"white"}} 
                                    inputProps={{
                                        classes: {
                                            
                                            icon: classes.icon
                                        },
                                    }}>
                                        {quantity.map((item, index) => (
                                            <MenuItem  onClick={() =>setCurrentQuantity(index)} value={index} key={index}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <div className="units-main-div">
                                    {/* <div> */}
                                        <FormControl variant='outlined' className={`${classes.formControl1} unit-input-2`} inputprops={{ disableOutline: true}} >
                                            <InputLabel id='demo-simple-select-label' style={{color:"white",height:"45%",fontSize:16,fontWeight:"600"}}> Select Unit </InputLabel>
                                            <Select labelId='demo-simple-select-label' id='demo-simple-select' style={{backgroundColor: "#08090c", border:"0.5px solid #2D2D2D" , color:"white"}}  className={classes.select}>
                                                {units[currentQuantity].map((item, index) => (
                                                    <MenuItem style={{color:"white"}} onClick={() =>setCurrentUnitFrom(index)} value={index} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <TextField placeholder="Enter Value" type="number" style={{height:"55%",color:"#2D2D2D",border:"0.5px solid #2D2D2D", backgroundColor:"#08090c",justifyContent:"center",paddingLeft:"1rem",fontSize:16,fontWeight:"600"}}   InputProps={{className: classes.input, disableUnderline: true}} onChange={(e) => setValue(e.target.value)}></TextField> 
                                        </FormControl>
                                    {/* </div> */}
                                    
                                <h2 style={{padding:"0.5rem",paddingRight:"1.5rem",paddingTop:"2rem"}}>=</h2>
                                    {/* <div> */}
                                        <FormControl variant='outlined' className={`${classes.formControl1} unit-input-2`} inputprops={{ disableOutline: true}} >
                                            <InputLabel id='demo-simple-select-label' style={{color:"white",height:"45%",fontSize:16,fontWeight:"600"}}> Select Unit </InputLabel>
                                            <Select labelId='demo-simple-select-label' id='demo-simple-select' style={{backgroundColor: "#08090c", border:"0.5px solid #2D2D2D" , color:"white"}}  className={classes.select}>
                                                {units[currentQuantity].map((item, index) => (
                                                    <MenuItem style={{color:"white"}} onClick={() =>setCurrentUnitTo(index)} value={index} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <TextField placeholder="Converted Value" value={answer ? answer : ""} style={{height:"55%",color:"white",border:"0.5px solid #2D2D2D", backgroundColor:"#08090c",justifyContent:"center",paddingLeft:"1rem",fontSize:16,fontWeight:"600"}}   InputProps={{className: classes.input, disableUnderline: true}} ></TextField> 
                                        </FormControl>
                                    {/* </div>                              */}

                                </div>
                        
            </div>
    )
}

export default Convertor
