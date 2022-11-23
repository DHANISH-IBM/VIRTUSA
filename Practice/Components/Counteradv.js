import React, { Component } from 'react'
export class Counteradv extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
    Increment(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
        /* always use this.setstate to update the value dont use this.count=this.count+1  is totally wrong */
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        /* here if we not write prevstate as a argument the output will be same as counter.js that is increment by 1 boz react group all the 
        funciton calls into one call to over come this, prevstate is send as argument to the increment setstate fuction */
    }
  render() {
    return (
      <div> 
        <div>count -{this.state.count}</div>
        <button onClick={()=>this.IncrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counteradv
        
          

/*
rec (tab)=class skelton
rconst(tab) = constructor skelton
*/