import '@/assets/styles/main.scss'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Router from '@/router/Router.jsx'
import Footer from '@/components/Footer.jsx'

class App extends Component {
  render() {
    return(
      <app>
        <Router />
        <Footer />
      </app>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
