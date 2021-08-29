import React, { useEffect, useState } from 'react';
import {Typography,Card,CardContent,CardHeader, Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import "./leadStat2.css";
import ProfilePercent from "./Cricles"



const LeadState2 = ({contri}) => {

    const [winsize,setwinsize]=useState(window.screen.width);
    const handleResize=()=>{
        if (window.innerWidth <1000) {
            setwinsize(window.innerWidth)
        }
        else{
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [window.screen.width])
    const useStyles=makeStyles({
        root:{
            width:winsize >1000?352: "100%",
            height:312,
            borderRadius:10,
            backgroundColor:'#08090C',
            marginLeft:winsize >1000?"2rem":"0rem"
        },
    });
    const classes=useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                style={{color:'white',fontSize:16}}
                title={
                    <div >
                        <Typography style={{padding:10}}>Product sales</Typography>
                        <ProfilePercent contri={contri}/>
                    </div>
                }
            />
            <CardContent>
                <Typography style={{color:'white',marginTop:-22,marginLeft:50}}>Make some sales and get your product contributions here</Typography>
            </CardContent>
        </Card>
    )
}

export default LeadState2
