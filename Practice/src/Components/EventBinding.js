import React, { Component } from 'react'
 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hi da"
      }
      //3.this.buttonClicked=this.buttonClicked.bind(this)
    }
    buttonClicked()
    {
        this.setState({
            message:"hiiii da"
        })
        console.log(this)
    }
    buttonClicked=()=>{
      this.setState({
        message:"hiiii da"
      })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/*1.<button onClick={this.buttonClicked.bind(this)}>Button</button>*/}
        {/* the above event handler rerender all those things, so it cause performance issue */}
        {/* or */}
        {/*2.<button onClick={()=>this.buttonClicked()}>Submit</button>*/}
        {/* or 3.4. */}
        <button onClick={this.buttonClicked}>Submit</button>{/* constructor calling */}

      </div>
    )
  }
}
/* buttonClicked(this)=> here this is used to bind the buttonClicked function, to view more please see the this keyword fuctions in js */
export default EventBinding
/* Here we seen 4 approches reg event binding in Class component
1. Binding in render
2.arrow fucntion in render
3.binding in class constructor
4.class property as arrow function
React suggest 3 or 4
3 is best thing to follow
*/