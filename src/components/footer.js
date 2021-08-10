import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/gatsby-icon.png"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: text;
  bottom: 0;
  background: white;
  padding: 2vh;
  margin-top: 5vh;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}
    <img style={{ width: 30, paddingLeft: 5 }} src={logo} alt="Logo" />
    <Link href="https://www.gatsbyjs.org"></Link>
  </StyledFooter>
)

export default Footer
