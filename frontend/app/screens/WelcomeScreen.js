import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function WelcomeScreen(props) {
    const navigation = useNavigation();
    return(
        <ImageBackground
            style={styles.background}
            source={require('../assets/home.gif')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('LoginScreen')}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.loginButton}
                onPress={() => console.log('register Pressed')}
                >
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    loginButton: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 150,
        alignItems: 'center',
    },
})


export default WelcomeScreen;