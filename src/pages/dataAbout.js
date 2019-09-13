import React from "react"
import { graphql } from "gatsby"
import DataLayout from "../components/dataLayout"
export default ({ data }) => (
  <DataLayout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </DataLayout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
