import React,{useEffect,useState} from 'react'
import RoundedHexagon from "../../Utils/RoundedHexagon";
import "./Requests.css"

const Acheive = ({pendingRequests,acceptedRequests,rejectedRequests}) => {

    const hexStyles1 = {
        width: "11.5rem",
        height: "13.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alginItems: "center",
        margin: "1.5rem 1.5rem 0",
        zIndex: "5",
    };
    const hexStyles2 = {
        width:95,
        height:96,
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

    return (
        <div className={winsize>1000?'recent recent_with_hexuser':'recent1 recent_with_hexuser'} >
        <div className='countmattersuser'>
        {winsize>1000?
            <h3 style={{fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: '800',fontSize:24}}>Some count that matters</h3>
            :
            <h3 style={{fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: '800',fontSize:24}} >Some count that matters</h3>
            }
            {winsize>1000?
            <p style={{fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: 'normal',margin:0}}>Your achievement in the journey depicted in numbers</p>
            :
            <p style={{fontSize:14,fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: 'normal'}}>Your achievement in the journey depicted in numbers</p>


            }
        </div>

        <div
            style={{
                display: 'flex',
                flexDirection: winsize>600?"row" : "column",
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                // backgroundColor:'red',
                padding:'0 5%'
            }}
            className="hex-request-user-bottom"
        >
            {/* <div             
            className='demand1user'
            style={{
                paddingBottom: "0",
                marginBottom: "0",
                display: "flex",
                justifyContent: "center",alignItems: "center",
                // backgroundColor:'blue',
                width:'fit-content'
            }}> */}
            <RoundedHexagon style={winsize>1000?hexStyles1:hexStyles2}>
                <h3
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: winsize>1000?"300%":16,
                        marginTop:'-5%'
                    }}
                >
                    {/* rejected leads */}
                    {rejectedRequests[0]?.count ? rejectedRequests[0]?.count:0 }
                </h3>
                <p
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: winsize>1000?"110%":12,
                        marginTop:winsize>1000?'-25%':'-5%'
                    }}
                >
                    Rejected Leads
                </p>
            </RoundedHexagon>
            <RoundedHexagon style={winsize>1000?hexStyles1:hexStyles2}>
                <h3
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: winsize>1000?"300%":16,
                        marginTop:'-5%'
                    }}
                >
                    {/* Accepted */}
                    {acceptedRequests[0]?.count ? acceptedRequests[0]?.count : 0}
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
            {/* </div> */}
            {/* <div             
            className='demand1user'
            style={{
                paddingBottom: "0",
                marginBottom: "0",
                display: "flex",
                // flexDirection: winsize>600?"row" : "column",
                justifyContent: "flex-start",alignItems: "flex-start",
                width:'fit-content'
            }}> */}
            <RoundedHexagon style={winsize>1000?hexStyles1:hexStyles2}>
                <h3
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize:winsize>1000? "300%":16,
                        marginTop:'-5%'
                    }}
                >
                    {pendingRequests[0]?.count ? pendingRequests[0]?.count : 0}
                </h3>
                <p
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize:winsize>1000? "110%":12,
                        marginTop:winsize>1000?'-25%':'-5%'
                    }}
                >
                    Pending Leads
                </p>
            </RoundedHexagon>
            <RoundedHexagon style={winsize>1000?hexStyles1:hexStyles2}>
                <h3
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize:winsize>1000? "300%":16,
                        marginTop:'-5%'
                    }}
                >
                    
                    {rejectedRequests[0]?.count + pendingRequests[0]?.count + acceptedRequests[0]?.count ? rejectedRequests[0]?.count + pendingRequests[0]?.count + acceptedRequests[0]?.count :0} 
                </h3>
                <p
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: winsize>1000?"110%":12,
                        marginTop:winsize>1000?'-25%':'-5%'
                    }}
                >
                    Total leads
                </p>
            </RoundedHexagon>
            {/* </div> */}
        </div>
    </div>
    )
}

export default Acheive
