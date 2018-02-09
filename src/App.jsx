import '@/assets/styles/main.scss'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Footer from '@/components/Footer.jsx'
import { Button } from 'reactbulma'

class App extends Component {
  render() {
    return(
      <app>
        <div className="container is-fullhd">
          <Button primary>foobar</Button>
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
