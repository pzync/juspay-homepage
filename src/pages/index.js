import React from 'react'
import Link from 'gatsby-link'
import ProductCard from '../components/ProductCard';

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
    <div className = "ProductSection">
      <h2>Payment products that<br />scale to 'massive'</h2>
      <div className = "CardGroup">
        <ProductCard 
          image = {require('../images/godel.png')}
          title = "Juspay Safe"
          text = "World’s first mobile payments browser for secure 1-click experience. Trusted by MakeMyTrip, Amazon, Airtel, Uber, Swiggy and many more."
          cta = "Learn more >"
        />
        <ProductCard 
          image = {require('../images/checkout.png')}
          title = "Express Checkout"
          text = "PCI-DSS compliant seamless checkout layer integrated with 20+ payment gateways. Trusted by Swiggy, Grofers, Zoomcar and many more."
          cta = "Learn more >"
        />
      </div>
    </div>
  </div>
)

export default IndexPage
