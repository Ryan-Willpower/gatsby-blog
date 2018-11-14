import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const TitleText = styled.div`
  font-size: 4vw;

  ${media.lessThan(`medium`)`
    font-size: 8vw;
  `}
`
const Box = styled.div`
  background: #c4c4c4;
  width: fit-content;
  grid-row: 4;
  grid-area: title;
  align-self: center;
  padding: 0 8vw 0 2vw;
  border-radius: 0 10px 10px 0;

  ${media.lessThan(`medium`)`
    grid-row: auto;
    width: auto;
    padding: 0 2vw 0 2vw;
  `}
`

const Title = (props) => (
  <Fragment>
    <Box>
      <TitleText>{props.children.toUpperCase()}</TitleText>
    </Box>
  </Fragment>
)

export default Title