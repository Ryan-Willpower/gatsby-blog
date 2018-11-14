import styled from 'styled-components'
import media from 'styled-media-query'

const Pic = styled.img`
  border-radius: 50%;
  width: 25vw;
  grid-area: pic;
  justify-self: center;
  
  ${media.lessThan(`medium`)`
    margin: 5vh 0;
    align-self: center;
    width: 50vw;
  `}
`

export default Pic