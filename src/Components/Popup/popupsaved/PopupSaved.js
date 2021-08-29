// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import Logo from "../../../Images/PopImages/cf logo-01.png"
// import SavedIcon from '../../../Images/PopImages/Saved icon.png'
// import { fontWeight, width } from '@material-ui/system';
// import "./popupsaved.css"

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//     // width:"560px",
//     overflow:"visible",
//     background:"#121417",
//     // height:"200px"
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),


//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={`${classes.root} dialog-title`} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={`${classes.closeButton} dialog-close` } onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//     width:'560px',
//     background:"#121417",
//     overflow:"hidden",
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// export default function CustomizedDialogs(props) {
//   // const [open, setOpen] = React.useState(false);


//   const handleClose = () => {
//     props.setOpen(false);
//   };

//   return (

//     <div >
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open} >
//        <DialogTitle onClose={handleClose} className="dialog-title">
//         <img src={Logo} alt="logo" className="dialog-img"  />
//         </DialogTitle>
//         <DialogContent style={{margin:"auto",paddingBottom:"10px"}} className="dialog-content">
//             <img src={SavedIcon} className="dialog-img2"  style={{display:"block",margin:"auto"}}/>
//             <p className="dialog-text" style={{color:"#FFB600",fontFamily:"Montserrat" ,fontSize:"20px",fontWeight:"bold", textAlign:"center",paddingTop:"10px",marginBottom:'10px'}}>{props.title}</p>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


//       {/* <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
//         Open dialog
//       </Button> */}
//       {/* <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open} >
//        <DialogTitle onClose={handleClose}>
//         <img src={Logo} alt="logo" height="120px" width="400px" />
//         </DialogTitle>
//         <DialogContent style={{margin:"auto",display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , padding:"10% 1rem"}}>
//             <img src={SavedIcon} width="150px" style={{display:"block",margin:"auto"}}/>
//             <p style={{color:"#FFB600",fontFamily:"Montserrat" ,fontSize:"54px",fontWeight:"bold", textAlign:"center"}}>{props.title}</p>
//         </DialogContent>
//       </Dialog>
//     </div> */}


import React,{useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Logo from "../../../Images/PopImages/cf logo-01.png"
import SavedIcon from '../../../Images/PopImages/Saved icon.png'
import { fontWeight, width } from '@material-ui/system';
import "./popupsaved.css"

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//     // width:"560px",
//     overflow:"visible",
//     background:"#121417",
//     // height:"200px"
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),


//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={`${classes.root} dialog-title`} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={`${classes.closeButton} dialog-close` } onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//     width:'560px',
//     background:"#121417",
//     overflow:"hidden",
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function CustomizedDialogs({open,setOpen,title}) {
  // const [open, setOpen] = React.useState(false);

  const [winsize,setwinsize]=useState(window.screen.width);
    const handleResize=()=>{
        if (window.innerWidth <1000) {
            setwinsize(window.innerWidth)
        }
        else{
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
  
    }, [window.screen.width])
    useEffect(() => {
      window.addEventListener("resize", handleResize)

  }, [])
  const useStyles = makeStyles({
    dialogPaper: {
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    
    maxWidth:winsize>850?"30%":"80%",
    backgroundColor: "#121417",
    padding:winsize>1000?"1rem 0rem":"1rem -1rem"
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
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <Dialog open={open} classes={{ paper: classes.dialogPaper }}>
          <DialogTitle>
              <div  style={{display: 'flex',color: 'white',justifyContent:'space-between',marginTop:winsize>1000 &&'-5%'}}>
              <img src={Logo} style={{fontSize:"50",height:winsize<1000 ?56:86,width:250}}/>
                <CloseIcon  onClick={handleClose}style={{marginTop:winsize>1000 &&'6%',cursor:"pointer"}}/>
              </div>
              
          </DialogTitle>
          <DialogContent >              
              <div  style={{display:"flex",justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
              <img src={SavedIcon} style={{objectFit:'contain',height:winsize>1000 ?110:80,width:250}}/>    
              <h3 style={{color:"#ffb600",fontWeight:"700",fontSize:winsize<1000 ?16:22,textAlign:"center"}}>{title}</h3>   
              </div>
            </DialogContent>
        </Dialog>

    </>
  );
}


      {/* <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
        Open dialog
      </Button> */}
      {/* <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open} >
       <DialogTitle onClose={handleClose}>
        <img src={Logo} alt="logo" height="120px" width="400px" />
        </DialogTitle>
        <DialogContent style={{margin:"auto",display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , padding:"10% 1rem"}}>
            <img src={SavedIcon} width="150px" style={{display:"block",margin:"auto"}}/>
            <p style={{color:"#FFB600",fontFamily:"Montserrat" ,fontSize:"54px",fontWeight:"bold", textAlign:"center"}}>{props.title}</p>
        </DialogContent>
      </Dialog>
    </div> */}