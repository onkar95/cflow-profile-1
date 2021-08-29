import React from 'react'
import "./Status.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Status({type}) {
    // type => completed , pending ,  inprogress , acceptedPitch , rejectedPitch 
    // const type = "declined"
    return (
        <div className={type === "urgent" ? "fillred" :"Status-div"}>
            <div className={type === "completed" ? "green" : type === "urgent" ? "urgent" : type === "inprogress" || type==="pitched" || type==="pending"? "yellow" : type === "acceptedPitch" ? "blue" :  type==="rejectedPitch" ? "red" :type === "rejected"? "red":type==="dealClosed" ? "green":"red"}>
                <FiberManualRecordIcon className={type === "urgent" ? "urgentbullet" : "bullet"}/>
                   {type === "acceptedPitch" ? "Accepted" : type === "inprogress" || type==="pitched" ? "In process"  : type === "urgent" ? "Urgent" : type === "completed" ? "Completed" : type==="rejectedPitch" ? "Declined" :type === "rejected"? "Rejected": type === "pending"? "Not Pitched" :type === "dealClosed" ? "Deal Closed" : "Pending"}
            </div>
            
        </div>
    )
}

export default Status
