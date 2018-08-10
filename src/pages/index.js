import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>1.3 billion transactions and counting..</h1>
        <p>Our products process 1 million+ transactions every single day. Juspay SDKs are present on over 100 million devices and we count Amazon, Myntra, Uber etc among our customers.</p>
        <Link to="/page-2/">Get Started</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
