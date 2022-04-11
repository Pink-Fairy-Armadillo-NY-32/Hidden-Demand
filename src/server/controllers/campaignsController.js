const db = require('../models/signupModel');
const campaigns = {};

//client get request on page load
campaigns.getAllCampaigns = async (req, res, next) => {
  //grab all campaigns and send it back to the client. InnerJoin with the users table to grab username.
  const text = `
  SELECT campaign.*, users.username
    FROM campaign 
      INNER JOIN users 
        ON campaign.posted_by = users.user_id`;
  const { rows } = await db.query(text);
  res.locals.campaigns = rows;
  console.log(res.locals.campaigns)
  return next();
}

//Client post request adds a new campaign
campaigns.newCampaign = async (req, res, next) => {
  const {name, company, url, description, img} = req.body;
  const {user_id} = req.cookies; 
  //if user is not logged in, user will not be able to create a new post
  if(!user_id) return next({
    log: `campaignController.newCampaign: ERROR: Invalid cookie, user_id`,
    message: {err: `You must be logged in to post a new campaign`}
  });
  //if user is logged in, create a new post and add it to database. Query returns new campaign
  const campaign = 'INSERT INTO CAMPAIGN(name, posted_by, company, url, description, img) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
  
  try{
  const params = [name, user_id, company, url, description, img]; 
  const response = await db.query(campaign, params);
  
  //innerJoin newly inserted campaign entry with the username from users table
  const join = `SELECT campaign.*, users.username FROM campaign INNER JOIN users ON campaign.posted_by = users.user_id WHERE id=${response.rows[0].id}`;
  const joinResponse = await db.query(join);
  //send response back to client
  res.locals.newCampaign = joinResponse.rows[0];
  return next();
  }
  catch(err){
    console.log(err)
    return next({
      log: `campaignController.newCampaign: ERROR: ${err}`,
      message: {err: `Error occurred in campaignController.newCampaign ${err.error}`}
    });
  }
}

module.exports = campaigns;




//GRAVEYARD
  //     WHERE ( SELECT COUNT(campaign_id) AS numComments 
  //       FROM user_comments WHERE campaign_id=);
  // // SELECT COUNT(campaign_id) AS numComments 
  // //   FROM user_comments WHERE campaign_id = ;
  // // SELECT COUNT(campaign_id) AS numComments FROM user_comments WHERE campaign_id = 2