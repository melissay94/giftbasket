import React from "react";
import { Paper, TextField, Typography, Button, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1em",
    opacity: "85%"
  },
  title: {
    textAlign: "center",
    opacity: "100%"
  }
}))
function SignupFrom() {

  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>Join Now!</Typography>
      <form>
        <TextField 
          variant="outlined" 
          label="Name" 
          fullWidth 
          color="secondary"
          margin="normal"
        />
        <TextField 
          variant="outlined" 
          label="Email" 
          fullWidth 
          color="secondary"
          margin="normal"
        />
        <TextField 
          variant="outlined" 
          label="Password" 
          type="password" 
          fullWidth 
          color="secondary"
          margin="normal"
        />
        <TextField 
          variant="outlined" 
          label="Confirm Password" 
          type="password" 
          fullWidth 
          color="secondary"
          margin="normal"
        />
        <Grid container>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              fullWidth
              className={classes.button}
            >Sign Up</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default SignupFrom;
