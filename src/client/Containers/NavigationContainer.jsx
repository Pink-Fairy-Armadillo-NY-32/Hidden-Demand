import React, { Component } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = (props) =>  {
    //const loginState = props.loginState;
    const {state} = useLocation();
    
    return (
     <div className="nav">
       <section>
      <nav id='headerbar' >
        
        <Link to={{pathname: "/login"}} id='headerbutton' type='button' className='top'>Login</Link>
        <h2>Hidden Demand</h2>
        {console.log(state?.loginState, state?.history.loginState)}
        <Link to="/signup" className='top' id='signupbutton' >Sign Up</Link>
        <Outlet />
      </nav>
       </section>
     </div>
    );
}

export default Nav;
