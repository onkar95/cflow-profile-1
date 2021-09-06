import { Card, makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoreImage from "../../../Images/More.png";
import ProductImage from "../../../Images/Product.png";
import SaveImage from "../../../Images/Save.png";
import PopupSaved from "../../Popup/popupsaved/PopupSaved";
import Agents from "./servicecomponents/Agents/Agents";
import CommercialVehicles from "./servicecomponents/CommercialVehicles/CommercialVehicles";
import ConstructionChemicals from "./servicecomponents/ConstructionChemicals/ConstructionChemicals";
import ConstructionMachines from "./servicecomponents/ConstructionMachines/ConstructionMachines";
import ConstructionMaterial from "./servicecomponents/ConstructionMaterial/ContructionMaterial";
import Dashboard from './servicecomponents/Dashboard/Dashboard';
import Sidemenu from './servicecomponents/sidemenu/sidemenu';
import VehicleDetail from './servicecomponents/VehicleDetail/VehicleDetail';
import "./Services.css";

require('dotenv').config()
function Services({ formData, setDisplayVehicle, setCurrentSectionMain, map_of_, setCurrentSectionRequest, servicesInfo, mostReqService, vendorproducts, getServices, getProducts, bestProduct, getAll, currentSection, setCurrentSection }) {

    // const [currentSection, setCurrentSection] = useState(6)
    // const [servicesArray,setServiceArray] = useState({Sand:"","Bricks & Blocks":"","cement":"","RMC Mixture":"","Stones":"","Marble & Tile":"","TMT Steel & Iron":"","Pipes":"","Paint & Putty":"","Agents":"","Concrete Admixture":"","Waterproofing":"","Grout & Anchor":"","Concrete Repair":"","Sealant":"","Flooring":"","Tiling":""})

    // const getServicesofVendor=()=>{
    //     servicesInfo?.map((service,index)=>{
    //         const keys = Object.keys(servicesArray);


    //         const type_service=service?.type
    //         keys?.map((key,index1)=>{
    //             if(key===type_service){
    //                 setServiceArray({...servicesArray,[key]:index})


    //             }
    //         })
    //         console.log(servicesArray,"service",index)

    //     })
    // }
    // useEffect(() => getServicesofVendor(),[])
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


    const [selected, setSelected] = useState(null)
    const [userId, setUserId] = useState(JSON.parse(localStorage?.getItem('profile'))?.data?.id)
    const service = { 0: "Construction Materials", 1: "Agents", 2: "Commercial Vehicles", 4: "Construction Chemicals", 5: "Commercial Vehicles" }
    let initialarr = { service_type: service[currentSection], type: "", info: null }
    const [newService, setNewService] = useState(initialarr)
    useEffect(() => {
        setNewService({ ...newService, service_type: service[currentSection] })
    }, [currentSection])

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [winsize, setwinsize] = useState(window.screen.width);
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setwinsize(window.innerWidth)
        }
        else {
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [window.screen.width])

    const useStyles = makeStyles({
        root: {
            minWidth: 220,
            maxWidth: 220,
            minHeight: 140,
            maxHeight: 140,
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#2D2D2D",
            backgroundColor: "#08090c",
            color: "white",
            marginRight: winsize > 1000 ? "5%" : "0%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0% 0%"
        },
    })

    const AddService = async () => {
        let name_temp = selected?.name
        setNewService({ ...newService, type: name_temp })
        console.log(newService, "CHECK")
        await axios.post(`${process.env.REACT_APP_URL}/user/add_service/${userId}`, newService)
            .then(response => {
            })
        getServices();
        getProducts();
        getAll()
        setCurrentSection(6)



    }

    // dropdown data fetching
    const [dropdownData, setDropDownData] = useState([]);
    const [chemicalDropDown, setChemicalDropDown] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/construction_material_dropdown`)
            .then(res => {
                setDropDownData(res.data.data);
                console.log(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/user/construction_chemical_dropdown`)
            .then(res => {
                setChemicalDropDown(res.data.data);
            })
            .catch(err => console.log(err))
    }, [])

    const classes = useStyles()
    return (
        <div className="service-user-container">
            <div className="header_of_services">
                <div className='breadcrumbsuser'>
                    <h3>
                        Home / {" "}
                        <span style={{ color: "#FFB600" }}>Services</span>
                    </h3>
                    <div className="service-user-ourservice">
                        <h2 style={{ fontSize: 24, fontWeight: '600' }}>Our Services</h2>
                    </div>
                </div>
                <div className="header_right">
                    {currentSection === 6 &&
                        <div className="services_cards">
                            <>
                                <Card className={classes.root} variant="outlined">
                                    {/* {console.log(servicesInfo , 'services')} */}
                                    <p style={{ fontSize: 16, fontWeight: '400', marginBottom: 0 }}>Total No. of Services</p>
                                    <h2 style={{ color: "#ffb600", fontSize: 25, fontWeight: '400', marginBottom: 0 }}>{servicesInfo?.length}</h2>
                                    <p style={{ color: "#ffb600", fontSize: 14, fontWeight: '400', cursor: "pointer" }} onClick={() => window.scrollTo(0, 350)}>View</p>

                                </ Card>
                            </>

                            <>
                                <Card className={classes.root} variant="outlined">

                                    <p style={{ fontSize: 16, fontWeight: '400', marginBottom: 0 }}>Best Product this month</p>
                                    <h3 style={{ color: "#ffb600", fontSize: 16, fontWeight: '400', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 0 }}>{bestProduct?.data?.type}<br></br>{bestProduct?.results1 ? bestProduct?.results1 : "No product sold"}</h3>
                                    <p></p>

                                </ Card>
                            </>
                            <>
                                <Card className={classes.root} variant="outlined">

                                    <p style={{ fontSize: 16, fontWeight: '400' }}>Most requested service</p>
                                    <h2 style={{ color: "#ffb600", fontSize: 16, fontWeight: '400', marginTop: 0 }}>{mostReqService ? mostReqService : "No product sold"}</h2>
                                    <p></p>

                                </ Card>
                            </>
                        </div>

                    }
                    {currentSection === 6 && <hr className="hr-header" ></hr>}
                </div>
            </div>

            <div className="service-user-content">
                <div className="service-user-sidemenu" >
                    <Sidemenu currentSection={currentSection} setCurrentSection={setCurrentSection} />
                </div>
                <div className="service-user-detail">
                    {currentSection === 6 && <Dashboard setDisplayVehicle={setDisplayVehicle} setCurrentSectionMain={setCurrentSectionMain} map_of_={map_of_} getAll={getAll} setCurrentSection={setCurrentSection} vendorproducts={vendorproducts} servicesInfo={servicesInfo} setCurrentSectionRequest={setCurrentSectionRequest} handleClickOpen={handleClickOpen} />}
                    {currentSection === 0 && <ConstructionMaterial formData={formData} notify={notify} servicesInfo={servicesInfo} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentSection === 1 && <Agents formData={formData} notify={notify} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}
                    {currentSection === 2 && <CommercialVehicles currentSection={currentSection} setCurrentSection={setCurrentSection} selected={selected} setSelected={setSelected} newService={newService} setNewService={setNewService} handleClickOpen={handleClickOpen} />}
                    {currentSection === 3 && <ConstructionMachines />}
                    {currentSection === 4 && <ConstructionChemicals formData={formData} notify={notify} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentSection === 5 && <VehicleDetail formData={formData} notify={notify} newService={newService} setNewService={setNewService} selected={selected} setCurrentSection={setCurrentSection} AddService={AddService} handleClickOpen={handleClickOpen} />}

                    <div className="gotorequestpage" onClick={() => setCurrentSectionRequest(2)}>
                        <h3 style={{ fontWeight: "600" }}>Check your Lead/Pitch Status</h3>
                        <div style={{ display: "flex", margin: 0, marginTop: "0%", cursor: "pointer", height: 'fit-content', alignItems: "center", justifyContent: "center" }} >
                            <h4 style={{ fontWeight: "400", fontSize: "1rem" }} className="view">View</h4>
                            <ArrowRightAltIcon />
                        </div>
                    </div>
                    <PopupSaved title="Your Service Has Been Added" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className="vendor-service-productweprovide">
                <h2 className="vendor-service-productweprovide-h2">How to save products</h2>
                <div className="vendor-service-productweprovide-container">
                    <div className="vendor-service-productweprovide-subcontainer">
                        <div className="vendor-service-productweprovide-image-container">
                            <img src={ProductImage} />
                        </div>
                        <h3>Products</h3>
                        <p  >Select all the products you provide</p>
                    </div>
                    <div className="vendor-service-productweprovide-subcontainer">
                        <div className="vendor-service-productweprovide-image-container">
                            <img src={SaveImage} />
                        </div>
                        <h3>Save</h3>
                        <p >Save the selected products</p>
                    </div>
                    <div className="vendor-service-productweprovide-subcontainer">
                        <div className="vendor-service-productweprovide-image-container">
                            <img src={MoreImage} />
                        </div>
                        <h3>More</h3>
                        <p >Add in more services if required</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Services
