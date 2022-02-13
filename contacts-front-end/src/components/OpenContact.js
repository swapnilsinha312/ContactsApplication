import React from 'react';
import { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import validator from 'validator'

function OpenForm(props){
  // {contacts, updateContact, deleteContact}){
  // console.log(props);
  
  const id=props.match.params.contactId;
  // props.contacts.forEach((id)=>(console.log(id)));
  const contact=(props.contacts.filter((cont)=>(cont.id-id===0))[0]);
  
  // console.log(props.match.params.contactId);
  // console.log(contact);
  // console.log(contact.name+" "+contact['name']);

  const[name,setName]=useState(contact.name)
  const[number,setNumber]=useState(contact.number)
  const[email,setEmail]=useState(contact.email)
  // console.log(name+" "+number+" "+email);

  let history = useHistory();

  const onSubmit=(e)=>{
    e.preventDefault();
    if(!name || !number || !email) {alert('Invalid form.'); return;}
    if (!validator.isEmail(email)) {alert('Please enter email correctly'); return;}
    if(isNaN(+number)) {alert('Please enter number correctly'); return;}
    props.updateContact({id,name,number,email})
    history.push("/");
  }

  const onDelete=(e)=>{
    e.preventDefault();
    props.deleteContact(contact.id);
    history.push("/");
  }

  // return (<div>Hell</div>);
  return (
    <div className='container' style={{padding:'5%'}}>
      <form className='jumbotron card bg-light' style={{padding:'10px'}} 
      onSubmit={onSubmit}>
          <h1 className='heading'>Update Contact</h1>
          <div className='container form-group border border-danger'>

            <label htmlFor='Name'>Name:</label>
            <input type='text' className='form-control' placeholder={name}
            onChange={(e)=>(setName(e.target.value))}/>
            <br/>

            <label>Number:</label>
            <input type='number' className='form-control'  placeholder={number}
            onChange={(e)=>(setNumber(e.target.value))}/>
            <br/>
            
            <label>Email Id:</label>
            <input type='text' className='form-control' placeholder={email}
            onChange={(e)=>(setEmail(e.target.value))}/>
            
          </div>
            
          <input value='Submit' className='btn btn-danger' type='submit'/>
          <br/>
      </form>
      
        <div className='container' style={{padding:'5%'}}>
        <button style={{float:'left'}} href="/" className="btn btn-primary" onClick={onDelete}>Delete Contact</button>           
        <Link to="/">
        <button style={{float:'right'}} href="/" className="btn btn-primary">Cancel</button>           
        </Link>
        <br/>
        </div>

      </div>
  );
};

export default OpenForm;
