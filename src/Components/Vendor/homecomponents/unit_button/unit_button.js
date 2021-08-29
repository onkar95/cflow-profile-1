import React, { useState,useEffect } from "react";
import Unit from "./unit/unit";
import Unit1 from "./unit1/Unit1";
import * as converter from 'units-converter'
import "./unit_button.css"
import {Box, Button, Typography } from "@material-ui/core";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import unitconv from './unitconv';
import Convertor from '../../../User/HomeContentUser/Convertor';

const units=[
  ["mm2","cm2","m2","km2","yd2","mi2","ft2","in2"],
  ["mm","cm","m","km","yd","mi","ft","in"],
  ["mm3","cm3","m3","km3","mi3","yd3","ft3","in3"],
  ["mg","g","kg","t","lb"],

];


const Maincal=(props)=>{



  const [Answer,setAnswer]=useState(0)
  const [c,setc]=useState();
  const [un1,setun1]=useState(0);
  const [un2,setun2]=useState(0);
  const btindex=props.buttonindex;
  const [interchange1,setinterchange1]=useState('')
  const [interchange2,setinterchange2]=useState('')
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



  useEffect(() => {
   setAnswer(unitconv(units,un1,un2,c,btindex));
  }, [un1,un2,c,btindex])

  const userint=(event)=>{
    setc(event.target.value)
  }

  const interchange=(event)=>{
    // seta(event.target.value)
    // setun1(event.target.value)
  }
  const inter=(event)=>{
    // setb(event.target.value)
    // setun2(event.target.value)
}

const changeable1=(index)=>{

  setun1(index);

}
const changeable2=(index)=>{
  setun2(index);

}



const changeable=()=>{

  const u1=units[btindex][un2];
  const u2=units[btindex][un1];
  const iu1=un2;
  const iu2=un1;
  setinterchange1(u1)
  setinterchange2(u2)
  setun1(iu1)
  setun2(iu2)

}
  return(
    <>
    {winsize>900?
            <Box display="flex" borderColor="#2d2d2d" borderOpacity="0.5" borderRadius="5" justifyContent="space-around" p={7}  alignItems="center" border={1 } width="auto" >
                <Box>
                    <Unit border={1 } borderColor="#2d2d2d" items={units[props.buttonindex]} in={userint} g={changeable1} p1={interchange1}   />
                </Box>
                    <Button onClick={changeable}>
                      <SyncAltIcon style={{fontSize:30,color:'white'}}/>
                    </Button>
                <Box>
                    <Unit1 items={units[props.buttonindex]} answer={Answer} t={changeable2}  p2={interchange2}   />
                </Box>
            </Box>
            :
            <Convertor/>
    }


    </>
  )
}


export default Maincal;