import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AudioPage = () => (
  <Layout>
    <SEO title="Audio" />
    <h1>Hi from the Audio Page</h1>
    <p>Welcome to Audio Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AudioPage
