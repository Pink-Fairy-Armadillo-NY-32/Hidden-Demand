import Nav from './Containers/NavigationContainer.jsx';
import Main from './Containers/MainContainer.jsx';
import React, { useState } from 'react';
import './styles/styles.scss';

const App = () => {
    
    return (
     <div className="app">
       <section>
      <Nav />
       </section>
       <section>
      <Main />
       </section>
     </div>
    );
}

export default App;
