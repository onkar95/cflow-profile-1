import React, {useEffect, useState } from 'react'
import RoundedHexagon from "../../Utils/RoundedHexagon";

import "./Requests.css"
const InDemandServices = ({recent_products,setCurrentSection,setSelectedTableItem}) => {
    
    const [isHover,setIsHover]=useState(false);
    const hexStyles1 = {
        width: "10rem",
        height: "11rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alginItems: "center",
        margin: "1.5rem 1.5rem 0",
        zIndex: "5",
        backgroundColor:isHover && "#ffb600",
        cursor:"pointer"
    };
    const hexStyles2 = {
        width:95,
        height: 96,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alginItems: "center",
        margin: "1.5rem 1.5rem 0",
        zIndex: "5",
    };

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
    const handleClick=(index)=>{

        console.log("handleClick",index)
        setSelectedTableItem(recent_products[index])
        setCurrentSection(12)
    }
    
    return (
        <div className='recentuser'>
                    <p style={{fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: '600',fontSize:20}}>Recent Services used </p>
                    <div className='demanduser'>
                        {
                            recent_products?.map((item,index) => (
                                
                                <div style={{display:"flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>
                                    <RoundedHexagon style={winsize>1000?hexStyles1:hexStyles2} onClick={()=>{console.log("Called");handleClick(index)}} 
                                    onMouseOver={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
                                        >
                                        <h3
                                            style={{
                                                color: "#000",
                                                textAlign: "center",
                                                fontSize:winsize>1000?"200%":16
                                            }}
                                        >
                                            {/* rejected leads */}
                                            {isHover ? "Repeat Order":item?.quantity }
                                   
                                        </h3>
                                
                            </RoundedHexagon>
                                {winsize>1000?
                                    <p style={{marginTop:"1rem"}}>{JSON.parse(item?.data)?.brand ? JSON.parse(item?.data)?.brand:""} {item.type}</p>
                                    :
                                    <p  style={{marginTop:"1rem",fontSize:16}}>{JSON.parse(item?.data)?.brand ? JSON.parse(item?.data)?.brand:""} {item.type}</p>
                                }
                                    </div>
                                    
                            ))
                        }
                    </div>
                </div>
    )
}

export default InDemandServices
