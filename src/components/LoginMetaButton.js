import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function LoginMetaButton() {
  return (
    <View>
        
        <StatusBar style="light"></StatusBar>
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <Image source={require('../assets/meta-logo-24.png')} style={styles.image}></Image>
                <Text style={{color:'white'}}>Continue with Meta</Text>
                <Text></Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:230,
        borderRadius:50,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        backgroundColor:'#0069e5'
    },
    image:{
        height:25,
        width:25,
        marginRight:10,
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
    },
})