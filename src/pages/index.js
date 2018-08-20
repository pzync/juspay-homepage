import React from 'react'
import Link from 'gatsby-link'
import ProductCard from '../components/ProductCard';
import Stat from '../components/Stat';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>1.3 billion transactions <br />and counting..</h1>
        <p>Our products process 1 million+ transactions every single day. Juspay SDKs are present on over 100 million devices and we count Uber, Amazon, Myntra etc among our customers.</p>
        <Link to="/page-2/">Get Started</Link>
      </div>
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
    <div className = "PlatformSection">
      <img src = {require('../images/platform.png')} />
      <div className = "PlatformDesc">
        <h2>Enterprise solutions</h2>
        <p>A suite of customized, end-to-end solutions to take care of all your payment requirements. Juspay's proprietary Presto platform allows us to execute quickly and scale globally. Plus custom integrations and 24/7 support.</p>
        <Link to="/custom/">Contact us</Link>
      </div>
    </div>
    <div className = "SummarySec">
      <div className = "SummaryGroup">
        <Stat 
          number = "1.4"
          scale = "Mn"
          text = "number of transactions processed every day"
        />
        <Stat 
          number = "100"
          scale = "Mn"
          text = "number of devices Juspay SDK is present on"
        />
        <Stat 
          number = "1.3"
          scale = "Bn"
          text = "number of transactions processed so far"
        />
      </div>
      <div className = "WaveBottom"><Wave /></div>
    </div>
    <div className = "CTA">
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
      <h2>Most leading companies use Juspay products.</h2>
      <p>Amazon. Flipkart. Myntra. Snapdeal. Swiggy. Uber. Yatra. Airtel. And 400+ other online businesses trust Juspay for powering their payment experience.</p>
      <Link to="/custom/">Get Started</Link>
    </div>
    <div className = "Footer">
      <p>Made in Namma Bengaluru. Powered by Pure Functions :)</p>
    </div>
  </div>
)

export default IndexPage
