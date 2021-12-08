import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';


export const GlobalStyles = createGlobalStyle`
  ${reset} 
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }`;
