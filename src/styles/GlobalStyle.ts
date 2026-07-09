import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
      background:
              radial-gradient(
                      circle at top,
                      rgba(198,161,91,0.08),
                      transparent 35%
              ),
              #0B0A09;

      color: #F5F1E8;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: #C6A15B;
    color: #080808;
  }

`;