import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import { Spotify } from "@styled-icons/boxicons-logos/Spotify"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"

const SpotifyIcon = styled(Spotify)`
  color: black;
  width: 50px;
`
const InstagramIcon = styled(Instagram)`
  color: black;
  width: 50px;
`
const StyledImg = styled(props => <Img {...props} />)`
  width: 60vw;
  margin-bottom: 5vh;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledImg
      fluid={data.singleCoverImg.childImageSharp.fluid}
      alt="The cover art of Brett's Unreleased Album"
    />
    <Link
      to="https://open.spotify.com/artist/2JPgsDBBd21E27yDeWUfXA?si=b22A_7ZBTZGqZK2OoXkBpA"
      target="_blank"
    >
      <SpotifyIcon />
    </Link>
    <Link to="https://instagram.com/brettsaxon" target="_blank">
      <InstagramIcon />
    </Link>
  </Layout>
)

export const query = graphql`
  query {
    singleCoverImg: file(absolutePath: { regex: "/single-cover.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
