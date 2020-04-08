import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function PreAuthNav() {
  
  const classes = useStyles();

  return(
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Logo link="/" />
        <h1 className={`app_name ${classes.title}`}>GiftBasket</h1>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default PreAuthNav;
