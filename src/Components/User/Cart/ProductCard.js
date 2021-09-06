import React, { useState,useEffect } from 'react';
import {Card,Divider} from '@material-ui/core';
import {BlackButton} from './StyledC.js';
import { makeStyles } from '@material-ui/core/styles';
import ImgBrick from './Construction Materials/Bricks.svg'
import DeletePopup from "../../Popup/DeletePopup"
import axios from 'axios';
import './cart.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



function ProductCard({products ,getCart, setUrgentorder,index,setCurrentItem,setEdit}) {
    const [openDelete, setOpenDelete] = useState(false);

    const id={item_id:products?.id}
    const handleDelete=async()=>{
       
        
          setOpenDelete(true)

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
    
    const useStyles = makeStyles({
        root: {
          width: winsize>380?'70%':'60%',
        },
        media: {
          height: 140,
          '&:hover': {
            backgroundColor:"#08090C",
          },
        },
    
      });
    const classes = useStyles();
    return (
        <>
            <div style={{marginLeft:winsize>750?'30px':'0%',cursor:"pointer"}} onClick={()=>setCurrentItem(index)}>
            {winsize>750?
            <Card style={{backgroundColor:'#08090C',width:winsize>1170?'80%':'70%',height:'130px',color:'white',padding:'20px',margin:'10px'}}>
                <div style={{ display:'flex',justifyContent:'space-between'}}>
                    <div style={{ display:'flex',alignItems:'center'}}>
                        <div>
                        <label style={{backgroundColor:'#000000',width:'100px',height:'100px',overflow:'clip',padding:'10px'}}>
                        <img src={ImgBrick} width='28px' height='28px' />
                        </label>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                        <div>
                            <h3 style={{fontSize:'15px'}}>{products?.type}</h3>
                        </div>
                        <div>
                            <h4 style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>Quantity: {''} {products.quantity}</h4>
                        </div>
                    </div>                
                </div>
                    </div>
                <div >
                <BlackButton style={{cursor: "pointer"}} onClick={() => setEdit(true)}>Edit</BlackButton>
                <BlackButton onClick={handleDelete} style={{cursor: "pointer"}}>Delete</BlackButton>
                </div>
                </Card>
                :
                <Card  style={{backgroundColor:'#08090C',color:"white",margin:'2%'}}  className={classes.root}>
                    <CardMedia
                    className={classes.media}
                    image={ImgBrick}
                    title="Contemplative Reptile"
                    />
                    <CardContent  >
                    <Typography   gutterBottom variant="h5" component="h2">
                        {products?.type}
                        </Typography>
                    <Typography variant="body2"  component="p">
                        Quantity: {''} {products.quantity}
                    </Typography>
                    </CardContent>

                    <CardActions>
                    <Button style={{color:' #FFB600',cursor: "pointer"}} onClick={() => setEdit(true)}  >Edit</Button>
                    <Button  onClick={handleDelete} style={{cursor: "pointer",color:' #FFB600'}}>Delete</Button>
                     </CardActions>
                    </Card>
                }
            </div>
                <DeletePopup open={openDelete} setOpen={setOpenDelete} handleClickOpen={()=>setOpenDelete(true)} getCart={getCart} id={id}/>
  
        </>
    )
}

export default ProductCard
