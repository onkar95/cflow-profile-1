import React,{useState,useEffect} from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link,Button,Typography,Card,CardContent,CardActions, CardHeader} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';


const useStyles=makeStyles({
    root:{
        width:328,
        height:225,
        borderRadius:8,
        backgroundColor:'#FFFFFF',
        margin:10
    },
    root2:{
        width:'65%',
        height:'95%',
        borderRadius:8,
        backgroundColor:'#FFFFFF',

    },
});


const Card1 = (props) => {

    const classes=useStyles();
    const handleClick = () => {
        props.setCurrentSection(1)
        if(props.title === "Agents")
        {
            props.setCurrentSectionService(1)
        }
        else if (props.title === "Construction Material")
        {
            props.setCurrentSectionService(0)
        }
        else if (props.title === "Construction Vehicle")
        {
            props.setCurrentSectionService(2)
        }
        else if (props.title === "Construction Machine")
        {
            props.setCurrentSectionService(0)
        }
        else
        {
            props.setCurrentSectionService(4)
        }
        window.scrollTo(0,100)
    }
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
        <Card className={winsize>500?classes.root:classes.root2}>
            <CardHeader
                style={{marginLeft:6,width:'20%',height:"30%"}}
                title={props.icon}

            ></CardHeader>
            <CardContent>
                <Typography style={{fontSize:24,fontWeight:'600'}}>{props.title}</Typography>
                
            </CardContent>
            <CardActions style={{cursor:"pointer"}} onClick={handleClick}>
                <div> Explore</div>
                <ArrowRightAltIcon/>
            </CardActions>
        </Card>
    )
}

export default Card1
