import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"

const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`

const theme = {
  colors: {
    primary: "green",
    secondary: "red"

  },
  media: {
    phone: "(max-width: 450px)",
    tablet: "(max-width: 768px) and (min-width: 450px)"
  }
}



ReactDOM.render(
  <ThemeProvider theme={theme}>
        <Global/> 
        <App />
  </ThemeProvider>
  ,document.getElementById('root')
);
