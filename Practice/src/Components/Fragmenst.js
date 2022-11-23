import React from 'react'

function Fragmenst() {
  return (
    <React.Fragment>
        <h1>Hello boy</h1>
        <table>
            <tr>
                <td>Name</td>
                <td>Dept</td>
            </tr>
        </table>
    </React.Fragment>
  )
}

export default Fragmenst


/*
   Fragments to used to avoid the default insertion of div tag into the root node while return from a function
   While using React.Fragment we can avoid the insertion of div tag to the root else use <>
*/