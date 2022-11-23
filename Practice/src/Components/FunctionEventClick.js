import React from "react";
function FunctionEventClick() {
    function buttonClicked()
    {
        alert("Button Clicked");
    }
  return (
    <div>
        <button onClick={buttonClicked}>Button</button>
    </div>
  )
}

export default FunctionEventClick
/* if we use onclick="buttonClicked()"as a funciton call it will execute when this file gets render so use witin{} which is knowm as funcition 
not function call */