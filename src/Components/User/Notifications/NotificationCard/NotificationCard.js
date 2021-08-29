import React , {useState,useEffect} from 'react'
import "./NotificationCard.css"
import { Button } from '@material-ui/core';
import PinImage from "../../../../Images/pin.png"
import DustBinImage from "../../../../Images/dustbin.png"
import SelectedPinImage from "../../../../Images/selectedpin.png"
import axios from 'axios';

function NotificationCard({value,setCurrentSection,setTableSwitch,setTrig,Trig,call_notification,call_pinned}) {
    
    const [pinned,setPinned] = useState(value.ispinned)
    const [pinned1,setPinned1] = useState(!pinned)
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    var temp,temp1;
    const handleChange = () => {
        if(value?.title === "New Pitch")
        {
            //take it to Request Table section => Pitched Request
            setCurrentSection(2);
            setTableSwitch(1);
            window.scrollTo(0,500);
        }
    }
    const handlepin=async(e)=>{
        setTrig(!Trig);      
                
        if(value?.isPinned==1){
            var status="0"
        }
        else{
            var status="1"
        }
        var id=value?.id
        
        await axios.post(`${process.env.REACT_APP_URL}/user/set_notification1/${userId}`,{status,id})
        .then(function (response) {            
            temp=response?.data
            
        })
        call_notification();
        call_pinned();
    }
    const handleDelete=async(e)=>{
        e.preventDefault();
        var id=value?.id
        let temp4;
        await axios.post(`${process.env.REACT_APP_URL}/user/delete_notification/${userId}`,{id})
        .then(function (response) {            
            temp4=response?.data
            
        })
        call_notification();
        call_pinned();
    }

    return (
        <div className="notificationcard_wrapper">
            
            <div className="notificationcard_icons">
                <img src={ value.isPinned? SelectedPinImage : PinImage} style={{height:"1rem",cursor:"pointer",marginTop:"0.5rem",marginRight:"0.5rem"}} onClick={handlepin}/>
                <img src={DustBinImage} style={{height:"1rem",cursor:"pointer",marginTop:"0.5rem"}} onClick={handleDelete}/>
            </div>
            <div className="notificationcard_heading">
                <h4 style={{color:"#ffb600"}}>{value?.title}</h4>
                <p>{value?.detail}</p>
            </div>
            <div className="notificationcard_btnconatiner">
                <Button className="notificationcard_button" onClick={handleChange}>Check Now</Button>
            </div>
            
        </div>
    )
}

export default NotificationCard