import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class NewClient extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: { },
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/partners/'),
      axios.get('/api/referrals/')
    ])
      .then(axios.spread((partnersRes, referralsRes) => this.setState({
        partners: partnersRes.data,
        referrals: referralsRes.data
      })
      ))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData })
  }

  handleNumberChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: +e.target.value}
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post(('/api/clients/'), this.state.formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/clients'))
      .catch(err => this.setState({ error: err.response.data.errors }))
  }

  render() {
    if (!this.state.partners && !this.state.referrals) return 'Loading...'
    console.log(this.state.formData)
    return(
      <div className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Client Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="e.g. Julius Caesar"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <div className="field">
              <label className="label">Stage</label>
              <div className="control">
                <div className="select">
                  <select className="select" name="stage" onChange={this.handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="Not Yet Contacted">Not Yet Contacted</option>
                    <option value="First Contact">First Contact</option>
                    <option value="Subsequence Contact">Subsequence Contact</option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>
                    <option value="Abandoned">Abandoned</option>
                  </select>
                </div>
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <div className="field">
              <label className="label">Value</label>
              <div className="control">
                <input
                  className="input"
                  name="value"
                  type="number"
                  placeholder="e.g. Julius Caesar"
                  onChange={this.handleNumberChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <div className="field">
              <label className="label">Priority</label>
              <div className="control">
                <div className="select">
                  <select className="select" name="priority" onChange={this.handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <div className="field">
              <label className="label">Partner</label>
              <div className="control">
                <div className="select">
                  <select name="partner" onChange={this.handleNumberChange}>
                    <option value="" disabled selected>Select your option</option>
                    {this.state.partners.map(partner =>
                      <option key={partner.id} value={partner.id}>{partner.name}</option>
                    )}
                  </select>
                </div>
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <div className="field">
              <label className="label">Referral Source</label>
              <div className="control">
                <div className="select">
                  <select name="referral" onChange={this.handleNumberChange}>
                    <option value="" disabled selected>Select your option</option>
                    {this.state.referrals.map(referral =>
                      <option key={referral.id} value={referral.id}>{referral.name} at {referral.company}</option>
                    )}
                  </select>
                </div>
                {this.state.error && <small className="help is-danger">{this.state.error}</small>}
              </div>
            </div>
            <button className="button">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewClient
