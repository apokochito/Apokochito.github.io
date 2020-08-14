import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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
  h1#technique-one {
    width: 30px;
    height: 30px;
    background-image: url(${({ theme }) => theme.image});
    background-size: 30px 28px;
    background-repeat: no-repeat;
    filter: ${({ theme }) => theme.invert};
  }
  h1#technique-one span {
    display: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    background: ${({ theme }) => theme.body};
  }
  li {
    background-color: ${({ theme }) => theme.body};
  }
  `;
