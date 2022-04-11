import Nav from './Containers/NavigationContainer.jsx';
import Main from './Containers/MainContainer.jsx';
import React, { useState } from 'react';
import './styles/styles.scss';
import { Outlet } from 'react-router-dom';

const App = () => {
    
    return (
     <div className="app">
       <section>
      <Nav />
       </section>
       <section>
      <Main />
      < Outlet />
       </section>
     </div>
    );
}

export default App;
