import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React,{useState} from 'react'
import Contact from './Contact'

export default function Contacts({onClickDelete,deleteContact,searchVal,contacts,onClickContact}) {
    
    

  return (
      <ScrollView>
        <View style={styles.container}>
            {contacts?.map((contact,index)=>{
                return (<Contact onClickDelete={onClickDelete} deleteContact={deleteContact} onClickContact={onClickContact} key={index} contact={contact}/>
            )})}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
})