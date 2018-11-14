import React, { Fragment } from 'react'
import About from './about'

export default () => (
  <Fragment>
    <About title="ABOUT" side="left">
      <div>Name: Surasak Chaisurin</div>
      <div>Education: Mahanakorn University of Technology</div>
      <div>Address: Bangkok, Thailand</div>
      <div>National: Thai</div>
      <div>Email: surasak.c.work@gmail.com</div>
    </About>
    <About title="WHAT CAN I DO?" side="right">
      <ul>
        <li>HTML, CSS, Javascript</li>
        <li>React</li>
        <li>Vue</li>
        <li>PHP</li>
      </ul>
    </About>
  </Fragment>
)