import React from 'react'
function Login() {
    function check()
    {
        var a=document.getElementById("email").value;
        var b=document.getElementById("pass").value;
        if(a=="dhanish.ec19@bitsathy.ac.in" && b=="12345678")
        {
          //history.push('https://www.bing.com/search?q=dell+sleep+button+shortcut&cvid=0e86f116fe9e4d98b038ad5349496910&aqs=edge..69i57.8899j0j1&pglt=515&FORM=ANNTA1&PC=ASTS')
          alert("Login successfull");
        }

        else alert("Ivalid Email or password");
    }
  return (
    <div>
        <h2>Email</h2><br></br>
        <input id="email"type="text"></input>
        <br></br>
        <h2 >Password</h2><br></br>
        <input id="pass"type="password"></input><br></br>
        <button onClick={check}></button>
    </div>
  )
}

export default Login