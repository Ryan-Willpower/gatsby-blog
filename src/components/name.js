import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const NameText = styled.div`
  padding-left: 2vw;
  font-size: 9.5vw;
  color: #696969;
  grid-area: name;
  grid-row: ${props => props.id === 'ryan' ? `2` : `3`};
  align-self: center;
  line-height: 100%;

  ${media.lessThan(`medium`)`
    grid-row: ${props => props.id === 'ryan' ? `5` : `6`};
    font-size: 15vw;
  `}
`

const Name = (props) => {  
  const nameComponents = props.fullname.map((name, index) => (
    <NameText key={index.toString()} id={name}>{name.toUpperCase()}</NameText>
  ))

  return (
    <Fragment>
      {nameComponents}
    </Fragment>
  )
}

export default Name