import React from "react";
import ReactDOM from "react-dom";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, 
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function LoginModal(props) {

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="login modal"
      aria-describedby="A form to login into Giftbasket with an existing account"
      className={classes.modal}
      open={props.open}
      onClose={() => props.handleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}>
      <Fade in={props.open}>
        <div className={classes.paper}>
          <h4>Modal!</h4>
        </div>
      </Fade>
    </Modal>
  );
}

export default LoginModal;
