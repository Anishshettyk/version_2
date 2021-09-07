import React from "react"
import styled from "styled-components"
import { socialLinksData } from "../data"
import { Icon } from "./index"

const StyledSocialContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 4px;
  width: 40px;
  z-index: 10;
`
const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    margin: 10px 0px;
  }
`
const SocialLink = styled.a`
  border-radius: 4px;
  padding: 10px;
  color: var(--white);
  background-color: ${props => props.color};

  &:hover {
    transition: all 0.4s ease;
    filter: brightness(1.2);
    svg {
      transition: all 0.4s ease;
      transform: scale(1.1) translateY(-2px);
    }
  }
`

const SocialLinks = () => {
  return (
    <StyledSocialContainer>
      <SocialLinksList>
        {socialLinksData.map(({ name, color, link, id }) => (
          <li key={id}>
            <SocialLink
              href={link}
              color={color}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
            >
              <Icon name={name} />
            </SocialLink>
          </li>
        ))}
      </SocialLinksList>
    </StyledSocialContainer>
  )
}

export default SocialLinks
