import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Logo from '../../Images/Logo.png';
import Delete from '../../Images/dustbin.png';
import { fontWeight, width } from '@material-ui/system';
import Insta from '../../Images/Instagram.png';
import Twitter from '../../Images/Twitter.png';
import Fb from '../../Images/Facebook.png';

import './DeletePopup.css';
import axios from 'axios';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width:"556px",
    overflow:"visible",
    background:"#121417",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),


    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={`${classes.root} dialog-title`} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    width:"540px",
    background:"#121417",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    
  },
}))(MuiDialogActions);



export default function CustomizedDialogs({open,setOpen,getCart,id}) {
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const handledelete = async()=>{
    
        await axios.post(`${process.env.REACT_APP_URL}/product/delete_cart_item/${userId}`,id)
        .then(function (response) {            
            console.log(response)
          
           
          })
          getCart()
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Error PopUp
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  >
       <DialogTitle onClose={handleClose}>
        <img src={Logo} alt="logo" className="delete-dialog-img" />
        </DialogTitle>
        <DialogContent style={{textAlign:'center'}} className="dialog-content">
            <img src={Delete} width="60px" />
            <p style={{color:"#FFB600",fontFamily:"Montserrat" ,fontSize:"15px",fontWeight:"bold"}}>Sure, you want to Delete?</p>
            <p style={{color:"#FFB600",fontSize:'15px'}}>You will not be able to recover them</p>
        
        <div className="delete-dialog-buttons">
          <button className="ButtonLogout" onClick={handledelete}>
            Delete      
         </button>
          <br/>
         <button className="ButtonCancel" onClick={handleClose}>
            Cancel
         </button>
        </div>
        <div className="SocialLogo">
          <a href="#" ><img src={Fb} /></a>
          <a href="#"><img src={Insta} /></a>
          <a href="#"><img src={Twitter} /></a>
        </div>
        </DialogContent>
      </Dialog>
   </div>
  );
}