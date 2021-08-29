import { Grid, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import Hexagon from "../Hexagon/Hexagon";
import RoundedHexagon from "../../../Utils/RoundedHexagon";

const hexStyles1 = {
    width: "12rem",
    height: "13rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alginItems: "center",
    margin: "0rem 1.5rem 0",
    zIndex: "5",
};
 


const Stats = (props) => {
    let acc = props?.countMatters?.acceptedPitch  ? 
                props?.countMatters?.acceptedPitch: 0 
    let rej = props?.countMatters?.rejectedPitch 
                ? 
                props?.countMatters?.rejectedPitch
                :
                0 
    let pit = props?.countMatters?.pitched 
                ? props?.countMatters?.pitched: 0
    let total_leads = acc + rej + pit
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

    const hexStyles2 = {
        width:winsize<750?96:'9rem',
        height:winsize<750?96:'10rem',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alginItems: "center",
        margin: "1.5rem 1.5rem 0",
        zIndex: "5",
    };

    return (
        <div style={props.margin ? {width:"100%",backgroundColor:props.c,height:winsize>1000 ? 250 :"max-content", marginTop:"-1.75rem",marginBottom:winsize>1000 ? "12rem":"0rem"} : {width:"100%",backgroundColor:props.c,height:winsize>1000 ? 300:'fit-content'}}>
            <div style={{padding:"2rem"}}>
                <Typography style={{color:'white',fontWeight:'800',marginLeft:"12%",fontSize:24}}>Some count that matters</Typography>
                <Typography style={{color:'white',marginLeft:"12%",fontWeight:'400',fontSize:18,marginTop:"1rem"}}>Your achievement in the journey depicted in numbers</Typography>
                <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:winsize>1000 && 80,marginLeft:winsize<400 && "-10%",width:winsize<400 && "110%"}}>
                    <Grid item xs={6} sm={3} md={3} lg={2}>
                        <RoundedHexagon style={winsize>932?hexStyles1:hexStyles2}>
                                        <h3
                                            style={{
                                                color: "#000",
                                                textAlign: "center",
                                                fontSize: winsize>1000?"300%":"1rem",
                                                marginTop:'-5%'
                                            }}
                                        >
                                            {/* rejected leads */}
                                            {/* {temp_count?.rejected ? temp_count?.rejected: 0} */}
                                            {props?.countMatters?.rejectedPitch ? props?.countMatters?.rejectedPitch:"0"}
                                        </h3>
                                <p
                                    style={{
                                        color: "#000",
                                        textAlign: "center",
                                        fontSize: winsize>750? "110%":12,
                                        marginTop:winsize>1000?'-25%':'-5%'
                                    }}
                                >
                                    Rejected Leads
                                </p>
                            </RoundedHexagon>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={2}>
                                                <RoundedHexagon style={winsize>932?hexStyles1:hexStyles2}>
                                        <h3
                                            style={{
                                                color: "#000",
                                                textAlign: "center",
                                                fontSize: winsize>1000?"300%":"1rem",
                                                marginTop:'-5%'
                                            }}
                                        >
                                            {/* rejected leads */}
                                           {props?.countMatters?.acceptedPitch ? props?.countMatters?.acceptedPitch:"0"}
                                        </h3>
                                <p
                                    style={{
                                        color: "#000",
                                        textAlign: "center",
                                        fontSize: winsize>1000?"110%":12,
                                     marginTop:winsize>1000?'-25%':'-5%'
                                    }}
                                >
                                    Accepted Leads
                                </p>
                            </RoundedHexagon>
                    </Grid>
                    <Grid item  xs={6} sm={3} md={3} lg={2}>
                                                <RoundedHexagon style={winsize>932?hexStyles1:hexStyles2}>
                                        <h3
                                            style={{
                                                color: "#000",
                                                textAlign: "center",
                                                fontSize: winsize>1000?"300%":"1rem",
                                                marginTop:'-5%'
                                            }}
                                        >
                                            {/* rejected leads */}
                                            {/* {temp_count?.pending ? temp_count?.pending:0} */}
                                            {props?.countMatters?.pitched ? props?.countMatters?.pitched:"0"}
                                        </h3>
                                <p
                                    style={{
                                        color: "#000",
                                        textAlign: "center",
                                        fontSize: winsize>1000?"110%":12,
                                        marginTop:winsize>1000?'-25%':'-5%'
                                    }}
                                >
                                    Pending Leads
                                </p>
                            </RoundedHexagon>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={2}>
                                                <RoundedHexagon style={winsize>932?hexStyles1:hexStyles2}>
                                        <h3
                                            style={{
                                                color: "#000",
                                                textAlign: "center",
                                                fontSize: winsize>1000?"300%":"1rem",
                                                marginTop:'-5%'
                                            }}
                                        >
                                            {/* rejected leads */}
                                            {total_leads}
                                        </h3>
                                <p
                                    style={{
                                        color: "#000",
                                        textAlign: "center",
                                        fontSize: winsize>1000?"110%":12,
                                        marginTop:winsize>1000?'-25%':'-5%'
                                    }}
                                >
                                    Total
                                </p>
                            </RoundedHexagon>
                    </Grid>
                </Grid>
            </div>
            <br/>
        </div>
    )
}


export default Stats