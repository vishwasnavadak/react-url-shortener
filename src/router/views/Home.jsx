import anime from 'animejs'
import React, { Component } from 'react'
import Shortener from '@/components/Shortener.jsx'

const logo = require('@/assets/images/reactbase.svg')

const styles = {
  container: {
    marginTop: '-5rem'
  },
  reactLogo: {
    display: 'block',
    padding: '1rem',
    width: '3rem',
    marginBottom: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  counter: {
    marginTop: '1rem'
  }
}

export default class Home extends Component {

  componentDidMount() {
    const self = this
    anime({
      targets: self.logo,
      easing: 'linear',
      scale: 5,
      rotate: '1turn',
      transition: 5000
    })
  }

  render() {
    return(
      <section style={ styles.container } className="hero is-dark is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <img ref={ (e) => this.logo = e }
                 style={ styles.reactLogo }
                 src={ logo } />
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
