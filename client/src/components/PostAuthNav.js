import React from "react";
import { Redirect } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useApolloClient } from "@apollo/react-hooks";
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

  const client = useApolloClient();

  const classes = useStyles();

  const logout = () => {
    client.clearStore();
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.removeItem("token");
    return <Redirect to="/" />
  }

  return(
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.title}>
          <Logo link="/home" />
        </div>
        <Button 
          href="/home"
          className={classes.button}>
            My Baskets
        </Button>
        <Button 
          href="/gifts"
          className={classes.button}>
            My Gifts
        </Button>
        <Button 
          href="/feed"
          className={classes.button}>
            Discover
        </Button>
        <Button className={classes.button} onClick={() => logout()}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default PostAuthNav;
