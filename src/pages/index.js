import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout className="content">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Spike</h1>
  </Layout>
)

export default IndexPage
