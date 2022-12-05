import React from 'react'

const Ticket = () => {
  return (
    <table >
    <tbody>
      { <tr >
        <th >
          <h3 className="ui center aligned header">Id</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Description</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Creator</h3>

        </th>
        <th>
          <h3 className="ui center aligned header">Category</h3>
          
        </th>
        <th>
          <h3 className="ui center aligned header">status</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">created</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Updated</h3>
        </th>
      </tr> }
      </tbody>
      </table>

  )
}

export default Ticket