import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  top: 0;
  background: black;
  padding: 6vh;
  margin-bottom: 1;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 900;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">{siteTitle} </StyledLink>
    <StyledLink to="/audio/">audio </StyledLink>
    <StyledLink to="/about/">about </StyledLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
