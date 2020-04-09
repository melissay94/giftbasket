import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 2
  },
  button: {
    margin: theme.spacing(2)
  }
}));

function PostAuthNav() {

  const classes = useStyles();

  return(
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.title}>
          <Logo link="/home" />
        </div>
        <Button className={classes.button}>My Baskets</Button>
        <Button className={classes.button}>My Gifts</Button>
        <Button className={classes.button}>Discover</Button>
        <Button className={classes.button}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default PostAuthNav;
