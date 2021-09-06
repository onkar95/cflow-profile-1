import React, { useState } from 'react';
import {Card,Divider} from '@material-ui/core';
import {BlackButton} from './StyledC.js';
import ImgBrick from './Construction Materials/Bricks.svg'
import DeletePopup from "../../Popup/DeletePopup"
import axios from 'axios';



function ProductCard({products ,getCart, setUrgentorder,index,setCurrentItem,setEdit}) {
    const [openDelete, setOpenDelete] = useState(false);

    const id={item_id:products?.id}
    const handleDelete=async()=>{
       
        
          setOpenDelete(true)

    }

    return (
        
            <div style={{marginLeft:'30px',cursor:"pointer"}} onClick={()=>setCurrentItem(index)}>
            <Card style={{backgroundColor:'#08090C',width:'600px',height:'115px',color:'white',padding:'20px',margin:'10px'}}>
                
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
                {/* <div style={{color:'black',marginLeft:'300px'}}>
                    {products.urgent == 1 ?
                 <button style={{backgroundColor:'red',width:'70px',height:'18px',borderRadius:'32px',border:'none'}} onClick={() => setUrgentorder(1)}>URGENT</button>
                 :
                 ''
                }
                </div> */}
                </div>
                <div >
                <BlackButton style={{cursor: "pointer"}} onClick={() => setEdit(true)}>Edit</BlackButton>
                <BlackButton onClick={handleDelete} style={{cursor: "pointer"}}>Delete</BlackButton>
                </div>
                </Card>
                <DeletePopup open={openDelete} setOpen={setOpenDelete} handleClickOpen={()=>setOpenDelete(true)} getCart={getCart} id={id}/>
            </div>
    )
}

export default ProductCard
