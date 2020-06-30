import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
<p></p>
    <Img
      style={{ margin: "auto" }}
      fluid={data.singleCoverImg.childImageSharp.fluid}
      alt="The cover art of Brett's Unreleased Album"
    />
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
