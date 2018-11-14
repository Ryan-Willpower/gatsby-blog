import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Main = styled.div`
  grid-area: about;
  grid-column: ${props => props.side === 'left' ? '1 / span 3' : '4 / span 6'};
  font-size: 1.5vw;
  line-height: 2;
  margin: 0 8vw;
  word-wrap: break-word;

  ${media.lessThan(`medium`)`
    grid-column: 1 / span 4;
    grid-row: ${props => props.side === 'left' ? '9 / span 13' : '14 / span 18'};
    font-size: 5vw;
    justify-self: center;
  `}
`

const Header = styled.div`
  font-weight: 600;
  font-size: 2vw;

  ${media.lessThan(`medium`)`
    font-size: 10vw;
  `}
`

const About = (props) => (
  <Main side={props.side}>
    <Header>{props.title.toUpperCase()}</Header>
    {props.children}
  </Main>
)

export default About