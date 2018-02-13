import '@/assets/styles/main.scss'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import Router from '@/router/Router.jsx'
import Footer from '@/components/Footer.jsx'

class App extends Component {
  render() {
    return(
      <AppContainer>
        <Provider>
          <app>
            <Router />
            <Footer />
          </app>
        </Provider>
      </AppContainer>
    )
  }
}

function render() {
  ReactDOM.render(<App />, document.querySelector('#root'))
}

render()

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    render()
  })
}
