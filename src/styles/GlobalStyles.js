import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyles = createGlobalStyle`

${variables}

html{
    box-sizing: border-box;
    width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

:focus{
    outline: none;
}

body{
    margin:0;
    width:100%;
    min-height:100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color:var(--black);
    color:var(--white);
    font-family: var(--font-lato);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--white);
    line-height: 1.1;
}

a{
    text-decoration: none;
    color: var(--green);
}
ul{
    padding: 0;
    margin: 0;
    list-style: none;
}

#root{
    display: grid;
    grid-template-rows:1fr auto;
    grid-template-columns:100%;
    min-height: 100vh;
}


`

export default GlobalStyles
