import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return(
      <app>
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

ReactDOM.render(<App />, document.querySelector('#root'))
