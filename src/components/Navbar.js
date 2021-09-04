import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../data"
import { FiDownload } from "react-icons/fi"

import Logo from "../components/Icons/logo.svg"

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 20px 90px;
  overflow: hidden;
`

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    width: 40px;
  }
  span {
    font-size: var(--fz-sm);
    color: var(--white);
    margin-left: 15px;
    border-left: 1px solid var(--white);
    padding-left: 4px;
    letter-spacing: 0.4px;
    font-weight: 700;
  }
`
const StyledNavbarActions = styled.div`
  display: flex;
  align-items: center;
  .resume__button {
    margin-left: 30px;
    background: var(--white);
    color: var(--black);
    padding: 0.9em 1.8em;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.125;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    svg {
      margin-right: 10px;
    }
  }
`

const NavbarLinks = styled.ul`
  display: flex;
  a {
    margin-right: 25px;
    li {
      color: var(--white);
      font-size: var(--fz-lg);
    }
    &:hover {
      li {
        color: var(--green);
      }
    }
  }
`

const Navbar = () => {
  const [pageScrolled, setPageScrolled] = useState(0)

  useEffect(() => {
    const handleUserScroll = () => {
      const isBrowser = typeof window !== "undefined"
      if (isBrowser) {
        var scrolledValue =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
        console.log(scrolledValue)
      }
    }
    window.addEventListener("scroll", handleUserScroll)
    return () => window.removeEventListener("scroll", handleUserScroll)
  }, [])

  return (
    <StyledNavbar>
      <StyledLogo to="/">
        <img src={Logo} alt="website logo" />
        <span>Anish shetty k</span>
      </StyledLogo>
      <StyledNavbarActions>
        <NavbarLinks>
          {navLinks.map(link => (
            <Link to={link.to} key={link.id}>
              <li>{link.name}</li>
            </Link>
          ))}
        </NavbarLinks>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
          className="resume__button"
        >
          <FiDownload />
          Resume
        </a>
      </StyledNavbarActions>
    </StyledNavbar>
  )
}

export default Navbar
