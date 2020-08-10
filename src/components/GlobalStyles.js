import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  #theme {
    color: ${({ theme }) => theme.text};
  }
  #theme:hover {
    background-color: ${({ theme }) => theme.body};
  }
  #theme:focus {
    box-shadow: none;
  }
  #cv {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }
  `;
