import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox, Dialog, DialogTitle, FormControlLabel, Popover } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Button , DialogContent , TextField} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'axios'
import React,{ useState} from 'react'

const SubmitModal = ({modalopen,setModalOpen,setOpenSaved,site,products,getAllVendor,getCart}) => {

    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [check,setCheck]=useState(0)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    const [urgent,setUrgent]=useState(true)
    const [flexible,setFlexible]=useState(true)
    const onClickUrgent=()=>{
        setFlexible(false)
    }
    const onClickFlexible=()=>{
        setUrgent(false)
    }
    const handleCloseIcon=()=>{
        setModalOpen(false)
        setUrgent(true)
        setFlexible(true)
    }
    const [startDate, setStartDate] = useState(new Date());

    const useStyles = makeStyles({
        dialogPaper: {
        minHeight: '60vh',
        maxHeight: '60vh',
        minWidth:"25%",
        maxWidth:"50%",
        backgroundColor: "#121417",
        padding:"1rem 1.25rem"
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        
        }},
        input:{
            color:"white",
            
        },
        overflow:"hidden"
})
    const classes = useStyles()

    // let initialarr={service_type:"",type:"",quantity:"",data:null,urgent:false,delivery_address:"",deliver_by:new Date()}
    // req.body.id,req.body.service_type,req.body.type, req.body.quantity, JSON.stringify(req.body.data),"pending",req.body.urgent,req.body.delivery_address,req.body.deliver_by
    
   
    // const [newRequest,setNewRequest]=useState(initialarr)

    const handleRequest=async(e)=>{
        e.preventDefault()
        
        for(var i=0;i<products?.length;i++){
            console.log('handle req')
            let temp={service_type:products[i]?.service_type,type:products[i]?.type,quantity:products[i]?.quantity,data:JSON.parse(products[i]?.data),urgent:urgent,delivery_address:site ? site[check] : null,deliver_by:startDate}
            await axios.post(`${process.env.REACT_APP_URL}/product/request_service/${userId}`,temp)
                .then(function (response) {  
                    console.log(response,i)          
                    setUrgent(true)
                    setFlexible(true)
                    setStartDate( new Date())
                    setCheck(0)
                    console.log('handle req11')
                
                    getAllVendor()
                    // setCurrentSectionRequest(2)
                    
                })
        }
        await axios.get(`${process.env.REACT_APP_URL}/product/delete_cart/${userId}`)
                .then(function (response) {  
                    console.log(response,"deleted")
                })
        getCart()
        setOpenSaved(true)
        setModalOpen(false)
    }

    return (
        <Dialog open={modalopen} classes={{ paper: classes.dialogPaper }}>
          <DialogTitle>
              <div className="ModalHeader">
                
                <CloseIcon className="CloseButton" onClick={handleCloseIcon}style={{marginBottom:"1rem"}}/>
              </div>
              
          </DialogTitle>
          <DialogContent className="DialogClass">              
              <div className="ModalContainer">
                    
                    
                    <div className="ModalApplicationHeader">
                    <Button aria-describedby={id} variant="contained" style={{backgroundColor:"#08090C",width:"95%",height:"80%",marginBottom: "1rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"2px"}} onClick={handleClick}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Select Delivery Address</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                    </Button>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="materials-form-date"/>
                    {/* <p style={{color:"white",textTransform:"capitalize",fontSize:"0.8rem",marginLeft:"2px",marginBottom:"2%",marginTop:"1%"}}>Quantity</p> */}
                    {/* <TextField id="outlined-basic" placeholder="Enter a value" value={quantity} onChange={(e) => setQuantity(e.target.value)} variant="outlined"  className={classes.root} style={{backgroundColor:"#08090C",width:"95%",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px" }} InputProps={ {  className: classes.input }} /> */}
                    <p style={{color:"white",textTransform:"capitalize",fontSize:"1rem",marginLeft:"2px",marginTop:"2%"}}>Order Type</p>
                    <div style={{width: "100%",height: "70%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",marginBottom:"2%"}}>
                {urgent && <Button variant="contained" style={{height:"80%",marginTop:"2%",marginRight:"10%",backgroundColor: "#ED4F4F",borderRadius:"20px"}} onClick={onClickUrgent}>
                    
                    urgent
                </Button>}
                {flexible && <Button variant="contained" style={{height:"80%",marginTop:"2%",backgroundColor: "#3CC13B",borderRadius:"20px"}} onClick={onClickFlexible}>
                    
                   Flexible
                </Button>}
                </div>

                <div style={{width: "100%",height: "100%",display:"flex",alignItems: "center",justifyContent: "center"}}>
                <Button variant="contained" style={{height:"70%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleRequest}>
                    Request
                </Button>
                </div>
                    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{display:"flex",flexDirection:"column",fontSize:"1rem",backgroundColor:"08090C"}}>
          
              {
                  (site?.length >0) ? site?.map((brand,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            
                                            checked={check===index? true:false}
                                            onChange={(e) => setCheck(index)}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={`site ${index +1}`}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
                  :<h3 style={{backgroundColor:"#08090C",color:"white",width:"20rem",padding:"0% 10%",fontSize:"1rem",height:"3rem",margin:0}}>Add site in profile section</h3>
              }
          </div>
        
      </Popover>

                    </div>
                    
              </div>
            </DialogContent>
        </Dialog>
    )
}

export default SubmitModal
