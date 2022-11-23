import React,{Component} from "react";
class ClassEventClick extends Component {
    buttonClick(){
        alert("Button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Click</button>
      </div>
    )
  }
}

export default ClassEventClick