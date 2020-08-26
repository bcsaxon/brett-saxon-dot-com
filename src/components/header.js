import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1 rem`,
    }}
  >
    <div
      style={
        {
          // display: 'flex',
          // flexDirection: "row",
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `1 rem 1.0875rem`,
          // justifyContent: "space-between",
        }
      }
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}{" "}
        </Link>

        <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          about{" "}
        </Link>
        <Link
          to="/audio/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          audio{" "}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
