import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/*<button onClick={props.greetHandler}>ChildComponent</button>*/}
        {/* the main problem with above eventhandler is we are not able to send any argument to the funciton, to overcome this arrow function is used */}
        <button onClick={()=>props.greetHandler('I am child da')}>Button</button>
    </div>
  )
}
export default ChildComponent