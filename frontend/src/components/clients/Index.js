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
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Stage">Stage</abbr></th>
            <th><abbr title="Value">Value</abbr></th>
            <th><abbr title="Priority">Priority</abbr></th>
            <th><abbr title="Partner">Partner</abbr></th>
            <th><abbr title="Referral Source">Referral Source</abbr></th>
            <th><abbr title="Date">Date</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Stage">Stage</abbr></th>
            <th><abbr title="Value">Value</abbr></th>
            <th><abbr title="Priority">Priority</abbr></th>
            <th><abbr title="Partner">Partner</abbr></th>
            <th><abbr title="Referral Source">Referral Source</abbr></th>
            <th><abbr title="Date">Date</abbr></th>
          </tr>
        </tfoot>
        <tbody>
          {!this.state.clients && <h2>Loading...</h2>}
          {this.state.clients.map(client =>
            <Line key={client.id} {...client} />
          )}
        </tbody>
      </table>
    )
  }
}

export default ClientsIndex
