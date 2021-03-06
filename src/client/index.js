import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import LoginSignup from './Components/LoginSignup.jsx';
import AddCampaign from './Components/AddCampaign.jsx';
import CampaignPage from './Components/Campaign.jsx';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="login" element={<LoginSignup type={'login'}/>} />
        <Route path="signup" element={<LoginSignup type={'signup'}/>} />
        <Route path="campaignPage" element={<CampaignPage />} />
        <Route path="campaign" element={<AddCampaign />} />

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


