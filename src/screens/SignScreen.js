import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useCallback} from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginGGButton from '../components/LoginGGButton'
import LoginMetaButton from '../components/LoginMetaButton'
import SignUpBox from '../components/SignUpBox'

export default function SignCreen( {navigation} ) {

    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded, fontError] = useFonts({
        'Ubuntu-Medium': require('C:/Users/khhly/PTUD/ComicApp/src/assets/fonts/Ubuntu-Medium.ttf'),
      });

  return (
    <View  style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <View style={styles.title}>
            <Text style={styles.titleTop}>Welcome</Text>
            <Text style={styles.titleBottom}>Sign in to start</Text>
        </View>
        <View style={styles.quickLogin}>
                <LoginGGButton/>
                <LoginMetaButton/>
        </View>
        <SignUpBox/>
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
        height:126,
        justifyContent:'space-between',
    },
    login:{
        marginTop:60,
        height:'100%',
        width:'100%',
        borderRadius:50,
        paddingTop:30,
        alignItems:'center'
    },
    fotgotPass:{
        flexDirection:'column',
        alignItems:'flex-end',
    },
    textInput:{
        color:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderBottomWidth:1,
        padding:10,
        marginBottom:10,
        width:230,
        fontFamily:'Ubuntu-Medium',
    }   
})