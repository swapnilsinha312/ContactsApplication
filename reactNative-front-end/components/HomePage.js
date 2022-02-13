import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Contacts from './Contacts';
import AddForm from './AddForm';
import SearchBar from './SearchBar';
import ContactPage from './ContactPage';

export default function HomePage({contacts,deleteContact,addContact,updateContact}) {
  const [showForm,setShowForm]= useState(false)
  const [searchVal,setSearchVal]=useState('') 
  const [dispContacts,setDispContacts]=useState(contacts)
  const [showContact,setShowContact]=useState('')

  function unsetShowContact(){
    // console.log("idafoiu");
    setShowContact('');
  }

  function onClickContact(id){
    // console.log("avb");
    console.log(showContact);
    // console.log(dispContacts.filter((contact)=>(contact.id===id)));
    setShowContact(dispContacts.filter((contact)=>(contact.id===id))[0]);
    console.log("Opening ");
    console.log(showContact);
  }

  function onChangeSearchVal(value){
    if(!value)
    {setDispContacts(contacts);}
    else
    {setDispContacts(contacts.filter((contact)=>((contact.name.toUpperCase()).startsWith(value.toUpperCase()) || (contact.number.toString()).startsWith(value.toUpperCase())  )));}
  }  

  function clickAddForm(){
    setShowForm(!showForm);
  }

  function onClickAdd(newContact){
    setDispContacts([newContact,...dispContacts]);
    setSearchVal('');
  }

  function onClickUpdate(iD,newContact){
    const id=iD.toString();
    setDispContacts(dispContacts.map((contact)=>(contact.id===id?newContact:contact)));
    // setDispContacts([newContact,...dispContacts]);
    setSearchVal('');
    unsetShowContact();
    // console.log(dispContacts);
  }

  function onClickDelete(id){
    setDispContacts(dispContacts.filter((contact)=>(contact.id!==id)));
    setSearchVal('');
  }

    return (
    <View style={styles.container} >
      {showContact===''?
        <Normal onClickDelete={onClickDelete} onClickContact={onClickContact} showForm={showForm} dispContacts={dispContacts} onChangeSearchVal={onChangeSearchVal} onClickAdd={onClickAdd} searchVal={searchVal} clickAddForm={clickAddForm} contacts={contacts} deleteContact={deleteContact} addContact={addContact} updateContact={updateContact}/>
      :
      <ContactPage updateContact={updateContact} onClickUpdate={onClickUpdate} unsetShowContact={unsetShowContact} contact={showContact}/>
      }
      {/* <View style={{position:'absolute' ,bottom:0}}> */}
        <Footer/>
      {/* </View> */}
    </View>
  )
}

function Normal({onClickDelete,onClickAdd,onClickContact,dispContacts,showForm,contacts,deleteContact,addContact,updateContact,onChangeSearchVal,clickAddForm,searchVal}){
  return(
    <View style={styles.container}>
      <Header clickAddForm={clickAddForm} numberOfContacts={contacts?.length}/>
      <SearchBar searchVal={searchVal} onChangeSearchVal={onChangeSearchVal} />
      {showForm?<AddForm onClickAdd={onClickAdd} clickAddForm={clickAddForm} addContact={addContact}/>:null}
      <Contacts onClickDelete={onClickDelete} deleteContact={deleteContact} onClickContact={onClickContact} searchVal={searchVal} contacts={dispContacts}/>
    </View>
  );
}

function Footer(){
   const [active,setActive]=useState(3)

   return(
   <View style={{padding:10,flexDirection:'row',borderTopWidth:1,justifyContent:'space-around',borderColor:'#a1aba2'}}>
       <Icon name={'star'} size={40} color={active-1!==0?'#a1aba2':'#8a1f91'}/>
       <Icon name={'clock'} size={40} color={active-2!==0?'#a1aba2':'#8a1f91'}/>
       <Icon name={'address-book'} size={40} color={active-3!==0?'#a1aba2':'#8a1f91'}/>
       <Icon name={'keyboard'} size={40} color={active-4!==0?'#a1aba2':'#8a1f91'}/>
       <Icon name={'microphone-alt'} size={40} color={active-5!==0?'#a1aba2':'#8a1f91'}/>
    </View>);
}


const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        padding:10,
        borderBottomWidth:1,
        borderColor:'#8a1f91',
        alignItems: 'center'
        // justifyContent:'center'
        // backgroundColor:'#8a1f91',
        // alignItems:'space-between'
        // flex:1
    },
    lightText:{
        color:'#a1aba2'
    },
    text:{
        fontWeight:'bold',
        fontSize:48,
    },
    container:{
        flex:1,
        marginTop:40
    },
    image:{
        height:30,
        width:30
    }
})

const imageSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAAA5OTn6+vrw8PCnp6dYWFgiIiKVlZVSUlKbm5sODg62trZsbGxVVVX19fVITIBVAAACDElEQVR4nO3cy26jQBBAUdq8n/7/v000M1EcGMkbmspt7lnboq6cNMaLqqoLNW3Xp75rmysveqUhfRmiR8mi3tK3rY4eJ4MxvRqjxznflH6aogc6WzPvCufSjpsl7S3RI51sPRSu0SOdbDsUbtEjnat+HAofZd0wLOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSz8Johcnr+p/CZ9Yq7umZZt0dW+xW0Kc15L7ity8uW2+l4/RLMX7uK6/H9i6HGv3+sx/Ww5fiz6HZ4/zqw4fOQiZ4hs6Zqo0fIrK266BEy66o+eoTM+ip6guxu8BmW/39Y/lla/v2w/O80N/heeoNni/KfD+/wjH+D32my+xW/tWVlIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FBTguut2iRzrZeihco0c62XIoXKJHOlmzX0I77zfE4k27wun9W2h+bpweo8fJoH49TrfCbhX/fG9/H6JHyaVpuz71XXvpIfMBymcu6rFSOvgAAAAASUVORK5CYII='

function Header({numberOfContacts,clickAddForm}){
    return (<View style={styles.headerContainer}>
        <View>
        <Text style={styles.text}>My Contacts</Text>
        <Text style={styles.lightText}>Friends ({numberOfContacts})</Text>
        </View>
        <TouchableOpacity onPress={()=>clickAddForm()}>
            <Icon  name={'plus'} color={'black'} size={30}/>
        </TouchableOpacity>
        {/* <Image style={styles.image} source={{uri:imageSrc}}/> */}
        {/* onClickAddButton */}
    </View>);
}