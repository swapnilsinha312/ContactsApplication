import { StyleSheet, TouchableOpacity,Image,Text, View } from 'react-native'
import React ,{ useEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Contact({onClickDelete,contact,onClickContact,deleteContact}) {
    // const [image,setImage]= useState()
    // useEffect(async()=>{
    //     const img=await fetch(contact.image)
    //     setImage(img)
    // },[contact.image]);

    function onDelete(){
        console.log("delete "+contact.id+" "+contact.name);
        deleteContact(contact.id);
        onClickDelete(contact.id);
    }

    function onClickOpen(){
        onClickContact(contact.id);
    }

  return (
    //   <TouchableOpacity onPress={()=>onClickContact(contact.id)}>
        <View style={styles.container} >
            <Image style={styles.image} source={{uri:contact?.image}}/>
            <View style={styles.textContainer}>
            {/* <Text>{contact.image}</Text> */}
                <Text style={{fontSize:24}}>{contact?.name}</Text>
                <Text style={{color:'white'}}>{contact?.number}</Text>
            </View>
            
            <TouchableOpacity onPress={()=>onClickOpen()} style={{right:10,top:25,position:'absolute'}}>
                <Icon name={'ellipsis-v'} size={25} color={'white'}/>
            </TouchableOpacity>
                
            <TouchableOpacity onPress={()=>onDelete()} style={{right:40,top:25,position:'absolute'}}>
                <Icon name={'trash'} size={25} color={'white'}/>
            </TouchableOpacity>

        </View>
    //   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        marginHorizontal:10,
        padding:10,
    },
    container:{
        marginHorizontal:10,
        backgroundColor:'#a1aba2',
        marginVertical:2,
        padding:10,
        borderColor:'#a1aba2',
        borderBottomWidth:1,
        // borderRadius:10,
        flexDirection:'row',
        textAlignVertical:'center'
    },
    image:{
        height:70,
        width:70,
        resizeMode:'cover',
        borderWidth:1,
        borderColor:'black',
        borderRadius:80
    }
})