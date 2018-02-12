import React, { Component } from 'react'

export default class Shortener extends Component {
  render() {
    return (
      <shortener className="animated zoomIn">
        <div className="field has-addons">
          <p className="control is-expanded">
            <input className="input is-large is-warning"
                   type="text"
                   placeholder="Paste your link"
                   autoFocus />
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
