import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Delete from "../../Images/delete.svg";
import Fb from "../../Images/Facebook.png";
import Insta from "../../Images/Instagram.png";
import Logo from "../../Images/logo.svg";
import Twitter from "../../Images/Twitter.png";
import "./DeletePopup.css";


// const styles = (theme) => ({
//   root: {
//     margin: 0,

//     padding: theme.spacing(2),
//     width: "600px",
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(-1),
//     top: theme.spacing(2),

//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle
//       disableTypography
//       className={`${classes.root} dialog-title`}
//       {...other}
//     >
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     width: "650px",
//     background: "#121417",
//     height: "430px",
//     overflow: "hidden",
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function CustomizedDialogs({ open, setOpen, getCart, id }) {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("profile"))?.data?.id
  );
  const handledelete = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_URL}/product/delete_cart_item/${userId}`,
        id
      )
      .then(function (response) {
        console.log(response);
      });
    getCart();
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [winsize, setwinsize] = useState(window.screen.width);
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setwinsize(window.innerWidth);
    } else {
      setwinsize(window.innerWidth);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.screen.width]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const useStyles = makeStyles({
    dialogPaper: {
      minHeight: "fit-content",
      maxHeight: "fit-content",

      maxWidth: winsize > 850 ? "30%" : "80%",
      backgroundColor: "#121417",
      padding: winsize > 1000 ? "1rem 0rem" : "1rem -1rem",
    },
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    input: {
      color: "white",
    },
    overflow: "hidden",
  });
  const classes = useStyles();

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Error PopUp
      </Button> */}
      <Dialog
        open={open}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="customized-dialog-title"
      >
        <div className="main-del">
          <DialogTitle onClose={handleClose}>
            <img src={Logo} alt="logo" className="delete-dialog-img" />
            <CloseIcon
              onClick={handleClose}
              style={{
                marginTop: winsize > 1000 && "1%",
                cursor: "pointer",
                color: "white",
                marginLeft: "290px",
              }}
            />
          </DialogTitle>
          <DialogContent
            style={{ textAlign: "center" }}
            className="dialog-content"
          >
            <img
              className="dialog-img1"
              src={Delete}
              style={{
                objectFit: "contain",
                height: winsize > 1000 ? 110 : 80,
                width: "80px",
              }}
            />
            <p
              style={{
                color: "#FFB600",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "-10px",
              }}
            >
              Sure, you want to Delete?
            </p>
            <p
              style={{
                color: "#FFB600",
                marginTop: "-10px",
                fontSize: "15px",
                fontFamily: "Montserrat",
                padding: "2px",
              }}
            >
              You will not be able to recover them
            </p>

            <div className="delete-dialog-buttons">
              <button className="ButtonLogout" onClick={handledelete}>
                Delete
              </button>
              <br />
              <button className="ButtonCancel" onClick={handleClose}>
                Cancel
              </button>
            </div>
            <div className="SocialLogo">
              <a href="#">
                <img src={Fb} />
              </a>
              <a href="#">
                <img src={Insta} />
              </a>
              <a href="#">
                <img src={Twitter} />
              </a>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}