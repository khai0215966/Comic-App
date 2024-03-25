import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import React, {useCallback, useState} from 'react'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function signUpBox( {navigation} ) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [completePassword, setCompletePassword] = useState('')
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    //Xử lý nhập liệu
    const handleInputChange = (text, inputType) =>{
        if( inputType === 'password') {
            setPassword(text)
        } else if( inputType === 'username') {
            setUsername(text)
        } else if( inputType === 'completePassword'){
            setCompletePassword(text)
        }

        //Kiểm tra nút đăng nhập có hoạt động không
        if (username!== '' && password!== '' && completePassword!== '' && completePassword !== password) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }

    const handleLogin =()=>{
        console.log('Username', username)
        console.log('Password', password)
        console.log('CompletePassword', completePassword)
    }

    const [fontsLoaded, fontError] = useFonts({
        'Ubuntu-Medium': require('C:/Users/khhly/PTUD/ComicApp/src/assets/fonts/Ubuntu-Medium.ttf'),
      });

    return (
        <View style={styles.signUpBox}>
            <StatusBar style="light"></StatusBar>
            <LinearGradient 
                colors={['#A2B2FC','#FFF1BE']}
                start={{x:0.5, y:0.5}}
                end={{x:0, y:0}}
                style={styles.signUp}>
                    <View>
                        <View>
                            <TextInput 
                                placeholder='Username' 
                                placeholderTextColor={"#FFFFFF"} 
                                style={styles.textInput}
                                onChangeText={(text) => handleInputChange(text,'username')}></TextInput>
                            <TextInput 
                                autoCorrect={true} 
                                secureTextEntry={true} 
                                placeholder='Password' 
                                placeholderTextColor={"#FFFFFF"} 
                                style={styles.textInput}
                                onChangeText={(text) => handleInputChange(text,'password')}></TextInput>
                            <TextInput 
                                autoCorrect={true} 
                                secureTextEntry={true} 
                                placeholder='Complete Password' 
                                placeholderTextColor={"#FFFFFF"} 
                                style={styles.textInput}
                                onChangeText={(text) => handleInputChange(text,'completePassword')}></TextInput>
                        </View>
                        <View style={styles.haveAccount}>
                            <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                                <Text style={{color:'#FFFFFF'}}>Have account? Sign in!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    <TouchableOpacity
                        style={[styles.SignUpButton,{backgroundColor: isButtonEnabled ? 'blue' : 'gray'}]}
                        onPress={handleLogin}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                        }}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
            </LinearGradient>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        signUpBox:{
            marginTop:60,
            width:'100%',
            alignItems:'center',
            height:'100%',
        },
        haveAccount:{
            flexDirection:'column',
            alignItems:'center',
        },
        textInput:{
            color:'#FFFFFF',
            borderColor:'#FFFFFF',
            borderBottomWidth:1,
            padding:10,
            marginBottom:10,
            width:230,
        },
        signUp:{
            height:'100%',
            width:'100%',
            borderRadius:50,
            paddingTop:30,
            alignItems:'center',
        },
        SignUpButton:{
            width:230,
            height:40,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
        }
    })