import "font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1877f2",
    },
    secondary: {
      main: "#42b72a",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
