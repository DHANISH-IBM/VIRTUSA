import React, { Component } from 'react'
export class Counter extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
    Increment(){
        this.setState({
            count:this.state.count+1
        },()=>console.log('Value:',this.state.count))
        /*if we write consoel.log outside it is asynchromus so console.log executed before count increment*/
       /* always use this.setstate to update the value dont use this.count=this.count+1  is totally wrong  in this rendering is not done 
       by react... applicable to counterabc.js*/
    }
  render() {
    return (
      <div> 
        <div>count -{this.state.count}</div>
        <button onClick={()=>this.Increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
        
          

/*
rec (tab)=class skelton
rconst(tab) = constructor skelton
*/