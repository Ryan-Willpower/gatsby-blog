import React from 'react'
import { graphql } from 'gatsby'
//
import GlobalStyled from '../components/globalStyle'
import Container from '../components/container'
import Name from '../components/name'
import Title from '../components/title'
import Pic from '../components/pic'
import AboutSection from '../components/allAbout'

export default ({data}) => (
  <Container>
    <Name fullname={['ryan', 'willpower']} />
    <Title>WEB DEVELOPER</Title>
    <Pic src={data.file.publicURL} alt="me" />
    <AboutSection />
    <GlobalStyled />
  </Container>
)

export const query = graphql`
  query {
    file(name: {eq: "pic"}) {
      publicURL
    }
  }
`