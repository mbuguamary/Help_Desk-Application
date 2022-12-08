import React, { useEffect, useState } from 'react'
 import Categories from './Categories'

const CategoryList = (props) => {
 const[categories,SetCategories] = useState([])
 
 useEffect(() =>{
fetch("http://localhost:3000/categories")
.then(res => res.json())
.then(data => {SetCategories(data)});
 },[]);
 
  return(
 <table >
    <tbody>
      { <tr >
        <th >
          <h3 className="ui center aligned header">Id</h3>
        </th>
        
        <th>
          <h3 className="ui center aligned header">Category</h3>

        </th>
        
        
      </tr> }
      {categories.map(category => {
        return(
        <Categories
         key={category.id}
         id={category.id}
         category_name={category.category_name}
         
        
        />);
      })

      }
      </tbody>
      </table>
      )
}

export default CategoryList