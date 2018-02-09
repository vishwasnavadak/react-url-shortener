import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '@/router/routes/Home.jsx'
import Shortened from '@/router/routes/Shortened.jsx'
import About from '@/router/routes/About.jsx'
import Signup from '@/router/routes/Signup.jsx'
import Dashboard from '@/router/routes/Dashboard.jsx'


export default class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="wrapper">
          <Route path="/" component={ Home } />
          <Route path="/shortened" component={ Shortened } />
          <Route path="/about" component={ About } />
          <Route path="/signup" component={ Signup } />
          <Route path="/dashboard" component={ Dashboard } />
        </div>
      </BrowserRouter>
    )
  }
}
