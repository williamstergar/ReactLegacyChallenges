// THIS IS A CHILD COMPONENT OF CATS.JS

import React, { Component } from 'react'
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map(cat => <li>{cat}</li> )}
   </div>
 )
}
 
export default CatList