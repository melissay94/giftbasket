import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Paper, 
  TextField, 
  Typography, 
  Button, 
  Grid,
  Checkbox,
  FormControlLabel
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '1em',
    opacity: '85%',
  },
  title: {
    textAlign: 'center',
  },
  message: {
    color: '#FF6E67',
    fontWeight: 'bolder'
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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmedAge, setConfirmedAge] = useState(false);
  const [message, setMessage] = useState(null);

  const client = useApolloClient();
  const [signup, { data, loading }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      localStorage.setItem('token', signup.token);
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

  const handleSignup = (e) => {
    e.preventDefault();
    if (!confirmedAge) {
      setMessage('You must be 18 or older to use this site.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Your passwords do not match.');
      return;
    }

    signup({ variables: { email, password, name } });
  };

  if (loading) return <div>Loading...</div>;
  if (data) return <Redirect to="/home" />;

  return (
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
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label="Email"
          fullWidth
          color="secondary"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          helperText="Passwords must be at least 12 characters long and contain at least one uppercase letter, one lowercase, one number, and one symbol."
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          color="secondary"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label="Confirm Password"
          type="password"
          fullWidth
          color="secondary"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox checked={confirmedAge} onChange={() => { setConfirmedAge(!confirmedAge) }} name="confirmAgeCheckbox" />
          }
          label="By checking this box you submit that you are at least 18 years or older" />
        <Grid container>
          <Grid item xs={12}>
            <Typography
            variant="subtitle2"
            className={classes.message}>
              {message}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={9} />
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default SignupFrom;
