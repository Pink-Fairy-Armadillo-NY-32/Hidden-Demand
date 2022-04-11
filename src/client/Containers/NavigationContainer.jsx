import React from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Nav = (props) =>  {
    //const loginState = props.loginState;
    const {state} = useLocation();
    const navigate = useNavigate();
    const loginState = state?.loginState ? state.loginState : false;


    const logout = () => {
      navigate("/", { state: { loginState: false, user_id: '', username: ''}, replace: true });
      }
    const navigateTo = () => {
      navigate('/campaign', {state: {userid: state.user_id, username: state.username}});
    }


    return (
     <div className="nav">
       <section>
      <nav id='headerbar' >
      <div  className='username' style={!loginState ? { display: 'none' } : {}}>Welcome, {state?.username}</div>
        <h1>Hidden Demand</h1>
        <span>
          {console.log(state?.loginState)}
        <button onClick={() => navigate('/login')} className='.hidden' id='headerbutton' style={!loginState ? {} : { display: 'none' }} >Login</button>
        <button onClick={() => navigate('/signup')} className='.hidden' id='signupbutton' style={!loginState ? {} : { display: 'none' }}>Sign Up</button>
        <button onClick={() =>logout()} className='hidden' style={!loginState ? { display: 'none' } : {}} >Log Out</button>
        <button onClick={() => navigateTo()} className='hidden' style={!loginState ? { display: 'none' } : {}}>Add Campaign</button>
        
        </span>
        <Outlet />
      </nav>
       </section>
     </div>
    );
}

export default Nav;
