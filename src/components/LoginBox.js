import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import React, {useCallback, useState} from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginBox() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    //Xử lý nhập liệu
    const handleInputChange = (text, inputType) =>{
        if( inputType === 'password') {
            setPassword(text)
        } else if( inputType === 'username') {
            setUsername(text)
        }

        //Kiểm tra nút đăng nhập có hoạt động không
        if (username!== '' && password!== '') {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }

    const handleLogin =()=>{
        console.log('Username', username)
        console.log('Password', password)
    }

    const [fontsLoaded, fontError] = useFonts({
        'Ubuntu-Medium': require('C:/Users/khhly/PTUD/ComicApp/src/assets/fonts/Ubuntu-Medium.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }


    return (
        <View style={styles.loginBox}>
            <StatusBar style="light"></StatusBar>
            <LinearGradient 
                colors={['#A2B2FC','#FFF1BE']}
                start={{x:0.5, y:0.5}}
                end={{x:0, y:0}}
                style={styles.login}>
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
                        </View>
                        <View style={styles.fotgotPass}>
                            <TouchableOpacity>
                                <Text style={{color:'#FFFFFF'}}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    <TouchableOpacity
                        style={[styles.loginButton,{backgroundColor: isButtonEnabled ? 'blue' : 'gray'}]}
                        onPress={handleLogin}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                        }}>Login</Text>
                    </TouchableOpacity>
                    </View>
            </LinearGradient>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        loginBox:{
            marginTop:60,
            width:'100%',
            alignItems:'center',
            height:'100%',
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
        },
        login:{
            height:'100%',
            width:'100%',
            borderRadius:50,
            paddingTop:30,
            alignItems:'center',
        },
        loginButton:{
            width:230,
            height:40,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
        }
    })