import React ,{useState} from 'react'
import "./Basic.css"
import {TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
function Basic({notify,basic_information,setBasic_information,setSection}) {
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"      
        }},
        input:{
            color:"white",
            padding:"0.75rem 1rem"
        }
    });
    const classes = useStyles()

  const handleChange=(e)=>{
        setBasic_information({...basic_information  , [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        //Call axios
        if(userId === undefined)
        {
            // alert('Please Login');  
            history.push('/auth-user')
        }
        else
        {
            if(basic_information?.product_name === "" || basic_information?.brand_name === "" || basic_information?.model_name === "" || basic_information?.MFG_year === "" || basic_information?.current_location === "")
            {
                notify('Request cannot be empty!');
            }
            else
            {
                setSection(1);
            }
        }
    }


    return (
        <div className="basic-container">
            <div className="basic-row">
                <TextField name="product_name" value={basic_information?.product_name} placeholder="Product Name" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
                <TextField name="brand_name" value={basic_information?.brand_name} placeholder="Brand Name" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
                <TextField name="model_name" value={basic_information?.model_name} placeholder="Model Name or Number" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
            </div>
            <div className="basic-row">
                <TextField name="MFG_year" value={basic_information?.MFG_year} placeholder="MFG Year" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
                <TextField name="current_location" value={basic_information?.current_location} placeholder="Current Location" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
                <TextField name="another_specification" value={basic_information?.another_specification} placeholder="Add Other Specification" className={`${classes.root} basic-text`} InputProps={ {  className: classes.input , disableUnderline: true  }} onChange={handleChange}/>
            </div>
            <div className="paper-button-container">
                    <Button className="paper-button" onClick={handleSubmit}>Continue</Button>
            </div>
        </div>
    )
}

export default Basic
