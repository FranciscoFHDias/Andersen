import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class EditClient extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      client: {},
      errors: {},
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios
      .get(`api/clients/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({ client: res.data })
      })
  }

  handleChange(selectedOption, data) {
    const formData = { ...this.state.formData, [data.name]: selectedOption.value }
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/clients/${this.props.match.params.id}`, this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/clients/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if(!this.state.client) return null
    console.log(this.state.client)
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Client Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                type="text"
                value={this.state.client.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stage</label>
            <div className="control">
              <div className="select">
                <select className="select" name="stage" onChange={this.handleChange}>
                  <option value="Not Yet Contacted">Not Yet Contacted</option>
                  <option value="First Contact">First Contact</option>
                  <option value="Subsequence Contact">Subsequence Contact</option>
                  <option value="Won">Won</option>
                  <option value="Lost">Lost</option>
                  <option value="Abandoned">Abandoned</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Value</label>
            <div className="control">
              <input
                className="input"
                name="value"
                type="number"
                value={this.state.client.value}
                onChange={this.handleNumberChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="control">
              <div className="select">
                <select className="select" name="priority" onChange={this.handleChange}>
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Partner</label>
            <div className="control">
              <div className="select">
                <select name="partner" onChange={this.handleNumberChange}>

                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Referral Source</label>
            <div className="control">
              <div className="select">
                <select name="referral" onChange={this.handleNumberChange}>

                </select>
              </div>
            </div>
          </div>
          <button className="button">Save</button>
        </form>
      </div>
    )
  }
}

export default EditClient
