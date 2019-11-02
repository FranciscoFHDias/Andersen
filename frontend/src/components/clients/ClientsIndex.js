import React from 'react'
import axios from 'axios'
import Line from '../common/Line'

class ClientsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      clients: []
    }
  }

  componentDidMount() {
    axios.get('/api/clients/')
      .then(res => {
        this.setState({ clients: res.data })
      })
  }

  render() {
    return(
      <div className="section">
        <div className="container">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th title="Name">Name</th>
                <th title="Stage">Stage</th>
                <th title="Value">Value</th>
                <th title="Priority">Priority</th>
                <th title="Partner">Partner</th>
                <th title="Referral Source">Referral Source</th>
                <th title="Date">Date</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.clients && <h2>Loading...</h2>}
              {this.state.clients.map(client =>
                <Line key={client.id} {...client} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ClientsIndex
