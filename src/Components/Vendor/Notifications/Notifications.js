import React, { useState , useEffect} from 'react'
import {animated , useSpring} from "react-spring"
import NotificationCard from './NotificationCard/NotificationCard'
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import "./Notifications.css"
function Notifications({isToggled,setIsToggled,notification,setCurrentSection,setTableSwitch}) {
    
    const {x} = useSpring({
        x: isToggled ? 240 : 350
    })
    const notifications_sections=['New','Pinned','All']
    const [current_notification_section,setCurrent_notification_section] = useState(0)
    const [all_notification,setall_notification]=useState(['']);
    const [pinned_notifcation,setpinned_notifcation]=useState(['']);
    const [trig,settrig]=useState(false)
    const [userid,setuserid]= useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    var d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

   const handleClose = () => {
      setIsToggled(false)
   }

   let temp,temp1;

   const call_notification=async()=>{
       if(userid!==undefined){
        await axios.get(`${process.env.REACT_APP_URL}/user/get_notification/${userid}`)
        .then(function (response) {          
            temp=response?.data
        
        })
        setall_notification(temp?.data);
        
    }
   }

   const call_pinned=async()=>{
    if(userid!==undefined){
     await axios.get(`${process.env.REACT_APP_URL}/user/get_pinned/${userid}`)
     .then(function (response) {          
         temp1=response?.data  
     })
     setpinned_notifcation(temp1?.data)
 }
}
   useEffect(() => {
       call_notification();
       call_pinned();
   }, [])
//    console.log(all_notification,"pinned",pinned_notifcation)

   useEffect(() => {
    call_notification();
    call_pinned();
    }, [current_notification_section,trig])
    

    return (
        <animated.div style={{transform:x.interpolate(x => `translate3d( ${x * 1}%, 0 ,0)`)}} className="notification_wrapper">
            <div className="notification_header">
                <h2>Notifications</h2>
                <CloseIcon style={{cursor: 'pointer'}} onClick={handleClose}/>
            </div>
            <div className="notification_section">
                <div className="notification_section_tabs">
                {notifications_sections.map((section,index)=>
                <div className="section_underline">
                    <h4 style={current_notification_section===index? {color:"#ffb600",cursor: "pointer"}:{color:"white",cursor: "pointer"}} key={index} onClick={()=>setCurrent_notification_section(index)}>{section}</h4>
                    
                    <hr className={current_notification_section === index ? "orangeline" : "whiteline"}></hr>
                                            
                </div>                 
                
                )}
                    
                    
                </div>
                {/* <div className="notification_section_clear">
                    <h6>Clear All</h6>
                </div>                 */}
            </div>
            <hr className="notification_hr"></hr>
            <div className="notification_content">
            {
                current_notification_section===1?
                pinned_notifcation?.map((value,index)=>
               <div><NotificationCard call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig}  value={value} setCurrentSection={setCurrentSection} setTableSwitch={setTableSwitch}/></div>)
                :
                all_notification?.map((value,index)=> 
                <div><NotificationCard call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig}  value={value} setCurrentSection={setCurrentSection} setTableSwitch={setTableSwitch}/></div>)
                
            }
            </div>
            <hr className="notification_hr"></hr>
            <div style={{marginTop:"0.5rem",display:"flex",justifyContent:"center"}}>{d.getDate()}/{monthNames[d.getMonth()]}/{d.getFullYear()}</div>
        </animated.div>
    )
}

export default Notifications