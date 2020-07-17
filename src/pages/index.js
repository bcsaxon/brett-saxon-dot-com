import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import { Spotify } from "@styled-icons/boxicons-logos/Spotify"

const SpotifyIcon = styled(Spotify)`
  color: black;
  width: 100px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p></p>
    <Img
      style={{ margin: "auto" }}
      fluid={data.singleCoverImg.childImageSharp.fluid}
      alt="The cover art of Brett's Unreleased Album"
    />
    <Link
      to="https://open.spotify.com/artist/2JPgsDBBd21E27yDeWUfXA?si=b22A_7ZBTZGqZK2OoXkBpA"
      target="_blank"
      style={{
        margin: "center",
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <SpotifyIcon />
    </Link>
  </Layout>
)

export const query = graphql`
  query {
    singleCoverImg: file(absolutePath: { regex: "/single-cover.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
