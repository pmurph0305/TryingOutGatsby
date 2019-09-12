import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Welcome to gatsby." />
    <h1>This is part of the gatsby plugin typography tutorial</h1>
    <p>This is another part similar to above.</p>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
