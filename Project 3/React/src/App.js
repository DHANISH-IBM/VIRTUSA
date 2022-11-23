import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const onSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.fieldErrors) {
        data.fieldErrors.forEach(fieldError => {
          if(fieldError.field === 'email'){
            setEmailError(fieldError.message);
          }

          if(fieldError.field === 'password'){
            setPasswordError(fieldError.message);
          }
        });
      } else {
        alert("Success !!");
      }
    })
    .catch((err) => err);
}
  return (
    <div className="App">
      <input type="text" name="email"/>
      {
        emailError ? <span style={{ color: 'red', fontSize: '12px'}}>{emailError}</span> : ''
      }

      <input type="password" name="password"/>
      {
          passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
      }
    <form id="stripe-login" method="POST" onSubmit={onSubmit}></form>
    </div>
  );
}

export default App;
