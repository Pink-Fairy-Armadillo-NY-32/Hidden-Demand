import React from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Nav = (props) =>  {
    //const loginState = props.loginState;
    const {state} = useLocation();
    const navigate = useNavigate();
    
    return (
     <div className="nav">
       <section>
      <nav id='headerbar' >
        <h1>Hidden Demand</h1>
        {console.log(state?.loginState, state?.history.loginState)}
        <span>
        <button onClick={() => navigate('/login')} className='top' id='headerbutton' >Login</button>
        <button onClick={() => navigate('/signup')} className='top' id='signupbutton' >Sign Up</button>
        </span>
        <Outlet />
      </nav>
       </section>
     </div>
    );
}

export default Nav;
