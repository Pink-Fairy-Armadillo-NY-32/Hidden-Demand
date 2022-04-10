import React, { useState } from 'react';

const CampaignCard = props =>{

  // Deconstruct values off of props
  const {campaignName, companyName, postedBy, numComments, numVotes } = props;



// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    <main>
      <div className = "campaignCard">
        <a className = "campaignName" href = {""/* THIS WILL NEED A URL TO RENDER CAMPAIGN COMMENTS(?) */}>Bring Back The McLobster{campaignName}</a>
        <p className = "companyName">Petition to: {companyName}</p>
        <p className = "postedBy">Posted by: {postedBy}</p>
        <p className = "comments">{numComments} comments</p>
          <button type="campaignButton" className="vote" onClick={console.log('upvoted')}>upvote</button>
          <button type="campaignButton" className="vote" onClick={console.log('downvoted')}>downvote</button>
      </div>
    </main>
  );

};

export default CampaignCard;