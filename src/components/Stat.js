import React from 'react'
import styled from 'styled-components'

const StatCard = styled.div`
  color: white;
  text-align: center;
  max-width: 340px;
`

const StatNum = styled.h2`
  display: inline;
  font-size: 72px;
  font-weight: 900;
  margin: 0 auto;

  &:nth-child(2){
    font-weight: 100;
  }
`

const StatText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin: 20px 20px;
  font-weight: 300;
`

const Stat = props => (
  <StatCard>
    <StatNum>{props.number}</StatNum><StatNum>{props.scale}</StatNum>
    <StatText>{props.text}</StatText>
  </StatCard>
)

export default Stat