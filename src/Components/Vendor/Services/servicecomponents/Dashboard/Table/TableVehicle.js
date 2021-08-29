import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import "./Table.css"

const columns = [
  { id: 'service', label: 'Service',align: 'center', minWidth: 60 },
  { id: 'brand', label: 'Brand',align: 'center', minWidth: 60 },
  { id: 'availablity', label: 'Availability',align: 'center', minWidth: 60 },
  { id: 'model', label: 'Model', minWidth: 60,align: 'center' },
  { id: 'location', label: 'Location', minWidth: 60,align: 'center' },
  { id: 'details', label: 'Detail', minWidth: 60,align: 'center' },
  {  id: 'pending',label: 'Pending requests',minWidth: 60,align: 'center'},
  { id: 'action',label: 'Action',minWidth: 60,align: 'center'},
];

function createData(service ,brand, availablity,model,location,details,pending,action) {
  return { service ,brand, availablity,model,location,details,pending,action };
}




const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor:"transparent",
    border:"none",
    color:"white"
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableVehicle({setDisplayVehicle , setCurrentSectionMain,map_of_,getAll,servicesInfo,setCurrentSectionRequest,currentProductFilter}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  console.log(servicesInfo , 'Services')


  const rows = []
    const handleDelete = async(index) => {
    const temp = {type: servicesInfo[0]?.type , info:index}
    await axios.post(`${process.env.REACT_APP_URL}/user/delete_service/${userId}`,temp)
      .then((res) => console.log(res))
      getAll();
}
  // useEffect(() => {
    
  // },[currentProductFilter])
  for(var i=0; i<servicesInfo?.length; i++) 
  {
    const datapoint=servicesInfo[i]
    var temp = datapoint?.info    
    for(var j = 0 ; j < temp?.length ; j++)
    {      
      rows.push(createData(datapoint?.type , temp[j]?.basic_information?.brand_name , temp[j]?.renting_details?.start_date?.slice(0,10) + " to " + temp[j]?.renting_details?.end_date?.slice(0,10), temp[j]?.basic_information?.model_name , temp[j]?.basic_information?.current_location , datapoint ,map_of_[datapoint?.type] ? map_of_[datapoint?.type] + " Pending" : "0 Pending","action"))
    }

  }
  
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={`${classes.root} table-services-vendor`}>
      <TableContainer className={`${classes.container} table-container`} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,color:"white" ,fontSize:"1rem",backgroundColor:"#141619",border:"1px solid #2d2d2d",borderBottom:"3px solid #2d2d2d"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{color:"white" ,backgroundColor:"transparent",border:"1px solid #2d2d2d"}}>
                        {  (column.id!=="pending"&& column.id!=="action" && column.id !== 'details')  && (column.format &&typeof value === 'number' ? column.format(value) : value)}
                        {column.id==="pending" && <h3 style={{fontWeight:"200",cursor:"pointer",fontSize:"1rem" , color:'#ffb600'}} onClick={()=>{setCurrentSectionRequest(2);window.scrollTo(0,500)}}>{value}</h3>}
                        {column.id == 'action' && <DeleteIcon style={{color:'red' , cursor:"pointer"}} onClick={() => {handleDelete(index);}}/>}
                        {column.id == 'details' && <h3 style={{cursor:"pointer"}} onClick={() => {setDisplayVehicle(row.details); setCurrentSectionMain(8);}   }>View</h3>}
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
        count={rows.length}

        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        style={{color:"white"}}
      />
    </Paper>
  );
}
