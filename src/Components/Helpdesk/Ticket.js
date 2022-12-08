import React from 'react'

const Ticket = ({id,name,summary,priority,status,created_at,updated_at}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{summary}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td>{created_at}</td>
 
    </tr>

  )
}

export default Ticket