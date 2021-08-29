import React,{useEffect, useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import "../unit_button.css"
import {Grid, TextField} from "@material-ui/core";

  

const useStyles = makeStyles({
  icon: {
    fill: 'white',
 },
});


 

const Unit=(props)=> {


  const classes=useStyles()
  const [age, setAge] = useState('12');
  const [newunit1,setnewunit1]=useState('');

  useEffect(() => {
    if(props.p1){
      const uni=String(props.p1);
      setAge(uni)
    }
  }, [props.p1])

  // useEffect(()=>setAge(props.change),[props.change])
  const handleChange = (event) => {
      setAge(event.target.value)
  };
  
  return (
    <div style={{border:"1px solid #2d2d2d",width:"100%",height:"20%"}}>
      <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          style={{color:'white',paddingLeft:"20px",borderRight:"1px solid #2d2d2d"}}
          onClick={props.funct}
          inputProps={{classes: {icon: classes.icon,},}}
          onChange={handleChange}
        >
        <MenuItem value="12" disabled>{props.items[0]}</MenuItem>
        {
            props.items.map((x,index)=>(
                <MenuItem value={x} onClick={()=>props.g(index)} ind={index} key={x}>{x}</MenuItem>
            ))
        }
        </Select>
        <TextField  InputProps={{className:'text'}} onChange={props.in} style={{marginLeft:"1rem",width:"150px"}} placeholder="Value" />
      


    </div>
  );
}
export default Unit;