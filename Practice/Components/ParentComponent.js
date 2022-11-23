import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
         
      }
      this.greetParent=this.greetParent.bind(this)
    }
    //this is for childcomponent without argument
    /*greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }*/
    // this is for childCoomponent with argument'
    greetParent(childName)
    {
      this.setState({
        parentName:'child'
      },()=>alert(this.state.parentName))
      alert(`hello ${childName}`)
    }
  render() { 
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
/* Parent compoent and child componenet are interlinked 
known how to call a fucntion in another js file and return a argument to parentComponent
*/