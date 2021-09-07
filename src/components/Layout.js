import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles, theme, mixins } from "../styles"
import { Navbar, SocialLinks, Icon } from "./index"

//fonts loaded when layout is loaded
import "@fontsource/lato"
import "@fontsource/roboto"

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .contact__icon {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 10;
    background: var(--green);
    padding: 18px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 4px;
    ${mixins.flex_center};
    box-shadow: 2px 6px 27px 4px rgba(0, 0, 0, 0.89);
    -webkit-box-shadow: 2px 6px 27px 4px rgba(0, 0, 0, 0.89);
    -moz-box-shadow: 2px 6px 27px 4px rgba(0, 0, 0, 0.89);
    svg {
      color: var(--black);
      font-size: var(--fz-vl);
    }
    &:hover {
      transition: 0.2s all ease-in-out;
      transform: translateY(-5px);
      svg {
        transform: scale(1.05);
      }
    }
  }
  .content {
    margin-top: var(--navbar-height);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledMainContainer>
            <Navbar />
            <SocialLinks />
            <div className="contact__icon">
              <Icon name="Mail" />
            </div>
            <div className="content">{children}</div>
          </StyledMainContainer>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
