import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${Theme.colors.secondary};
    background-color: ${Theme.colors.primary};
    line-height: 1.2;
    margin: 0;
    font-family: 'Roboto Serif', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    font-family: Inter, sans-serif;

    &:hover {
      cursor: pointer;
    }
  }

  section {
    background-color: ${Theme.colors.primary};
  }

  h3 {
    font-size: 22px;
    font-family: Inter, sans-serif;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    font-family: Inter, sans-serif;
  }

`