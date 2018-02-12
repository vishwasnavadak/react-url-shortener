import React, { Component } from 'react'

export default class Shortener extends Component {
  render() {
    return (
      <shortener className="animated fadeInUp">
        <div className="field has-addons">
          <p className="control is-expanded">
            <input className="input is-large is-warning has-text-centered"
                   type="text"
                   placeholder="Paste your link" />
          </p>
          <p className="control">
            <button type="submit" className="button is-large is-warning">
              Shorten <i className="ico ico-right fi fi-wrench"></i>
            </button>
          </p>
        </div>
      </shortener>
    )
  }
}
