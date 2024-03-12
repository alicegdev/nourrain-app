import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert('Login Attempt', `Username: ${username}, Password: ${password}`);
    navigation.navigate('UserPageScreen', { userId: '2'})
    // navigation.navigate('UserPageScreen', {userId: 'user.id'})
  };

  return (
    <ImageBackground
            style={styles.background}
            source={require('../assets/icon.png')}
        >
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
