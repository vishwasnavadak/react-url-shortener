import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Auth } from '@/Fire'

import Home from '@/containers/Home.jsx'
import Shortened from '@/containers/Shortened.jsx'
import About from '@/containers/About.jsx'
import Signup from '@/containers/Signup.jsx'
import Dashboard from '@/containers/Dashboard.jsx'

function requireAuth(nextState, replace) {
  if (!Auth.currentUser) {
    replace({
      pathname: '/login'
    })
  }
} // TODO: replace with redux auth store

export default class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="wrapper animated fadeIn">
          <Route path="/" component={ Home } />
          <Route path="/shortened" component={ Shortened } />
          <Route path="/about" component={ About } />
          <Route path="/signup" component={ Signup } />
          <Route path="/dashboard" component={ Dashboard } onEnter={ requireAuth } />
        </div>
      </BrowserRouter>
    )
  }
}
