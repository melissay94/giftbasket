import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignUpForm from "../components/SignUpForm";
import About from "../components/About";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  }, 
  item: {
    marginTop: theme.spacing(4)
  }
}))

function Landing() {

  const classes = useStyles();

  return(
    <div>
      <div className={`hero ${classes.root}`}>
        <Grid container>
          <Grid item lg={6} md={2} xs={1}></Grid>
          <Grid item lg={5} md={8} xs={10} className={classes.item}>
            <SignUpForm />
          </Grid>
        </Grid>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default Landing;



// Two sections: Hero and About
// Navigation for PreAuth
// Sign Up Form floating left
// Fact cards about the app