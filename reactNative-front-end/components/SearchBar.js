import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SearchBar({searchVal,onChangeSearchVal}) {
   
    const [val,setVal]=useState(searchVal)

    function onChangeVal(value){
        setVal(value);
        onChangeSearchVal(value);
    }
    
    function onClick(){
        console.log(val);
        if(!val){return;}
        onChangeSearchVal(val);
    }
//Sort search out
//not working
  return (
    <View style={styles.container}>
            {/* <Icon name={'rocket'} size={30} color={'white'}/> */}
                <Icon name='search' size={30} color={'#a1aba2'}/>
            <TextInput value={val} onChangeText={onChangeVal} style={styles.input} placeholder="Search by Name or Number" placeholderTextColor={'black'}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        margin:15,
        padding:5,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:'#a1aba2',
        borderWidth:1,
        borderRadius:20
    },
    addContact:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
    input:{
        margin:'3%',
        fontSize:18,
        padding:10,
        width:'80%',
        borderRadius:5,
        backgroundColor:'#a1aba2',
        borderRadius:20
        // backgroundColor:'white',
        // textAlignVertical:'center'
    }
});