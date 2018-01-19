import React, { Component } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default class App extends Component {
  render() {
    return(
      <app>
        <Header />
        <div className="container is-fullhd">
          <section>
            <h1>boilerplate</h1>
          </section>
        </div>
        <Footer />
      </app>
    )
  }
}
