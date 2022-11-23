import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         topic:''
      }
    }
    onChangeUserName=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    onCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    onSelectChanges=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleform=(event)=>{
        alert(`${this.state.userName}  ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }
  render() {
    return (
        <form onSubmit={this.handleform}>
         <div>
            <label>Username</label>
            <input type='text' value={this.state.userName} onChange={this.onChangeUserName}></input>
         </div>
         <div>
            <label>Comments</label>
            <input type='text' value={this.state.comments} onChange={this.onCommentsChange}></input>
         </div>
         <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.onSelectChanges}>
                <option value="react">React</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
            </select>
         </div>
         <button>Submit</button>
        </form>
      
    )
  }
}
