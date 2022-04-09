import React, { useState } from 'react';

const LoginSignup = props => {
    
  // Stores anything typed into input boxes under proper variable names 
  const [ username, uernameOnChange ] = useInput('');
  const [ password, passwordOnChange ] = useInput('');
  const [ email, emailOnChange ] = useInput('');

  // Handles input boxes for storage of variable names
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };
    
  const sendSignUpRequest = ()=>{
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


    }
    else {return console.log('check errors above')}
  }

  const sendLogInRequest = ()=>{
        
  }

    return (
        <div>
            hi
        </div>

   )
}

export default LoginSignup;