import React from "react"
import {
  FiGithub,
  FiTwitter,
  FiCodepen,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi"

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <FiGithub />
    case "Twitter":
      return <FiTwitter />
    case "Codepen":
      return <FiCodepen />
    case "Instagram":
      return <FiInstagram />
    case "Linkedin":
      return <FiLinkedin />
    case "Mail":
      return <FiMail />
    default:
      return <p>please enter a valid icon name</p>
  }
}

export default Icon
