import { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.background};
    color: ${theme.text};
    font-family: ${theme.fontPrimary};
    font-size: 16px;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${theme.lightGray};
    line-height: 1.1;
  }

  p {
    margin: 0 0 15px 0;
    color: ${theme.text};
    line-height: 1.6;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.accent};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: #999;
    border: 3px solid ${theme.background};
    border-radius: 10px;
  }

  /* Selection */
  ::selection {
    background-color: #000;
    color: #fff;
  }
`;

export default GlobalStyles;
