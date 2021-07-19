import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my about page" />
      <h1>About Page</h1>
      <p>Im a Software Developer.</p>
    </Layout>
  )
}

export default About