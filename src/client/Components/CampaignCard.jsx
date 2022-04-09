import React, { useState } from 'react';

const CampaignCard = props =>{

  // Deconstruct values off of props
  const {campaignName, companyName, postedBy, numComments, numVotes } = props;



// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    <main>
      <div className = "campaignCard">
        <button type="button" className="vote" onClick={console.log('upvoted')}>upvote</button>
        <button type="button" className="vote" onClick={console.log('downvoted')}>downvote</button>
        <br/>
        <a className = "campaignName" href = {""/* THIS WILL NEED A URL TO RENDER CAMPAIGN COMMENTS(?) */}>test{campaignName}</a>
        <p className = "companyName">Petition to: {companyName}</p>
        <p className = "postedBy">Posted by: {postedBy}</p>
        <p className = "comments">{numComments} comments</p>
      </div>
    </main>
  );

};

export default CampaignCard;