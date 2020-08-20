import React from "react"

import Layout from "../components/layout"
import Greeting from "../components/greeting"

const AboutPage = () => (
  <Layout>
    <div className="about">
      <Greeting />
      <div style={{margin: "auto", width: "50%"}}>
        <p>I have used Typescript, Javascript, React, and Redux.</p> 
        <p>I enjoy skateboarding, cooking, supporting Liverpool FC, and learning about real estate investing.</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
