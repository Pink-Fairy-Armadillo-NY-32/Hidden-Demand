import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';


const LoginSignup = props => {
    
 

  // Handles input boxes for storage of variable names
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };

   // Stores anything typed into input boxes under proper variable names 
   const [ username, usernameOnChange ] = useInput('');
   const [ password, passwordOnChange ] = useInput('');
   const [ email, emailOnChange ] = useInput('');
    
  const sendSignUpRequest = ()=>{
    console.log('sending sign up request')
    if (username === ''){console.log('username must be input')}
    if (password === ''){console.log('password must be input')}
    if (email === ''){console.log('email must be input')}
    if (username !== '' && password !== '' && email !== ''){
      const requestBody = {
        username,
        password,
        email
      }

      fetch('/signup', {// WHAT IS THE ENDPOINT HERE ? <<<<<<<<-------------------------------

        method: 'POST',
        headers: {
        'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(requestBody)
      })  
        .then(resp => resp.json())// WHAT IS THE RESPONSE HERE? WE USING COOKIES?
        .then(()=>{console.log(`success!`)})
        .then(() => {props.history.push('/')})
        .catch(err=>{console.log(err)})

    }
    else {return console.log('check errors above')}
  }

  const sendLogInRequest = ()=>{
    console.log('sending log in request')
    if (username === ''){console.log('username must be input')}
    if (password === ''){console.log('password must be input')}
    if (username !== '' && password !== ''){
      const requestBody = {
        username,
        password
      }

      fetch('/login', {// WHAT IS THE ENDPOINT HERE ? <<<<<<<<-------------------------------
        method: 'POST',
        headers: {
        'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(requestBody)
      })  
        .then(resp => resp.json()) // WHAT IS THE RESPONSE HERE? WE USING COOKIES?
        .then(()=>{console.log(`success!`)}) 
        // .then(() => {props.history.push('/')})
        .catch(err=>{console.log(err)})

    }
    else {return console.log('check errors above')}
  }

  // Conditionally render button text and email input based on whether user is signing up or logging in
  
  let buttonText;
  let emailInputDiv;
  let buttonPress;

  if (props.type === 'login'){
    buttonText = 'Log In';
    buttonPress = sendLogInRequest;
  }

  if (props.type === 'signup'){
    buttonText = 'Create Account';

    emailInputDiv=[
      <div className = "inputBox" id = "emailInput">
        <label id="email">Email Address: </label>
        <input name="email" placeholder="enter email" onChange={emailOnChange}/>
      </div>
    ]
    buttonPress = sendSignUpRequest;
  }
// ------------------------------- Return HTML elements -----------------------------------------------------
    return (
      <main>
          <div className = "inputBox" id = "usernameInput">
          <label id="username">User Name: </label>
          <input name="username" placeholder="enter username" onChange={usernameOnChange} />
        </div>
        <div className = "inputBox" id = "passwordInput">
          <label id="password">Password: </label>
          <input name="password" type = "password" placeholder="enter password" onChange={passwordOnChange} />
        </div>

        {/* need to change this to conditionally render based on whether signing up or logging in */}
        {emailInputDiv}

      <button type="button" className="btnMain" onClick={
        buttonPress
      }>{buttonText}</button>
      </main>
   )
}

export default LoginSignup;