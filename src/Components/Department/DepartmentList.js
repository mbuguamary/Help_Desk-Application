import React, { useEffect, useState } from 'react'
 
import Departments from './Departments';

const DepartmentList = (props) => {
 const[departments,SetDepartments] = useState([])
 
 useEffect(() =>{
fetch("http://localhost:3000/departments")
.then(res => res.json())
.then(data => {SetDepartments(data)});
 },[]);
 
  return(
 <table >
    <tbody>
      { <tr >
        <th >
          <h3 className="ui center aligned header">Id</h3>
        </th>
        
        <th>
          <h3 className="ui center aligned header">Department</h3>

        </th>
        
        
      </tr> }
      {departments.map(department => {
        return(
        <Departments
         key={department.id}
         id={department.id}
         department_name={department.department_name}
         
        
        />);
      })

      }
      </tbody>
      </table>
      )
}

export default DepartmentList