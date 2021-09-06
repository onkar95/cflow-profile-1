import React,{useState} from 'react'
import "./Home.css"
import Footer from "../../FooterVendor/FooterVendor"; 
import Notification from "../Notifications/Notifications";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HomeImage from "../../../Images/Home.png";
import ServicesImage from "../../../Images/Services.png";
import RequestsImage from "../../../Images/Leads.png";
import ProfileImage from "../../../Images/Profile.png";
import NotificationImage from "../../../Images/Notifications.png"
import HomeImageBlack from "../../../Images/Homeblack.png"
import ServicesImageBlack from "../../../Images/ServicesBlack.png"
import RequestsImageBlack from "../../../Images/LeadsBlack.png"
import ProfileImageBlack from "../../../Images/Profileblack.png"
import NotificationImageBlack from "../../../Images/Notificationblack.png"
import Homecontent from '../homecomponents/homecontent/homecontent';
import Leads from "../Leads/leads"
import Details from "../leadscomponents/Table/Details"
import Details1 from "../../Vendor/leadscomponents/Table/Details1"
import DetailHistory from "../leadscomponents/Table/DetailHistoryAccepted"
import Profile from "../../Vendor/Profile/index"
import Services from '../Services/Services';
import axios from 'axios';
import LogoImage from "../../../Images/Logo.png";
import { useEffect } from 'react';
import {useHistory} from "react-router-dom"
import { Button } from '@material-ui/core';
import NotificationsIcon from '../../../Images/NotificationIcon.svg';
import ViewDetailVehicles from '../Services/servicecomponents/Dashboard/Table/ViewDetailVehicles';
import { slide as Menu } from 'react-burger-menu'
import PopupSaved from  "../../Popup/popupsaved/PopupSaved"
require('dotenv').config()

const Home = ({setIsUser}) => {
    

    const [title, setTitle]=useState("")
    const [open, setOpen] = React.useState(false);
    const sections = ["Home","Services","Leads","Profile"]
    const [currentSection,setCurrentSection] = useState(0)
    const sections_logo_white = [ HomeImage , ServicesImage ,  RequestsImage , ProfileImage , NotificationImage]
    const sections_logo_black = [ HomeImageBlack , ServicesImageBlack ,  RequestsImageBlack , ProfileImageBlack , NotificationImageBlack]
    const [isToggled,setIsToggled] = useState(false)

    const [formData,setFormData]=useState(null)
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [servicesInfo,setServiceInfo] = useState([])
    const [mostReqService,setMostReqService] = useState(null)
    const [vendorproducts,setVendorProducts] = useState(null)
    const [countMatters,setCountMatters] = useState(null)
    const [monthSale,setMonthSale] = useState(null)
    const [contri,setContri] = useState(null)
    const [newLeads,setNewLeads] = useState(null)
    const [pendingLeads,setPendingLeads] = useState(null)
    const [savedLeads,setSavedLeads] = useState(null)
    const [increasedSales,setIncreasedSales] = useState(null)
    const [bestProduct,setBestProduct] = useState(null)
    const [selectedRequest,setSelectedRequest]=useState(null)
    const [temp_filter_new_leads,setTemp_filter_new_leads] = useState(newLeads)
    const [temp_filter_pending_leads,setTemp_filter_pending_leads] = useState(pendingLeads)
    const [temp_filter_saved_leads,setTemp_filter_saved_leads] = useState(savedLeads)
    const [requesteduser,setRequestedUser] = useState(null)
    const [requesteduserDetail,setRequestedUserDetail] = useState(null)
    const [priceDetails,setPriceDetails] = useState(null)
    const [notification , setNotification] = useState(null)
    const [currentSectionService, setCurrentSectionService] = useState(6)
    const [currentSectionProfile, setCurrentSectionProfile] = useState(0)
    const [map_of_ , setMap_of_] = useState([])
    const [displayVehicle , setDisplayVehicle] = useState(null)
    const [tableSwitch, setTableSwitch] = useState(0);
        const [helpEnabled,setHelpEnabled] = useState(false)
    const [isOpen,setIsOpen] = useState(false);
    const history = useHistory()
    


    let temp;
    const getUser=async()=>{
        
        await axios.get(`${process.env.REACT_APP_URL}/user/get_user/${userId}`)
        .then(function (response) {            
            temp=response?.data

          })
        setFormData(temp?.data[0])
    }
    const getServices=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/get_services/${userId}`)
        .then(function (response) {            
            temp=response?.data
            console.log(typeof temp?.data)
            setServiceInfo(temp?.data)
          })
     
  
            

       
        console.log(userId , 'userid')
        console.log("get_services",servicesInfo)
        
    }
    const MostRequestedtServices=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/most_requested_service/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data[0]?.type
          })
        setMostReqService(temp)
        
    }
    const getProducts=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/products/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
          })
        setVendorProducts(temp)
       
    }
    const getCounts=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/sales_vendor/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
          })
        setCountMatters(temp)
        console.log("countMatters" , temp)

    }
    const [currentType,setCurrentType]=useState("cement")
    const getMonthlySale=async()=>{
        let temp;
        let data1={type:currentType}
        await axios.post(`${process.env.REACT_APP_URL}/user/vendor_month_sale/${userId}`,data1)
        .then(function (response) {            
            temp=response?.data?.data
            // console.log(data1,temp,"monthly_sale")
            
          })
        setMonthSale(temp)
        // console.log(monthSale , "SS")
    }
    const getContribution=async()=>{
        let temp;
        let data1={type:"cement"}
        await axios.post(`${process.env.REACT_APP_URL}/user/vendor_contribution/${userId}`,data1)
        .then(function (response) {            
            temp=response?.data
            // console.log(temp,"contri")
          })
        setContri(temp?.data)
    }
    const getNewLeads=async()=>{
        let temp;
        let arr = [];
        await axios.get(`${process.env.REACT_APP_URL}/user/new_leads/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
          })
        setNewLeads(temp)
        console.log(temp , 'New Leadss O')
            for(let i=0; i<temp?.length; i++){
                
                arr[temp[i]?.type]=(arr[temp[i]?.type] || 0) + 1;
            }
            setMap_of_(arr);
            console.log(map_of_ , arr , "HCH")
        setTemp_filter_new_leads(temp)
    }
    const getPendingLeads=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/get_pending_leads/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
            // console.log(temp,"pending")
          })
        setPendingLeads(temp)
        setTemp_filter_pending_leads(temp)
        
    }
    const getSavedLeads=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/get_saved_leads/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
            // console.log(temp,"history")
          })
        setSavedLeads(temp)
        setTemp_filter_saved_leads(temp)

    }
    const getSalesIncreasedPercent=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/vendor_sale_percentage/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data
          })
        setIncreasedSales(temp)
    

    }
    const getBestProduct=async()=>{
        let temp;
        await axios.get(`${process.env.REACT_APP_URL}/user/most_sold_product/${userId}`)
        .then(function (response) {            
            temp=response?.data?.data?.results
            // console.log(temp,"most sold")
          })
          setBestProduct(temp)

    }
    const getUserDetails=async()=>{
        setRequestedUser(selectedRequest?.user_id)
        let userid=selectedRequest?.user_id
        await axios.get(`${process.env.REACT_APP_URL}/user/get_user/${userid}`)
        .then(function (response) {            
            temp=response?.data
          })
        setRequestedUserDetail(temp)
    }
    const getPriceDetails=async()=>{
        let productId = {productId:selectedRequest?.id}
        await axios.post(`${process.env.REACT_APP_URL}/user/get_price_detail/${userId}` , productId)
        .then(function (response) {            
            temp=response?.data?.data[0]
          })
        setPriceDetails(temp)
    }
    const getNotification = async()=>{
        await axios.get(`${process.env.REACT_APP_URL}/product/all_notification/${userId}`)
            .then(function (response) {
                temp = response?.data?.data
            })
        setNotification(temp)
      
    }
    // const noofPendingRequest = async()=>{
    //     await axios.get(`http://localhost:7000/user/type_filter/${userId}`)
    //         .then(function (response) {
    //             temp = response
    //         })
        
    // }


    useEffect(() => {
        if(currentSection === 3 && userId === undefined)
        {
            setIsUser(false)
            setTitle("Please login first")
            setOpen(true)
            setTimeout(() => {
                history.push('/auth-user')
              }, 2000);
        }
    },[currentSection])
    

    // type_filter

    // sales_vendor
    useEffect(() => {getUser()},[])
    useEffect(() => {getServices()},[])
    useEffect(() => {MostRequestedtServices()},[])
    useEffect(() => {getProducts()},[])
    useEffect(() => {getCounts()},[])
    useEffect(() => {getMonthlySale()},[currentType])
    useEffect(() => {getContribution()},[currentType])
    useEffect(() => {getNewLeads()},[])
    useEffect(() => {getPendingLeads()},[])
    useEffect(() => {getSavedLeads()},[])
    useEffect(() => {getSalesIncreasedPercent()},[])
    useEffect(() => {getBestProduct()},[])
    useEffect(()=>{getNotification()},[])
    useEffect(() => {getUserDetails()},[selectedRequest])
    useEffect(() => {getPriceDetails()},[selectedRequest])
    // useEffect(()=>{noofPendingRequest()},[])

    const getAll=()=>{
        
        getCounts()
        getMonthlySale()
        getContribution()
        getNewLeads()
        getPendingLeads()
        getSavedLeads()
        getSalesIncreasedPercent()
        getBestProduct()
        getNotification();
        getServices();
        getProducts();

    }
    const [winsize,setwinsize]=useState(window.screen.width);
    const [winheight,setwinheight]=useState(window.screen.height);
    const handleResize=()=>{
        if (window.innerWidth <1000) {
            setwinsize(window.innerWidth)
        }
        else{
            setwinsize(window.innerWidth)
        }
        if (window.innerHeight <1000) {
          setwinheight(window.innerHeight)
      }
      else{
        setwinheight(window.innerHeight)
      }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", handleResize)
        console.log(winsize,winheight,"LandingPageImage")
    }, [window.screen.width,window.screen.height])
    

    // products vendor_sale_percentage


    var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '6%',
                height: '4%',
                left: '3%',
                top: '3%'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '20%',
                width: '10%',
                right:'10%'
            },
            bmCross: {
                background: '#ffb600', 
                cursor:"pointer",
                height: '30px'
                // height:'60%'
            },
            bmMenuWrap: {
                // position: 'fixed',
                height: '100%',
                width:'100%',
                left:'0%'
            },
            bmMenu: {
                background: '#2D2D2D',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em',
                overflowY:'hidden'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em',
                display: 'flex',
                flexDirection: 'column'
            },
            bmItem: {
                display: 'inline-block'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
}

    return (
        <>
            <div className="home-user-container">
                <div className="home-vendor-header">
                {winsize<650 && 
                    <Menu styles={ styles } disableOverlayClick={false} isOpen={false}>
                        {   
                            sections?.map((section,index) => <h3 style={{cursor:"pointer",width:'fit-content',color:currentSection === index && !helpEnabled ?  '#ffb600' : 'white'}} onClick={()=> {setCurrentSection(index); window.scrollTo(0,0); setHelpEnabled(false); setIsOpen(false); } }>{section}</h3>)
                        }
                        <h3 style={{cursor:"pointer",width:'fit-content',color:helpEnabled ? '#ffb600' : 'white'}} onClick={() => {setCurrentSection(3); setCurrentSectionProfile(5); window.scrollTo(0,0); setHelpEnabled(true); setIsOpen(false);}}>Help</h3>
                    </Menu>
                }
                    <div className="home-vendor-logo">
                        <img src={LogoImage} className="CF-logo-user" onClick={()=> userId ? setCurrentSection(0) : history.push('/')}/>
                    </div>
                    <>
                    {userId ? 
                        <div className="home-vendor-help sm-width">
                        {/* <span className="bell" onClick={() => setIsToggled(true)} >
                            <NotificationsIcon style={{color:'black'}}/>
                        </span> */}
                        <img onClick={() => setIsToggled(true)} src={NotificationsIcon} style={{cursor:'pointer'}}/>
                        <HelpOutlineOutlinedIcon style={{cursor:"pointer",marginLeft:'-50%'}} onClick={() => {setCurrentSection(3); setCurrentSectionProfile(5)}}/>
                        </div>
                    :
                        <div className="home-vendor-help bg-width">
                        <Button style={{backgroundColor:'#ffb600' , color:'black' , padding:'4%'}} onClick={() => {setIsUser(false); history.push('/auth-user')}}>Login</Button>
                        <HelpOutlineOutlinedIcon style={{cursor:"pointer"}} onClick={() => {setCurrentSection(3); setCurrentSectionProfile(5)}}/>
                        </div>
                    } 
                    </>
                </div>
            {/* {winsize>1000 && */}
             <div className="home-vendor-sections">
                        {
                            winsize > 650 &&
                            <div style={{display:"flex",width:"100%",height:56}}>
                            {
                            sections.map((section,index) => (
                                    <div  className="home-user-section" style={currentSection === index ? {backgroundColor:"#ffb600",color:"black",height:56,border:"1px solid #2d2d2d"}:{backgroundColor:"transparent",height:56,border:"1px solid #2d2d2d"}} onClick={() => setCurrentSection(index)} key={index} >
                                        <img src={currentSection === index ? sections_logo_black[index] :sections_logo_white[index]} style={{marginRight:"0.75rem"}}/>
                                        {section}
                                    </div>
                                    
                            ))
                            }
                            {/* <div className="home-user-section" style={{backgroundColor:"transparent"}} onClick={() => setIsToggled(true)}>
                                        <NotificationsIcon/>
                                        Notification
                            </div> */}
                        </div> 
                        } 
                         
         </div>
            {/* } */}
           
            <div className="home-user-content">
                {currentSection === 0 && <Homecontent countMatters={countMatters} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile}/>}
                {currentSection === 1 && <Services formData={formData} setDisplayVehicle={setDisplayVehicle} setCurrentSectionMain={setCurrentSection} map_of_={map_of_} setCurrentSectionRequest={setCurrentSection} servicesInfo={servicesInfo} mostReqService={mostReqService} vendorproducts={vendorproducts} getServices={getServices} getProducts={getProducts} bestProduct={bestProduct} getAll={getAll} currentSection={currentSectionService} setCurrentSection={setCurrentSectionService}/>}
                {currentSection === 2 && <Leads tableSwitch={tableSwitch} setTableSwitch={setTableSwitch} currentType={currentType} setCurrentType={setCurrentType} open={open} setOpen={setOpen} getAll={getAll} temp_filter_saved_leads={temp_filter_saved_leads} temp_filter_pending_leads={temp_filter_pending_leads} temp_filter_new_leads={temp_filter_new_leads} setTemp_filter_new_leads={setTemp_filter_new_leads} setTemp_filter_saved_leads={setTemp_filter_saved_leads}setTemp_filter_pending_leads={setTemp_filter_pending_leads} getPendingLeads={getPendingLeads} getNewLeads={getNewLeads} getSavedLeads={getSavedLeads} setCurrentSection={setCurrentSection} countMatters={countMatters} monthSale={monthSale} contri={contri} vendorproducts={vendorproducts} newLeads={newLeads} pendingLeads={pendingLeads} savedLeads={savedLeads} increasedSales={increasedSales} bestProduct={bestProduct} setSelectedRequest={setSelectedRequest} formData={formData}/>}
                {currentSection === 3 && <Profile formData={formData} setFormData={setFormData} getUser={getUser} currentSection={currentSectionProfile} setCurrentSection={setCurrentSectionProfile}/>}
                {currentSection === 5 && <Details1 setOpen={setOpen} setCurrentSection={setCurrentSection} selectedRequest={selectedRequest} getAll={getAll} />}
                {currentSection === 6 && <Details setCurrentSection={setCurrentSection} getPendingLeads={getPendingLeads} getNewLeads={getNewLeads} getSavedLeads={getSavedLeads} requesteduserDetail={requesteduserDetail} selectedRequest={selectedRequest} priceDetails={priceDetails}/>}
                {currentSection === 7 && <DetailHistory setCurrentSection={setCurrentSection} getPendingLeads={getPendingLeads} getNewLeads={getNewLeads} getSavedLeads={getSavedLeads} requesteduserDetail={requesteduserDetail} selectedRequest={selectedRequest} priceDetails={priceDetails}/>}
                {currentSection === 8 && <ViewDetailVehicles displayVehicle={displayVehicle} setCurrentSection={setCurrentSection}/>}
            </div>
            <Notification isToggled={isToggled} setIsToggled={setIsToggled} notification={notification} setCurrentSection={setCurrentSection}  setTableSwitch={setTableSwitch}/>
            <Footer setCurrentSection={setCurrentSection} setCurrentSectionService={setCurrentSectionService} setCurrentSectionProfile={setCurrentSectionProfile}/>
            <PopupSaved title={title} open={open} setOpen={setOpen}/>
          </div> 


        </>

    )
}

export default Home
