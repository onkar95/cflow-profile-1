import React, { useEffect, useState } from 'react'
import {Box,Grid,Typography,Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';
import AboutImage from "../../../../Images/AboutUs1.jpeg"
import "./Aboutus.css"




const useStyles=makeStyles({
    outlined:{
        color:'black',
        borderColor:'none',
        marginTop:20,
        width:170,
        backgroundColor:"#FFB600",
        fontSize:16,
        fontWeight:"600",
        fontFamily:'Open Sans',
        textTransform:"capitalize",
        padding:'1% 3%'
    },
});

const Aboutus = ({setCurrentSectionProfile , setCurrentSection}) => {
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
    console.log(winsize)
}, [window.screen.width])


    const classes=useStyles()

    return (

  

        <>
            <div style={{marginTop:"13rem",width:"100%",marginBottom:"2rem",display:"flex",justifyContent:"space-between"}} >
            <Grid container direction="row" justifyContent={winsize<1000 ?"center":"flex-start"} alignItems={winsize<1000 ?"center":"flex-start"} style={{width:"100%"}} >
                <Grid item xs={winsize>1000 ?7:12} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"2%"}}>
                    <Typography style={{color:'#FFB600',paddingTop:40,fontWeight:'600',fontSize:"24px",textAlign:'center'}}>About us</Typography>
                    {/* <Typography style={{color:'white',paddingTop:40,paddingBottom:40,fontSize:"1.25rem",paddingLeft:"10%",paddingRight:"10%",alignText:'center'}}> */}
                        <p  style={{textAlign:'center' ,fontWeight:'400', padding:"2% 10%",fontSize:winsize>=600 ?"16px" :"0.75rem"}}>Construction flow is a great platform for the construction industry. We provide a common platform for vendors and construction companies where they can connect for the raw materials like sand, cement, stones, marbles, tiles, etc. for building their impeccable sites. It will help save time and money also make the communication between the vendor and buyer more fluent. We not only focus on the construction raw material but also construction vehicles, machines, and chemicals.
                        </p>
                      {/* </Typography> */}
                    <Button variant="contained" className={classes.outlined} onClick={() => {setCurrentSection(3); setCurrentSectionProfile(4); window.scrollTo(0,100)}}>Learn more</Button>
                </Grid>
                <Grid items xs={winsize>1000 ?5:12} style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
                        <img src={AboutImage} style={{objectFit: "cover",width:547,height:winsize>=600 ?458: "200px",marginTop:winsize<=1000 && "15%"}}/>
                </Grid>
            </Grid>
        </div>
            
        </>
    )
}

export default Aboutus
