import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OpenContact from './components/OpenContact';

function App() {

  const [contacts,setContacts]= useState([])
  const [showForm,setShowForm]= useState(false)

  const getContactsData=async ()=>{
      const req=await(fetch('http://localhost:8080/api/contact'))
      const data= await req.json()
      return data;
  }

  useEffect(()=>{
    const getContacts= async()=>{
    const data=await getContactsData()
    setContacts(data)
    }
    getContacts();
  },[])

  const addContact=async(contact)=>{
    const req=await fetch('http://localhost:8080/api/contact',
    {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(contact)
    })

    const newData=await req.json();
    setContacts([...contacts,newData]);
    // console.log(newData)
    // setContacts(useEffect)
    setShowForm(false);
   }

   const deleteContact=async(id)=>{
    const req=await fetch(`http://localhost:8080/api/contact/${id}`,
    {
      method:'Delete'
    })
    setContacts(contacts.filter((contact)=>(contact.id!==id)))
   }

   const updateContact=async(contact)=>{

    const req=await fetch(`http://localhost:8080/api/contact/${contact.id}`,
    {
      method:'PUT',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(contact)
    })
 
    const newData=await req.json();
    // console.log(newData)
    // setContacts([...contacts,newData]);
    // setContacts(useEffect)
    
    setContacts(contacts.map((cont) => 
    (cont.id!==newData.id?cont:newData)));
    setShowForm(false);
   }

   const onClickFormButton=()=>{
     setShowForm(!showForm)
   }

  return (
    
    <BrowserRouter>
    <div className="App">
      
      <Header className='col-md-6' title={'My Contact List'} showForm={showForm} onClick={onClickFormButton} />        
      
        <Route path='/' exact render={(props)=>(
          <div>
          <Home contacts={contacts} showForm={showForm} addContact={addContact} deleteContact={deleteContact}/>
          </div>
        )}/>
      
        <Route path='/contact/:contactId' exact render={(props)=>(
          <div>
          <OpenContact {...props} contacts={contacts} updateContact={updateContact} deleteContact={deleteContact}
          />
          </div>
        )}/>
        
      <Route path='/about' exact component={About}/>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
