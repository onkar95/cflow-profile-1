import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';


// import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { Typography } from '@material-ui/core';

import RegisterImage from "../../../../Images/Register.png"
import QuotationImage from "../../../../Images/Quotation.png"
import ConfirmationImage from "../../../../Images/Confirmation.png"
import DeliveryImage from "../../../../Images/Delivery.png"



  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor:'#F9B308',
      zIndex: 1,
      color: '#fff',
      width: 75,
      height: 75,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    completed: {
      backgroundColor:"#727272",
    },
  });

function ColorlibStepIcon(props) {
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
  const classes = useColorlibStepIconStyles();
  const completed = props;

  const icons = {
    1: <img src={RegisterImage} />,
    2: <img src={QuotationImage} />,
    3: <img src={ConfirmationImage} />,
    4:<img src={DeliveryImage}/>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}



function getSteps() {
  return ['Fill your details and Service', 'Offer your best price to user', 'User has accepted your Proposal Rate','After recipt of payment deliver the goods'];
}
function getheads() {
    return ['Register','Quotation','Confirmation','Delivery'];
  }

 const Vendor=()=> {
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
   
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: winsize>1000?'row':'column',
    

    marginBottom:62

  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  completed: {
    '& $line': {
      backgroundColor:"transparent",
      marginTop:"5%",
      border:"none",
      borderTop:winsize>600 && "4px dotted #727272",
      color:"red",

    },
  },
  line: {
    height: 3,
    border: 0,
    borderRadius: 1,
  },
})(StepConnector);
  const classes = useStyles();
  const activeStep =4;
  const steps = getSteps();
  const head = getheads();

  return (
    <div className={classes.root}>  
      <Stepper style={{backgroundColor:'#08090C',display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: winsize>600?'row':'column'}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label,index) => (
          <Step key={label}  >
            <StepLabel  style={{height:winsize>1000 ? 150:"fit-content"}} StepIconComponent={ColorlibStepIcon}><Typography style={{color:"white",fontWeight:"500",fontSize:24}}>{<b> {head[index]} </b>}{<br/>}<p style={{color:"white",fontWeight:"400",textAlign:"center",fontSize:17}}>{label}</p></Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default Vendor;