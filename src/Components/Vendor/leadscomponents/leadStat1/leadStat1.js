import React, { useEffect, useState } from 'react';
import './leadStat1.css';
import {Grid,Box, Typography} from "@material-ui/core";
import Card2 from './card2/Card2';

const LeadStat1 = ({monthSale,increasedSales,bestProduct,vendorproducts,currentType,setCurrentType}) => {
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

    return (
        <>
            <div style={{width:winsize>1000? "71%":"100%",height:winsize>1000?312:"55%",background:'#08090C',display:'inline-block',borderRadius:10,marginBottom:winsize<1000 && "2%"}}>
                <Grid container direction="row" justify="flex-start" alignItems='center'>
                    <Grid items xs={winsize<1000 ?12:6} style={{marginBottom:winsize<1000 && "5%"}}>
                        <Box pt={2} pl={winsize>1000 ? 5 :"5%"}>
                            <Card2 bestProduct={bestProduct} monthSale={monthSale} vendorproducts={vendorproducts} setCurrentType={setCurrentType} currentType={currentType}/>
                        </Box>
                    </Grid>
                    <Grid items xs={winsize<1000 ?12:6}>
                        <Grid container direction="column" justify='center' alignItems='center' >
                            <Grid items>
                                <Typography style={{color:'white',paddingBottom:40,paddingTop:25,fontSize:winsize<1000 ? "0.85rem":16,fontWeight:"600"}}>Your sales increased by {increasedSales?increasedSales:"0"}% since last month </Typography>
                            </Grid>
                            <Grid items>
                                <Grid container direction="row" justify={winsize>1000?"flex-start":"center"} alignItems={winsize>1000?"flex-start":"center"}>
                                    <Grid items style={{padding:10}} padding={5}>
                                        <Typography style={{color:'white',fontSize:10,fontWeight:"400"}}>Completed sales</Typography>
                                        <Typography style={{color:'white',textAlign:'center',fontSize:24,fontWeight:"700"}}>{monthSale?.acceptedPitch ? monthSale?.acceptedPitch:"0"}</Typography> 
                                       
                                    </Grid>
                                    <div className="vertical" ></div>   
                                    <Grid items style={{padding:10}}>
                                        <Typography style={{color:'white',fontSize:10,fontWeight:"400"}}>Declined sales</Typography>
                                        <Typography style={{color:'white',textAlign:'center',fontSize:24,fontWeight:"700"}}>{monthSale?.rejectedPitch ? monthSale?.rejectedPitch: "0"}</Typography>            
                                    </Grid>
                                    <div className="vertical" ></div>  
                                    <Grid items style={{padding:10}}>
                                        <Typography style={{color:'white',fontSize:10,fontWeight:"400"}}>Pending sales</Typography>
                                        <Typography style={{color:'white',textAlign:'center',fontSize:24,fontWeight:"700"}}>{monthSale?.pitched ? monthSale?.pitched: "0"}</Typography>            
                                    </Grid>
                                 </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>


        </>
    )
}

export default LeadStat1
