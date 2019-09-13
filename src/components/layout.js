import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Navbar />
    </header>
    {children}
    <Footer />
  </div>
)
