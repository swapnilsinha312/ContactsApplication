import { TouchableOpacity,StyleSheet,Alert, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react';
import * as Clipboard from 'expo-clipboard';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function UpdateForm({contact,updateContact,onClickUpdate}) {
    const [name,setName]= useState(contact.name);
    const [number,setNumber]= useState(contact.number);
    // const [image,setImage]= useState(contact.image);    

    function onChangeName(value){
        setName(value);
    }
    
    function onChangeNumber(value){
        setNumber(value);
    }
    
    // function onChangeImage(value){
    //     setImage(value);
    // }

    function clickUpdateContact(){

        // console.log(name+" "+number+" akvjikiuavbiuj");
        // if(!name || !number) {return;}
        // console.log(name+" "+number);
        const newContact={
            id:contact.id,name:name,number:number,
            image:contact.image
          }
        console.log("Update "+newContact);
        updateContact(contact.id,newContact);
        onClickUpdate(contact.id,newContact);
    }

    const copyToClipboard = () => {
        Clipboard.setString(contact.name+"\n"+contact.number);
        Alert.alert("Contact copied to clipboard.\nYou can share now.");
      };

  return (
    <View style={styles.container}>
        <View style={styles.oneBox}>
            <Text style={styles.box} >Name</Text>
            <TextInput onChangeText={onChangeName} style={styles.boxInput} value={name} placeholder="Enter Contact's Name" placeholderTextColor={'black'}/>
        </View>
        
        <View style={styles.oneBox}>
            <Text style={styles.box} >Name</Text>
            <TextInput onChangeText={onChangeNumber} style={styles.boxInput} value={number} placeholder="Enter Contact's Number" placeholderTextColor={'black'}/>
        </View>
        {/* <Text style={{color:'#a1aba2',alignSelf:'flex-end'}}>You can change values and update the contact. </Text> */}
        <TouchableOpacity style={styles.button} onPress={clickUpdateContact}>
            <Icon name={'edit'} color={'black'} size={30}/>
            <Text style={{color:'white',fontSize:24}}>Update Contact</Text>
        </TouchableOpacity>
        
        <View style={styles.oneBox}>
            <Text style={styles.box} >Share Contact</Text>
            <Text style={styles.boxInput}>
                <TouchableOpacity onPress={copyToClipboard}>
                    <Icon name={'share'} color={'black'} size={30}/>
                </TouchableOpacity>
                <Text style={styles.text}>Click on the icon to copy</Text>
            </Text>
        </View>

        {/* <View>
            <TextInput onChangeText={onChangeImage} style={styles.box} value={image} placeholder="Enter Contact's Name" placeholderTextColor={'black'}/>
        </View> */}
    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        padding:20,
        backgroundColor: 'white',
        // borderRadius:20
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingLeft:50,
        paddingBottom:70
    },

    button:{
        alignItems:'center',
        backgroundColor:'#b80780',
        color:'white',
        flexDirection:'row',
        padding:10,
        justifyContent:'center'
    },
    text:{
        color:'#a1aba2',
    },
    box:{
        fontSize:24
    },
    boxInput:{
        color:'#a1aba2',
        fontSize:20,
        paddingLeft:5
    },

    oneBox:{
        borderColor:'black',
        borderBottomWidth:1,
        marginVertical:10
    },

})