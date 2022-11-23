import React from 'react'
import ReactDOM from 'react-dom'
export default function PortalDemo() {
  return ReactDOM.createPortal(
        <h1>Hello I am Portal Demo</h1>,
        document.getElementById('portal-demo')
  )
}
/*
  Portal are used to insert the content in any of the division tag in html file in public section after created a new division in it
  Default all the content is append to root node
  Here the data is appended to protal-demo node
*/