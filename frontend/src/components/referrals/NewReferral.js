import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class NewReferral extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post(('/api/referrals/'), this.state.formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/clients/new'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Company</label>
              <input
                className="input"
                name="company"
                placeholder="JP Morgan"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                name="name"
                placeholder="Joahnna Bobina"
                onChange={this.handleChange}
              />
            </div>
            <button className="button">Save</button>
          </form>
        </div>
      </section>
    )
  }

}

export default NewReferral
