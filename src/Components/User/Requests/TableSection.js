import React , { useState , useEffect}  from 'react'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {  InputLabel, MenuItem  } from "@material-ui/core";
import StickyHeadTable from "../../Table/Table";
import { makeStyles } from "@material-ui/core/styles";
import "./Requests.css"

function TableSection({getAllVendor,setCurrentSection,newRequests,savedRequests,pitchedRequests,setSelectedTableItem,selectedTableItem,temp_filter_new_requests,setTemp_filter_new_requests,temp_filter_pitched_requests,setTemp_filter_pitched_requests,temp_filter_saved_requests,setTemp_filter_saved_requests,temp_filter,tableSwitch,setTableSwitch }) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            // minWidth: 150,
            backgroundColor: "#FFB600",
            borderRadius: theme.spacing(1),
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #484850",
                    borderRadius: "5px 5px 0 0",
                    color:"white"
            }
        },
        formControl1: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            // minWidth: 150,
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
    const tabs = [
        "New Requests",
        "Pitched Requests",
        "History"
    ];
    const product_filters = temp_filter
    const [currentFilter, setCurrentFilter] = useState(0);
    const [currentProductFilter, setCurrentProductFilter] = useState(0);
    const filters = [
        "Newest First",
        "Sort by Date",
        "Sort by Urgency",
        "Completed Leads",
        "Pending Leads",
        "Rejected Leads",
    ];

    useEffect(() =>
    {
        setTemp_filter_new_requests(newRequests?.filter((item) => item.type === product_filters[currentProductFilter]?.type))
        setTemp_filter_pitched_requests(pitchedRequests?.filter((item) => item.type === product_filters[currentProductFilter]?.type))
        setTemp_filter_saved_requests(savedRequests?.filter((item) => item.type === product_filters[currentProductFilter]?.type))
        
    },[currentProductFilter])


    useEffect(() => {
        getAllVendor()
    },[tableSwitch])

    useEffect(() =>
    {
        if(currentFilter === 5)
        {
            setTemp_filter_new_requests(newRequests?.filter((item) => item?.product_status === "rejectedPitch"))
            setTemp_filter_pitched_requests(pitchedRequests?.filter((item) => item?.product_status === "rejectedPitch"))
            setTemp_filter_saved_requests(savedRequests?.filter((item) => item?.product_status === "rejectedPitch"))
        }
        else if(currentFilter === 4)
        {
            setTemp_filter_new_requests(newRequests?.filter((item) => item?.product_status === "pitched"))
            setTemp_filter_pitched_requests(pitchedRequests?.filter((item) => item?.product_status === "pitched"))
            setTemp_filter_saved_requests(savedRequests?.filter((item) => item?.product_status === "pitched"))
        }
        else if(currentFilter === 3)
        {
            setTemp_filter_new_requests(newRequests?.filter((item) => item?.product_status === "acceptedPitch"))
            setTemp_filter_pitched_requests(pitchedRequests?.filter((item) => item?.product_status === "acceptedPitch"))
            setTemp_filter_saved_requests(savedRequests?.filter((item) => item?.product_status === "acceptedPitch"))
        }
        else if(currentFilter === 2)
        {
            setTemp_filter_new_requests(newRequests?.filter((item) => item?.urgent === "urgent"))
            setTemp_filter_pitched_requests(pitchedRequests?.filter((item) => item?.urgent === "urgent"))
            setTemp_filter_saved_requests(savedRequests?.filter((item) => item?.urgent === "urgent"))
        }
        else if(currentFilter === 1)
        {
            setTemp_filter_new_requests(newRequests?.sort((a, b) => b.deliver_by - a.deliver_by))
            setTemp_filter_pitched_requests(pitchedRequests?.sort((a, b) => b.deliver_by - a.deliver_by))
            setTemp_filter_saved_requests(savedRequests?.sort((a, b) => b.deliver_by - a.deliver_by))
        }
        else
        {
            setTemp_filter_new_requests(newRequests)
            setTemp_filter_pitched_requests(pitchedRequests)
            setTemp_filter_saved_requests(savedRequests)
        }
    },[currentFilter])

    
    return (
        <div className='recentuser'>
                    <div className='tablesectionuser1'>
                        <div className='switchsectionuser1'>
                            {tabs.map((tab, index) => (
                                <div
                                    className={
                                        tableSwitch === index
                                            ? "orange"
                                            : "white"
                                    }
                                >
                                    <h3 onClick={() => setTableSwitch(index)} style={{fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: '700',fontSize:16}}>
                                        {tab}
                                    </h3>
                                    <hr
                                        className={
                                            tableSwitch === index
                                                ? "orangeline"
                                                : "whiteline"
                                        }
                                        style={{marginTop:'-5%'}}
                                    ></hr>
                                </div>
                            ))}
                        </div>
                        <div className='filteruser1'>
                        <FormControl
                                variant='outlined'
                                className={`${classes.formControl} req-dropdown`}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label'>
                                    Product
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    
                                >
                                    {product_filters?.map((filter, index) => (
                                        <MenuItem
                                            className='filter_itemuser'
                                            onClick={() =>
                                                setCurrentProductFilter(index)
                                            }
                                            value={index}
                                        >
                                            {filter?.type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='outlined'
                                className={`${classes.formControl1} req-dropdown`}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color: "#FFB600"}}>
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
                                            className='filter_itemuser'
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
                    <div className='tableuser'>
                        <StickyHeadTable setCurrentSection={setCurrentSection} tableSwitch={tableSwitch} newRequests={temp_filter_new_requests} pitchedRequests={temp_filter_pitched_requests} savedRequests={temp_filter_saved_requests} setSelectedTableItem={setSelectedTableItem} selectedTableItem={selectedTableItem}/>
                    </div>
                </div>
    )
}

export default TableSection
