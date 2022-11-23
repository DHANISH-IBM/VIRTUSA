import React from 'react'
import './StyleSheet.css'
const heading={
  color:'green',
  fontSize:'72 px'
}
export default function StyleSheet() {
  return (
    <div>
       <h1 className='primary'>Welcome to StyleSheet</h1>
       <h1 style={heading}>Welcome to StyleSheet2</h1>
    </div>
  )
}
/*
 Styliny 4  types
 1.Form another css file
 2.Inline 
 3.CSS modules
 4.CSS from js libraries
*/