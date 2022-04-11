import React, { useEffect, useState } from 'react';
import CampaignCard from '../Components/CampaignCard.jsx'
import { Outlet } from 'react-router-dom';

const CampaignContainer = (props) => {

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('/campaigns', {
      method: 'GET'
    })
      .then(resp => resp.json()) 
      .then(resp => {
        const campaignInfo = Object.values(resp);
        // console.log(campaignInfo)
        setData(campaignInfo)
      })
      .catch(err=>{console.log(err)})
  },[])

  
return (
    <section className='campaignContainer'>
      {data && data.map(campaign=><CampaignCard key = {"campaign"+ campaign.id} campaign = {campaign}/>)}
      < Outlet />
    </section>

)
}


export default CampaignContainer;