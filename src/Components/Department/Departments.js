const Departments = ({id,department_name}) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{department_name}</td>
        <td><button>Delete</button></td>
        
   
      </tr>
  
    )
  }
  
  export default Departments