import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const audio = () => (
  <Layout>
    <SEO title="Audio" />
    <h1>audio</h1>
    <p>
      <Link
        href="https://brettsaxon.bandcamp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Bandcamp
      </Link>
    </p>
  </Layout>
)

export default audio
