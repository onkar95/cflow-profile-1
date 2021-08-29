import React,{useState,useEffect} from 'react'
import "./buttongrps.css";
import {Box, ButtonGroup, Grid} from "@material-ui/core"
import Maincal from '../unit_button/unit_button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Buttongrp = () => {

    const[id,setid]=useState('0');

    const getid=(event)=>{
        setid(event.target.id);
    }
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

    const display=(
        <>
                <Maincal buttonindex={id}/>
        </>
    )

    return (
        <>
        { winsize>900?
            <div className="buttonsvendor">
                    <ButtonGroup className="buttongroupvendor">
                        <button id="0"  className={id==='0'?"activebuttonvendor":"grpsvendor"}  onClick={getid} style={{cursor: "pointer"}}>Area</button>
                        <button id="1"  className={id==='1'?"activebuttonvendor":"grpsvendor"}  onClick={getid} style={{cursor: "pointer"}}>Distance</button>
                        <button  id="2" className={id==='2'?"activebuttonvendor":"grpsvendor"} onClick={getid} style={{cursor: "pointer"}}>Volume</button>
                        <button id="3" className={id==='3'?"activebuttonvendor":"grpsvendor"} onClick={getid} style={{cursor: "pointer"}}>Weight</button>
                    </ButtonGroup>
                    <br/>
                    <div style={{width:'80%'}}>               
                        {display}    
                    </div>
                </div>
            :
            <div style={{width:'80%',paddingLeft:'10%',marginTop:'10%'}}>               
                {display}    
            </div>
        }
            <br/>
        </>
    )
}

export default Buttongrp
