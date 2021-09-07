import React from "react"
import {
  FiGithub,
  FiTwitter,
  FiCodepen,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi"
import { FaReact, FaAws, FaGitAlt } from "react-icons/fa"
import { SiFirebase, SiJavascript } from "react-icons/si"

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
    case "React":
      return <FaReact />
    case "Firebase":
      return <SiFirebase />
    case "Javascript":
      return <SiJavascript />
    case "Aws":
      return <FaAws />
    case "Git":
      return <FaGitAlt />

    default:
      return <p>please enter a valid icon name</p>
  }
}

export default Icon
