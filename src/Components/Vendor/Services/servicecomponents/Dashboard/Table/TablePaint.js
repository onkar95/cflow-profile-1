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
import "./Table.css"
import axios from 'axios';

const columns = [
  { id: 'service', label: 'Service',align: 'center', minWidth: 60 },
  { id: 'brand', label: 'Brand',align: 'center', minWidth: 100 },
  { id: 'type', label: 'Type',align: 'center', minWidth: 100 },
  { id: 'surface', label: 'surface', minWidth: 100,align: 'center' },
  { id: 'added', label: 'Added on', minWidth: 100,align: 'center' },
  
  {  id: 'pending',label: 'Pending requests',minWidth: 120,align: 'center'},
  { id: 'action',label: 'Action',minWidth: 120,align: 'center'},
];

function createData(service ,brand, type,surface,added,pending,action) {
  added=added.slice(0,10)
  return { service ,brand, type,surface,added,pending,action};
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

export default function TableAgent({map_of_,getAll,servicesInfo,setCurrentSectionRequest,currentProductFilter}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
//   console.log(servicesInfo , 'Services')


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
    if(datapoint?.type === "Paint & Putty")
    {
    var temp = datapoint?.info

    for(var j = 0 ; j < temp?.length ; j++)
    {      
      rows.push(createData(datapoint?.type ,temp[j]?.brand ? temp[j]?.brand : "___" ,temp[j]?.type ? temp[j]?.type : "__" ,temp[j]?.surface ? temp[j]?.surface : "__" , datapoint.created_at,map_of_["Paint & Putty"] ? map_of_["Paint & Putty"] + " Pending" : "0 Pending","action"))
    }
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
                        { (column.id!=="pending"&& column.id!=="action") && (column.format &&typeof value === 'number' ? column.format(value) : value)}
                        {column.id==="pending" && <h3 style={{fontWeight:"200",cursor:"pointer",fontSize:"1rem", color:'#ffb600'}} onClick={()=>{setCurrentSectionRequest(2);window.scrollTo(0,500)}}>{value}</h3>}
                        {column.id == 'action' && <DeleteIcon style={{color:'red' , cursor:"pointer"}} onClick={() => {handleDelete(index);}}/>}
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
