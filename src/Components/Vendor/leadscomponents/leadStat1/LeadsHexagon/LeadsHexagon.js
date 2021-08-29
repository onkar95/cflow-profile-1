import React from 'react'
import "./LeadsHexagon.css"
import {Typography} from '@material-ui/core'


const LeadsHexagon = ({bestProduct}) => {
    return (
        <>
      
                <div className="shape1">
                    <Typography style={{textAlign:'center',marginTop:40,fontSize:16,fontWeight:'600'}}>{bestProduct?.count} </Typography>
                    <Typography style={{textAlign:'center'}}>units</Typography>
                </div>

          

        </>
    )
}

export default LeadsHexagon;
