import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Details from "../User/Requests/Details"
import Status from "./Status/Status"
import "./Table.css"

function createData(Product, Quantity, CompanyName, DeliveryDate, Status , Invoice) {


  return { Product, Quantity, CompanyName, DeliveryDate, Status , Invoice};
}
function createData1(Product, Quantity, CompanyName, DeliveryDate ,Status, Amount , Invoice) {  
  
  return { Product, Quantity, CompanyName, DeliveryDate, Status , Amount , Invoice};
}
function createData2(Product, Quantity, CompanyName, DeliveryDate , Status,Amount,Invoice) {  

  return { Product, Quantity, CompanyName, DeliveryDate, Status , Amount,Invoice};
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

export default function StickyHeadTable({setCurrentSection,tableSwitch,newRequests,savedRequests,pitchedRequests,setSelectedTableItem,selectedTableItem}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = 
              tableSwitch === 0 ?  
                    [
                    { id: 'Product', label: 'Product', minWidth: 170 ,align: 'center'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 100 ,align: 'center'},
                    { id: 'CompanyName',label: 'Company\u00a0Name', minWidth: 170, align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 170, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Invoice', label: 'Invoice',minWidth: 170,align: 'center'},
                    ] :
              tableSwitch === 1 ?
                    [
                    { id: 'Product', label: 'Product', minWidth: 170 ,align: 'center'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 100 ,align: 'center'},
                    { id: 'CompanyName',label: 'Company\u00a0Name', minWidth: 170, align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 170, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Amount',label: 'Amount', minWidth: 170, align: 'center'},
                    { id: 'Invoice', label: 'Invoice',minWidth: 170,align: 'center'},
                    ]
                    :
                    [
                    { id: 'Product', label: 'Product', minWidth: 170 ,align: 'center'},
                    { id: 'Quantity', label: 'Quantity', minWidth: 100 ,align: 'center'},
                    { id: 'CompanyName',label: 'Company\u00a0Name', minWidth: 170, align: 'center' },
                    { id: 'DeliveryDate',label: 'Delivery\u00a0Date', minWidth: 170, align: 'center'},
                    { id: 'Status', label: 'Status',minWidth: 170,align: 'center'},
                    { id: 'Amount',label: 'Amount', minWidth: 170, align: 'center'},
                    { id: 'Invoice', label: 'Invoice',minWidth: 170,align: 'center'},
                    ]



  const rows = 
              tableSwitch === 0 ?  
                       
                        newRequests?.map((item,index)=> createData(item?.type, item?.quantity, item?.vendor_name ? item?.vendor_name : "___" ,item?.deliver_by!=="0000-00-00 00:00:00"? item?.deliver_by?.slice(0,10): JSON.parse(item?.data)?.startDate?.slice(0,10) + " to " +JSON.parse(item?.data)?.endDate?.slice(0,10),item?.status,item))                      
                        
                      
                      :
                        tableSwitch === 1 ?
                        pitchedRequests?.map((item,index)=> createData1(item?.type, item?.quantity, item?.vendor_name ? item?.vendor_name : "___",item?.deliver_by!=="0000-00-00 00:00:00"? item?.deliver_by?.slice(0,10): JSON.parse(item?.data)?.startDate?.slice(0,10) + "to" + JSON.parse(item?.data)?.endDate?.slice(0,10),item?.product_status,item?.pitch_value,item))
                        :
                        savedRequests?.map((item,index)=> createData2(item?.type, item?.quantity, item?.vendor_name ? item?.vendor_name : "___",item?.deliver_by!=="0000-00-00 00:00:00"? item?.deliver_by?.slice(0,10): JSON.parse(item?.data)?.startDate?.slice(0,10) + "to" + JSON.parse(item?.data)?.endDate?.slice(0,10),item?.product_status,item?.pitch_value,item))
                       
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDetail=(row)=>{
    setSelectedTableItem(row?.Invoice)
    setCurrentSection(6)
    window.scrollTo(0,200)
    
  }
  const handleDetail1=(row)=>{
    setSelectedTableItem(row?.Invoice)
    setCurrentSection(5)
    window.scrollTo(0,200)
  }
  const handleHistory=(row)=>{

    // take props and send either to DetailHistoryAccepted or DetailHistoryDeclined
    // setCurrentSection(9)
    setSelectedTableItem(row?.Invoice)
    if(row?.Invoice?.product_status === "acceptedPitch")
    {
       setCurrentSection(7)
    }
    else
    {
       setCurrentSection(8)
    }
    
   
    window.scrollTo(0,200)
  }




// useEffect(() => {
// },[selectedTableItem])
  
  return (
    <Paper className="table-root">
      <TableContainer className={classes.container} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                
                  key={column?.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#08090C" ,color:"#fff",border:"1px solid grey",fontSize:14,fontWeight:'600',padding:15}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{background:"#121417",color:"#fff",border:"1px solid grey",fontSize:14,fontWeight:'400',padding:0}}>
                        {column.label === "Status" && <center><Status type={value} /></center>}
                        {column.label!=='Status'&& column.label!=='Invoice' && (column.format && typeof value === 'number' ? column.format(value) : value)}
                        {column.label === "Invoice" && <h3 style={{fontWeight:"200",cursor:"pointer",fontSize:"1rem"}} onClick={()=>row['Status'] === 'pending' ? handleDetail(row) : row['Status'] === 'pitched' ? handleDetail1(row) : handleHistory(row)}>View Details</h3>}
                        
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
