import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const staticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to="/dataIndex">
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {staticQuery.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to="/dataAbout/"
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
