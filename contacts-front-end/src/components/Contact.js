import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Contact({contact, openContact}) {
  
  // function onOpen(id){
  //   openContact(id);
  //   return <Redirect to='/about'/>
  // }
  // function doing() {
  //   console.log("S");
  //   return <Redirect to='/about'/>
  // }
  // const a=a;

  return (
    <Link to= {{ pathname:`/contact/${contact.id}`,
          contact:contact
        // component={openContact}
      }} style={{color:'black' ,textDecoration: 'none'}}>

      <div className="card"       
      // onClick={()=>(onOpen(contact.id))}
      >
        <div className="card-body row" 
        style={{textAlign:'left',borderWidth:'5px',borderLeftStyle:'double',borderTopStyle:'single', borderColor:'green'}}>
            
            <div className='col'>
              <h5 className="card-title">{contact.name}</h5>
            </div>
          
            <div className='col'>
              {contact.number}&emsp;&emsp;{contact.email}
              {/* <button style={{float:'right'}} href="#" className="btn btn-primary" onClick={()=>deleteContact(contact.id)}>Done</button>            */}
            </div>
        </div>
      </div>
    </Link>
  );
}

export default Contact;
