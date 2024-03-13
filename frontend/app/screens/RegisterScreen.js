import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    // Here, you would typically integrate with your backend to register the user
    console.log('Signup with:', email, password);
    navigation.navigate('UserPageScreen', { userId: '2'})
  };

  return (
    <ImageBackground
            style={styles.background}
        >
        <View style={styles.container}>
        <Text style={styles.header}>Créer un compte</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        <TouchableOpacity
              style={styles.validateButton}
              onPress={handleSignup}
              >
              <Text style={styles.buttonText}>S'enregistrer</Text>
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
    header: {
        fontSize: 24,
        marginBottom: 20,
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
    validateButton: {
        padding: 10,
        margin: 15,
        borderRadius: 5,
        backgroundColor: 'grey',
        alignItems: 'center',
    }
});

export default RegisterScreen;