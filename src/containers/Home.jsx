import React, { Component } from 'react'
import Anime from 'react-anime'
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
    // # add anime for counter
  }

  render() {
    return(
      <section style={ styles.container } className="hero is-dark is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <Anime easing="linear"
                   scale={5}
                   duration={1250}
                   rotate={360}>
              <img style={ styles.reactLogo }
                   src={ logo }
                   title="React + Firebase" />
            </Anime>
            <Shortener />
            <h2 style={ styles.counter } className="subtitle">
              <span ref={ (e) => this.counter = e }>0</span> Links Shortened
            </h2>
          </div>
        </div>
      </section>
    )
  }

}
