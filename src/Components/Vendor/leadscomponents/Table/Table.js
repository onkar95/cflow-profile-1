import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import Details from "../User/Requests/Details"
import Status from "../../../Table/Status/Status"
import "./Tables.css"


function createData(Product, Quantity, DeliveryAddress, DeliveryDate , Amount , Status,Action) {
  DeliveryAddress = JSON?.parse(DeliveryAddress)
  DeliveryAddress = DeliveryAddress ?   DeliveryAddress?.city + "," + DeliveryAddress?.state : "Not Available"
  DeliveryDate = DeliveryDate.toString().substring(0,10);
  return { Product, Quantity, DeliveryAddress, DeliveryDate, Status, Amount,Action};
}
function createData1(Product, Quantity, DeliveryAddress, DeliveryDate , Amount , Status,Action) {
  DeliveryAddress = JSON?.parse(DeliveryAddress)
  DeliveryAddress = DeliveryAddress ?  DeliveryAddress?.city + "," + DeliveryAddress?.state : "Not Available"
  DeliveryDate = DeliveryDate.toString().substring(0,10);
  return { Product, Quantity, DeliveryAddress, DeliveryDate, Status , Amount,Action};
}
function createData2(Product, Quantity, DeliveryAddress, DeliveryDate , Amount , Status,Action) {
  DeliveryAddress = JSON?.parse(DeliveryAddress)
  DeliveryAddress = DeliveryAddress ?  DeliveryAddress?.state : "Not Available"
  DeliveryDate = DeliveryDate.toString().substring(0,10);
  return { Product, Quantity, DeliveryAddress, DeliveryDate, Status , Amount,Action};
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    // overflowX:'hidden'
  },
});

export default function StickyHeadTable({setSelectedRequest,setCurrentSection,tableSwitch , vendorproducts , newLeads , pendingLeads , savedLeads}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  

  const columns = 
              tableSwitch === 0 ?  
                    [
                    { id: 'Product', label: 'Product', minWidth: 100 ,align: 'center',fontSize:16,fontWeight:'600'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 50 ,align: 'center'},
                    { id: 'DeliveryAddress',label: 'Delivery\u00a0Address', minWidth: 170, maxWidth: 170,align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 150, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Amount',label: 'Amount', minWidth: 170, align: 'center'},
                    { id: 'Action',label: 'Invoice', minWidth: 170, align: 'center'},
                    ] :
              tableSwitch === 1 ?
                    [
                    { id: 'Product', label: 'Product', minWidth: 100 ,align: 'center'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 50 ,align: 'center'},
                    { id: 'DeliveryAddress',label: 'Delivery\u00a0Address', minWidth: 170, maxWidth: 230, align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 150, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Amount',label: 'Amount', minWidth: 170, align: 'center'},
                    { id: 'Action',label: 'Invoice', minWidth: 170, align: 'center'},
                    ]
                    :
                    [
                    { id: 'Product', label: 'Product', minWidth: 100 ,align: 'center'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 50 ,align: 'center'},
                    { id: 'DeliveryAddress',label: 'Delivery\u00a0Address', minWidth: 200, maxWidth: 230, align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 130, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Amount',label: 'Amount', minWidth: 170, align: 'center'},
                    { id: 'Action',label: 'Invoice', minWidth: 150, align: 'center'},
                    ]



  const rows = 
              tableSwitch === 0 ?  
                                newLeads?.map((item,index) => createData(item?.type, item?.quantity, item?.delivery_address, item?.deliver_by,"___" , item?.status,item))                                   
                                :
              tableSwitch === 1 ?
                              pendingLeads?.map((item,index) => createData1(item?.type, item?.quantity, item?.delivery_address, item?.deliver_by, item?.pitch_value ,item?.product_status,item))                      
                              :
                              savedLeads?.map((item,index) => createData2(item?.type, item?.quantity, item?.delivery_address, item?.deliver_by, item?.pitch_value ,item?.product_status,item))
                        


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetail=(row)=>{
    setSelectedRequest(row?.Action)
    setCurrentSection(6)
    window.scrollTo(0,200)
    
  }
  const handleDetail1=(row)=>{
    setSelectedRequest(row?.Action)
    setCurrentSection(5)
    window.scrollTo(0,200)
  }
  const handleHistory=(row)=>{
    // take props and send either to DetailHistoryAccepted or DetailHistoryDeclined
    // setCurrentSection(9)
    setSelectedRequest(row?.Action)
    
    setCurrentSection(7)
    window.scrollTo(0,200)
  }

   

  return (
    <Paper className="table-root">
      <TableContainer className={classes.container} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead  >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#08090C" ,color:"#fff",border:"1px solid grey",fontSize:14,fontWeight:'600',padding:15}}
                >
                  {column.label}
                </TableCell>
              ))}
             
            </TableRow>
          </TableHead>
          <TableBody >
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{background:"#121417",color:"#fff",border:"1px solid grey",fontSize:14,fontWeight:'400',padding:0}}>
                        {column.label === "Status" && <center><Status type={value}/></center>}
                        {(column.label!=='Status' && column.id!=='Action') && (column.format && typeof value === 'number' ? column.format(value) : value)}
                        {column.id==='Action'&& <h3 style={{fontWeight:"200",cursor:"pointer",fontSize:"1rem"}} onClick={()=>row['Status'] === 'pending' ? handleDetail1(row) : row['Status'] === 'pitched' ? handleDetail(row) : handleHistory(row)}>View Details</h3>}
                      </TableCell>
                    );
                  })}
   
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length > 0 ? rows?.length : 0}
        rowsPerPage={rowsPerPage}
        style={{background:"#121417",color:"#fff",border:"1px solid grey"}}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
