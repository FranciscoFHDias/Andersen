import React from 'react'
import axios from 'axios'

class NewClient extends React.Component {

  constructor() {
    super()
    this.state = {
      formdata: {

      }
    }
  }

  componentDidMount() {

  }




  render() {
    return(
      <div className="container">
        <div className="field">
          <label className="label">Client Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Julius Caesar" />
          </div>
        </div>
        <div className="field">
          <label className="label">Stage</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Julius Caesar" />
          </div>
        </div>
        <div className="field">
          <label className="label">Value</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Julius Caesar" />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select name="priority">
                <option value="1">Low</option>
                <option value="2">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Partner</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Julius Caesar" />
          </div>
        </div>
        <div className="field">
          <label className="label">Referral Source</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. Julius Caesar" />
          </div>
        </div>
      </div>
    )
  }
}

export default NewClient
