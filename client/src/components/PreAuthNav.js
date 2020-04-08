import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import useModal from "../hooks/useModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 2
  }
}));

function PreAuthNav() {
  
  const classes = useStyles();
  const {isShowing, toggleModal} = useModal();

  return(
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.title}>
          <Logo link="/" />
        </div>
        <Button onClick={() => toggleModal(true)}>Login</Button>
      </Toolbar>
      <LoginModal handleModal={toggleModal} open={isShowing} />
    </AppBar>
  );
}

export default PreAuthNav;
