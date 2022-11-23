import React from 'react'

function NameList() {
    const names=['dhanish','abi','harsha'];
    const namesList=names.map(name=><h3>{name}</h3>)
    
  return (
    <div>{namesList}</div>
  )
}
export default NameList;
/*
  List rendering
  For more vist yt codevolution   ReactJS Tutorial - 18 - Lists and Keys
*/