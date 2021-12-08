import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';


export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  a:active,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  button {
    &:active {
      opacity: .8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
`;
