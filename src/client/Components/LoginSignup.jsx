import React, { useState } from 'react';
//import { Link, withRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import regeneratorRuntime from "regenerator-runtime";


const LoginSignup = props => {
  let navigate = useNavigate();    
  const [errorMessage, setErrorMessage] = useState('');
 
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
    
  const sendSignUpRequest = async ()=>{
    console.log('sending sign up request')
    if (username === ''){setErrorMessage('username must be input')}
    if (password === ''){setErrorMessage('password must be input')}
    if (email === ''){setErrorMessage('email must be input')}
    if (username !== '' && password !== '' && email !== '') {
      const requestBody = {
        username,
        password,
        email
      }
      try {
        const resp = await fetch('/signup', {// WHAT IS THE ENDPOINT HERE ? <<<<<<<<-------------------------------

          method: 'POST',
          headers: {
          'Content-Type': 'Application/JSON'
          },
          body: JSON.stringify(requestBody)
        })  
        if (resp.status === 404){
          const response = await resp.json();
          setErrorMessage(response.message);
          return;
        } else 
        {
          const response = await resp.json();
          const user_id = response.user_id;
          const username = response.username;
          navigate("../", { state: { loginState: true, user_id: user_id, username: username}, replace: true });
        }
        }
        catch (err) {
            console.log("error handling", err);
            console.log(err)}
        }
      else {return console.log('check errors above')}

  }

  const sendLogInRequest = async ()=>{
    console.log('sending log in request')
    if (username === ''){setErrorMessage('username must be input')}
    if (password === ''){setErrorMessage('password must be input')}
    if (username !== '' && password !== ''){
      const requestBody = {
        username,
        password
      }
      try { 
      const resp = await fetch('/login', {// WHAT IS THE ENDPOINT HERE ? <<<<<<<<-------------------------------
        method: 'POST',
        headers: {
        'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(requestBody)
      })
      if (resp.status === 404){
        const response = await resp.json();
        setErrorMessage(response.message);
        return;
      } else 
      {
        const response = await resp.json();
        const user_id = response.user_id;
        const username = response.username;
        navigate("../", { state: { loginState: true, user_id: user_id, username: username}, replace: true });
      }
      }
      catch (err) {
          console.log("error handling", err);
          console.log(err)}
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
          <div>
          <label className="errorMessage">{errorMessage}</label>
          </div>
          <button type="button" className="btnMain" onClick={buttonPress}>{buttonText}</button>
          <button type="button" className="btnCancel" onClick={cancelPress}>Cancel</button>
        </div>
      </div>,
      document.getElementById("modal_root")
     )
   )
}

export default LoginSignup;
