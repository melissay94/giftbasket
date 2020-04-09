import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Modal, Backdrop, Fade, TextField, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, 
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  title: {
    textAlign: "center"
  }
}));

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function LoginModal(props) {

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

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
        <div className={`${classes.paper} no-outline`}>
          <Typography variant="h6" className={classes.title}>Welcome Back!</Typography>
          <form onSubmit={ (e) => handleLogin(e) }>
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
            <Grid container>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button 
                  type="submit"
                  variant="contained" 
                  color="secondary"
                  size="large"
                  fullWidth
                >Login</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default LoginModal;
