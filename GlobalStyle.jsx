import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  html, body, #root {
    height: 100%;
   
  }

  body {
    background-color: #01121f;
    margin: 0;
    display: grid;
    place-items: center;
    font-family: "Inter", sans-serif;
    
  }

`;

export default GlobalStyle;
