import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};

  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  min-height: 100vh;
  font-family: 'Poppins';
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Heebo", sans-serif;
};

main {
  //to give margin to NavBar
  margin-top: 5em;
  flex-grow: 1;
}
`

export default GlobalStyles
