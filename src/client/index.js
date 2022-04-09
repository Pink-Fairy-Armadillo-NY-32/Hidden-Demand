
import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.jsx";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="login" element={<Login-Signup />} />
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


