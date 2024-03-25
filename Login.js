import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Hàm xử lý thay đổi trường nhập liệu
  const handleInputChange = (text, inputType) => {
    if (inputType === 'username') {
      setUsername(text);
    } else if (inputType === 'password') {
      setPassword(text);
    }

    // Kiểm tra nút đăng nhập có nên được kích hoạt hay không
    if (username !== '' && password !== '') {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  // Hàm xử lý sự kiện khi nhấn nút đăng nhập
  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleInputChange(text, 'username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange(text, 'password')}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!isButtonEnabled} // Nút chỉ được kích hoạt khi isButtonEnabled là true
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
