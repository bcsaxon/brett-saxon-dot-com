import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const audio = () => (
  <Layout>
    <SEO title="Audio" />
    <h1>audio</h1>
    <Link
      href="https://brettsaxon.bandcamp.com/"
      target="_blank"
      rel="noreferrer"
    >
      bandcamp
    </Link>
  </Layout>
)

export default audio
