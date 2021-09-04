import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "../styles"
import { Navbar } from "./index"

//fonts loaded when layout is loaded
import "@fontsource/lato"
import "@fontsource/roboto"

const StyledMainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledMainContainer>
            <Navbar />
            {children}
          </StyledMainContainer>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
