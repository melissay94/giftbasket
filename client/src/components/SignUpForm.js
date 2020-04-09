import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Paper, TextField, Typography, Button, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1em",
    opacity: "85%"
  },
  title: {
    textAlign: "center"
  }
}));

const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

function SignupFrom() {

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const client = useApolloClient();
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      localStorage.setItem("token", signup.token);
      client.writeData({ data: { isLoggedIn: true } });
      return <Redirect to ="/home" />
    }
  });

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    signup({ variables: { email, password, name } });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>

  return(
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>Join Now!</Typography>
      <form onSubmit={(e) => handleSignup(e)}>
        <TextField 
          variant="outlined" 
          label="Name" 
          fullWidth 
          color="secondary"
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField 
          variant="outlined" 
          label="Email" 
          fullWidth 
          color="secondary"
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField 
          variant="outlined" 
          label="Password" 
          type="password" 
          fullWidth 
          color="secondary"
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField 
          variant="outlined" 
          label="Confirm Password" 
          type="password" 
          fullWidth 
          color="secondary"
          margin="normal"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Grid container>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Button 
              type="submit"
              variant="contained" 
              color="secondary"
              size="large"
              fullWidth
            >Sign Up</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default SignupFrom;
