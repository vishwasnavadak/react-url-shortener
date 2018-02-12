import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '@/router/views/Home.jsx'
import Shortened from '@/router/views/Shortened.jsx'
import About from '@/router/views/About.jsx'
import Signup from '@/router/views/Signup.jsx'
import Dashboard from '@/router/views/Dashboard.jsx'


export default class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="wrapper animated fadeIn">
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
