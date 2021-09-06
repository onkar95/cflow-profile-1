  
import React, { useState , useEffect } from "react";
import "./TableSection.css";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {  InputLabel, MenuItem  } from "@material-ui/core";
import StickyHeadTable from "../Table/Table";
import pincode from "pincode-distance"

const TableSection = ({formData,tableSwitch, setTableSwitch,getAll,temp_filter_saved_leads,temp_filter_pending_leads,temp_filter_new_leads,setTemp_filter_saved_leads,setTemp_filter_new_leads,setTemp_filter_pending_leads,getSavedLeads,getPendingLeads,getNewLeads,setSelectedRequest,setCurrentSection,vendorproducts,newLeads,pendingLeads,savedLeads}) => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: 150,
            backgroundColor: "#FFB600",
            borderRadius: theme.spacing(1),
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #484850",
                    borderRadius: "5px 5px 5px 5px",
                    color:"white"
            }
        },
        formControl1: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: 150,
            backgroundColor: "transparent",
            borderRadius: theme.spacing(1),
                    border: "2px solid #ffb600",
                    borderRadius: "5px 5px 5px 5px",
                    color:"white",
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #ffb600",
                    borderRadius: "5px 5px 0 0",
                    color:"white"
            }
        },
        icon: {
            fill: "#ffb600"
        }
    }));
    const classes = useStyles();

    // const [tableSwitch, setTableSwitch] = useState(0);
    const tabs = [
        "New Leads",
        "Pending Leads",
        "All Leads"
    ];
    // const [currentState, setCurrentState] = useState(false);
    const filters = [
        "Newest First",
        "Sort by Date",
        "Sort by Urgency",
        "Completed Leads",
        "Pending Leads",
        "Rejected Leads",
    ];
    const Pincode = new pincode();

    const rads=["All over India","500 km","1000 km"]
    const product_filters = vendorproducts;
    const [currentFilter, setCurrentFilter] = useState(0);
    const [currentProductFilter, setCurrentProductFilter] = useState(0);
    const [radius,setRadius]=useState(0)


    useEffect(() => {
        getAll()
    },[tableSwitch])
    
    useEffect(() =>
    {   
        setTemp_filter_new_leads(newLeads?.filter((item) => item.type === product_filters[currentProductFilter] ))
        setTemp_filter_pending_leads(pendingLeads?.filter((item) => item.type === product_filters[currentProductFilter]))
        setTemp_filter_saved_leads(savedLeads?.filter((item) => item.type === product_filters[currentProductFilter]))
    },[currentProductFilter])
    useEffect(() =>{
        
        
            if(radius===2){
                console.log(formData)
                if(formData?.company_pincode===0){
                    alert("please fill your address first with pincode")
                    setCurrentSection(3)
                }
                else{
                    setTemp_filter_new_leads(newLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=1000))
                setTemp_filter_pending_leads(pendingLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=1000))
                setTemp_filter_saved_leads(savedLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=1000))
                }

                
            }
            else if(radius===1){
                if(formData?.company_pincode===0){
                    alert("please fill your address first with pincode")
                    setCurrentSection(3)
                }
                else{
                setTemp_filter_new_leads(newLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=500))
                setTemp_filter_pending_leads(pendingLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=500))
                setTemp_filter_saved_leads(savedLeads?.filter((item) => Pincode.getDistance(JSON.parse(item?.delivery_address)?.pin,formData?.company_pincode) <=500))
                }
            }
            else{
                setTemp_filter_new_leads(newLeads?.filter((item) =>item.type === product_filters[currentProductFilter]))
            setTemp_filter_pending_leads(pendingLeads?.filter((item) => item.type === product_filters[currentProductFilter]))
            setTemp_filter_saved_leads(savedLeads?.filter((item) => item.type === product_filters[currentProductFilter]))
            }
            
   
        
    },[radius])

    useEffect(() =>
    {
        if(currentFilter === 5)
        {
            setTemp_filter_new_leads(newLeads?.filter((item) => item?.product_status === "rejectedPitch"))
            setTemp_filter_pending_leads(pendingLeads?.filter((item) => item?.product_status === "rejectedPitch"))
            setTemp_filter_saved_leads(savedLeads?.filter((item) => item?.product_status === "rejectedPitch"))
        }
        else if(currentFilter === 4)
        {
            setTemp_filter_new_leads(newLeads?.filter((item) => item?.product_status === "pitched"))
            setTemp_filter_pending_leads(pendingLeads?.filter((item) => item?.product_status === "pitched"))
            setTemp_filter_saved_leads(savedLeads?.filter((item) => item?.product_status === "pitched"))
        }
        else if(currentFilter === 3)
        {
            setTemp_filter_new_leads(newLeads?.filter((item) => item?.product_status === "acceptedPitch"))
            setTemp_filter_pending_leads(pendingLeads?.filter((item) => item?.product_status === "acceptedPitch"))
            setTemp_filter_saved_leads(savedLeads?.filter((item) => item?.product_status === "acceptedPitch"))
        }
        else if(currentFilter === 2)
        {
            setTemp_filter_new_leads(newLeads?.filter((item) => item?.urgent === "urgent"))
            setTemp_filter_pending_leads(pendingLeads?.filter((item) => item?.urgent === "urgent"))
            setTemp_filter_saved_leads(savedLeads?.filter((item) => item?.urgent === "urgent"))
        }
        else if(currentFilter === 1)
        {
            setTemp_filter_new_leads(newLeads?.sort((a, b) => b.deliver_by - a.deliver_by))
            setTemp_filter_pending_leads(pendingLeads?.sort((a, b) => b.deliver_by - a.deliver_by))
            setTemp_filter_saved_leads(savedLeads?.sort((a, b) => b.deliver_by - a.deliver_by))
        }
        else
        {
            setTemp_filter_new_leads(newLeads)
            setTemp_filter_pending_leads(pendingLeads)
            setTemp_filter_saved_leads(savedLeads)
        }
    },[currentFilter])

    return (
        <div className='request'>
                <div className='recent'>
                    <div className='tablesection'>
                        <div className='switchsection'>
                            {tabs.map((tab, index) => (
                                <div
                                    className={
                                        tableSwitch === index
                                            ? "orange"
                                            : "white"
                                    }
                                >
                                    <h3 style={{fontSize:16,fontWeight:"700",marginBottom:0}} onClick={() => setTableSwitch(index)}>
                                        {tab}
                                    </h3>
                                    <hr
                                        className={
                                            tableSwitch === index
                                                ? "orangeline"
                                                : "whiteline"
                                        }
                                    ></hr>
                                </div>
                            ))}
                        </div>
                        <div className='filter'>
                        <FormControl
                                variant='outlined'
                                className={`${classes.formControl1} req-dropdown`}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: '#ffb600'}}>
                                    Radius
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"#ffb600"}}
                                >
                                    {rads.map((rad, index) => (
                                        <MenuItem
                                            className='filter_item'
                                            onClick={() =>
                                                setRadius(index)
                                            }
                                            value={index}
                                        >
                                            {rad}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl1} req-dropdown`}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: '#ffb600'}}>
                                    Products
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"#ffb600"}}
                                >
                                    <MenuItem
                                            className='filter_item'
                                            onClick={() => {
                                                setTemp_filter_new_leads(newLeads);
                                                setTemp_filter_pending_leads(pendingLeads);
                                                setTemp_filter_saved_leads(savedLeads);
                                            }}
                                            value="All"
                                        >
                                            All
                                        </MenuItem>
                                    {product_filters?.map((filter, index) => (
                                        <MenuItem
                                            className='filter_item'
                                            onClick={() =>
                                                setCurrentProductFilter(index)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl1} req-dropdown`}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: '#ffb600'}}>
                                    Filter
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{classes:{icon:classes.icon}}}
                                    style={{color:"#ffb600"}}
                                >
                                    {filters.map((filter, index) => (
                                        <MenuItem
                                            className='filter_item'
                                            onClick={() =>
                                                setCurrentFilter(index)
                                            }
                                            value={index}
                                        >
                                            {filter}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='table'>
                        <StickyHeadTable setSelectedRequest={setSelectedRequest}tableSwitch={tableSwitch} setCurrentSection={setCurrentSection} vendorproducts={vendorproducts} newLeads={temp_filter_new_leads} pendingLeads={temp_filter_pending_leads} savedLeads={temp_filter_saved_leads} />
                    </div>
                </div>
            </div>
    );
};

export default TableSection;