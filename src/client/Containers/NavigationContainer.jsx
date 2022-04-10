import React, { Component } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = (props) =>  {
    //const loginState = props.loginState;
    const {state} = useLocation();
    
    return (
     <div className="nav">
       <section>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to={{pathname: "/login"}}>Login</Link> |{" "}
        <h1>Hidden Demand</h1>
        {console.log(state?.loginState, state?.history.loginState)}
        <Link to="/signup" >Sign Up</Link>
        <Outlet />
      </nav>
       </section>
     </div>
    );
}

export default Nav;
