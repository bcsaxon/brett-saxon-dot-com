import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <p></p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <Img
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
