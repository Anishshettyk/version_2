import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navLinks } from "../data"
import { FiDownload } from "react-icons/fi"
import { mixins } from "../styles"

import Logo from "../components/Icon/logo.svg"

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--black);
  max-height: var(--navbar-height);
  ${mixins.flex_between};
  z-index: 100;
  padding: 20px 90px;
  overflow: hidden;
`

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    width: 50px;
  }
  span {
    font-size: var(--fz-md);
    color: var(--white);
    margin-left: 5px;
    border-left: 1px solid var(--white);
    padding-left: 4px;
    letter-spacing: 0.4px;
    font-weight: 700;
  }
`
const StyledNavbarActions = styled.div`
  ${mixins.flex_align};
  .resume__button {
    margin-left: 30px;
    background: var(--white);
    color: var(--black);
    padding: 0.8em 1.7em;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.125;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    svg {
      margin-right: 10px;
    }
    &:hover {
      opacity: 0.8;
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
