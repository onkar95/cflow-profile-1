import React from 'react'
import "./Hexagon.css"
import {Typography} from '@material-ui/core'


const Hexagon = (props) => {
    return (
        <>
      
                <div className="shapevendor">
                    <Typography style={{textAlign:'center',marginTop:50,fontSize:36,fontWeight:'700'}}>{props.num}</Typography>
                    <Typography style={{textAlign:'center'}}>{props.field}</Typography>

                </div>

        </>
    )
}

export default Hexagon;
