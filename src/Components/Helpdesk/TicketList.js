import React, { useEffect, useState } from 'react'
import Ticket from './Ticket'; 
import './/Ticket.css'
const TicketList = (props) => {
 const[tickets,SetTickets] = useState([])
 
 useEffect(() =>{
fetch("http://localhost:3000/tickets")
.then(res => res.json())
.then(data => {SetTickets(data)});
 },[]);
 
  return(
 <table >
    <tbody>
      { <tr >
        <th >
          <h3 className="ui center aligned header">Id</h3>
        </th>
        
        <th>
          <h3 className="ui center aligned header">Creator</h3>

        </th>
        <th>
          <h3 className="ui center aligned header">Summary</h3>
          
        </th>
        <th>
          <h3 className="ui center aligned header">Priority</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Status</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Created At</h3>
        </th>
        
      </tr> }
      {tickets.map(ticket => {
        return(
        <Ticket 
         key={ticket.id}
         id={ticket.id}
         name={ticket.name}
         summary={ticket.summary}
         priority={ticket.priority}
         status={ticket.status}
         created_at={ticket.created_at}
        
        />);
      })

      }
      </tbody>
      </table>
      )
}

export default TicketList