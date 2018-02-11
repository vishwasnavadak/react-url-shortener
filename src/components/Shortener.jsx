import React, { Component } from 'react'

export default class Shortener extends Component {
  render() {
    return (
      <shortener>
        <div className="field has-addons">
          <p className="control has-icons-left has-icons-right is-expanded">
            <span className="icon is-small is-left">
              <i className="fas fi-link"></i>
            </span>
            <input className="input has-text-centered" type="text" placeholder="Paste a link to shorten" />
          </p>
          <p className="control">
            <button type="submit" className="button is-info">
              Shorten <i className="ico ico-right fi fi-wrench"></i>
            </button>
          </p>
        </div>
      </shortener>
    )
  }
}
