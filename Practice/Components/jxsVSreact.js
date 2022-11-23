import React from "react";

const Hello=()=>{
    //jxs format
        return(
            <div id='divsion'>
                <h1 id='head' className='head'>Hello Abilash</h1>
            </div>
        )
    /*normal react format*/
    //return (React.createElement('div',{id:'division', className:'name'},React.createElement('h1',{id:'innereh1'},'Hello abilash')));
}
export default Hello;