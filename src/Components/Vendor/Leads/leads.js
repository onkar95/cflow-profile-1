import React from 'react'
import "./Leads.css";
import {Grid, Typography,Link, Box,Breadcrumbs } from "@material-ui/core"
import LeadStat1 from "../leadscomponents/leadStat1/leadStat1";
import LeadStat2 from "../leadscomponents/leadStat2/leadStat2";
import TableSection from "../leadscomponents/TableSection/TableSection";
import Stats from "../homecomponents/Stats/Stats"
import PopupSaved from "../../Popup/popupsaved/PopupSaved";


const Leads = ({formData,tableSwitch, setTableSwitch,currentType,setCurrentType,open,setOpen,getAll,temp_filter_saved_leads,temp_filter_pending_leads,temp_filter_new_leads,setTemp_filter_saved_leads,setTemp_filter_new_leads,setTemp_filter_pending_leads,getSavedLeads,getPendingLeads,getNewLeads,setSelectedRequest,setCurrentSection,countMatters,monthSale , contri , vendorproducts , newLeads  ,pendingLeads , savedLeads,increasedSales,bestProduct}) => {
    

    
    return (
        <>
            <div >
                <div>
                    <div className='breadcrumbsuser'>
                        <h3>
                            Home / {" "}
                            <span style={{ color: "#FFB600" }}>Leads</span>
                        </h3>
                    </div>
                    <br></br>
                        <div className="container2">
                            <LeadStat1 currentType={currentType} setCurrentType={setCurrentType} increasedSales={increasedSales} monthSale={monthSale} bestProduct={bestProduct} vendorproducts={vendorproducts}/>
                            <LeadStat2 contri={contri}/>
                        </div>
                                
                </div>
                <div >
                                <TableSection formData={formData} tableSwitch={tableSwitch} setTableSwitch={setTableSwitch} getAll={getAll} temp_filter_saved_leads={temp_filter_saved_leads} temp_filter_pending_leads={temp_filter_pending_leads} temp_filter_new_leads={temp_filter_new_leads} setTemp_filter_new_leads={setTemp_filter_new_leads} setTemp_filter_saved_leads={setTemp_filter_saved_leads}setTemp_filter_pending_leads={setTemp_filter_pending_leads} getPendingLeads={getPendingLeads} getNewLeads={getNewLeads} getSavedLeads={getSavedLeads} setSelectedRequest={setSelectedRequest} setCurrentSection={setCurrentSection} vendorproducts={vendorproducts} newLeads={newLeads} pendingLeads={pendingLeads} savedLeads={savedLeads}/>
                                <Stats c='black' margin={true} countMatters={countMatters}/>
                </div>
            </div>
            <PopupSaved title="Your Pitch Has Been sent"  open={open} setOpen={setOpen}/>
        </>
    )
}

export default Leads;
