import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import react,{ useState } from 'react';
import {CONTACTS} from './CONTACTS';

export default function App() {

  const [contacts,setContacts]=useState(CONTACTS)
  
  function addContact(newContact){
    setContacts([newContact,...contacts])
    // console.log(contacts);
  }

  function deleteContact(id){
    console.log(id);
    setContacts(contacts.filter((contact)=>(contact.id!==id)));
  }

  function updateContact(iD,newContact){
    const id=iD.toString();
    setContacts(contacts.map((contact)=>(contact.id===id?newContact:contact)));
    // setContacts(contacts.filter((contact)=>(contact.id!==id)));
    // setContacts([newContact,...contacts]);
    // console.log(contacts);
  }


  return (
    <View style={styles.container}>
      <HomePage deleteContact={deleteContact} addContact={addContact} updateContact={updateContact} contacts={contacts}/>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:40
  },
});
