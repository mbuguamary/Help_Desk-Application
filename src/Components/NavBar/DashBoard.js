import React from 'react'
import { useEffect,useState } from 'react'
import './Dashboard.css'
import Ticket from '../Helpdesk/Ticket'
const DashBoard = () => {
  const[tickets,SetTickets] = useState([])
 
  useEffect(() =>{
 fetch("http://localhost:3000/tickets")
 .then(res => res.json())
 .then(data => {SetTickets(data)});
  },[]);
 return(
  <div>
    <h1>Dashboard Today </h1>
    <div className='tasks'>
      <div className='ticket'>
       <h4>All Tickets</h4> 
        <h4>15</h4>
      </div>
      <div className='ticket'>
        <h4>Closed Tickets</h4>
        <h4>8</h4>
        </div>
      <div className='ticket'>
      <h4>Pending Tickets</h4>
      <h4>7</h4>
        
        </div>
      <div className='ticket'>
        <h4> Assg Tickets</h4>
        <h4>4</h4>
       
        
        </div>
    </div>
    <div className='ptickets'> 
      <h5>Pending Tickets</h5> 
      <button>View All</button>
     </div>
     <div>
    <table>
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
    </div>
</div>
 )   
}

export default DashBoard