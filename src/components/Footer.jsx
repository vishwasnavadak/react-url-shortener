import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                test?
              </a>
              <a className="navbar-item" href="https://github.com/neetjn/react-url-shortener">
                Fork on Github
                <span className="icon is-large">
                  <i className="ico ico-2x fi-social-github"></i>
                </span>
              </a>
            </div>
            <div className="navbar-end">
            </div>
          </div>
        </nav>
      </footer>
    )
  }
}
