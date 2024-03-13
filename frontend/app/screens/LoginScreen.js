import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Alert.alert('Login Attempt', `Username: ${username}, Password: ${password}`);
    navigation.navigate('UserPageScreen', { userId: '2'})
    // navigation.navigate('UserPageScreen', {userId: 'user.id'})
  };

  return (
    <ImageBackground
            style={styles.background}
        >
        <View style={styles.container}>
        <Text style={styles.header}>S'identifier</Text>
          <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
          />
          <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
          />
          <Button title="Valider" onPress={handleLogin} />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F3F0E8',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
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
