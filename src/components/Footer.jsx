import React, { Component } from 'react'
import { Nav, NavLeft, NavRight, NavItem } from 'reactbulma'

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <Nav>
          <Nav.Left>
            <Nav.Item>
              <h1>Fork Me</h1>
            </Nav.Item>
          </Nav.Left>
          <Nav.Right>
            <Nav.Item>
              <h1>Fork Me</h1>
            </Nav.Item>
          </Nav.Right>
        </Nav>
      </footer>
    )
  }
}
