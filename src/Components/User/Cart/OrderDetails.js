import React,{useEffect,useState} from 'react';
import {Card,Divider,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function OrderDetails({setCurrentSectionProfile,products,currentItem,setopen,open,currentSection,setCurrentSection}) {
    let currentProduct=products[currentItem]
    let data = currentProduct?.data ? JSON.parse(currentProduct?.data):""
    console.log(currentProduct,"current","data",data)
    // console.log(data?.materials,currentProduct)
    const notify = (msg) => 
    toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    
    let delivery_address= currentProduct?.delivery_address ? JSON.parse(currentProduct?.delivery_address):""
    useEffect(()=>{
        if(currentProduct?.delivery_address===undefined){
            
            setCurrentSection(3);
            setCurrentSectionProfile(3)
            notify('Please Add The Site');
            console.log('Please Add The Site')

        }
        else {
            delivery_address= JSON.parse(currentProduct?.delivery_address)
            }
    }, [])
    const handleClose = () => {
        setopen(false);
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
            <>
              <div  className="display" style={{display:'flex'}}>
                <div>
                <Divider
                orientation="vertical"
                light="true"
                style={{
                height: "420px",
                 backgroundColor: "#2D2D2D",
                width: "2px",
                }}
                    />
                </div>
                <div>
                <p style={{color:'#FFB600',marginLeft:'30%'}}>Order Details</p>
                <Divider orientation="horizontal" light="true" style={{
                    marginLeft:'30%',
                    width:'130px',
                    height:'2.5px',
                    backgroundColor:'#FFB600',
                    }}/>
                <Card style={{backgroundColor:'#08090C',color:'white',padding:'20px',width:winsize>1170?'200%':"130%",height:'325px',marginLeft:'20%'}}>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Order:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.brand ?data?.brand  :currentProduct?.type} 
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Placed on:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {currentProduct?.created_at.slice(0,10)}
                        </div>
                    </div>
                    
                    {

                        data?.materials ?
                        <>
                         <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Materials:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.materials}
                   
                        </div>
                    </div>
                                       <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Labour:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.labour ? "Required" : "Not Required"}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Gender:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.gender }
                        </div>
                    </div>
                        </>
                        :
                        data?.type ?
                        <>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Type:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.type ?data?.type :data?.grade ? data?.grade:"____"}
                   
                        </div>
                    </div>
                                       <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Size:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.size ? data?.size :"____"}
                        </div>
                    </div>
                            </>               
                    :
                        <>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Driver:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.driver ? "Required" : "Not Required"}
                        </div>
                    </div>
                        </>

                    }
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Quantity:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {currentProduct?.quantity}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Delivery Address:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                     {delivery_address?.city ? delivery_address?.city :""} {} {delivery_address?.state ? delivery_address?.state :""} 
                        </div>
                    </div>
 
    
                    {
                        data?.startDate && 
                        <>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Start Date:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.startDate.slice(0,10)}
                        </div>                      
                        
                    </div>
                     <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            End Date:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.endDate.slice(0,10)}
                        </div>
                        
                        
                    </div>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Special Requirement:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.special_requirement ? data.special_requirement : "None"}
                        </div>

                        
                    </div>
                    
                    
                    
                    </>
                    }
                    {currentProduct?.type==="Cement" || currentProduct?.type==="RMC" || currentProduct?.type==="Paint & Putty" && 
                    
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                    <div>
                    Trade type:
                    </div>
                    <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                   {currentProduct?.trade ? "Trade": "Non-trade"}
                    </div>
                    
                    
                </div>
                    }
                    
                </Card>
                </div>
               
            </div>
            <div className='display1'>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="display1"
                >
                    <DialogTitle style={{backgroundColor:'#08090C',color:'#FFB600'}} id="alert-dialog-title">{"Change your order"}</DialogTitle>
                    <DialogContent style={{backgroundColor:'#08090C',color:'white',width:winsize>410?300:200}} >
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Order:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {/* {JSON.parse(currentProduct?.data)?.brand ?JSON.parse(currentProduct?.data)?.brand  :currentProduct?.type}  */}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Placed on:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {currentProduct?.created_at.slice(0,10)}
                        </div>
                    </div>
                    
                    {

                        data?.materials ?
                        <>
                         <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Materials:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.materials}
                   
                        </div>
                    </div>
                                       <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Labour:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.labour ? "Required" : "Not Required"}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Gender:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.gender }
                        </div>
                    </div>
                        </>
                        :
                        data?.type ?
                        <>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Type:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {JSON.parse(currentProduct?.data)?.type ?JSON.parse(currentProduct?.data)?.type :JSON.parse(currentProduct?.data)?.grade ? JSON.parse(currentProduct?.data)?.grade:"____"}
                   
                        </div>
                    </div>
                                       <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Size:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {JSON.parse(currentProduct?.data)?.size ? JSON.parse(currentProduct?.data)?.size :"____"}
                        </div>
                    </div>
                            </>               
                    :
                        <>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Driver:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.driver ? "Required" : "Not Required"}
                        </div>
                    </div>
                        </>

                    }
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Quantity:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {currentProduct?.quantity}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Delivery Address:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {delivery_address?.city} {} {delivery_address?.state} 
                        </div>
                    </div>
 
                    {
                        data?.startDate && 
                        <>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Start Date:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.startDate.slice(0,10)}
                        </div>                      
                        
                    </div>
                     <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            End Date:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.endDate.slice(0,10)}
                        </div>
                        
                        
                    </div>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                        <div>
                            Special Requirement:
                        </div>
                        <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                        {data?.special_requirement ? data.special_requirement : "None"}
                        </div>

                        
                    </div>
                    
                    
                    
                    </>
                    }
                    {currentProduct?.type==="Cement" || currentProduct?.type==="RMC" || currentProduct?.type==="Paint & Putty" && 
                    
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                    <div>
                    Trade type:
                    </div>
                    <div style={{ fontSize:'10px',color: 'rgba(245, 245, 245, 0.75)'}}>
                   {currentProduct?.trade ? "Trade": "Non-trade"}
                    </div>
                    
                    
                </div>
                    }
                    </DialogContent>
                    <DialogActions style={{backgroundColor:'#08090C'}}>
                    <Button onClick={handleClose} style={{color:'#FFB600'}}>
                        ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            
            <ToastContainer />
            </>


    )
}

export default OrderDetails



