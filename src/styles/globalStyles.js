import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
  }
  body, html {
    height: 100%;
    width: 100%;
    font-family: ${p => p.theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${p => p.theme.fonts.dark};
  }

  html {
    &[data-ua*='iPhone'],
    &[data-ua*='iPad'] {
      -webkit-overflow-scrolling: touch;
    }
  }
`;

export default GlobalStyle;
