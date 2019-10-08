import React from 'react'
import axios from 'axios'

class EditClient extends React.Component {

  constructor() {
    super()
    this.state = {
      client: {}
    }
  }

  componentDidMount() {
    axios
      .get(`api/clients/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ client: res.data })
      })
  }

  render() {
    if(!this.state.client) return null
    return(
      <h1>{this.state.client.name}</h1>
    )
  }
}

export default EditClient
