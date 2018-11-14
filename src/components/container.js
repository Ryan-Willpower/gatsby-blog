import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Helmet from 'react-helmet'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas: '. . . . . .'
  'name name name name pic pic'
  'name name name name pic pic'
  'title title title . pic pic'
  '. . . . . .'
  'about about about about about about'
  'about about about about about about'
  'about about about about about about'
  'about about about about about about';

  ${media.lessThan(`medium`)`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(18, 1fr);
    grid-template-areas: '. pic pic .'
    '. pic pic .'
    '. pic pic .'
    '. pic pic .'
    'name name name name'
    'name name name name'
    'title title title title'
    'title title title title'
    'about about about about';
  `}
` 

export default (props) => (
  <GridContainer>
    <Helmet>
      <meta name="theme-color" content="#696969" />
      <title>RYAN WILLPOWER</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" href="/images/logo-192.png" />
    </Helmet>
    { props.children }
  </GridContainer>
)