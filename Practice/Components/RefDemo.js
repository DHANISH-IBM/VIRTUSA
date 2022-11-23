import React, { Component } from 'react'

export default class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    onClickHandler=()=>{
        alert(`Hi da ${this.inputRef.current.value}`)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.onClickHandler}>button</button>
      </div>
    )
  }
}
/*
  Ref is used to focus on a particlular area while opening any app or forms etc..
*/