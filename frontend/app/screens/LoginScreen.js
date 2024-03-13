import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
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
          <TouchableOpacity
              style={styles.validateButton}
              onPress={handleLogin}
              >
              <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
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
    buttonText: {
      color: 'white',
      fontSize: 16,
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
    validateButton: {
      padding: 10,
      margin: 15,
      borderRadius: 5,
      backgroundColor: 'grey',
      alignItems: 'center',
    }
});

export default LoginScreen;
