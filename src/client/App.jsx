import React, { Component } from 'react';
import LoginSignup from './Components/LoginSignup.jsx';


import Nav from './Containers/NavigationContainer.jsx';
import Main from './Containers/MainContainer.jsx';
import React, { useState } from 'react';

const App = () => {
    const [loggedIn, setLogin] = useState("something silly");
    return (
     <div className="app">
       <section>
      <Nav loginState={loggedIn}/>
       </section>
       <section>
      <Main loginState={loggedIn}/>
       </section>
       <LoginSignup />

     </div>
    );
}

export default App;
