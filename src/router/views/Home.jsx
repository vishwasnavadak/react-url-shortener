import React, { Component } from 'react'
import Shortener from '@/components/Shortener.jsx'

const logo = require('@/assets/images/reactbase.svg')

const styles = {
  container: {
    'margin-top': '-5rem'
  },
  reactLogo: {
    display: 'block',
    padding: '1rem',
    width: '8rem',
    'margin-bottom': '1rem',
    'margin-left': 'auto',
    'margin-right': 'auto'
  },
  counter: {
    'margin-top': '1rem'
  }
}

export default class Home extends Component {
  render() {
    return(
      <section style={ styles.container } className="hero is-dark is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <img style={ styles.reactLogo } src={ logo } className="animated flipInX" />
            <Shortener />
            <h2 style={ styles.counter } className="subtitle">
              <span id="counter">0</span> Links Shortened
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
