import React,{useEffect,useState} from 'react'

const ProductCard = ({img,setCurrentSection,title}) => {



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
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid #2d2d2d",borderRadius:"3px",height:winsize>400?"266px":"200px",width:winsize>400?"243px":"150px" ,marginRight:"5%",marginTop:winsize>400?"0px":"2px",marginLeft:winsize>400?"0px":"3px"}}>
                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:243,padding:"0.5rem",height:157}}>
                                        <img src={img} alt="cement" height={88} style={{padding:"0.5rem"}}/>
                                        <h4 style={{fontSize:16,fontWeight:"400"}}>{title}</h4>
                                    </div>
                                    <div style={{cursor: "pointer",backgroundColor:"white",color:"black",width:winsize>400?243:150,height:109,borderRadius:"0px 0px 3px 3px",alignItems:"center",display:"flex",justifyContent:"center"}}>
                                            <h4 style={{fontSize:16,fontWeight:"600"}} onClick={()=>{setCurrentSection(1);window.scrollTo(0,400)}}>Get A Quote</h4>
                                    </div>
        </div>
    )
}

export default ProductCard
