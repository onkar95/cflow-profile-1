import React, { useEffect, useState } from 'react';
import {Typography,Card,CardContent, CardHeader} from "@material-ui/core";
// import {Link,Button,Typography,Card,CardContent,CardActions, CardHeader, Grid} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';
import LeadsHexagon from "../LeadsHexagon/LeadsHexagon";





const Card2 = ({monthSale,bestProduct,vendorproducts,setCurrentType,currentType}) => {
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
            width:winsize >1000?"90%": "90%",
            height:266,
            borderRadius:13,
            backgroundColor:'#08090C',
            
        },
        productlist:{
            display:"flex",
            flexDirection:"column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingLeft:"3%",
            paddingRight:"3%",    
            marginTop:"1%"
    
        },
        row:{
            fontSize:16,minWidth:"33%",alignText:"center",fontWeight:"400",cursor:"pointer",
        }
    });
    const classes=useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                style={{color:'white',fontSize:16}}
                title={
                    <div >
                        <Typography style={{textAlign:'left',padding:8,fontSize:20,fontWeight:"500"}}>Products you provide</Typography>
                        {vendorproducts && 
                            <div className={classes.productlist}>
                            
                                
                            <div className="row1" style={{display:"flex",justifyContent: 'space-around',alignItems: 'center',marginBottom:"8%",width:"100%",alignText:"center"}}>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[0]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[0])}>{vendorproducts[0] ? vendorproducts[0]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[1]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[1])}>{vendorproducts[1] ? vendorproducts[1]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[2]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[2])}>{vendorproducts[2] ? vendorproducts[2]:""}</h3>
                        </div>
                    <div className="row1" style={{display:"flex",justifyContent: 'space-around',alignItems: 'center',marginBottom:"8%",width:"100%",alignText:"center"}}>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[3]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[3])}>{vendorproducts[3] ? vendorproducts[3]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[4]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[4])}>{vendorproducts[4] ? vendorproducts[4]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[5]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[5])}>{vendorproducts[5] ? vendorproducts[5]:""}</h3>
                        </div>
                    <div className="row1" style={{display:"flex",justifyContent: 'space-around',alignItems: 'center',marginBottom:"8%",width:"100%",alignText:"center"}}>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[6]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[6])}>{vendorproducts[6] ? vendorproducts[6]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[7]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[7])}>{vendorproducts[7] ? vendorproducts[7]:""}</h3>
                            <h3 className={classes.row} style={{color:currentType==vendorproducts[8]?"#ffb600":"white"}} onClick={()=>setCurrentType(vendorproducts[8])}>{vendorproducts[8] ? vendorproducts[8]:""}</h3>
                        </div>
                       
                      
                       
                   </div>
                        }
                        
                    </div>
                }
            />
            <CardContent>
                <Typography style={{color:'white',marginTop:100,marginLeft:110}}>    {bestProduct?.data?.type}  {bestProduct?.results1}</Typography>
            </CardContent>
        </Card>
    )
}

export default Card2
