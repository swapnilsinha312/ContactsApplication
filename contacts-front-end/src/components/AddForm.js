import React from 'react';
import {useState} from 'react';

function AddForm({addContact}){
  const[name,setName]=useState('')
  const[number,setNumber]=useState('')
  const[email,setEmail]=useState('')

  const onSubmit=(e)=>{
    e.preventDefault();
    if(!name) {alert('Invalid form.'); return;}
    addContact({name,number,email})
    setName('');
    setNumber('');
    setEmail('');
  }

  return (
      <form className='jumbotron card bg-dark' style={{padding:'10px',color:'white'}} onSubmit={onSubmit}>
          <h1 className='heading'>Create new Contact</h1>
          <div className='container form-group border border-danger'>

            <label htmlFor='Name'>Name:</label>
            <input type='text' className='form-control' placeholder='Enter Contact'
            value={name} onChange={(e)=>(setName(e.target.value))}/>
            <br/>
            <label>Number:</label>
            <input type='text' className='form-control' placeholder='Enter Number'
            value={number} onChange={(e)=>(setNumber(e.target.value))}/>
            <br/>
            <label>Email Id:</label>
            <input type='text' className='form-control' placeholder='Enter Email Id'
            value={email} onChange={(e)=>(setEmail(e.target.value))}/>
            
          </div>
            <input value='Submit' className='btn btn-danger' type='submit'/>
          {/* <br/> */}
      </form>
  );
};

export default AddForm;
