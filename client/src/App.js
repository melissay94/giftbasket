import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
      dark: "4f3eb2",
      contrastText: "#FFFFFF"
    }
  }
});

function App() {

  const setNav = () => true ? <PreAuthNav /> : <PostAuthNav />;

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          {setNav()}
          <Content />
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
