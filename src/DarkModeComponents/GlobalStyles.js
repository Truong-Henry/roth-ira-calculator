import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  input {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    font-family: "Open Sans", sans-serif;
    transition: all 0.50s linear;
  }
  .link {
    color: ${({ theme }) => theme.text} !important;
  }
  .recharts-cartesian-axis-tick-value {
    fill: ${({ theme }) => theme.text} !important;
  } 
  `;
