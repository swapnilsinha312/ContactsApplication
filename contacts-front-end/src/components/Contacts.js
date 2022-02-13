import React from 'react';
import Contact from './Contact';

const Contacts = ({openContact,contacts
  // ,deleteContact
}) =>{
    
    // console.log(props.contacts);
    // const conts=Array.from(props.contacts)
    // console.log(conts);

    return (
  <div className='container'>
    
    {contacts.map((contact,index)=>
    (
      <Contact 
      openContact={openContact} 
      // deleteContact={deleteContact} 
      key={index} 
      contact={contact}/>))
      }
  </div>
  );
};

// Contacts.propTypes = {
//     contacts:PropTypes.array
// };

export default Contacts;
