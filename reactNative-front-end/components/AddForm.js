import { TextInput,StyleSheet, TouchableOpacity,Text, View } from 'react-native'
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { v4 as uuid } from 'uuid';

export default function AddForm({onClickAdd,clickAddForm,addContact}) {

    const [name,setName]= useState('');
    const [number,setNumber]= useState('');
    const [image,setImage]= useState('');    

    function onChangeName(value){
        setName(value);
    }
    
    function onChangeNumber(value){
        setNumber(value);
    }
    
    function onChangeImage(value){
        setImage(value);
    }

    function clickAddContact(){
        // console.log(name+" "+number+" "+image);
        if(!name || !number || !image) {return;}
        console.log("Add "+name+" "+number+" "+image);
        const newContact={
            id:uuid(),name:name,number:number,image:image
          }
        addContact(newContact);
        clickAddForm();
        onClickAdd(newContact);
    }


  return (
    <View style={styles.container}>
    
        <View style={{alignItems:'center'}}>
            <Text style={styles.addContact}>Add Contact</Text>
        </View>
        
        <TextInput value={name} onChangeText={onChangeName} style={styles.input} placeholder="Enter Contact's Name" placeholderTextColor={'black'}/>
        <TextInput value={number} onChangeText={onChangeNumber} style={styles.input} placeholder="Enter Contact's Number" placeholderTextColor={'black'}/>
        <TextInput value={image} onChangeText={onChangeImage} style={styles.input} placeholder="Enter Contact's Image URL" placeholderTextColor={'black'}/>
        <TouchableOpacity onPress={clickAddContact} style={{alignItems:'center'}}>
            <Icon name={'clipboard-check'} size={30} color={'black'}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        padding:10,
        backgroundColor:'#b840b3'
    },
    addContact:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
    input:{
        margin:'3%',
        fontSize:18,
        padding:3,
        // width:'80%',
        borderRadius:5,
        backgroundColor:'white',
        textAlignVertical:'center'
    },
})