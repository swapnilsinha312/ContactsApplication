import React from 'react';
import AddForm from './AddForm';
// import Home from './Home';
import Contacts from './Contacts';

function Home({contacts,showForm,addContact,openContact
    // ,deleteContact
}) 
{
    // console.log(openContact);
  return (
  <div>
      <div className='container col-md-6'>
        
        {showForm?
        <AddForm addContact={addContact} showForm={showForm}/>
          :''}

        <Contacts openContact={openContact} contacts={contacts} 
        // deleteContact={deleteContact}
         />

        </div>
  </div>);
};

export default Home;
