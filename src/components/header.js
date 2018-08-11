import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
      <Link to="/"><img src = {require('../images/juspay_logo.svg')} height ="30" /></Link>
      <Link to="/products">Products</Link>
      <Link to="/documentation">Documentation</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)

export default Header
