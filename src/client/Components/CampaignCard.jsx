import React, { useState } from 'react';

const CampaignCard = props =>{

  // Deconstruct values off of props
  const {name, company, posted_by, numComments, numVotes } = props.campaign;

// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    <main>
      <div className = "campaignCard">
        <a className = "campaignName" href = {""/* THIS WILL NEED A URL TO RENDER CAMPAIGN COMMENTS(?) */}>Bring Back The {name}</a>
        <p className = "companyName">Petition to: {company}</p>
        <p className = "postedBy">Posted by: {posted_by}</p>
        <p className = "comments">{numComments} comments</p>
          <button type="campaignButton" className="vote" >upvote</button>
          <button type="campaignButton" className="vote" >downvote</button>
      </div>
    </main>
  );

};

export default CampaignCard;