import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import React, { useState } from 'react';
import "./Table.css";

const columns = [
  { id: 'service', label: 'Service', align: 'center', minWidth: 60 },
  { id: 'brand', label: 'Brand', align: 'center', minWidth: 60 },
  { id: 'type', label: 'Grade/Type', align: 'center', minWidth: 120 },
  { id: 'size', label: 'Size', minWidth: 120, align: 'center' },
  { id: 'added', label: 'Added on', minWidth: 120, align: 'center' },
  { id: 'pending', label: 'Pending requests', minWidth: 120, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 120, align: 'center' },
];




function createData(service, brand, type, size, added, pending, action) {
  added = added.slice(0, 10)
  return { service, brand, type, size, added, pending, action };
}




const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiIconButton-root": {
      color: "white",
    },
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ map_of_, getAll, servicesInfo, setCurrentSectionRequest, currentProductFilter }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deldata, setDelData] = useState(null);
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)

  const handleDelete = async (index) => {
    console.log(deldata, "data to delete")
    const temp = { type: servicesInfo[0]?.type, info: index }
    await axios.post(`${process.env.REACT_APP_URL}/user/delete_service/${userId}`, temp)
      .then((res) => console.log(res))
    getAll();

  }


  const rows = []

  // useEffect(() => {

  // },[currentProductFilter])
  for (var i = 0; i < servicesInfo?.length; i++) {
    const datapoint = servicesInfo[i]
    var temp = datapoint?.info

    for (var j = 0; j < temp?.length; j++) {
      rows.push(createData(datapoint?.type, temp[j]?.brand ? temp[j]?.brand : "__", temp[j]?.type ? temp[j]?.type : temp[j]?.grade ? temp[j]?.grade : "__", temp[j]?.size ? temp[j]?.size : "__", datapoint.created_at, map_of_[datapoint?.type] ? map_of_[datapoint?.type] + " Pending" : "0 Pending", "action"))
    }

    // if(datapoint?.info?.brand?.length>0 && datapoint?.info.type?.length>0 && datapoint?.info?.size?.length>0){
    //   const brands=datapoint?.info?.brand
    //   const types=datapoint?.info?.type
    //   const sizes=datapoint?.info?.size

    //   for(var j=0;j<brands?.length;j++){
    //     for(var k=0;k<types?.length;k++){
    //       for(var l=0;l<sizes.length;l++){

    //         rows.push(createData(datapoint?.type ,brands[j],types[k] , sizes[l], datapoint.created_at,"pending","action"))
    //       }
    //     }

    //   }
    // }
    // else if(datapoint?.info?.brand?.length>0 && datapoint?.info.type?.length>0 && !(datapoint?.info?.size?.length>0)){
    //   const brands=datapoint?.info?.brand
    //   const types=datapoint?.info?.type


    //   for(var j=0;j<brands?.length;j++){
    //     for(var k=0;k<types?.length;k++){

    //         rows.push(createData(datapoint?.type ,brands[j],types[k] , "___", datapoint.created_at,"pending","action"))

    //       }


    //   }
    // }
    // else if(datapoint?.info?.brand?.length>0 && !(datapoint?.info.type?.length>0) && datapoint?.info?.size?.length>0){
    //   const brands=datapoint?.info?.brand

    //   const sizes=datapoint?.info?.size

    //   for(var j=0;j<brands?.length;j++){

    //       for(var l=0;l<sizes.length;l++){

    //         rows.push(createData(datapoint?.type ,brands[j],"___" , sizes[l], datapoint.created_at,"pending","action"))

    //       }


    //   }
    // }
    // else if(!datapoint?.info?.brand?.length>0 &&datapoint?.info?.type?.length>0 && datapoint?.info?.size?.length>0){

    //   const types=datapoint?.info?.type
    //   const sizes=datapoint?.info?.size
    //     for(var k=0;k<types?.length;k++){
    //       for(var l=0;l<sizes?.length;l++){

    //         rows.push(createData(datapoint?.type ,"___",types[k] , sizes[l], datapoint?.created_at,"pending","action"))

    //       }
    //   }
    // }
    // else if(datapoint?.info?.brand?.length>0  && !datapoint?.info?.type?.length>0 && !datapoint?.info?.size?.length>0 ){
    //   const brands=datapoint?.info?.brand

    //   for(var j=0;j<brands?.length;j++){

    //         rows.push(createData(datapoint?.type ,brands[j],"___" , "___", datapoint?.created_at,"pending","action"))

    //   }
    // }
    // else if(!datapoint?.info?.brand?.length>0  && datapoint?.info?.type?.length>0 && !datapoint?.info?.size?.length>0 ){
    //   const types=datapoint?.info?.type

    //   for(var j=0;j<types?.length;j++){

    //         rows.push(createData(datapoint?.type ,"___",types[j] , "___", datapoint?.created_at,"pending","action"))

    //   }
    // }
    // else if(!datapoint?.info?.brand?.length>0  && !datapoint?.info?.type?.length>0 && datapoint?.info?.size?.length>0 ){
    //   const sizes=datapoint?.info?.size

    //   for(var j=0;j<sizes?.length;j++){

    //         rows.push(createData(datapoint?.type ,"___","___" , sizes[j], datapoint.created_at,"pending","action"))

    //   }
    // }
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
                  style={{ minWidth: column.minWidth, color: "white", fontSize: "1rem", backgroundColor: "#141619", border: "1px solid #2d2d2d", borderBottom: "3px solid #2d2d2d" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ color: "white", backgroundColor: "transparent", border: "1px solid #2d2d2d" }}>
                        {(column.id !== "pending" && column.id !== "action") && (column.format && typeof value === 'number' ? column.format(value) : value)}
                        {column.id === "pending" && <h3 style={{ fontWeight: "200", cursor: "pointer", fontSize: "1rem", color: '#ffb600' }} onClick={() => { setCurrentSectionRequest(2); window.scrollTo(0, 500) }}>{value}</h3>}
                        {column.id == 'action' && <DeleteIcon style={{ color: 'red', cursor: "pointer" }} onClick={() => { setDelData(index); handleDelete(index); }} />}
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
        style={{ color: "white" }}
      />
    </Paper>
  );
}
