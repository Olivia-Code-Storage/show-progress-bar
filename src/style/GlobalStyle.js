import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'HBIOS-SYS';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'HBIOS-SYS', sans-serif;
    font-weight: normal;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }
  ol, ul, li {
    list-style: none;
  }
  a { 
    text-decoration: none;
    color: inherit;
  }
  img { 
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }
  input, select, button, textarea {
    vertical-align: middle;
  }
  button, input[type=button] {
    cursor: pointer;
  }
  table { 
    border-collapse: collapse;
  }
  button { 
    background-color: transparent;
  }
  textarea {
    resize: none;
  }
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }
`
