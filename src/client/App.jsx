import React, { Component } from 'react';
import LoginSignup from './Components/LoginSignup.jsx';


class App extends Component {
  render() {
    return (
     <div className="app">
       <section>
         <div>This is our app for now</div>
       </section>
       <LoginSignup />

     </div>
    );
  }
}

export default App;
