

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
<<<<<<< HEAD
import React from 'react';
=======
import LoginSignup from './Components/LoginSignup.jsx'
>>>>>>> dev

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="login" element={<LoginSignup type={'login'}/>} />
        <Route path="signup" element={<LoginSignup type={'signup'}/>} />
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app'),
);


