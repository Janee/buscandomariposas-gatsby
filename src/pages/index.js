import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <ul>
      {data.allStrapiButterfly.edges.map(({ node }) => (
    <li key={node.strapiId}>
      <h2>
        <Link to={`/${node.strapiId}`}>{node.common_name}</Link>
      </h2>
      <p>{node.description}</p>
    </li>
))}
  </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiButterfly {
      edges {
        node {
          strapiId
          common_name
          description
        }
      }
    }
  }`
