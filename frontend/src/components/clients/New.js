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




  render() {
    if (!this.state.partners && !this.state.referrals) return 'Loading...'
    return(
      <div className="container">
        <form>
          <div className="field">
            <label className="label">Client Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g. Julius Caesar" />
            </div>
          </div>
          <div className="field">
            <label className="label">Stage</label>
            <div className="control">
              <div className="select">
                <select name="stage">
                  <option value="Not_Yet_Contacted">Not Yet Contacted</option>
                  <option value="First Contact">First Contact</option>
                  <option value="Subsequence Contact">Subsequence Contact</option>
                  <option value="Won">Won</option>
                  <option value="lost">Lost</option>
                  <option value="abandoned">Abandoned</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Value</label>
            <div className="control">
              <input className="input" type="number" placeholder="e.g. Julius Caesar" />
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
              <div className="select">
                <select name="partner">
                  {this.state.partners.map(partner =>
                    <option key={partner.id} value={partner.id}>{partner.name}</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Referral Source</label>
            <div className="control">
              <div className="select">
                <select name="partner">
                  {this.state.referrals.map(referral =>
                    <option key={referral.id} value={referral.id}>{referral.name} at {referral.company}</option>
                  )}
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

export default NewClient
