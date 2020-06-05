import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, 
  Backdrop, 
  Fade, 
  TextField, 
  Grid, 
  Button, 
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: 'center',
  },
  message: {
    color: '#FF6E67',
    fontWeight: 'bolder'
  }
}));

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function LoginModal({ isShowing, toggleModal }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const client = useApolloClient();
  const [login, { data, loading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true } });
    },
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors) {
        setMessage(graphQLErrors[0].message);
      }
      if (networkError) {
        setMessage(networkError.message || "Network Error");
      }
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  if (loading) return <div>Loading...</div>;

  if (data) return <Redirect to="/home" />;

  return (
    <Dialog
      aria-labelledby="login modal"
      aria-describedby="A form to login into Giftbasket with an existing account"
      className={classes.modal}
      open={isShowing}
      onClose={() => toggleModal(false)}
    >
      <DialogTitle className={classes.title}>Welcome Back!</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => handleLogin(e)}>
          <TextField
            required
            variant="outlined"
            label="Email"
            fullWidth
            color="secondary"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            required
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            color="secondary"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <DialogContentText className={classes.message}>{message}</DialogContentText>
          <Grid container>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <Button
                onClick={() => toggleModal(false)}
                color="secondary"
                size="large"
                fullWidth
              >Cancel</Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
