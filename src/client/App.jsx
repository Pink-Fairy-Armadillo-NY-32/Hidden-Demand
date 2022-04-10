import Nav from './Containers/NavigationContainer.jsx';
import Main from './Containers/MainContainer.jsx';
import React, { useState } from 'react';
import './styles/styles.scss';

const App = () => {
    const [loggedIn, setLogin] = useState(false);
    return (
     <div className="app">
       <section>
      <Nav loginState={loggedIn}/>
       </section>
       <section>
      <Main loginState={loggedIn}/>
       </section>
     </div>
    );
}

export default App;
