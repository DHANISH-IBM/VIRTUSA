import React from "react";

const Propsprops=(props)=>
{
    return(
        <div>
        <h1>Hello {props.name} a.k.a {props.role}</h1>
        <p>{props.children}</p>
        </div>
    )
}
export default Propsprops;