import React, { Component } from 'react'
import { Auth } from '@/Fire'

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <nav className="navbar has-shadow is-black" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-start">

            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="hhttps://www.linkedin.com/in/john-nolette-69ba72132/">
                <span className="icon is-large">
                  <i className="ico ico-2x fi-social-linkedin"></i>
                </span>
                LinkedIn
              </a>
              <a className="navbar-item" href="https://github.com/neetjn/react-url-shortener">
                <span className="icon is-large">
                  <i className="ico ico-2x fi-social-github"></i>
                </span>
                Fork on Github
              </a>
            </div>
          </div>
        </nav>
      </footer>
    )
  }
}
