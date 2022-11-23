import React from 'react';
/*==>functionl component
/*function Geet(){
    return <h1>Hello dhanish</h1>
}*/
const Geet=()=><h1>Hello Dhanish</h1> 
/* Default export if we export like this we can change the export name in import statemnet */
export default Geet;
/*
==>export in a single link, import statement is same as function name
export const Geet=()=><h1>Hello Dhanish</h1> 
import {Geet} from './Components/Geet'
*/
