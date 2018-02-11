import React, { Component } from 'react'
import Shortener from '@/components/Shortener.jsx'

export default class Home extends Component {
  render() {
    return(
      <section className="hero is-dark is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title">
              <Shortener />
            </h1>
            <h2 className="subtitle">
              0 Links Shortened
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
