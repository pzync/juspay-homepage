import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>1.3 billion transactions <br />and counting..</h1>
        <p>Our products process 1 million+ transactions every single day. Juspay SDKs are present on over 100 million devices and we count Uber, Amazon, Myntra etc among our customers.</p>
        <Link to="/page-2/">Get Started</Link>
      </div>
    </div>
    <div className = "ClientLogos">
      <img src = {require('../images/amazon.svg')} height= "40"/>
      <img src = {require('../images/airtel.svg')} height = "36"/>
      <img src = {require('../images/flipkart.jpeg')} width= "36"/>
      <img src = {require('../images/swiggy.svg')} height= "40"/>
      <img src = {require('../images/uber.svg')} height= "36"/>
      <img src = {require('../images/myntra.png')} width= "40"/>
      <img src = {require('../images/snapdeal.png')} height= "40"/>
      <img src = {require('../images/yatra.png')} height= "40"/>
    </div>
  </div>
)

export default IndexPage
