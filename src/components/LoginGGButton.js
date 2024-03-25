import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function LoginGGButton( {navigation}) {
  return (
    <View>
        <StatusBar style="light"></StatusBar>
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <Image source={require('../assets/google.png')} style={styles.image}></Image>
                <Text>Continue with Google</Text>
                <Text></Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:230,
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius:50,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20
    },
    image:{
        height:25,
        width:25,
        marginRight:10,
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
    }
})