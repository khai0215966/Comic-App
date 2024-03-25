import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import LoginGGButton from '../components/LoginGGButton'
import LoginMetaButton from '../components/LoginMetaButton'
import LoginBox from '../components/LoginBox'
import * as SplashScreen from 'expo-splash-screen';

export default function LoginScreen( {navigation} ) {

    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded, fontError] = useFonts({
        'Ubuntu-Medium': require('C:/Users/khhly/PTUD/ComicApp/src/assets/fonts/Ubuntu-Medium.ttf'),
      });

  return (
    <View  style={styles.container}>
        <StatusBar style='light'></StatusBar>
        {/* Tiêu đề */}
        <View style={styles.title}>
            <Text style={styles.titleTop}>Welcome</Text>
            <Text style={styles.titleBottom}>Sign in to start</Text>
        </View>
        {/* Đăng nhập nhanh */}
        <View style={styles.quickLogin}>
                <LoginGGButton/>
                <LoginMetaButton/>
                {/* Đăng kí nếu chưa có tài khoản */}
                <View style={{alignItems:'center', flexDirection:'row',justifyContent:'center'}}>
                    <Text> Haven't account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignScreen')}><Text style={{color:'#2079FF'}}>Sign up!</Text></TouchableOpacity>
                </View>
        </View>
        {/* Đăng nhập */}
        <LoginBox/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:60,
        paddingTop: StatusBar.currentHeight,
        flex:1
    },
    title:{
        alignItems:'center',
        height:64,
        justifyContent:'space-between',
        width:'100%',
        marginBottom:60
    },
    titleTop:{
        fontSize:36,
        color:'#424242',
        fontWeight:'medium',
        fontFamily:'Ubuntu-Medium'
    },
    titleBottom:{
        fontSize:16,
        color:'#9D9D9D',
        fontWeight:'medium',
        fontFamily:'Ubuntu-Medium'
    },
    quickLogin:{
        height:164,
        justifyContent:'space-between',
    }
})