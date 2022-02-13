import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ContactPageIcons() {
  return (
    <View style={styles.centreIcons}>
            <View style={styles.oneCentreIcon}>
                <View style={styles.oneIconContainer}>
                    <Icon name={'comment-alt'} color={'purple'} size={30}/>
                </View>
                <Text style={{color:'white'}}>Message</Text>
            </View>
            
            <View style={styles.oneCentreIcon}>
                <View style={styles.oneIconContainer}>
                    <Icon name={'phone'} color={'purple'} size={30}/>
                </View>
                <Text style={{color:'white'}}> Call </Text>
            </View>

            <View style={styles.oneCentreIcon}>
                <View style={styles.oneIconContainer}>
                    <Icon name={'video'} color={'purple'} size={30}/>
                </View>
                <Text style={{color:'white'}}>Video</Text>
            </View>
            
            <View style={styles.oneCentreIcon}>
                <View style={styles.oneIconContainer}>
                    <Icon name={'envelope'} color={'purple'} size={30}/>
                </View>
                <Text style={{color:'white'}}>E-Mail</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    centreIcons:{
        margin: 10,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
    },
    oneCentreIcon:{
        marginHorizontal:10,
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
    },
    oneIconContainer:{
        backgroundColor:'white',
        borderRadius:30,
        padding:10,
        margin:3
    },
})