import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import { Helmet } from "react-helmet"
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="example description" />
      <title>Gatsby Example Site</title>
      <link rel="canonical" href="https://localhost:9000" />
    </Helmet>
    <header style={{ marginBottom: `1.5rem` }}>
      <Navbar />
    </header>
    {children}
    <Footer />
  </div>
)
