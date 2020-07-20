import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ButterflyTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiButterfly.common_name}</h1>
    <p>{data.strapiButterfly.description}</p>
  </Layout>
)

export default ButterflyTemplate

export const query = graphql`
  query ButterflyTemplate($id: Int!) {
    strapiButterfly(strapiId: { eq: $id }) {
      common_name
      description
    }
  }
`
