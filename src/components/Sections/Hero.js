import React from "react"
import styled from "styled-components"
import { heroLogos } from "../../data"
import { Icon } from "../index"
import { Link } from "gatsby"
import { mixins } from "../../styles"

import hero_background from "../../images/svgs/hero-circles.svg"

const StyledHero = styled.section`
  position: relative;
  min-height: calc(100vh - var(--navbar-height));
  background-image: url(${hero_background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
const HeroContent = styled.div`
  margin-left: 80px;
  z-index: 2;
  p {
    color: var(--green);
    letter-spacing: 5px;
    font-size: var(--fz-md);
  }
  .portfolio__name {
    font-size: 100px;
    font-weight: 900;
  }
  .portfolio__role {
    font-size: 70px;
    opacity: 0.6;
    font-family: var(--font-lato);
  }
`
const HeroLogos = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  &:before {
    position: inherit;
    content: "Developer";
    transform: rotate(90deg) translateY(0%);
    right: 0;
    bottom: 0;
    top: 0;
    font-size: 120px;
    font-weight: 900;
    letter-spacing: 2px;
    opacity: 0.1;
  }
`
const StyledLogo = styled.div`
  color: ${props => props.color};
  padding: 15px;
  background-color: var(--grey);
  border-bottom: 2px solid ${props => props.color};
  display: inline-block;
  position: absolute;
  border-radius: var(--border-radius);

  svg {
    font-size: 20px;
  }
  &.styledLogo-1 {
    bottom: 10%;
    right: 30%;
    svg {
      font-size: 40px;
    }
  }
  &.styledLogo-2 {
    top: 20%;
    right: 5%;
    svg {
      font-size: 30px;
    }
  }
  &.styledLogo-3 {
    top: 10%;
    left: 15%;
  }
  &.styledLogo-4 {
    top: 30%;
    left: 50%;
  }
  &.styledLogo-5 {
    bottom: 2%;
    left: 30%;
    svg {
      font-size: 43px;
    }
  }
`
const HeroButtonContainer = styled.div`
  margin-top: 50px;
  a {
    ${mixins.greenButton};
    &:nth-child(2) {
      ${mixins.redButton};
      margin-left: 20px;
    }
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <HeroContent>
        <p>Hello my name is,</p>
        <h1 className="portfolio__name">Anish shetty k</h1>
        <h1 className="portfolio__role">I am a frontend developer.</h1>
        <HeroButtonContainer>
          <Link to="/about-me">More about me</Link>
          <Link to="/contact">Contact me</Link>
        </HeroButtonContainer>
      </HeroContent>
      <HeroLogos>
        {heroLogos.map(({ id, name, color }) => (
          <StyledLogo key={id} color={color} className={`styledLogo-${id}`}>
            <Icon name={name} />
          </StyledLogo>
        ))}
      </HeroLogos>
    </StyledHero>
  )
}

export default Hero
