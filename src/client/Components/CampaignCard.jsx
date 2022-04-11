import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const CampaignCard = props =>{

  const {id, name, company, posted_by, numComments, description, username } = props.campaign;


  console.log(props.campaign)
// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    <main>
      <div className = "campaignCard">
        <Link to="campaignPage" state ={{id, name, company, posted_by, numComments, description, username}} >Bring Back The {name}</Link>
        <p className = "companyName">Petition to: {company}</p>
        <p className = "postedBy">Posted by: {username}</p>
        <p className = "comments">{numComments} comments</p>
          <button type="campaignButton" className="vote" >upvote</button>
          <button type="campaignButton" className="vote" >downvote</button>
      </div>
      < Outlet />
    </main>
  );

};

export default CampaignCard;