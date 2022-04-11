import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const AddCampaign = (props) => {
  let navigate = useNavigate(); 
  const {state} = useLocation();
  console.log(state);

  // Handles input boxes for storage of variable names
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };

   // Stores anything typed into input boxes under proper variable names 
   const [ name, nameOnChange ] = useInput('');
   const [ company, companyOnChange ] = useInput('');
   const [ url, urlOnChange ] = useInput('');  
   const [ description, descriptionOnChange ] = useInput('');  
   const [ img, imgOnChange ] = useInput('');  

   const addCampaign = ()=>{
    console.log('adding campaign to database!')
    if (name === ''){console.log('product name must be input')}
    if (company === ''){console.log('company name must be input')}
    if (description === ''){console.log('product/campaign description must be input')}
    if (name !== '' && company !== '' && desc !== ''){
      const requestBody = {
        name,
        company,
        url,
        description,
        img
      }
      
      fetch('/campaigns', {
        method: 'POST',
        headers: {
        'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(requestBody)
      })  
        .then(resp => resp.json())
        .then(()=>{console.log(`success!`)})
        .then(() => {
          navigate("/",{state: {loginState: true, username: state.username}}, {replace: true });
          return;
        })
        .catch(err=>{console.log(err)})

    }
    else {return console.log('check errors above')}
  }   

  const cancelPress = () => {
    navigate("/", {state: {loginState: true, username: state.username}}, { replace: true });
    return;
   }

  
return (
  createPortal(
    <div
        className="modal-wrapper"
        onClick={() => history.back()}>
      <div
          className="modal"
          onClick={e => e.stopPropagation()}>
          <h3></h3>
          <div className = "inputBox" id = "productNameInput">
            <label id="productName">Discontinued Product Name: </label>
            <input className='input' name="name" placeholder="(required) enter product name" onChange={nameOnChange} />
          </div>
          <div className = "inputBox" id = "companyInput">
            <label id="company">Manufacturer Name: </label>
            <input className='input' name="company" placeholder="(required) enter company name" onChange={companyOnChange} />
          </div>
          <div className = "inputBox" id = "descriptionInput">
            <label id="description">Description: </label>
            <input className='input' name="description" placeholder="(required) enter product/campaign description" onChange={descriptionOnChange} />
          </div>
          <div className = "inputBox" id = "urlInput">
            <label id="url">Company Website: </label>
            <input className='input' name="url" placeholder="(optional) enter link to company site" onChange={urlOnChange} />
          </div>
          <div className = "inputBox" id = "imgInput">
            <label id="img">Product Image: </label>
            <input className='input' name="img" placeholder="(optional) enter product image" onChange={imgOnChange} />
          </div>

         

        <button type="button" className="btnMain" onClick={addCampaign}>Add Campaign</button>
        <button type="button" className="btnCancel" onClick={cancelPress}>Cancel</button>
      </div>
    </div>,
    document.getElementById("modal_root")
   )
)

}


export default AddCampaign;