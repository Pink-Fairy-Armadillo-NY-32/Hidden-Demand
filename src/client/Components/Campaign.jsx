import React, { useEffect, useState } from 'react';

const CampaignPage = props =>{
  // Deconstruct values off of props
  // const {name, company, posted_by, numComments, numVotes } = props.campaign;

  const id=1
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
          history.pushState({loggedIn: true}, "comment post success", './');
          navigate("./", { state: { loginState: true, userId: 'tbd'}, replace: true });
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


// ------------------------------- Return HTML elements -----------------------------------------------------
  return (
    <main>
      <div className = "campaign">
        <h1 className = "campaignTitle">BRING BACK THE</h1>
        <h2 className = "campaignCompany">From <a>Mcdonde</a></h2>
        <h4 className = "campaignPoster">Campaign Started By</h4>
        <p className="campaignDescription">Insert description here</p>
        <div className = "commentBox">
          {data && data.map(comments => <p> {comments.comment} <i>posted by {comments.username}</i></p>)}
        </div>
        <div className = "inputBox" id = "commentInput">
            <label id="comment">Enter new comment</label>
            <input className='input' name="comment" placeholder="your comment here" onChange={commentOnChange}/>
          </div>
        <button type="button" className="btnMain" onClick={addComment}>Add Comment</button>
      </div>
    </main>
  );

};

export default CampaignPage;