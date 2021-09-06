import { Divider, Button,  Suspense} from '@material-ui/core';
import ProductCard from './ProductCard';
import ImgBrick from './Construction Materials/Bricks.svg'
import ImgCement from './Construction Materials/Bricks.svg'
import {useEffect, useState} from 'react';
import OrderDetails from './OrderDetails';
import {useHistory} from "react-router-dom"
import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import SubmitModal from './SubmitModal';
import EditDetails from './EditDetails';
import CircularIndeterminate from './circle.js';

function Cart({setCurrentSection,cart,setCart,getCart,site,getAllVendor,currentSection,setIsUser,setCurrentSectionProfile}) {
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const [openSaved, setOpenSaved] = useState(false);
  const [modalopen,setModalOpen]=useState(false);
  const [edit,setEdit] = useState(false);
  const [show,setshow] = useState(true);
  const [open,setopen]=useState(false);
  const products = cart

  const [urgentorder, setUrgentorder] = useState(0);
  const history = useHistory()

  const [currentItem,setCurrentItem]=useState(null)
  let currentProduct=products[currentItem]
  const [quantity,setQuantity]=useState(currentProduct?.quantity)
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

  
  useEffect(()=>{
    if(products?.length===0){
      setCurrentItem(null)
    }
  },[products])

  useEffect(() => {
    setTimeout(() => {
      setshow(false)
    }, 1000);
  }, [])


  useEffect(() => {
    if(currentSection === 11 && userId === undefined)
    {
        setIsUser(true)
        alert('Please Login')
        history.push('/auth-user')
    }
},[currentSection])

useEffect(()=>{
  currentProduct=products[currentItem]
  setQuantity(currentProduct?.quantity)
},[currentItem])

const handleEdit=(e) => {
  e.preventDefault()
  let newobj=cart[currentItem]
  newobj.quantity=quantity
  setCart(cart.filter((item,index)=>
       index===currentItem ? newobj :item  

  ))
  setEdit(false)
}

  return (
    show?<CircularIndeterminate/>:
    <>
    <div className="Cart" style={{backgroundColor:"121417",marginBottom:"5%"}}>
      <div style={{padding:'10px',marginLeft:'2%'}}>
      <span style={{color:'white'}}>
      Home {}/
      </span> 
      <span style={{color:'#FFB600'}}>
        cart
      </span>
      </div>
      <div style={{ color:'white',display:'flex'}}>
        <div style={{padding:'2%',fontWeight:'600px',fontSize: '150%'}}>
        Order Details
        </div>
        <div style={{paddingTop:'10px',padding:'3%',marginLeft:'30%',fontSize:'15px',color: 'rgba(245, 245, 245, 0.75)'}}>
          19 March, 2021
        </div>
      </div>
      <Divider orientation="horizontal" light="true" style={{
          marginLeft:'1.5%',
          width:'53%',
          height:'2.5px',
          backgroundColor:'#2D2D2D',
      }}/>
      
      <div style={{display:'flex'}}>
        <div>      
          <div style={{color:'white',margin:'10%'}}>
            {products?.length} PRODUCTS
          </div>
          <div style={{width:'250%'}}>
            {products?.length>0 && products?.map((products,index) => (<div  onClick={()=>setopen(true)}  style={{width:'100%'}}><ProductCard setEdit={setEdit} setCurrentItem={setCurrentItem} products={products} index={index} getCart={getCart}> </ProductCard></div>))}
          </div>
                                                                                                                                    
        </div>
        <div  style={{marginLeft:'40%'}}>
          {currentItem!==null && edit ?
          <>
          {winsize>1150?<h3 style={{width:'100%',textAlign:'center'}}> You can change the quantity</h3>:''}
          <EditDetails quantity={quantity} sendedit={handleEdit} setQuantity={setQuantity} setCurrentSectionProfile={setCurrentSectionProfile}  handleClickOpen={()=>setopen(true)} open={open} setopen={setopen} setCurrentSection={setCurrentSection} products={products} currentItem={currentItem} currentSection={currentSection}/>
          {winsize>1150?<Button  onClick={handleEdit} style={{backgroundColor:"#FFB600",textTransform:"capitalize" ,width:'40%',fontSize:"15px",margin:'20px',marginLeft:'50%'}}>Change</Button>:''}
          </>
          :
          currentItem!==null && !edit ?
          <OrderDetails setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSection={setCurrentSection} handleClickOpen={()=>setopen(true)} open={open} setopen={setopen} products={products} currentItem={currentItem} currentSection={currentSection}/>
          :

          ''
          
          }
        </div>

        </div>
        
    </div>
      <div style={{display:'flex',justifyContent:'center',alignContent:"center",margin:'4%'}}>{products?.length>0?<Button style={{backgroundColor:"#FFB600",textTransform:"capitalize" ,fontSize:"15px"}} onClick={()=>setModalOpen(true)} >CONTINUE</Button>:''}</div>
      <PopupSaved title="Saved" handleClickOpen={()=>setOpenSaved(true)} open={openSaved} setOpen={setOpenSaved} />
      <SubmitModal setModalOpen={setModalOpen} modalopen={modalopen} setOpenSaved={setOpenSaved} site={site} products={products} getAllVendor={getAllVendor} getCart={getCart}/>
    </>
  );
}

export default Cart;
