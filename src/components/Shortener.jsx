import React, { Component } from 'react'

export default class Shortener extends Component {
  render() {
    return (
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fi-link"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fi-check"></i>
          </span>
        </p>
      </div>
    )
  }
}
