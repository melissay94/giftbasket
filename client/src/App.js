import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PreAuthNav from "./components/PreAuthNav";
import PostAuthNav from "./components/PostAuthNav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffe69b",
      main: "#ffe082",
      dark: "#b29c5b",
      contrastText: "#000000"
    },
    secondary: {
      light: "#8d7bff",
      main: "#715aff",
      dark: "#4f3eb2",
      contrastText: "#FFFFFF"
    }
  }
});

const GET_ISLOGGEDIN = gql`{
  isLoggedIn @client
}`;

function App() {
  const { loading, error, data } = useQuery(GET_ISLOGGEDIN);

  const navigation = data.isLoggedIn ? <PostAuthNav /> : <PreAuthNav />

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          {navigation}
          <Content isLoggedIn={data.isLoggedIn} />
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
