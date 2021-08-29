import React,{useState,useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles ,makeStyles} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import "../unit_button.css"
import {Grid, TextField} from "@material-ui/core";



const useStyles = makeStyles({
  icon: {
    fill: 'white',
 },
});


const Unit1=(props)=> {
  
  const classes=useStyles()
  const [age1, setAge1] = useState("21");
  // useEffect(()=>setAge1(props.change),[props.change])
  useEffect(() => {
    if(props.p2){
      const uni1=String(props.p2);
      setAge1(uni1)
    }
  }, [props.p2])

  const handleChange = (event) => {
    setAge1(event.target.value);
  };

  return (
    <div  style={{border:"1px solid #2d2d2d",width:"100%"}}>
      <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age1}
          style={{color:'white',paddingLeft:"20px",borderRight:"1px solid #2d2d2d"}}
          inputProps={{classes: {icon: classes.icon,},}}
          onClick={props.funct}
          onChange={handleChange}
        >
        <MenuItem value="21" disabled>{props.items[0]}</MenuItem>
        {
            props.items.map((x,index)=>(
                <MenuItem  onClick={()=>props.t(index)} value={x}  key={x}>{x}</MenuItem>
            ))
        }
        </Select>
        <TextField  InputProps={{className:'text'}} style={{marginLeft:"1rem",width:"150px"}} placeholder="Value" value={props.answer}/>
      


    </div>
  );
}
export default Unit1;