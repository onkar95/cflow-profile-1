import React from "react";
import "./Requests.css";



import BreadCrumb from "./BreadCrumb"
import InDemandServices from"./InDemandServices"
import RoundedHexagon from "../../Utils/RoundedHexagon";
import Acheive from "./Acheive";
import TableSection from './TableSection'


const Request = ({recent_products,getAllVendor,setCurrentSection,maximum_sales,pendingRequests,acceptedRequests,rejectedRequests,newRequests,savedRequests,pitchedRequests,setSelectedTableItem,selectedTableItem,temp_filter_new_requests,setTemp_filter_new_requests,temp_filter_pitched_requests,setTemp_filter_pitched_requests,temp_filter_saved_requests,setTemp_filter_saved_requests,temp_filter,tableSwitch,setTableSwitch}) => {
    let req_list
    if(maximum_sales?.length>6){
        req_list = maximum_sales?.slice(0,6)
    }
    else req_list = maximum_sales

    return (
        <div className='requestuser'>
            <BreadCrumb/>
            <div className='request_containeruser'>
                <InDemandServices recent_products={recent_products} setCurrentSection={setCurrentSection} setSelectedTableItem={setSelectedTableItem}/>
                <TableSection getAllVendor={getAllVendor} setCurrentSection={setCurrentSection} newRequests={newRequests} savedRequests={savedRequests} pitchedRequests={pitchedRequests} setSelectedTableItem={setSelectedTableItem} selectedTableItem={selectedTableItem} temp_filter_new_requests={temp_filter_new_requests} setTemp_filter_new_requests={setTemp_filter_new_requests} temp_filter_pitched_requests={temp_filter_pitched_requests} setTemp_filter_pitched_requests={setTemp_filter_pitched_requests} temp_filter_saved_requests={temp_filter_saved_requests} setTemp_filter_saved_requests={setTemp_filter_saved_requests} temp_filter={temp_filter} tableSwitch={tableSwitch} setTableSwitch={setTableSwitch} />

                
                <Acheive pendingRequests={pendingRequests} acceptedRequests ={acceptedRequests} rejectedRequests={rejectedRequests}/>             
            </div>

        </div>
    );
};

export default Request;
