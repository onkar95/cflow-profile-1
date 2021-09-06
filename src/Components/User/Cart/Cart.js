
import { Divider, Button } from '@material-ui/core';
import ProductCard from './ProductCard';
import ImgBrick from './Construction Materials/Bricks.svg'
import ImgCement from './Construction Materials/Bricks.svg'
import {useEffect, useState} from 'react';
import OrderDetails from './OrderDetails';
import {useHistory} from "react-router-dom"
import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import SubmitModal from './SubmitModal';
import EditDetails from './EditDetails';

function Cart({setCurrentSection,cart,setCart,getCart,site,getAllVendor,currentSection,setIsUser,setCurrentSectionProfile}) {
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const [openSaved, setOpenSaved] = useState(false);
  const [modalopen,setModalOpen]=useState(false);
  const [edit,setEdit] = useState(false);

  const products = cart
 
  const [urgentorder, setUrgentorder] = useState(0);
  const history = useHistory()


  // const add_service=async(e)=>{
  //     e.preventDefault();
  //     setOpenSaved(true)
  //     // await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,newRequest)
  //     //           .then(function (response) {            
                    
  //     //           })
  // }

  const [currentItem,setCurrentItem]=useState(null)
  let currentProduct=products[currentItem]
  const [quantity,setQuantity]=useState(currentProduct?.quantity)
  useEffect(()=>{
    if(products?.length===0){
      setCurrentItem(null)
    }
  },[products])
  console.log(products,"products")
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
  console.log(cart,cart[currentItem])
}

  return (
    <>
    <div className="Cart" style={{backgroundColor:"121417",marginBottom:"5%"}}>
      <div style={{padding:'10px',marginLeft:'25px'}}>
       <span style={{color:'white'}}>
       Home {}/
       </span> 
       <span style={{color:'#FFB600'}}>
         cart
       </span>
      </div>
      <div style={{ color:'white',display:'flex'}}>
        <div style={{padding:'40px',fontWeight:'600px',fontSize: '150%'}}>
        Order Details
        </div>
        <div style={{paddingTop:'10px',padding:'40px',marginLeft:'450px',fontSize:'15px',color: 'rgba(245, 245, 245, 0.75)'}}>
          19 March, 2021
        </div>
      </div>
      <Divider orientation="horizontal" light="true" style={{
          marginLeft:'30px',
          width:'800px',
          height:'2.5px',
          backgroundColor:'#2D2D2D',
      }}/>
      
      <div style={{display:'flex'}}>
        <div>      
          <div style={{color:'white',marginLeft:'50px'}}>
            {products?.length} PRODUCTS
          </div>
          <div>
            {products?.length>0 && products?.map((products,index) => (<ProductCard setEdit={setEdit} setCurrentItem={setCurrentItem} products={products} index={index} getCart={getCart}> </ProductCard>))}
          </div>
         {products?.length>0 &&<Button style={{backgroundColor:"#FFB600",textTransform:"capitalize" ,fontSize:"15px",margin:'20px',marginLeft:'312px'}} onClick={()=>setModalOpen(true)} >CONTINUE</Button>}
        </div>
        <div style={{marginLeft:'200px'}}>
          {currentItem!==null && edit ?
          <>
          <h3 style={{width:'100%',textAlign:'center'}}> You can change the quantity</h3>
          <EditDetails quantity={quantity} setQuantity={setQuantity} setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSection={setCurrentSection} products={products} currentItem={currentItem} currentSection={currentSection}/>
          <Button onClick={handleEdit} style={{backgroundColor:"#FFB600",textTransform:"capitalize" ,fontSize:"15px",margin:'20px',marginLeft:'312px'}}>Change</Button>
          </>
          :
          currentItem!==null && !edit ?
          <OrderDetails setCurrentSectionProfile={setCurrentSectionProfile} setCurrentSection={setCurrentSection} products={products} currentItem={currentItem} currentSection={currentSection}/>
          :

          ''
          
          }
        </div>

        </div>
        
    </div>
    
    <PopupSaved title="Saved" handleClickOpen={()=>setOpenSaved(true)} open={openSaved} setOpen={setOpenSaved} />
    <SubmitModal setModalOpen={setModalOpen} modalopen={modalopen} setOpenSaved={setOpenSaved} site={site} products={products} getAllVendor={getAllVendor} getCart={getCart}/>
    </>
  );
}

export default Cart;
