import React from "react"
import DataLayout from "../components/dataLayout"
import { graphql } from "gatsby"
export default ({ pageContext, data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <DataLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>By {post.frontmatter.author}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>{pageContext.example}</p>
      </div>
    </DataLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`
