import React from 'react'
import { Link } from 'react-router-dom'

const Line = ({ ...client }) => {
  return(
    <tr>
      <th>
        <Link to={`/clients/${client.id}`}>{client.name}</Link>
      </th>
      <td>{client.stage}</td>
      <td>{client.value}</td>
      <td>{client.priority}</td>
      <td>{client.partner.name}</td>
      <td>{client.referral.company}</td>
      <td>{client.created_at.slice(0, 10)}</td>
    </tr>
  )
}

export default Line
