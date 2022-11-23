import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    return this.state.isLoggedIn?<div>Welcome Dhanish</div>:<div>Welcome Geet</div>
  }
}

export default UserGreeting



/*
  Conditional rendering
  There are 4 types of rendereing
  1. Using if else in return statemen but it lower performance
  2. Using if else and a varaible like {messgae} like we can assign the value to the message based on the conditon but outside side the return statement
  3. Using ternary operator which is shown above(mostly used)
  4. Using short circuit (&&)
*/