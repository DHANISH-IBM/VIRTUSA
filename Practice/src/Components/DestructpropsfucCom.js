import React, { Component } from 'react'

/*const Destructprops=({name,role})=>{
    return (
      <div>
        <h1>Hello {name} role is {role}</h1>
      </div>
    )
    
}*/
/* or */
const Destructprops=({props})=>{
    const {name,role}=props
    return (
      <div>
        <h1>Hello {name} role is {role}</h1>
      </div>
    )
    }
export default Destructprops
/* Destructuring props */