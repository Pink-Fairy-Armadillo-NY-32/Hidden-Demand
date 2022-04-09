import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

const Nav = (props) =>  {
    const loginState = props.loginState;
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
        {console.log(props.loginState)}
        <Link to="/signup" >Sign Up</Link>
      </nav>
      <Outlet />
       </section>
     </div>
    );
}

export default Nav;
