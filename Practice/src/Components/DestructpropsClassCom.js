import React, { Component } from 'react'

class DestructpropsClassCom extends Component {
  render() {
    const {name,role}=this.props
    //const {state1,state2}=this.state
    return (
      <div>
        <h1>Hello {name} ur role is{role}</h1>
    </div>
    )
  }
}

export default DestructpropsClassCom