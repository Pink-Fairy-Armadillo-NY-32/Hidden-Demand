import React, { useState } from 'react';
//import { Link, withRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const LoginSignup = props => {
  let navigate = useNavigate();    
 

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
        .then(() => {
          //history.pushState({loggedIn: true}, "signup success", '../');
          navigate("../", { state: { loginState: true, userId: 'tbd'}, replace: true });
        })
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
        .then(()=>{
          history.pushState({loggedIn: true}, "signup success", '../');
          navigate("../", { state: { loginState: true, userId: 'tbd', history: history.state }, replace: true });
        })
        .catch(err=>{console.log(err)})

    }
    else {return console.log('check errors above')}
  }

 // Conditionally render button text and email input based on whether user is signing up or logging in
  
 let buttonText;
 let emailInputDiv;
 let buttonPress;
 let header;

 const cancelPress = () => {
  history.pushState({loggedIn: false}, "canceled", '../');
  navigate("../", { state: { loginState: false, userId: 'tbd', history: history.state }, replace: true });
 }
 if (props.type === 'login'){
   header = "Log In"
   buttonText = 'Log In';
   buttonPress = sendLogInRequest;
 }

 if (props.type === 'signup'){
   header = "Sign Up"
   buttonText = 'Create Account';

   emailInputDiv=[
     <div className = "inputBox" id = "emailInput">
       <label id="email">Email Address: </label>
       <input className='input' name="email" placeholder="enter email" onChange={emailOnChange}/>
     </div>
   ]
   buttonPress = sendSignUpRequest;
 }
// ------------------------------- Return HTML elements ----------------------------------------------------- 
      return (
     createPortal(
      <div
          className="modal-wrapper"
          onClick={() => history.back()}>
        <div
            className="modal"
            onClick={e => e.stopPropagation()}>
            <h3>{header}</h3>
            <div className = "inputBox" id = "usernameInput">
              <label id="username">User Name: </label>
              <input className='input' name="username" placeholder="enter username" onChange={usernameOnChange} />
            </div>
            <div className = "inputBox" id = "passwordInput">
              <label id="password">Password: </label>
              <input className='input' name="password" type = "password" placeholder="enter password" onChange={passwordOnChange} />
            </div>

            {/* need to change this to conditionally render based on whether signing up or logging in */}
            {emailInputDiv}

          <button type="button" className="btnMain" onClick={buttonPress}>{buttonText}</button>
          <button type="button" className="btnCancel" onClick={cancelPress}>Cancel</button>
        </div>
      </div>,
      document.getElementById("modal_root")
     )
   )
}

export default LoginSignup;
