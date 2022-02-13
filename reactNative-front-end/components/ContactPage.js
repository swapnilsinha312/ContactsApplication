import { TouchableOpacity,StyleSheet, ScrollView,Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ContactPageIcons from './ContactPageIcons';
import UpdateForm from './UpdateForm';

export default function ContactPage({onClickUpdate,contact,unsetShowContact,updateContact}) {
    console.log("Showing "+contact.id);
  return (
    <ScrollView style={styles.container}>
        <Header unsetShowContact={unsetShowContact} />
        <ContactDetails contact={contact}/>
        <ContactPageIcons/>
        <UpdateForm updateContact={updateContact} onClickUpdate={onClickUpdate} contact={contact}/>
    </ScrollView>
  )
}

function Header({numberOfContacts,onClickAddButton,unsetShowContact}){
    function back(){
        unsetShowContact();
    }

    return (
    <View style={styles.headerContainer}>
        <View style={styles.backButton}>
            <TouchableOpacity onPress={()=>back()}>
                <Icon name={'angle-left'} color={'white'} size={35}/>
            </TouchableOpacity>
            {/* <Text style={styles.text}>Contact</Text> */}
        </View>
    </View>);
}

function ContactDetails({contact}){
    return (
        <View>
            <Image style={styles.contImage} source={{ uri:contact.image}} />
            <Text style={styles.contName}>{contact.name}</Text>
            <Text style={styles.contNumber}>{contact.number}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#b80780',
    },

    headerContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        padding:10,
        // justifyContent:'space-between',
        // alignItems: 'center'
        // borderBottomWidth:1,
        // borderColor:'#8a1f91',
        // justifyContent:'center'
        // backgroundColor:'#8a1f91',
        // alignItems:'space-between'
        // flex:1
    },
    backButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
    },

    text:{
        fontWeight:'bold',
        fontSize:30,
        marginLeft:5,
        color:'white'
    },
    contImage:{
        // aspectRatio: 1,
        // height: '20%',
        height:200,
        width:200,
        alignSelf: 'center',
        borderRadius:200,
    },
    contName:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    contNumber:{
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginBottom:20
    },
})


