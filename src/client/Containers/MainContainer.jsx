import React from 'react';
import CampaignContainer from './CampaignContainer.jsx'
import { Outlet } from 'react-router-dom';


const Main = (props) => {

return (
    <div>
        <CampaignContainer />
        <Outlet />
    </div>
)

}

export default Main;
