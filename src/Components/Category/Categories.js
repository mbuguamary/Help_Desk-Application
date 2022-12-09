import React from 'react'

const Categories = ({id,category_name}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{category_name}</td>
      <td><button>Delete</button></td>
      
 
    </tr>

  )
}

export default Categories