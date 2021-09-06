import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import "./Dashboard.css"
import Table from "./Table/Table"
import TableAgent from "./Table/TableAgent"
import TablePaint from "./Table/TablePaint"
import TableVehicle from './Table/TableVehicle'
const Dashboard = ({ setDisplayVehicle, setCurrentSectionMain, map_of_, getAll, setCurrentSection, vendorproducts, servicesInfo, setCurrentSectionRequest }) => {

    const useStyles = makeStyles((theme) => ({
        formControl1: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: 150,
            minHeight: 40,
            padding: theme.spacing(-2),
            border: "3px solid #ffb600",
            // borderColor:"#ffb600",
            backgroundColor: "transparent",
            color: "#ffb600",
            borderRadius: theme.spacing(1),
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #484850",
                borderRadius: "5px 5px 0 0",
                color: "#ffb600"
            },
            "& .MuiFilledInput-underline:after ": {
                borderBottom: "0px",
            },
            "& .MuiInputLabel-filled.MuiInputLabel-shrink ": {
                transform: "translate(12px, 18px) scale(0.7)",
            },
        },
        icon: {
            fill: '#ffb600',
        },

    }));
    const classes = useStyles();

    const [tableSwitch, setTableSwitch] = useState(0);

    const filters = [
        "Commercial Vehicles",
        "Construction Machines",
        "Construction Chemicals",
        "Agents"
    ];
    const product_filters = vendorproducts;
    const [currentFilter, setCurrentFilter] = useState(0);
    const [currentProductFilter, setCurrentProductFilter] = useState(0);
    let filtered = servicesInfo
    // if(currentProductFilter!==0)
    // {
    // filtered=servicesInfo?.filter((service)=>service?.type===product_filters[currentProductFilter])
    filtered = product_filters && servicesInfo && servicesInfo?.filter((service) => service?.type === product_filters[currentProductFilter])
    // }
    return (
        <div className="Dashboard" >
            <div className='filteruser'>
                <div className="services-brands">
                    <FormControl
                        variant="filled"
                        className={`${classes.formControl1} req-dropdown`}
                        InputProps={{ disableOutline: true }}
                    >
                        <InputLabel id='demo-simple-select-label' style={{ color: "#ffb600" }}>
                            Service
                        </InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            inputProps={{
                                classes: {

                                    icon: classes.icon
                                },
                            }}
                            style={{ color: "#ffb600" }}

                        >
                            {/* <MenuItem
                                            className='filter_itemuser'
                                            // onClick={() =>
                                            //     // setCurrentProductFilter(index)
                                            // }
                                            value="Services"
                                        >
                                            Services
                                        </MenuItem> */}
                            {product_filters?.map((filter, index) => (
                                <MenuItem
                                    className='filter_itemuser'
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
                    {/* <FormControl
                                variant='outlined'
                                className={classes.formControl1}
                                InputProps={{ disableOutline: true}}
                            >
                                <InputLabel id='demo-simple-select-label' style={{color:"#ffb600"}}>
                                    Brands
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    inputProps={{
                                        classes: {
                                            
                                            icon: classes.icon
                                        },
                                    }}
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
                            </FormControl> */}
                </div>



                <Button className="add-product" onClick={() => setCurrentSection(0)}>Add Product  + </Button>
            </div>
            {/* <div className="table">
                {
                    product_filters[currentProductFilter] === "Agents" 
                    ? 
                   <TableAgent map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter}/> 
                    :
                    product_filters[currentProductFilter] === "Paint & Putty" 
                    ?
                    <TablePaint map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter}/> 
                    :
                    product_filters[currentProductFilter] === "Dumper" || product_filters[currentProductFilter] === "Transit Mixer" || product_filters[currentProductFilter] === "Crane" || product_filters[currentProductFilter] === "Crawler Crane" || product_filters[currentProductFilter] === "Mounted Crane" || product_filters[currentProductFilter] === "Tipper" || product_filters[currentProductFilter] === "Compactor" || product_filters[currentProductFilter] === "Excavator" || product_filters[currentProductFilter] === "Backhoe Loader" || product_filters[currentProductFilter] === "Roller" || product_filters[currentProductFilter] === "Tanker" || product_filters[currentProductFilter] === "Fork Lift" || product_filters[currentProductFilter] === "Motor Grader" || product_filters[currentProductFilter] === "Tractor" || product_filters[currentProductFilter] === "Truck"
                    ?
                    <TableVehicle setDisplayVehicle={setDisplayVehicle} setCurrentSectionMain={setCurrentSectionMain} map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter}/>
                    :
                    <Table map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter}/>
                }
                
            </div> */}
            <div className="table">
                {
                    product_filters
                        ?
                        product_filters[currentProductFilter] === "Agents"
                            ?
                            <TableAgent map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter} />
                            :
                            product_filters[currentProductFilter] === "Paint & Putty"
                                ?
                                <TablePaint map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter} />
                                :
                                product_filters[currentProductFilter] === "Dumper" || product_filters[currentProductFilter] === "Transit Mixer" || product_filters[currentProductFilter] === "Crane" || product_filters[currentProductFilter] === "Crawler Crane" || product_filters[currentProductFilter] === "Mounted Crane" || product_filters[currentProductFilter] === "Tipper" || product_filters[currentProductFilter] === "Compactor" || product_filters[currentProductFilter] === "Excavator" || product_filters[currentProductFilter] === "Backhoe Loader" || product_filters[currentProductFilter] === "Roller" || product_filters[currentProductFilter] === "Tanker" || product_filters[currentProductFilter] === "Fork Lift" || product_filters[currentProductFilter] === "Motor Grader" || product_filters[currentProductFilter] === "Tractor" || product_filters[currentProductFilter] === "Truck"
                                    ?
                                    <TableVehicle setDisplayVehicle={setDisplayVehicle} setCurrentSectionMain={setCurrentSectionMain} map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter} />
                                    :
                                    <Table map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter} />
                        :
                        <Table map_of_={map_of_} getAll={getAll} setCurrentSectionRequest={setCurrentSectionRequest} servicesInfo={filtered} currentProductFilter={currentProductFilter} />
                }

            </div>

        </div>
    )
}

export default Dashboard
