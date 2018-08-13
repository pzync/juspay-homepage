import React from 'react'
import './ProductCard.css'

const ProductCard = props => (
  <div className = "ProductCard">
    <img src = {props.image}/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <a>{props.cta}</a>
  </div>
)

export default ProductCard