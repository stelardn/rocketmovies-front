import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  

  body, a, button, input {
    font-family: 'Roboto Slab', serif;
    border: none;
    outline: none;
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

`