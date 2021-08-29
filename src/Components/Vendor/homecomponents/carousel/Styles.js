import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        minHeight:"100vh",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    HeroSection:
    {
        height:"100vh",
        maxHeight:"1100px",
        position:'relative',
        overflow:"hidden",
        marginLeft:"350px",
        marginTop:'200px',
        '@media (max-width:900px)':
        {
            marginLeft:"20px"
        }
    },
    HeroImage:
    {
        height:"300px",
        '@media (max-width:900px)':
        {
           height:"200px"
        }
       
    },
    Data:
    {
        width:"700px",
        fontSize:"1.5rem",
        color:"#FFF",
        '@media (max-width:900px)':
        {
           width:"500px"
        }
    },
    Title:
    {
        fontFamily:"'Source Code Pro', monospace",
        fontSize:"3rem",
        color:"#fff"
    },
    sliderbuttons:
    {
        marginTop:"20px"
    },
    arrowbutton:
    {
        width:"40px",
        height:"40px",
        color:"#fff",
        cursor:"pointer",
        background:"#17252a",
        borderRadius:"50px",
        padding:"10px",
        marginRight:"1rem",
        userSelect:"none",
        transition:"0.3s",
        "&:hover":
            {
                background:"#bdbdbd",
                transform:"scale(1.05)"
            }
    },
        text:
    {
        writingMode:"vertical-rl",
        fontSize:"5rem",
        fontFamily:"'Fascinate', cursive",
        color:"#fff",
        display:"flex",
        justifyContent:"flex-start",
        marginTop:"1px",
        "&:hover":
        {
            color:"#17252a"
        }
    },
}))

export default useStyles;