import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const CampaignPage = props =>{
  let navigate = useNavigate();    

  // Deconstruct values off of props
  const location = useLocation();
  const {id, name, company, posted_by, numComments, numVotes, description, username } = location.state;
  console.log("state", location.state)

  const fetchURL = '/campaigns/comments/'+ id;

  // Handles input boxes for storage of variable names
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };

  // Stores anything typed into input boxes under proper variable names 
  const [ comment, commentOnChange ] = useInput('');
  
  // Function for adding comment to database
  const addComment = ()=>{
    console.log('adding comment!')

    if (comment === ''){console.log('no comment was input')}
    if (comment !== ''){
      const requestBody = {
        comment
      }
      
      fetch(fetchURL, {
        method: 'POST',
        headers: {
        'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(requestBody)
      })  
        .then(resp => resp.json())
        .then(()=>{console.log(`success!`)})
        .then(() => {
          navigate("/",{state: {loginState: true, username: state.username, userid: state.userid}}, {replace: true });
          return;
        })
        .catch(err=>{console.log(err)})

    }
    else {return console.log('check errors above')}
  }   

  
  // ON RENDER, will pull all comments from database for rendering

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch(fetchURL, {
      method: 'GET'
    })
      .then(resp => resp.json()) 
      .then(resp => {
        console.log(resp)
        // console.log(campaignInfo)
        setData(resp)
      })
      .catch(err=>{console.log(err)})
  },[])

const cancelPress = () => {
  history.pushState({loggedIn: false}, "canceled", '../');
  navigate("../", { state: { loginState: false, userId: 'tbd', history: history.state }, replace: true });
 }

// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    createPortal(
    <main className="modal-wrapper">
      <div className='modal'>
      <div className = "campaign">
        <h1 className = "campaignTitle">BRING BACK THE {name}</h1>
        <h2 className = "campaignCompany">From <a href = "mcdonalds.com">{company}</a></h2>
        <h4 className = "campaignPoster">Campaign Started By {username}</h4>
        <p className="campaignDescription">{description}</p>
        <div className = "commentBox">
          {data && data.map(comments => <p> {comments.comment} <i>posted by {comments.username}</i></p>)}
        </div>
        <div className = "inputBox" id = "commentInput">
            <label id="comment">Enter new comment</label>
            <input className='input' name="comment" placeholder="your comment here" onChange={commentOnChange}/>
          </div>
        <button type="button" className="btnMain" onClick={addComment}>Add Comment</button>
      </div>
      </div>
      <button type="button" className="btnCancel" onClick={cancelPress}>Close</button>
    </main>,
     document.getElementById("modal_root")
    )
  );

};

export default CampaignPage;